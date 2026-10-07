import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { OperationalProvider } from './context/OperationalContext';
import { AuthPage } from './pages/AuthPage';
import { OperationalPage } from './pages/OperationalPage';

// Protected Route Guard
const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* ================= Unauthenticated Gateway Routes ================= */}
      <Route path="/login" element={<AuthPage screenId="RL-01" />} />
      <Route path="/forgot-password" element={<AuthPage screenId="RL-02" />} />
      <Route path="/reset-password" element={<AuthPage screenId="RL-03" />} />
      <Route path="/access" element={<AuthPage screenId="RL-04" />} />

      {/* Root redirect to Dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* ================= Command Module (RL-05 to RL-07) ================= */}
      <Route path="/dashboard" element={<ProtectedRoute><OperationalPage screenId="RL-05" /></ProtectedRoute>} />
      <Route path="/gis-command-center" element={<ProtectedRoute><OperationalPage screenId="RL-06" /></ProtectedRoute>} />
      <Route path="/alerts" element={<ProtectedRoute><OperationalPage screenId="RL-07" /></ProtectedRoute>} />

      {/* ================= Locations Module (RL-08 to RL-10) ================= */}
      <Route path="/locations" element={<ProtectedRoute><OperationalPage screenId="RL-08" /></ProtectedRoute>} />
      <Route path="/locations/forward-post-alpha" element={<ProtectedRoute><OperationalPage screenId="RL-09" /></ProtectedRoute>} />
      <Route path="/locations/new" element={<ProtectedRoute><OperationalPage screenId="RL-10" /></ProtectedRoute>} />
      <Route path="/locations/:locationId" element={<ProtectedRoute><OperationalPage screenId="RL-09" /></ProtectedRoute>} />

      {/* ================= Inventory Module (RL-11 to RL-14) ================= */}
      <Route path="/inventory" element={<ProtectedRoute><OperationalPage screenId="RL-11" /></ProtectedRoute>} />
      <Route path="/inventory/arctic-diesel" element={<ProtectedRoute><OperationalPage screenId="RL-12" /></ProtectedRoute>} />
      <Route path="/inventory/transactions" element={<ProtectedRoute><OperationalPage screenId="RL-13" /></ProtectedRoute>} />
      <Route path="/inventory/risk" element={<ProtectedRoute><OperationalPage screenId="RL-14" /></ProtectedRoute>} />
      <Route path="/inventory/:inventoryId" element={<ProtectedRoute><OperationalPage screenId="RL-12" /></ProtectedRoute>} />

      {/* ================= Consumption & Data Module (RL-15 to RL-17) ================= */}
      <Route path="/consumption" element={<ProtectedRoute><OperationalPage screenId="RL-15" /></ProtectedRoute>} />
      <Route path="/consumption/import" element={<ProtectedRoute><OperationalPage screenId="RL-16" /></ProtectedRoute>} />
      <Route path="/data-quality" element={<ProtectedRoute><OperationalPage screenId="RL-17" /></ProtectedRoute>} />

      {/* ================= Forecasting Module (RL-18 to RL-21) ================= */}
      <Route path="/forecasting" element={<ProtectedRoute><OperationalPage screenId="RL-18" /></ProtectedRoute>} />
      <Route path="/forecasting/generate" element={<ProtectedRoute><OperationalPage screenId="RL-19" /></ProtectedRoute>} />
      <Route path="/forecasting/FCT-2026-X1" element={<ProtectedRoute><OperationalPage screenId="RL-20" /></ProtectedRoute>} />
      <Route path="/forecasting/:forecastId" element={<ProtectedRoute><OperationalPage screenId="RL-20" /></ProtectedRoute>} />
      <Route path="/model-performance" element={<ProtectedRoute><OperationalPage screenId="RL-21" /></ProtectedRoute>} />

      {/* ================= Transport & Fleet Module (RL-22 to RL-25) ================= */}
      <Route path="/fleet" element={<ProtectedRoute><OperationalPage screenId="RL-22" /></ProtectedRoute>} />
      <Route path="/fleet/VH-0087" element={<ProtectedRoute><OperationalPage screenId="RL-23" /></ProtectedRoute>} />
      <Route path="/fleet/:vehicleId" element={<ProtectedRoute><OperationalPage screenId="RL-23" /></ProtectedRoute>} />
      <Route path="/shipments" element={<ProtectedRoute><OperationalPage screenId="RL-24" /></ProtectedRoute>} />
      <Route path="/shipments/SHP-2048" element={<ProtectedRoute><OperationalPage screenId="RL-25" /></ProtectedRoute>} />
      <Route path="/shipments/:shipmentId" element={<ProtectedRoute><OperationalPage screenId="RL-25" /></ProtectedRoute>} />

      {/* ================= Routes Module (RL-26 to RL-28) ================= */}
      <Route path="/routes" element={<ProtectedRoute><OperationalPage screenId="RL-26" /></ProtectedRoute>} />
      <Route path="/routes/optimize" element={<ProtectedRoute><OperationalPage screenId="RL-27" /></ProtectedRoute>} />
      <Route path="/routes/RTE-018" element={<ProtectedRoute><OperationalPage screenId="RL-28" /></ProtectedRoute>} />
      <Route path="/routes/:routeId" element={<ProtectedRoute><OperationalPage screenId="RL-28" /></ProtectedRoute>} />

      {/* ================= Risk Module (RL-29 to RL-30) ================= */}
      <Route path="/risks" element={<ProtectedRoute><OperationalPage screenId="RL-29" /></ProtectedRoute>} />
      <Route path="/risks/RISK-1042" element={<ProtectedRoute><OperationalPage screenId="RL-30" /></ProtectedRoute>} />
      <Route path="/risks/:riskId" element={<ProtectedRoute><OperationalPage screenId="RL-30" /></ProtectedRoute>} />

      {/* ================= Simulation Module (RL-31 to RL-34) ================= */}
      <Route path="/simulations" element={<ProtectedRoute><OperationalPage screenId="RL-31" /></ProtectedRoute>} />
      <Route path="/simulations/create" element={<ProtectedRoute><OperationalPage screenId="RL-32" /></ProtectedRoute>} />
      <Route path="/simulations/SIM-0084" element={<ProtectedRoute><OperationalPage screenId="RL-33" /></ProtectedRoute>} />
      <Route path="/simulations/SIM-0084/results" element={<ProtectedRoute><OperationalPage screenId="RL-34" /></ProtectedRoute>} />
      <Route path="/simulations/:simulationId" element={<ProtectedRoute><OperationalPage screenId="RL-33" /></ProtectedRoute>} />
      <Route path="/simulations/:simulationId/results" element={<ProtectedRoute><OperationalPage screenId="RL-34" /></ProtectedRoute>} />

      {/* ================= Recommendations Module (RL-35 to RL-36) ================= */}
      <Route path="/recommendations" element={<ProtectedRoute><OperationalPage screenId="RL-35" /></ProtectedRoute>} />
      <Route path="/recommendations/REC-2048" element={<ProtectedRoute><OperationalPage screenId="RL-36" /></ProtectedRoute>} />
      <Route path="/recommendations/:recommendationId" element={<ProtectedRoute><OperationalPage screenId="RL-36" /></ProtectedRoute>} />

      {/* ================= Administration Module (RL-37 to RL-40) ================= */}
      <Route path="/admin/users" element={<ProtectedRoute><OperationalPage screenId="RL-37" /></ProtectedRoute>} />
      <Route path="/admin/roles" element={<ProtectedRoute><OperationalPage screenId="RL-38" /></ProtectedRoute>} />
      <Route path="/admin/audit" element={<ProtectedRoute><OperationalPage screenId="RL-39" /></ProtectedRoute>} />
      <Route path="/admin/settings" element={<ProtectedRoute><OperationalPage screenId="RL-40" /></ProtectedRoute>} />

      {/* ================= Account Module (RL-41 to RL-42) ================= */}
      <Route path="/profile" element={<ProtectedRoute><OperationalPage screenId="RL-41" /></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><OperationalPage screenId="RL-42" /></ProtectedRoute>} />

      {/* ================= Direct RL-XX Number Aliases ================= */}
      <Route path="/rl-01" element={<Navigate to="/login" replace />} />
      <Route path="/rl-02" element={<Navigate to="/forgot-password" replace />} />
      <Route path="/rl-03" element={<Navigate to="/reset-password" replace />} />
      <Route path="/rl-04" element={<Navigate to="/access" replace />} />
      <Route path="/rl-05" element={<Navigate to="/dashboard" replace />} />
      <Route path="/rl-06" element={<Navigate to="/gis-command-center" replace />} />
      <Route path="/rl-07" element={<Navigate to="/alerts" replace />} />
      <Route path="/rl-08" element={<Navigate to="/locations" replace />} />
      <Route path="/rl-09" element={<Navigate to="/locations/forward-post-alpha" replace />} />
      <Route path="/rl-10" element={<Navigate to="/locations/new" replace />} />
      <Route path="/rl-11" element={<Navigate to="/inventory" replace />} />
      <Route path="/rl-12" element={<Navigate to="/inventory/arctic-diesel" replace />} />
      <Route path="/rl-13" element={<Navigate to="/inventory/transactions" replace />} />
      <Route path="/rl-14" element={<Navigate to="/inventory/risk" replace />} />
      <Route path="/rl-15" element={<Navigate to="/consumption" replace />} />
      <Route path="/rl-16" element={<Navigate to="/consumption/import" replace />} />
      <Route path="/rl-17" element={<Navigate to="/data-quality" replace />} />
      <Route path="/rl-18" element={<Navigate to="/forecasting" replace />} />
      <Route path="/rl-19" element={<Navigate to="/forecasting/generate" replace />} />
      <Route path="/rl-20" element={<Navigate to="/forecasting/FCT-2026-X1" replace />} />
      <Route path="/rl-21" element={<Navigate to="/model-performance" replace />} />
      <Route path="/rl-22" element={<Navigate to="/fleet" replace />} />
      <Route path="/rl-23" element={<Navigate to="/fleet/VH-0087" replace />} />
      <Route path="/rl-24" element={<Navigate to="/shipments" replace />} />
      <Route path="/rl-25" element={<Navigate to="/shipments/SHP-2048" replace />} />
      <Route path="/rl-26" element={<Navigate to="/routes" replace />} />
      <Route path="/rl-27" element={<Navigate to="/routes/optimize" replace />} />
      <Route path="/rl-28" element={<Navigate to="/routes/RTE-018" replace />} />
      <Route path="/rl-29" element={<Navigate to="/risks" replace />} />
      <Route path="/rl-30" element={<Navigate to="/risks/RISK-1042" replace />} />
      <Route path="/rl-31" element={<Navigate to="/simulations" replace />} />
      <Route path="/rl-32" element={<Navigate to="/simulations/create" replace />} />
      <Route path="/rl-33" element={<Navigate to="/simulations/SIM-0084" replace />} />
      <Route path="/rl-34" element={<Navigate to="/simulations/SIM-0084/results" replace />} />
      <Route path="/rl-35" element={<Navigate to="/recommendations" replace />} />
      <Route path="/rl-36" element={<Navigate to="/recommendations/REC-2048" replace />} />
      <Route path="/rl-37" element={<Navigate to="/admin/users" replace />} />
      <Route path="/rl-38" element={<Navigate to="/admin/roles" replace />} />
      <Route path="/rl-39" element={<Navigate to="/admin/audit" replace />} />
      <Route path="/rl-40" element={<Navigate to="/admin/settings" replace />} />
      <Route path="/rl-41" element={<Navigate to="/profile" replace />} />
      <Route path="/rl-42" element={<Navigate to="/notifications" replace />} />

      {/* Fallback to Dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OperationalProvider>
          <AppRoutes />
        </OperationalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
