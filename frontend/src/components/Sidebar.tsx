import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useOperational } from '../context/OperationalContext';

interface NavItem {
  name: string;
  route: string;
  icon: string;
  badge?: number | string;
  badgeColor?: string;
  rlId?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const { risks, notifications } = useOperational();
  const [collapsed, setCollapsed] = useState(false);

  const activeRisksCount = risks.filter(r => r.status === 'ACTIVE').length;
  const unreadNotifsCount = notifications.filter(n => !n.read).length;

  const sections: NavSection[] = [
    {
      title: 'COMMAND',
      items: [
        { name: 'Dashboard', route: '/dashboard', icon: 'dashboard', rlId: 'RL-05' },
        { name: 'GIS Command Center', route: '/gis-command-center', icon: 'map', rlId: 'RL-06' },
        { name: 'Alerts & Risk', route: '/alerts', icon: 'warning', badge: activeRisksCount, badgeColor: 'bg-error', rlId: 'RL-07' },
      ],
    },
    {
      title: 'LOCATIONS',
      items: [
        { name: 'Locations Overview', route: '/locations', icon: 'pin_drop', rlId: 'RL-08' },
        { name: 'Forward Post Alpha', route: '/locations/forward-post-alpha', icon: 'domain', rlId: 'RL-09' },
        { name: 'Add / Edit Location', route: '/locations/new', icon: 'add_location', rlId: 'RL-10' },
      ],
    },
    {
      title: 'INVENTORY',
      items: [
        { name: 'Inventory Overview', route: '/inventory', icon: 'inventory_2', rlId: 'RL-11' },
        { name: 'Arctic Diesel Item', route: '/inventory/arctic-diesel', icon: 'oil_barrel', rlId: 'RL-12' },
        { name: 'Transactions Ledger', route: '/inventory/transactions', icon: 'receipt_long', rlId: 'RL-13' },
        { name: 'Risk & Replenishment', route: '/inventory/risk', icon: 'production_quantity_limits', rlId: 'RL-14' },
      ],
    },
    {
      title: 'CONSUMPTION & DATA',
      items: [
        { name: 'Consumption History', route: '/consumption', icon: 'data_usage', rlId: 'RL-15' },
        { name: 'Import Data', route: '/consumption/import', icon: 'upload_file', rlId: 'RL-16' },
        { name: 'Data Quality Center', route: '/data-quality', icon: 'verified_user', rlId: 'RL-17' },
      ],
    },
    {
      title: 'FORECASTING',
      items: [
        { name: 'Demand Forecasting', route: '/forecasting', icon: 'trending_up', rlId: 'RL-18' },
        { name: 'Generate Forecast', route: '/forecasting/generate', icon: 'auto_graph', rlId: 'RL-19' },
        { name: 'Forecast Details', route: '/forecasting/FCT-2026-X1', icon: 'insights', rlId: 'RL-20' },
        { name: 'ML Performance', route: '/model-performance', icon: 'analytics', rlId: 'RL-21' },
      ],
    },
    {
      title: 'TRANSPORT & FLEET',
      items: [
        { name: 'Fleet Overview', route: '/fleet', icon: 'local_shipping', rlId: 'RL-22' },
        { name: 'Vehicle VH-0087', route: '/fleet/VH-0087', icon: 'directions_bus', rlId: 'RL-23' },
        { name: 'Shipment Management', route: '/shipments', icon: 'move_to_inbox', rlId: 'RL-24' },
        { name: 'Shipment SHP-2048', route: '/shipments/SHP-2048', icon: 'inventory', rlId: 'RL-25' },
      ],
    },
    {
      title: 'ROUTES',
      items: [
        { name: 'Route Intelligence', route: '/routes', icon: 'alt_route', rlId: 'RL-26' },
        { name: 'Route Optimization', route: '/routes/optimize', icon: 'conversion_path', rlId: 'RL-27' },
        { name: 'Route RTE-018', route: '/routes/RTE-018', icon: 'route', rlId: 'RL-28' },
      ],
    },
    {
      title: 'RISK INTELLIGENCE',
      items: [
        { name: 'Risk Dashboard', route: '/risks', icon: 'shield_with_heart', rlId: 'RL-29' },
        { name: 'Risk Dossier (1042)', route: '/risks/RISK-1042', icon: 'emergency_heat', badge: 'P-1', badgeColor: 'bg-error', rlId: 'RL-30' },
      ],
    },
    {
      title: 'SIMULATION',
      items: [
        { name: 'Simulation Center', route: '/simulations', icon: 'model_training', rlId: 'RL-31' },
        { name: 'Create Simulation', route: '/simulations/create', icon: 'tune', rlId: 'RL-32' },
        { name: 'Workspace (SIM-0084)', route: '/simulations/SIM-0084', icon: 'science', rlId: 'RL-33' },
        { name: 'Results (SIM-0084)', route: '/simulations/SIM-0084/results', icon: 'assessment', rlId: 'RL-34' },
      ],
    },
    {
      title: 'RECOMMENDATIONS',
      items: [
        { name: 'AI Recommendations', route: '/recommendations', icon: 'recommend', rlId: 'RL-35' },
        { name: 'Approval (REC-2048)', route: '/recommendations/REC-2048', icon: 'task_alt', rlId: 'RL-36' },
      ],
    },
    {
      title: 'ADMINISTRATION',
      items: [
        { name: 'User Management', route: '/admin/users', icon: 'group', rlId: 'RL-37' },
        { name: 'Roles & Permissions', route: '/admin/roles', icon: 'admin_panel_settings', rlId: 'RL-38' },
        { name: 'Audit Trail', route: '/admin/audit', icon: 'history', rlId: 'RL-39' },
        { name: 'System Settings', route: '/admin/settings', icon: 'settings', rlId: 'RL-40' },
      ],
    },
    {
      title: 'ACCOUNT & SYSTEM',
      items: [
        { name: 'My Profile', route: '/profile', icon: 'badge', rlId: 'RL-41' },
        { name: 'Notification Center', route: '/notifications', icon: 'notifications', badge: unreadNotifsCount, badgeColor: 'bg-secondary', rlId: 'RL-42' },
      ],
    },
  ];

  const isCurrentRoute = (route: string) => {
    return location.pathname === route;
  };

  return (
    <aside
      className={`${
        collapsed ? 'w-16' : 'w-[250px]'
      } flex-shrink-0 bg-primary-container text-surface-container-highest border-r border-outline flex flex-col justify-between select-none transition-all duration-200 z-30 h-full overflow-hidden`}
    >
      <div className="flex flex-col min-h-0 flex-1">
        {/* Sidebar Brand Header */}
        <div className="px-3 py-3 border-b border-on-primary-container/20 flex items-center justify-between">
          {!collapsed ? (
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold tracking-tight text-white uppercase">
                  RAKSHAKLOGIX
                </span>
                <span className="text-[10px] font-mono font-bold text-secondary-fixed bg-surface-tint/30 px-1 py-0.5 rounded">
                  V4.8
                </span>
              </div>
              <p className="text-[9px] font-mono text-on-primary-container uppercase mt-0.5 tracking-wider">
                LOGISTICS COMMAND // SEC-LVL 4
              </p>
            </div>
          ) : (
            <div className="mx-auto text-center font-bold text-white text-xs">
              RL
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-on-primary-container hover:text-white p-1 rounded"
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            <span className="material-symbols-outlined text-[16px]">
              {collapsed ? 'chevron_right' : 'menu_open'}
            </span>
          </button>
        </div>

        {/* Doctrine Banner */}
        {!collapsed && (
          <div className="px-3 py-1 bg-black/25 border-b border-on-primary-container/10 flex items-center justify-between text-[10px] font-mono text-tertiary-fixed-dim">
            <span>MONITOR</span>
            <span>→</span>
            <span>PREDICT</span>
            <span>→</span>
            <span>ACT</span>
          </div>
        )}

        {/* Navigation Groups List */}
        <div className="flex-1 overflow-y-auto px-1.5 py-2 space-y-3 custom-scrollbar text-xs">
          {sections.map(section => (
            <div key={section.title}>
              {!collapsed && (
                <div className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-on-primary-container/70 font-bold">
                  {section.title}
                </div>
              )}
              <ul className="space-y-0.5 mt-0.5">
                {section.items.map(item => {
                  const active = isCurrentRoute(item.route);
                  return (
                    <li key={item.route}>
                      <button
                        onClick={() => navigate(item.route)}
                        title={`${item.name} (${item.rlId})`}
                        className={`w-full flex items-center ${
                          collapsed ? 'justify-center py-2' : 'justify-between px-2.5 py-1.5'
                        } rounded transition-colors text-left text-xs ${
                          active
                            ? 'bg-surface-container/15 text-white font-semibold border-l-2 border-primary-fixed shadow-xs'
                            : 'text-on-primary-container hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className={`material-symbols-outlined text-[17px] ${
                              active ? 'text-primary-fixed' : 'text-on-primary-container/90'
                            }`}
                          >
                            {item.icon}
                          </span>
                          {!collapsed && (
                            <span className="truncate">{item.name}</span>
                          )}
                        </div>

                        {!collapsed && (
                          <div className="flex items-center gap-1">
                            {item.rlId && (
                              <span className="text-[9px] font-mono text-on-primary-container/50 hidden group-hover:inline">
                                {item.rlId}
                              </span>
                            )}
                            {item.badge !== undefined && (
                              <span
                                className={`text-[9px] ${
                                  item.badgeColor || 'bg-secondary'
                                } text-white font-mono px-1 py-0.2 rounded font-bold`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Footer Profile */}
      <div className="p-2 border-t border-on-primary-container/20 bg-black/20">
        {!collapsed ? (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center gap-2 truncate text-left group"
              >
                <div className="w-7 h-7 rounded bg-secondary text-white font-mono text-xs font-semibold flex items-center justify-center border border-primary-fixed/30 group-hover:border-primary-fixed">
                  BK
                </div>
                <div className="leading-tight truncate">
                  <div className="text-xs font-semibold text-white truncate group-hover:text-primary-fixed">
                    {user.name}
                  </div>
                  <div className="text-[9px] text-on-primary-container truncate font-mono">
                    {user.officerId} • {user.roleLabel}
                  </div>
                </div>
              </button>

              <button
                onClick={() => navigate('/admin/settings')}
                className="text-on-primary-container hover:text-white p-1 rounded"
                title="System Settings"
              >
                <span className="material-symbols-outlined text-[15px]">settings</span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px]">
              <span className="text-on-primary-container/80 font-mono">SESSION #2981</span>
              <button
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
                className="text-on-tertiary-container hover:text-tertiary-fixed font-medium flex items-center gap-0.5 transition-colors"
              >
                <span>Sign Out</span>
                <span className="material-symbols-outlined text-[12px]">logout</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-1">
            <button
              onClick={() => navigate('/profile')}
              title={`${user.name} (${user.officerId})`}
              className="w-7 h-7 rounded bg-secondary text-white font-mono text-xs font-semibold flex items-center justify-center border border-primary-fixed/30"
            >
              BK
            </button>
            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              title="Sign Out"
              className="text-on-primary-container hover:text-error"
            >
              <span className="material-symbols-outlined text-[16px]">logout</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
