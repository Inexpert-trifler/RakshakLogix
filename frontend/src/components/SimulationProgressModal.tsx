import React from 'react';
import { useOperational } from '../context/OperationalContext';

export const SimulationProgressModal: React.FC = () => {
  const { isSimulating, simulationPhase } = useOperational();

  if (!isSimulating) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 select-none">
      <div className="bg-surface-container-lowest border border-outline shadow-2xl rounded max-w-md w-full p-6 flex flex-col gap-5 animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary animate-spin text-[22px]">
              progress_activity
            </span>
            <div>
              <div className="text-sm font-bold text-primary tracking-wide font-mono uppercase">
                DEFENCE SIMULATION ENGINE // SIM-0084
              </div>
              <div className="text-[10px] text-on-surface-variant font-mono">
                72-HOUR WINTER BLIZZARD LOGISTICS STRESS TEST
              </div>
            </div>
          </div>
          <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-fixed text-[10px] font-mono font-bold rounded">
            CALCULATING
          </span>
        </div>

        {/* Tactical Radar / Telemetry Animation */}
        <div className="bg-surface-container-high border border-outline-variant rounded p-4 flex flex-col items-center justify-center gap-3 tactical-grid-bg">
          <div className="relative w-20 h-20 rounded-full border border-secondary/40 flex items-center justify-center">
            <div className="absolute inset-2 rounded-full border border-dashed border-secondary/60"></div>
            <div className="absolute inset-5 rounded-full border border-secondary/80"></div>
            <div className="w-2 h-2 rounded-full bg-error animate-ping"></div>
            {/* Radar line sweep */}
            <div className="absolute inset-0 rounded-full radar-sweep border-r-2 border-secondary/80"></div>
          </div>

          <div className="text-center">
            <div className="text-xs font-mono font-bold text-primary">
              {simulationPhase || 'Executing Stochastic Supply-Chain Matrix...'}
            </div>
            <div className="text-[10px] text-on-surface-variant font-mono mt-1">
              SECTOR IV-B ENCLAVE • MONTE CARLO ITERATION 2,400 / 2,400
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] font-mono text-on-surface-variant">
            <span>Neural Convergence</span>
            <span className="text-secondary font-bold">SYNCHRONIZING</span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden border border-outline-variant">
            <div className="bg-primary h-full rounded-full animate-pulse w-full transition-all duration-300"></div>
          </div>
        </div>

        {/* Notice */}
        <div className="text-[10px] text-on-surface-variant font-mono border-t border-outline-variant pt-2 flex items-center justify-between">
          <span>CLASSIFICATION: RESTRICTED // SEC-LVL 4</span>
          <span>NODE DL-9941</span>
        </div>
      </div>
    </div>
  );
};
