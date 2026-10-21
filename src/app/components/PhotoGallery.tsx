import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { competitionPhotos, eventImage, eventSrcSet } from '../data/photos';

export function PhotoGallery({ compact = false }: { compact?: boolean }) {
  const trigger = useRef<HTMLButtonElement | null>(null);
  const section = useRef<HTMLElement | null>(null);
  const { hash } = useLocation();
  useEffect(() => { if (hash === "#gallery") section.current?.scrollIntoView(); }, [hash]);
  const [active, setActive] = useState<number | null>(null);
  const photos = compact ? competitionPhotos.slice(0, 4) : competitionPhotos;
  const photo = active === null ? null : photos[active];
  const move = (step: number) => setActive(current => current === null ? null : (current + step + photos.length) % photos.length);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        setActive(current => current === null ? null : (current + (event.key === 'ArrowRight' ? 1 : -1) + photos.length) % photos.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, photos.length]);

  return (
    <section ref={section} id="gallery" className="scroll-mt-28 py-16 md:py-20" aria-labelledby="gallery-title">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="mb-2 font-semibold text-blue-700">В объективе — спортсмены</p>
          <h2 id="gallery-title" className="mb-4 text-3xl font-bold text-gray-950 md:text-4xl">Моменты соревнований</h2>
          <p className="text-lg text-gray-600">Пилонный спорт, воздушное кольцо и полотна — выступления на сцене FAAS.</p>
        </div>
        {compact && <Link to="/reports#gallery" className="inline-flex items-center gap-2 font-semibold text-blue-700">Все фотографии <ArrowRight size={18} /></Link>}
      </div>
      <Dialog.Root open={active !== null} onOpenChange={open => { if (!open) setActive(null); }}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {photos.map((item, index) => (
            <Dialog.Trigger asChild key={item.id}>
              <button onClick={event => { trigger.current = event.currentTarget; setActive(index); }} className="group overflow-hidden rounded-3xl border border-gray-200 bg-gray-950 text-left shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" aria-label={`Увеличить фото: ${item.caption}`}>
                <div className="relative">
                  <img src={eventImage(item.id, 640)} srcSet={eventSrcSet(item.id)} sizes="(min-width: 1280px) 620px, (min-width: 640px) 48vw, 100vw" width={1280} height={960} loading="lazy" decoding="async" alt={item.alt} className="aspect-[4/3] w-full object-contain" />
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/90 p-2 text-blue-700"><Expand size={18} /></span>
                </div>
                <div className="bg-white px-5 py-4 font-semibold text-gray-900 group-hover:text-blue-700">{item.caption}</div>
              </button>
            </Dialog.Trigger>
          ))}
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90" />
          <Dialog.Content onCloseAutoFocus={event => { event.preventDefault(); trigger.current?.focus(); }} aria-describedby={undefined} className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-1rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-950 p-3 pt-14 text-white shadow-xl sm:p-6 sm:pt-14">
            <Dialog.Close aria-label="Закрыть фотографии" className="absolute right-3 top-3 rounded-full p-2 hover:bg-white/20 focus-visible:outline-2"><X size={24} /></Dialog.Close>
            {photo && <>
              <img src={eventImage(photo.id)} alt={photo.alt} className="h-[60vh] w-full object-contain sm:h-[70vh]" />
              <div className="mt-4 flex items-center justify-between gap-3">
                <button aria-label="Предыдущее фото" onClick={() => move(-1)} className="shrink-0 rounded-full bg-white/10 p-3 hover:bg-white/20"><ArrowLeft size={22} /></button>
                <div aria-live="polite" className="text-center"><Dialog.Title className="font-semibold">{photo.caption}</Dialog.Title><p className="mt-1 text-sm text-gray-300">{active! + 1} / {photos.length}</p></div>
                <button aria-label="Следующее фото" onClick={() => move(1)} className="shrink-0 rounded-full bg-white/10 p-3 hover:bg-white/20"><ArrowRight size={22} /></button>
              </div>
            </>}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
