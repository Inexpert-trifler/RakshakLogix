import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DEMO_FLOW_STEPS } from '../data/mockData';
import { useOperational } from '../context/OperationalContext';

export const DemoFlowBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentDemoStepIndex, setDemoStep, nextDemoStep, prevDemoStep } = useOperational();
  const [isMinimized, setIsMinimized] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Synchronize step with current location if matches a demo step
  useEffect(() => {
    const matchedIdx = DEMO_FLOW_STEPS.findIndex(s => s.route === location.pathname);
    if (matchedIdx !== -1 && matchedIdx !== currentDemoStepIndex) {
      setDemoStep(DEMO_FLOW_STEPS[matchedIdx].step);
    }
  }, [location.pathname]);

  const currentStep = DEMO_FLOW_STEPS[currentDemoStepIndex] || DEMO_FLOW_STEPS[0];

  const handleNext = () => {
    if (currentDemoStepIndex < DEMO_FLOW_STEPS.length - 1) {
      const nextIdx = currentDemoStepIndex + 1;
      nextDemoStep();
      navigate(DEMO_FLOW_STEPS[nextIdx].route);
    }
  };

  const handlePrev = () => {
    if (currentDemoStepIndex > 0) {
      const prevIdx = currentDemoStepIndex - 1;
      prevDemoStep();
      navigate(DEMO_FLOW_STEPS[prevIdx].route);
    }
  };

  const handleSelectStep = (index: number) => {
    setDemoStep(DEMO_FLOW_STEPS[index].step);
    setShowDropdown(false);
    navigate(DEMO_FLOW_STEPS[index].route);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-3 py-1.5 bg-primary-container text-white border border-primary-fixed shadow-lg rounded text-xs font-mono hover:bg-secondary transition-all"
          title="Open SIH Demo Flow Navigator"
        >
          <span className="material-symbols-outlined text-[16px] text-primary-fixed">play_circle</span>
          <span className="font-bold">DEMO FLOW: STEP {currentStep.step}/20</span>
          <span className="text-[10px] text-tertiary-fixed font-semibold">{currentStep.id}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-surface-container-high border-b border-outline-variant px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 z-30 select-none text-xs">
      {/* Left: Indicator & Step Title */}
      <div className="flex items-center gap-2.5 flex-1 min-w-[280px]">
        <div className="flex items-center gap-1.5 bg-primary-container text-white px-2 py-0.5 rounded text-[11px] font-mono font-bold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
          <span>SIH-26251 FLOW</span>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1 font-mono font-bold text-on-surface hover:text-primary px-2 py-0.5 rounded bg-surface-container-lowest border border-outline-variant hover:border-outline transition-colors text-xs"
          >
            <span className="text-secondary font-bold">[{currentStep.id}]</span>
            <span className="truncate max-w-[200px] sm:max-w-md">{currentStep.title}</span>
            <span className="text-on-surface-variant font-normal">({currentStep.step}/20)</span>
            <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
          </button>

          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 w-80 max-h-96 overflow-y-auto bg-surface-container-lowest border border-outline shadow-xl rounded z-50 py-1 text-xs custom-scrollbar">
              <div className="px-3 py-1 border-b border-outline-variant text-[10px] font-mono uppercase text-on-surface-variant tracking-wider font-semibold">
                Jump to Demonstration Milestone
              </div>
              {DEMO_FLOW_STEPS.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => handleSelectStep(idx)}
                  className={`w-full text-left px-3 py-1.5 flex items-start gap-2 hover:bg-surface-container transition-colors ${
                    idx === currentDemoStepIndex ? 'bg-secondary-container/30 font-bold text-primary' : 'text-on-surface'
                  }`}
                >
                  <span className="font-mono text-[11px] text-secondary font-bold shrink-0">
                    {String(s.step).padStart(2, '0')}.
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="truncate font-semibold text-[11px]">{s.title}</div>
                    <div className="text-[10px] text-on-surface-variant truncate font-mono">{s.id} • {s.route}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <span className="hidden xl:inline text-[11px] text-on-surface-variant italic truncate max-w-lg">
          — {currentStep.description}
        </span>
      </div>

      {/* Right: Previous / Next Step buttons & Minimize */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={handlePrev}
          disabled={currentDemoStepIndex === 0}
          data-testid="demo-flow-prev"
          className="px-2 py-1 bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container rounded text-xs flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          title="Go to previous step in operational story"
        >
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          <span className="hidden sm:inline">Prev</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentDemoStepIndex === DEMO_FLOW_STEPS.length - 1}
          data-testid="demo-flow-next"
          className="px-2.5 py-1 bg-primary text-white hover:bg-secondary rounded text-xs font-semibold flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs"
          title="Advance to next step in operational story"
        >
          <span>Next</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>

        <button
          onClick={() => setIsMinimized(true)}
          className="p-1 text-on-surface-variant hover:text-on-surface rounded hover:bg-surface-container transition-colors ml-1"
          title="Minimize Demo Ribbon to background badge"
        >
          <span className="material-symbols-outlined text-[15px]">close</span>
        </button>
      </div>
    </div>
  );
};
