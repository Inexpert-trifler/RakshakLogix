import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_DATA, RiskEntity, RecommendationEntity, SimulationEntity, AuditEventEntity, NotificationEntity, DEMO_FLOW_STEPS } from '../data/mockData';
import { useAuth } from './AuthContext';
import { risksApi } from '../api/risksApi';
import { simulationsApi } from '../api/simulationsApi';
import { logisticsApi } from '../api/logisticsApi';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'INFO' | 'SUCCESS' | 'WARNING' | 'ALERT';
}

interface OperationalContextType {
  risks: RiskEntity[];
  recommendations: RecommendationEntity[];
  simulations: SimulationEntity[];
  notifications: NotificationEntity[];
  auditEvents: AuditEventEntity[];
  toasts: ToastMessage[];
  isSimulating: boolean;
  simulationPhase: string;
  currentDemoStepIndex: number;
  addToast: (title: string, message: string, type?: ToastMessage['type']) => void;
  removeToast: (id: string) => void;
  approveRecommendation: (recId: string) => Promise<void>;
  rejectRecommendation: (recId: string) => Promise<void>;
  runSimulation: (simId: string, onFinish?: () => void) => Promise<void>;
  applyRoute: (routeId: string, shipmentId: string) => Promise<void>;
  acknowledgeRisk: (riskId: string) => Promise<void>;
  resolveRisk: (riskId: string) => Promise<void>;
  markNotificationRead: (notifId: string) => void;
  setDemoStep: (stepNumber: number) => void;
  nextDemoStep: () => void;
  prevDemoStep: () => void;
  refreshOperationalData: () => Promise<void>;
}

const OperationalContext = createContext<OperationalContextType | undefined>(undefined);

export const OperationalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [risks, setRisks] = useState<RiskEntity[]>(MOCK_DATA.risks);
  const [recommendations, setRecommendations] = useState<RecommendationEntity[]>(MOCK_DATA.recommendations);
  const [simulations, setSimulations] = useState<SimulationEntity[]>(MOCK_DATA.simulations);
  const [notifications, setNotifications] = useState<NotificationEntity[]>(MOCK_DATA.notifications);
  const [auditEvents, setAuditEvents] = useState<AuditEventEntity[]>(MOCK_DATA.auditEvents);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationPhase, setSimulationPhase] = useState<string>('');
  const [currentDemoStepIndex, setCurrentDemoStepIndex] = useState<number>(1); // Step 2 (Dashboard) by default

  const refreshOperationalData = async () => {
    try {
      const [backendRisks, backendAlerts] = await Promise.all([
        risksApi.getRisks().catch(() => []),
        risksApi.getAlerts().catch(() => []),
      ]);

      if (backendRisks.length > 0) {
        const mappedRisks: RiskEntity[] = backendRisks.map(r => ({
          id: r.id,
          title: `Stockout Warning (${r.severity})`,
          locationId: r.entity_id || 'LOC-FPA-01',
          locationName: r.entity_name || 'Forward Post Alpha',
          severity: (r.severity === 'CRITICAL' || r.severity === 'HIGH' || r.severity === 'LOW') ? r.severity : 'MEDIUM',
          stockoutProbability: r.score,
          affectedItem: 'Arctic Diesel (POL-DSL-ART-01)',
          timeToDepletion: '2.4 Days',
          recommendationId: 'REC-2048',
          status: 'ACTIVE' as const,
        }));
        setRisks(mappedRisks);
      }

      if (backendAlerts.length > 0) {
        const mappedNotifs: NotificationEntity[] = backendAlerts.map(a => ({
          id: a.id,
          title: a.title,
          message: a.message,
          timestamp: a.created_at || 'Just Now',
          read: a.status === 'RESOLVED',
          type: (a.severity === 'CRITICAL' ? 'ALERT' : 'INFO') as 'ALERT' | 'INFO' | 'SUCCESS',
          targetRoute: `/alerts`,
        }));
        setNotifications(mappedNotifs);
      }


    } catch (err) {
      console.warn('Backend operational data refresh fallback to state:', err);
    }
  };

  useEffect(() => {
    refreshOperationalData();
  }, []);

  const addToast = (title: string, message: string, type: ToastMessage['type'] = 'INFO') => {
    const id = 'toast-' + Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const logAudit = (action: string, entity: string, entityId: string) => {
    const newEntry: AuditEventEntity = {
      id: `AUD-9941-${String(auditEvents.length + 1).padStart(2, '0')}`,
      timestamp: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ' • ' + new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST',
      officer: `${user.rank} ${user.name}`,
      officerId: user.officerId,
      role: user.roleLabel,
      action,
      entity,
      entityId,
      hash: 'sha256:' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
      status: 'VERIFIED',
    };
    setAuditEvents(prev => [newEntry, ...prev]);
  };

  const approveRecommendation = async (recId: string) => {
    setRecommendations(prev =>
      prev.map(r =>
        r.id === recId
          ? {
              ...r,
              status: 'APPROVED',
              approvedBy: `${user.rank} ${user.name} (${user.officerId})`,
              approvedAt: 'Just Now',
            }
          : r
      )
    );

    logAudit('AUTHORIZED_RECOMMENDATION', `Directive ${recId}`, recId);
    
    // Add notification
    const newNotif: NotificationEntity = {
      id: 'NOTIF-' + (notifications.length + 1),
      title: `Directive ${recId} Approved`,
      message: `2,500 L Arctic Diesel replenishment dispatch authorized for Forward Post Alpha. Convoy telemetry locked.`,
      timestamp: 'Just Now',
      read: false,
      type: 'SUCCESS',
      targetRoute: `/recommendations/${recId}`,
    };
    setNotifications(prev => [newNotif, ...prev]);

    addToast('DIRECTIVE AUTHORIZED', `Recommendation ${recId} approved. Cryptographic token DEF-ENC signed. Requisition dispatched.`, 'SUCCESS');
  };

  const rejectRecommendation = async (recId: string) => {
    setRecommendations(prev =>
      prev.map(r => (r.id === recId ? { ...r, status: 'REJECTED' } : r))
    );
    logAudit('REJECTED_RECOMMENDATION', `Directive ${recId}`, recId);
    addToast('DIRECTIVE REJECTED', `Recommendation ${recId} was rejected by commanding officer.`, 'WARNING');
  };

  const runSimulation = async (simId: string, onFinish?: () => void) => {
    setIsSimulating(true);
    const phases = [
      'Preparing Real-time Weather & Telemetry Data...',
      'Running Neural Demand Forecast Surge Model...',
      'Propagating Multi-Echelon Stockout Probability Matrix...',
      'Evaluating Trans-Himalayan Fleet Capacity & Axle Constraints...',
      'Assessing Avalanche Risk on Mountain Corridor RTE-018...',
      'Generating Optimal Decision Directives & Impact Metrics...',
    ];

    let current = 0;
    setSimulationPhase(phases[0]);

    // Call backend API if possible in background
    simulationsApi.run(simId).catch(() => null);

    const interval = setInterval(() => {
      current++;
      if (current < phases.length) {
        setSimulationPhase(phases[current]);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setSimulationPhase('');
        logAudit('EXECUTED_SIMULATION', `Disruption Model ${simId}`, simId);
        addToast('SIMULATION COMPLETED', `Scenario ${simId} finished. Stockout spike identified (74%). Directive REC-2048 formulated.`, 'SUCCESS');
        if (onFinish) onFinish();
      }
    }, 450);
  };

  const applyRoute = async (routeId: string, shipmentId: string) => {
    logAudit('APPLIED_OPTIMIZED_ROUTE', `Corridor ${routeId}`, shipmentId);
    addToast('ROUTE OPTIMIZED', `Corridor ${routeId} applied to shipment ${shipmentId}. Turn-by-turn waypoints sent to driver terminal.`, 'SUCCESS');
  };

  const acknowledgeRisk = async (riskId: string) => {
    try {
      await risksApi.updateAlertStatus(riskId, 'ACKNOWLEDGED').catch(() => null);
    } finally {
      logAudit('ACKNOWLEDGED_ALERT', `Risk ${riskId}`, riskId);
      addToast('ALERT ACKNOWLEDGED', `Risk ${riskId} marked acknowledged. Duty Officer notified.`, 'INFO');
    }
  };

  const resolveRisk = async (riskId: string) => {
    try {
      await risksApi.updateAlertStatus(riskId, 'RESOLVED').catch(() => null);
    } finally {
      logAudit('RESOLVED_ALERT', `Risk ${riskId}`, riskId);
      addToast('ALERT RESOLVED', `Risk ${riskId} marked resolved. Mitigation actions verified.`, 'SUCCESS');
    }
  };

  const markNotificationRead = (notifId: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === notifId ? { ...n, read: true } : n))
    );
  };

  const setDemoStep = (stepNumber: number) => {
    const idx = DEMO_FLOW_STEPS.findIndex(s => s.step === stepNumber);
    if (idx !== -1) {
      setCurrentDemoStepIndex(idx);
    }
  };

  const nextDemoStep = () => {
    setCurrentDemoStepIndex(prev => (prev < DEMO_FLOW_STEPS.length - 1 ? prev + 1 : prev));
  };

  const prevDemoStep = () => {
    setCurrentDemoStepIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <OperationalContext.Provider
      value={{
        risks,
        recommendations,
        simulations,
        notifications,
        auditEvents,
        toasts,
        isSimulating,
        simulationPhase,
        currentDemoStepIndex,
        addToast,
        removeToast,
        approveRecommendation,
        rejectRecommendation,
        runSimulation,
        applyRoute,
        acknowledgeRisk,
        resolveRisk,
        markNotificationRead,
        setDemoStep,
        nextDemoStep,
        prevDemoStep,
        refreshOperationalData,
      }}
    >
      {children}
    </OperationalContext.Provider>
  );
};

export const useOperational = () => {
  const ctx = useContext(OperationalContext);
  if (!ctx) throw new Error('useOperational must be used within OperationalProvider');
  return ctx;
};

