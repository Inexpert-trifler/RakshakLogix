import React from 'react';
import { useOperational, ToastMessage } from '../context/OperationalContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useOperational();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none select-none">
      {toasts.map(toast => {
        let borderClass = 'border-secondary';
        let bgClass = 'bg-surface-container-lowest';
        let icon = 'info';
        let iconColor = 'text-secondary';

        if (toast.type === 'SUCCESS') {
          borderClass = 'border-primary-fixed';
          icon = 'task_alt';
          iconColor = 'text-primary';
        } else if (toast.type === 'ALERT') {
          borderClass = 'border-error';
          icon = 'emergency_home';
          iconColor = 'text-error';
        } else if (toast.type === 'WARNING') {
          borderClass = 'border-[#C49A45]';
          icon = 'warning';
          iconColor = 'text-[#C49A45]';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto border-l-4 ${borderClass} ${bgClass} border border-outline-variant shadow-xl rounded p-3 flex items-start gap-2.5 transition-all duration-200 animate-in slide-in-from-right`}
          >
            <span className={`material-symbols-outlined text-[20px] ${iconColor} shrink-0 mt-0.5`}>
              {icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-primary uppercase tracking-wide font-mono">
                {toast.title}
              </div>
              <div className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                {toast.message}
              </div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-on-surface-variant hover:text-on-surface p-0.5 shrink-0"
            >
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
