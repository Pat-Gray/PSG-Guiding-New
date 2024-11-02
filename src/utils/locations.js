// Using optimized images from public directory
const Cook = '/images/pointingInCookNp-800.webp';
const Japan = '/images/Japan-800.webp';
const Rockies = '/images/Rockies-800.webp';
const SkiNorway = '/images/SkiNorway-800.webp';
const WyeCreek = '/images/WyeCreek-800.webp';
const Lofoten = '/images/Lofoten-800.webp';
const PetNorwayIce = '/images/PetNorwayIce-800.webp';
const Plateau = '/images/plateau-800.webp';
const Patbabs = '/images/pat-babs-800.webp';

// Add placeholders for blur effect
const placeholders = {
  Cook: '/images/pointingInCookNp-placeholder.webp',
  Japan: '/images/Japan-placeholder.webp',
  Rockies: '/images/Rockies-placeholder.webp',
  SkiNorway: '/images/SkiNorway-placeholder.webp',
  WyeCreek: '/images/WyeCreek-placeholder.webp',
  Lofoten: '/images/Lofoten-placeholder.webp',
  PetNorwayIce: '/images/PetNorwayIce-placeholder.webp',
  Plateau: '/images/plateau-placeholder.webp',
  Patbabs: '/images/pat-babs-placeholder.webp'
};

export const locations = [
  {
    id: 1,
    name: 'New Zealand Southern Alps',
    image: Cook,
    placeholder: placeholders.Cook,
    season: 'Nov - Apr',
    description: 'Technical alpine climbing and ski touring in the Southern Alps.',
  },
  {
    id: 2,
    name: 'Canadian Rockies',
    image: Rockies,
    placeholder: placeholders.Rockies,
    season: 'Dec - Apr',
    description: 'World-class ice climbing and powder skiing in the Rockies and British Columbia.',
  },
  {
    id: 3,
    name: 'Norwegian Fjords',
    image: SkiNorway,
    placeholder: placeholders.SkiNorway,
    season: 'Mar - May',
    description: 'Ski touring from summit to sea in Lofoten and Tromsø.',
  },
  {
    id: 4,
    name: 'Japan Powder Skiing',
    image: Japan,
    placeholder: placeholders.Japan,
    season: 'Jan - Mar',
    description: 'Deep powder skiing and cultural experiences in the heart of Hokkaido and Honshu.',
  },
  {
    id: 5,
    name: 'Lofoten Islands',
    image: Lofoten,
    placeholder: placeholders.Lofoten,
    season: 'Jun - Sep',
    description: 'World-renowned granite climbing above the Arctic Circle under the midnight sun.',
  },
  {
    id: 6,
    name: 'New Zealand Ice',
    image: WyeCreek,
    placeholder: placeholders.WyeCreek,
    season: 'Jun - Sep',
    description: 'Ice climbing in the southern Alps.',
  },
  {
    id: 7,
    name: 'Rock Climbing',
    image: Patbabs,
    placeholder: placeholders.Patbabs,
    season: 'All year',
    description: 'Rock climbing in New Zealand and overseas.',
  },
  {
    id: 8,
    name: 'Ski Touring',
    image: Plateau,
    placeholder: placeholders.Plateau,
    season: 'All year',
    description: 'Ski touring in New Zealand and overseas.',
  },
  {
    id: 9,
    name: 'Expedition Trips',
    image: PetNorwayIce,
    placeholder: placeholders.PetNorwayIce,
    season: 'All year',
    description: 'Got a dream trip in mind? Get in touch and we can make it happen.',
  }
];