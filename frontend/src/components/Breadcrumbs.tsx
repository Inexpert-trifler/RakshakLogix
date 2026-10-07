import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SCREEN_REGISTRY, ScreenMetadata } from '../config/screenRegistry';

export const Breadcrumbs: React.FC<{ screen?: ScreenMetadata }> = ({ screen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentScreen =
    screen ||
    SCREEN_REGISTRY.find(s => s.route === location.pathname) ||
    SCREEN_REGISTRY.find(s => location.pathname.startsWith(s.route.split('/:')[0]));

  if (!currentScreen || !currentScreen.breadcrumb || currentScreen.breadcrumb.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center gap-1.5 text-[11px] font-mono text-on-surface-variant select-none">
      <button
        onClick={() => navigate('/dashboard')}
        className="hover:text-primary transition-colors flex items-center gap-0.5"
      >
        <span className="material-symbols-outlined text-[13px]">home</span>
        <span>HQ Command</span>
      </button>

      {currentScreen.breadcrumb.map((crumb, idx) => {
        const isLast = idx === currentScreen.breadcrumb.length - 1;
        return (
          <React.Fragment key={crumb}>
            <span className="text-outline">/</span>
            {isLast ? (
              <span className="text-primary font-bold">{crumb}</span>
            ) : (
              <span className="hover:text-primary transition-colors cursor-pointer">{crumb}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
