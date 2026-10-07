import React from 'react';
import { ScreenRenderer } from '../components/ScreenRenderer';
import { ToastContainer } from '../components/ToastContainer';
import { rl01Html, rl02Html, rl03Html, rl04Html } from '../data/screens';

interface AuthPageProps {
  screenId: 'RL-01' | 'RL-02' | 'RL-03' | 'RL-04';
}

export const AuthPage: React.FC<AuthPageProps> = ({ screenId }) => {
  let content = rl01Html;
  let title = 'RakshakLogix — Secure Gateway // Login';

  if (screenId === 'RL-02') {
    content = rl02Html;
    title = 'RakshakLogix — Emergency Password Recovery';
  } else if (screenId === 'RL-03') {
    content = rl03Html;
    title = 'RakshakLogix — Reset Cryptographic Password';
  } else if (screenId === 'RL-04') {
    content = rl04Html;
    title = 'RakshakLogix — Role & Access Clearance Selection';
  }

  return (
    <div className="min-h-screen w-screen bg-background text-on-surface flex flex-col overflow-x-hidden antialiased font-sans select-none">
      <ScreenRenderer screenId={screenId} title={title} htmlContent={content} />
      <ToastContainer />
    </div>
  );
};
