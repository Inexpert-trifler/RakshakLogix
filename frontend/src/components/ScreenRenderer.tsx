import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useOperational } from '../context/OperationalContext';
import { dashboardApi } from '../api/dashboardApi';
import { locationsApi } from '../api/locationsApi';
import { inventoryApi } from '../api/inventoryApi';
import { forecastApi } from '../api/forecastApi';
import { logisticsApi } from '../api/logisticsApi';
import { risksApi } from '../api/risksApi';
import { simulationsApi } from '../api/simulationsApi';
import { usersApi } from '../api/usersApi';
import { consumptionApi } from '../api/consumptionApi';

interface ScreenRendererProps {
  screenId: string;
  title: string;
  htmlContent: string;
}

export const ScreenRenderer: React.FC<ScreenRendererProps> = ({ screenId, title, htmlContent }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { login, selectRole } = useAuth();
  const {
    runSimulation,
    approveRecommendation,
    rejectRecommendation,
    applyRoute,
    acknowledgeRisk,
    resolveRisk,
    addToast,
  } = useOperational();

  useEffect(() => {
    document.title = `${title} // RakshakLogix`;
  }, [title]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Inject HTML
    el.innerHTML = htmlContent;

    // Live backend data hydration
    const hydrateBackendData = async () => {
      try {
        if (screenId === 'RL-05') {
          const summary = await dashboardApi.getSummary();
          const readinessEl = el.querySelector('[data-kpi="readiness"], .text-4xl.font-bold, .font-mono.text-3xl');
          if (readinessEl && summary.overall_system_readiness_pct) {
            // Update live metrics on dashboard if available
          }
        } else if (screenId === 'RL-08') {
          const locs = await locationsApi.list();
          console.log(`Fetched ${locs.length} locations from backend.`);
        } else if (screenId === 'RL-11') {
          const inv = await inventoryApi.list();
          console.log(`Fetched ${inv.length} inventory records from backend.`);
        } else if (screenId === 'RL-18' || screenId === 'RL-21') {
          const models = await forecastApi.getModels();
          console.log('Fetched model metrics:', models);
        } else if (screenId === 'RL-22') {
          const vehicles = await logisticsApi.getVehicles();
          console.log(`Fetched ${vehicles.length} vehicles from backend.`);
        } else if (screenId === 'RL-24') {
          const shipments = await logisticsApi.getShipments();
          console.log(`Fetched ${shipments.length} shipments from backend.`);
        } else if (screenId === 'RL-26') {
          const routes = await logisticsApi.getRoutes();
          console.log(`Fetched ${routes.length} routes from backend.`);
        } else if (screenId === 'RL-29') {
          const risks = await risksApi.getRisks();
          console.log(`Fetched ${risks.length} risk predictions from backend.`);
        } else if (screenId === 'RL-37') {
          const users = await usersApi.list();
          console.log(`Fetched ${users.length} users from backend.`);
        }
      } catch (err) {
        console.warn(`[RakshakLogix API Hydration] ${screenId} data sync:`, err);
      }
    };

    hydrateBackendData();


    // Attach delegated event listener
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest interactive element: button, a, tr, or element with data-action
      const btn = target.closest('button') as HTMLButtonElement | null;
      const link = target.closest('a') as HTMLAnchorElement | null;
      const tr = target.closest('tr') as HTMLTableRowElement | null;

      // Handle buttons
      if (btn) {
        const text = (btn.innerText || '').trim().toLowerCase();
        const btnTitle = (btn.title || '').toLowerCase();
        const id = (btn.id || '').toLowerCase();

        // 1. Auth buttons & Login triggers
        if (
          text.includes('sign in') ||
          text.includes('continue as demo user') ||
          text.includes('authenticate') ||
          text.includes('secure login') ||
          text.includes('proceed to command') ||
          id === 'signinbtn'
        ) {
          e.preventDefault();
          login();
          addToast('SESSION INITIALIZED', 'Clearance verified: Duty Officer IC-78921K logged in.', 'SUCCESS');
          navigate('/dashboard');
          return;
        }

        if (text.includes('request reset token') || text.includes('send emergency token')) {
          e.preventDefault();
          addToast('TOKEN TRANSMITTED', 'Cryptographic recovery token sent to verified cipher terminal.', 'INFO');
          navigate('/reset-password');
          return;
        }

        if (text.includes('commit cryptographic credentials') || text.includes('update credential') || text.includes('confirm password')) {
          e.preventDefault();
          addToast('CREDENTIAL UPDATED', 'Cryptographic access key updated successfully.', 'SUCCESS');
          navigate('/login');
          return;
        }

        if (text.includes('confirm role clearance') || text.includes('proceed to command dashboard')) {
          e.preventDefault();
          login();
          addToast('PERSONA CONFIRMED', 'Access granted to Sector IV-B Tactical Dashboard.', 'SUCCESS');
          navigate('/dashboard');
          return;
        }

        // 2. Simulation triggers
        if (text.includes('run simulation') || text.includes('execute stress test') || text.includes('launch simulation') || text.includes('run scenario')) {
          e.preventDefault();
          runSimulation('SIM-0084', () => {
            navigate('/simulations/SIM-0084/results');
          });
          return;
        }

        if (text.includes('create simulation') || text.includes('new simulation') || text.includes('configure scenario')) {
          e.preventDefault();
          navigate('/simulations/create');
          return;
        }

        // 3. Recommendation approval
        if (text.includes('approve recommendation') || text.includes('authorize dispatch') || text.includes('authorize directive') || text.includes('approve directive')) {
          e.preventDefault();
          approveRecommendation('REC-2048');
          setTimeout(() => {
            navigate('/recommendations/REC-2048');
          }, 400);
          return;
        }

        if (text.includes('reject recommendation') || text.includes('reject directive')) {
          e.preventDefault();
          rejectRecommendation('REC-2048');
          return;
        }

        if (text.includes('review recommendation') || text.includes('view recommendation') || text.includes('inspect recommendation')) {
          e.preventDefault();
          navigate('/recommendations/REC-2048');
          return;
        }

        // 4. Route optimization
        if (text.includes('apply selected route') || text.includes('apply route') || text.includes('commit corridor')) {
          e.preventDefault();
          applyRoute('RTE-018', 'SHP-2048');
          navigate('/shipments/SHP-2048');
          return;
        }

        if (text.includes('optimize route') || text.includes('run optimization') || text.includes('recalculate corridor')) {
          e.preventDefault();
          navigate('/routes/optimize');
          return;
        }

        // 5. Demand Forecast
        if (text.includes('generate forecast') || text.includes('run demand model') || text.includes('new forecast')) {
          e.preventDefault();
          navigate('/forecasting/generate');
          return;
        }

        if (text.includes('execute forecast') || text.includes('generate 30-day forecast') || text.includes('run model')) {
          e.preventDefault();
          addToast('MODEL CONVERGED', 'Ensemble TFT + SARIMAX model generated Forecast FCT-2026-X1.', 'SUCCESS');
          navigate('/forecasting/FCT-2026-X1');
          return;
        }

        // 6. Data Ingestion
        if (text.includes('import data') || text.includes('import consumption')) {
          e.preventDefault();
          navigate('/consumption/import');
          return;
        }

        if (text.includes('upload & validate') || text.includes('validate and ingest') || text.includes('ingest data')) {
          e.preventDefault();
          addToast('INGESTION VERIFIED', 'Consumption batch parsed: 12,480 telemetry rows ingested (99.8% Quality Score).', 'SUCCESS');
          navigate('/data-quality');
          return;
        }

        // 7. Location
        if (text.includes('add location') || text.includes('create location') || text.includes('register post')) {
          e.preventDefault();
          navigate('/locations/new');
          return;
        }

        if (text.includes('save location') || text.includes('commit outpost') || text.includes('save post specification')) {
          e.preventDefault();
          addToast('LOCATION REGISTERED', 'Forward Post Alpha specifications saved and locked in database.', 'SUCCESS');
          navigate('/locations/forward-post-alpha');
          return;
        }

        // 8. Alerts & Modals
        if (text.includes('acknowledge') || id.includes('ack') || text.includes('quarantine alert')) {
          e.preventDefault();
          acknowledgeRisk('RISK-1042');
          const modal = el.querySelector('#ackModal') as HTMLElement;
          if (modal) modal.classList.add('hidden');
          return;
        }

        if (text.includes('resolve') || id.includes('resolve')) {
          e.preventDefault();
          resolveRisk('RISK-1042');
          const modal = el.querySelector('#resolveModal') as HTMLElement;
          if (modal) modal.classList.add('hidden');
          return;
        }

        // Modal triggers
        if (btnTitle.includes('acknowledge') || btnTitle.includes('investigate')) {
          const modal = el.querySelector('#ackModal') as HTMLElement;
          if (modal) {
            e.preventDefault();
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            return;
          }
        }

        // Table / Map view toggles (RL-08)
        if (id === 'view-toggle-map' || text.includes('map view')) {
          e.preventDefault();
          const tableView = el.querySelector('#locations-table-view') as HTMLElement;
          const mapView = el.querySelector('#locations-map-view') as HTMLElement;
          if (tableView && mapView) {
            tableView.classList.add('hidden');
            mapView.classList.remove('hidden');
            mapView.classList.add('flex');
            return;
          }
        }

        if (id === 'view-toggle-list' || text.includes('table view') || text.includes('list view')) {
          e.preventDefault();
          const tableView = el.querySelector('#locations-table-view') as HTMLElement;
          const mapView = el.querySelector('#locations-map-view') as HTMLElement;
          if (tableView && mapView) {
            mapView.classList.add('hidden');
            mapView.classList.remove('flex');
            tableView.classList.remove('hidden');
            return;
          }
        }

        // Tab toggling micro-interaction
        const tabContainer = btn.closest('.flex.items-center.bg-surface-container, .flex.gap-1, .border-b');
        if (tabContainer && btn.parentElement === tabContainer) {
          const siblings = tabContainer.querySelectorAll('button');
          siblings.forEach(s => s.classList.remove('bg-primary-container', 'text-on-primary', 'font-bold'));
          btn.classList.add('bg-primary-container', 'text-on-primary', 'font-bold');
        }
      }

      // Handle links
      if (link) {
        const href = link.getAttribute('href') || '';
        const text = (link.innerText || '').trim();

        // Check if internal navigation or specific entity link
        if (href.startsWith('/') && !href.startsWith('//')) {
          e.preventDefault();
          navigate(href);
          return;
        }

        if (href === '#' || href === '') {
          // Check text for entity references
          if (text.includes('VH-0087') || text.includes('Stallion')) {
            e.preventDefault();
            navigate('/fleet/VH-0087');
            return;
          }
          if (text.includes('SHP-2048') || text.includes('Requisition Requisition')) {
            e.preventDefault();
            navigate('/shipments/SHP-2048');
            return;
          }
          if (text.includes('RTE-018') || text.includes('Chang La')) {
            e.preventDefault();
            navigate('/routes/RTE-018');
            return;
          }
          if (text.includes('Forward Post Alpha') || text.includes('Post Alpha')) {
            e.preventDefault();
            navigate('/locations/forward-post-alpha');
            return;
          }
          if (text.includes('RISK-1042') || text.includes('Fuel Stockout')) {
            e.preventDefault();
            navigate('/risks/RISK-1042');
            return;
          }
          if (text.includes('SIM-0084') || text.includes('Winter Closure')) {
            e.preventDefault();
            navigate('/simulations/SIM-0084/results');
            return;
          }
          if (text.includes('REC-2048') || text.includes('Replenishment Directive')) {
            e.preventDefault();
            navigate('/recommendations/REC-2048');
            return;
          }
          if (text.includes('Forgot Password') || text.includes('Emergency Recovery')) {
            e.preventDefault();
            navigate('/forgot-password');
            return;
          }
          if (text.includes('Return to Gateway') || text.includes('Back to Login')) {
            e.preventDefault();
            navigate('/login');
            return;
          }
        }
      }

      // Handle table row clicks
      if (tr && !btn && !link) {
        const trText = (tr.innerText || '').trim();

        if (trText.includes('VH-0087')) {
          navigate('/fleet/VH-0087');
          return;
        }
        if (trText.includes('SHP-2048')) {
          navigate('/shipments/SHP-2048');
          return;
        }
        if (trText.includes('RTE-018')) {
          navigate('/routes/RTE-018');
          return;
        }
        if (trText.includes('Forward Post Alpha') || trText.includes('LOC-FPA-01')) {
          navigate('/locations/forward-post-alpha');
          return;
        }
        if (trText.includes('RISK-1042')) {
          navigate('/risks/RISK-1042');
          return;
        }
        if (trText.includes('SIM-0084')) {
          navigate('/simulations/SIM-0084/results');
          return;
        }
        if (trText.includes('REC-2048')) {
          navigate('/recommendations/REC-2048');
          return;
        }
        if (trText.includes('POL-DSL-ART-01') || trText.includes('Arctic Diesel')) {
          navigate('/inventory/arctic-diesel');
          return;
        }
      }
    };

    // Range slider micro-interaction
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target && target.type === 'range') {
        const val = target.value;
        const display = target.parentElement?.querySelector('.slider-value, .font-mono');
        if (display && display !== target) {
          display.textContent = val;
        }
      }
    };

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      login();
      addToast('SESSION INITIALIZED', 'Clearance verified: Duty Officer IC-78921K logged in.', 'SUCCESS');
      navigate('/dashboard');
    };

    el.addEventListener('click', handleClick);
    el.addEventListener('input', handleInput);
    el.addEventListener('submit', handleSubmit);

    return () => {
      el.removeEventListener('click', handleClick);
      el.removeEventListener('input', handleInput);
      el.removeEventListener('submit', handleSubmit);
    };
  }, [htmlContent, navigate, screenId, login, selectRole, runSimulation, approveRecommendation, rejectRecommendation, applyRoute, acknowledgeRisk, resolveRisk, addToast]);

  return <div ref={containerRef} className="w-full flex-1 flex flex-col min-h-0" />;
};
