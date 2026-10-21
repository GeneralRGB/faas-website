const assets = import.meta.glob('../../assets/events/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
export const eventImage = (name: string, width = 1280) => assets[`../../assets/events/${name}-${width}.webp`];
const fullWidths: Record<string, number> = { "pole-vertical": 959, "polet-36": 796, "sn-sport-art": 1251, "sn-december-2026": 1254 };
export const eventSrcSet = (name: string) => `${eventImage(name, 640)} 640w, ${eventImage(name)} ${fullWidths[name] || 1280}w`;

export const competitionPhotos = [
  { id: 'team-lineup-blue', caption: 'К нам приезжают большие команды', alt: 'Команды спортсменов в синей, чёрной и белой форме на построении в спортивном зале' },
  { id: 'team-lineup-purple', caption: 'Команды на построении', alt: 'Большая команда спортсменов в одинаковой сиреневой форме на построении' },
  { id: 'award-ceremony', caption: 'На пьедестале — спортсмены', alt: 'Спортсмены с медалями и дипломами на пьедестале и рядом с ним на фоне баннера FAAS' },
  { id: 'pole-performance', caption: 'Пилонный спорт', alt: 'Спортсменка выполняет горизонтальный элемент на пилоне на фоне экрана с логотипом FAAS' },
  { id: 'silks-performance', caption: 'Воздушные полотна', alt: 'Выступление спортсменки на красных воздушных полотнах перед экраном FAAS' },
  { id: 'hoop-performance', caption: 'Воздушное кольцо', alt: 'Спортсменка выполняет элемент на воздушном кольце на соревновательной сцене' },
  { id: 'pole-routine', caption: 'На соревновательной сцене', alt: 'Спортсменка в красном костюме выполняет элемент на пилоне на фоне экрана' },
  { id: 'competition-trophies', caption: 'Кубки и медали', alt: 'Кубки, памятные награды и медали на столе перед награждением' },
  { id: 'pole-vertical', caption: 'Моменты выступлений', alt: 'Спортсменка на пилоне над сценой с экраном и световыми конструкциями FAAS' },
];
