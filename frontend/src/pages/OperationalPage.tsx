import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { AppShell } from '../components/AppShell';
import { ScreenRenderer } from '../components/ScreenRenderer';
import { SCREEN_MAP, SCREEN_REGISTRY, ScreenMetadata } from '../config/screenRegistry';
import * as Screens from '../data/screens';

const SCREEN_HTML_MAP: Record<string, string> = {
  'RL-05': Screens.rl05Html,
  'RL-06': Screens.rl06Html,
  'RL-07': Screens.rl07Html,
  'RL-08': Screens.rl08Html,
  'RL-09': Screens.rl09Html,
  'RL-10': Screens.rl10Html,
  'RL-11': Screens.rl11Html,
  'RL-12': Screens.rl12Html,
  'RL-13': Screens.rl13Html,
  'RL-14': Screens.rl14Html,
  'RL-15': Screens.rl15Html,
  'RL-16': Screens.rl16Html,
  'RL-17': Screens.rl17Html,
  'RL-18': Screens.rl18Html,
  'RL-19': Screens.rl19Html,
  'RL-20': Screens.rl20Html,
  'RL-21': Screens.rl21Html,
  'RL-22': Screens.rl22Html,
  'RL-23': Screens.rl23Html,
  'RL-24': Screens.rl24Html,
  'RL-25': Screens.rl25Html,
  'RL-26': Screens.rl26Html,
  'RL-27': Screens.rl27Html,
  'RL-28': Screens.rl28Html,
  'RL-29': Screens.rl29Html,
  'RL-30': Screens.rl30Html,
  'RL-31': Screens.rl31Html,
  'RL-32': Screens.rl32Html,
  'RL-33': Screens.rl33Html,
  'RL-34': Screens.rl34Html,
  'RL-35': Screens.rl35Html,
  'RL-36': Screens.rl36Html,
  'RL-37': Screens.rl37Html,
  'RL-38': Screens.rl38Html,
  'RL-39': Screens.rl39Html,
  'RL-40': Screens.rl40Html,
  'RL-41': Screens.rl41Html,
  'RL-42': Screens.rl42Html,
};

interface OperationalPageProps {
  screenId: string;
}

export const OperationalPage: React.FC<OperationalPageProps> = ({ screenId }) => {
  const metadata = SCREEN_MAP.get(screenId) || {
    id: screenId,
    num: 5,
    name: 'Command Workspace',
    route: '/dashboard',
    module: 'Command',
    accessLevel: 'SEC-LVL 4',
    parent: null,
    breadcrumb: ['Command', 'Workspace'],
    related: [],
    folder: '',
  };

  const htmlContent = SCREEN_HTML_MAP[screenId] || Screens.rl05Html;

  return (
    <AppShell>
      <ScreenRenderer
        screenId={screenId}
        title={`RakshakLogix — ${metadata.name} (${metadata.id})`}
        htmlContent={htmlContent}
      />
    </AppShell>
  );
};
