import React from 'react';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';
import { DemoFlowBar } from './DemoFlowBar';
import { ToastContainer } from './ToastContainer';
import { SimulationProgressModal } from './SimulationProgressModal';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-background text-on-surface overflow-hidden antialiased font-sans select-none">
      {/* 1. Universal Top Header */}
      <TopBar />

      {/* 2. Interactive SIH Guided Demo Ribbon */}
      <DemoFlowBar />

      {/* 3. Main Workspace Area: Sidebar + Screen Content */}
      <div className="flex-1 flex min-h-0 overflow-hidden relative">
        {/* Left Operational Rail */}
        <Sidebar />

        {/* Core Workspace Canvas */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto bg-surface-container-low relative custom-scrollbar">
          {children}
        </div>
      </div>

      {/* 4. Global Modals & Tactical Toast HUD */}
      <SimulationProgressModal />
      <ToastContainer />
    </div>
  );
};
