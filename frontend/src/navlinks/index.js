import { createCampaign, dashboard, about, profile,} from '../images';

export const navlinks = [
  {
    name: 'Dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'Profile',
    imgUrl: profile,
    link: '/profile',
  },
  
  {
    name: 'About',
    imgUrl: about,
    link: '/about-us',
    disabled: false,
  }
];