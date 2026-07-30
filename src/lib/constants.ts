import { type NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Home', description: 'The gateway to Atlas Island' },
  { path: '/mission', label: 'Mission & Purpose', description: 'Why Atlas Island exists' },
  { path: '/atlas-of-all', label: 'Atlas of ALL', description: 'The Living Codex' },
  { path: '/heartlight', label: 'Heartlight Collective', description: 'Living economy of Atlas Island' },
  { path: '/vision', label: 'Vision', description: 'The future of Atlas Island' },
  { path: '/broadcast', label: 'Broadcast', description: 'Videos & transmissions' },
  { path: '/connect', label: 'Connect & Join', description: 'Step onto the Island' },
];

export const QUICK_LINKS = [
  {
    id: 'youtube',
    title: 'YouTube',
    description: 'The 12 Rays of ALL \u0026 transmissions',
    url: 'https://www.youtube.com/@AtlasIslandCo',
    icon: 'Youtube',
    iconImage: '/youtube-icon.webp',
    rayColor: '#c94040',
    external: true,
  },
  {
    id: 'discord',
    title: 'Discord',
    description: 'Join the Atlas Island circle',
    url: 'https://discord.gg/SVNFrqk8Mv',
    icon: 'Users',
    iconImage: '/discord-icon.webp',
    rayColor: '#5865F2',
    external: true,
  },
  {
    id: 'exchange',
    title: 'Heartlight Exchange',
    description: 'Gift economy \u0026 co-creation',
    url: 'https://heartlight.atlasisland.co/exchange',
    icon: 'Heart',
    iconImage: '',
    rayColor: '#3a9b6f',
    external: false,
  },
  {
    id: 'aut',
    title: 'AUT Time \u0026 Tools',
    description: 'Atlastizen Universal Time',
    url: 'https://aut.atlasisland.co/',
    icon: 'Clock',
    iconImage: '',
    rayColor: '#2ab3c4',
    external: true,
  },
  {
    id: 'book',
    title: 'Atlas of ALL',
    description: 'The Living Codex',
    url: '/atlas-of-all',
    icon: 'BookOpen',
    iconImage: '',
    rayColor: '#8b4fb5',
    external: false,
  },
  {
    id: 'flow',
    title: 'Heartlight Flow',
    description: 'Resource tracking dashboard',
    url: 'https://heartlight.atlasisland.co/flow',
    icon: 'TrendingUp',
    iconImage: '',
    rayColor: '#d4b830',
    external: true,
  },
];

export const SOCIAL_LINKS = [
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@AtlasIslandCo',
    iconImage: '/youtube-icon.webp',
    alt: 'YouTube channel',
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.gg/SVNFrqk8Mv',
    iconImage: '/discord-icon.webp',
    alt: 'Discord server',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/atlasisland.co',
    iconImage: '/instagram-icon.webp',
    alt: 'Instagram profile',
  },
];
