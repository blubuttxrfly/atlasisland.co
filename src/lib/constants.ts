import { type NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Home', description: 'The gateway to Atlas Island' },
  { path: '/mission', label: 'Mission \u0026 Purpose', description: 'Atlas of ALL the Living' },
  { path: '/heartlight', label: 'Heartlight Exchange', description: 'Gift Exchange Economy' },
  { path: '/vision', label: 'Vision', description: 'The future of Atlas Island' },
  { path: '/broadcast', label: 'Broadcast', description: 'Videos \u0026 transmissions' },
  { path: '/connect', label: 'Connect \u0026 Join', description: 'Step onto the Island' },
];

export const QUICK_LINKS = [
  {
    id: 'youtube',
    title: 'YouTube',
    description: 'The 12 Rays of ALL \u0026 transmissions',
    url: 'https://youtube.com',
    icon: 'Youtube',
    rayColor: '#c94040',
    external: true,
  },
  {
    id: 'skool',
    title: 'Skool Community',
    description: 'Join the Atlas Island circle',
    url: 'https://www.skool.com/atlas-island-heartlight-center-5616',
    icon: 'Users',
    rayColor: '#d4732a',
    external: true,
  },
  {
    id: 'exchange',
    title: 'Heartlight Exchange',
    description: 'Gift economy \u0026 co-creation',
    url: '/heartlight',
    icon: 'Heart',
    rayColor: '#3a9b6f',
    external: false,
  },
  {
    id: 'aut',
    title: 'AUT Time \u0026 Tools',
    description: 'Atlastizen Universal Time',
    url: 'https://time.atlasisland.co',
    icon: 'Clock',
    rayColor: '#2ab3c4',
    external: true,
  },
  {
    id: 'book',
    title: 'Atlas of ALL',
    description: 'The Living Codex',
    url: '/mission',
    icon: 'BookOpen',
    rayColor: '#8b4fb5',
    external: false,
  },
  {
    id: 'flow',
    title: 'Heartlight Flow',
    description: 'Resource tracking dashboard',
    url: 'https://flow.atlasisland.co',
    icon: 'TrendingUp',
    rayColor: '#d4b830',
    external: true,
  },
];
