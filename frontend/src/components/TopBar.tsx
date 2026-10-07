import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useOperational } from '../context/OperationalContext';

export const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, selectRole, logout } = useAuth();
  const { notifications } = useOperational();
  const [showRoleMenu, setShowRoleMenu] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="w-full px-4 lg:px-6 h-14 shrink-0 flex justify-between items-center border-b border-outline-variant bg-surface-container-lowest z-40 select-none">
      {/* Brand & Command Node Title */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity text-left"
          title="Return to Command Dashboard"
        >
          <span className="material-symbols-outlined text-primary text-[22px]">shield</span>
          <span className="text-sm font-bold tracking-wider text-primary uppercase hidden sm:inline">
            RAKSHAKLOGIX // DEFENCE LOGISTICS COMMAND
          </span>
          <span className="text-xs font-bold tracking-wider text-primary uppercase sm:hidden">
            RAKSHAKLOGIX
          </span>
        </button>

        <span className="hidden xl:inline-block px-2 py-0.5 border border-outline-variant bg-surface-container-low text-[10px] font-mono text-on-surface-variant rounded">
          LEH CORPS HQ NODE DL-9941 • ONLINE
        </span>
      </div>

      {/* Trailing Actions & Officer Clearance */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Role Quick Selector */}
        <div className="relative">
          <button
            onClick={() => setShowRoleMenu(!showRoleMenu)}
            className="flex items-center gap-1 px-2.5 py-1 bg-surface-container border border-outline-variant rounded text-[11px] font-mono hover:bg-surface-container-high transition-colors"
            title="Switch Operational Role"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-on-surface font-semibold truncate max-w-[120px] sm:max-w-none">
              {user.roleLabel}
            </span>
            <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
          </button>

          {showRoleMenu && (
            <div className="absolute right-0 mt-1 w-56 bg-surface-container-lowest border border-outline shadow-lg rounded z-50 py-1 text-xs font-sans">
              <div className="px-3 py-1.5 border-b border-outline-variant font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                Select Tactical Persona
              </div>
              <button
                onClick={() => { selectRole('LOGISTICS_PLANNER'); setShowRoleMenu(false); }}
                className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-surface-container ${user.role === 'LOGISTICS_PLANNER' ? 'font-bold text-primary bg-surface-container-low' : 'text-on-surface'}`}
              >
                <span>Logistics Planner (Maj. B. Kumar)</span>
                {user.role === 'LOGISTICS_PLANNER' && <span className="material-symbols-outlined text-secondary text-[16px]">check</span>}
              </button>
              <button
                onClick={() => { selectRole('CORPS_COMMANDER'); setShowRoleMenu(false); }}
                className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-surface-container ${user.role === 'CORPS_COMMANDER' ? 'font-bold text-primary bg-surface-container-low' : 'text-on-surface'}`}
              >
                <span>Corps Commander (Col. Deshmukh)</span>
                {user.role === 'CORPS_COMMANDER' && <span className="material-symbols-outlined text-secondary text-[16px]">check</span>}
              </button>
              <button
                onClick={() => { selectRole('DEPOT_COMMANDER'); setShowRoleMenu(false); }}
                className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-surface-container ${user.role === 'DEPOT_COMMANDER' ? 'font-bold text-primary bg-surface-container-low' : 'text-on-surface'}`}
              >
                <span>Depot Commander (Lt. Col. Joshi)</span>
                {user.role === 'DEPOT_COMMANDER' && <span className="material-symbols-outlined text-secondary text-[16px]">check</span>}
              </button>
              <button
                onClick={() => { selectRole('AUDIT_OFFICER'); setShowRoleMenu(false); }}
                className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-surface-container ${user.role === 'AUDIT_OFFICER' ? 'font-bold text-primary bg-surface-container-low' : 'text-on-surface'}`}
              >
                <span>Logistics Auditor (Capt. Menon)</span>
                {user.role === 'AUDIT_OFFICER' && <span className="material-symbols-outlined text-secondary text-[16px]">check</span>}
              </button>
            </div>
          )}
        </div>

        {/* Audit Terminal Button */}
        <button
          onClick={() => navigate('/admin/audit')}
          className="p-1.5 text-on-surface-variant hover:text-primary rounded border border-transparent hover:border-outline-variant transition-colors"
          title="Cryptographic Audit Trail (RL-39)"
        >
          <span className="material-symbols-outlined text-[18px]">terminal</span>
        </button>

        {/* Notifications Button */}
        <button
          onClick={() => navigate('/notifications')}
          className="relative p-1.5 text-on-surface-variant hover:text-primary rounded border border-transparent hover:border-outline-variant transition-colors"
          title="Notification Center (RL-42)"
        >
          <span className="material-symbols-outlined text-[18px]">notifications</span>
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-error text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>

        <div className="h-4 w-px bg-outline-variant mx-0.5"></div>

        {/* Duty Officer Profile */}
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center gap-2 pl-1 group text-left"
          title="Officer Profile & Settings (RL-41)"
        >
          <div className="w-7 h-7 rounded bg-primary-container text-white text-[11px] font-mono font-bold flex items-center justify-center border border-outline group-hover:border-secondary transition-colors">
            BK
          </div>
          <div className="text-[11px] leading-tight hidden md:block">
            <span className="font-semibold text-on-surface block group-hover:text-primary">
              {user.rank} {user.name}
            </span>
            <span className="text-on-surface-variant text-[9px] font-mono">
              {user.officerId}
            </span>
          </div>
        </button>

        {/* Quick Sign Out */}
        <button
          onClick={() => {
            logout();
            navigate('/login');
          }}
          className="p-1.5 text-on-surface-variant hover:text-error rounded hover:bg-surface-container transition-colors"
          title="Secure Exit / Sign Out"
        >
          <span className="material-symbols-outlined text-[18px]">logout</span>
        </button>
      </div>
    </header>
  );
};
