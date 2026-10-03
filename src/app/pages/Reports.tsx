import { motion } from "motion/react";
import {
  Calendar,
  Images,
  MapPin,
  PlayCircle,
  TableProperties,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type Report = {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  resultsAvailable?: boolean;
  resultsUrl?: string;
  photosUrl?: string;
  broadcastUrl?: string;
};

const summerFestImage = new URL(
  "../../assets/summer-fest-2026.jpg",
  import.meta.url,
).href;

const federationFinalImage = new URL(
  "../../assets/faas-final-2026.jpg",
  import.meta.url,
).href;

export function Reports() {
  const reports: Report[] = [
    {
      id: 1,
      title: "Летний фестиваль в парке Измайлово",
      date: "20 июня 2026 года",
      location: "Москва, Россия",
      image: summerFestImage,
      photosUrl: "https://dimaber.ru/disk/sn-summer-fest-2026",
    },
    {
      id: 2,
      title: "Международный финал федерации 2026",
      date: "2 мая 2026 года",
      location: "Минск, Беларусь",
      image: federationFinalImage,
      resultsAvailable: true,
      photosUrl: "https://dimaber.ru/disk/faas-final-2026",
      broadcastUrl:
        "https://live.vkvideo.ru/sncomp/record/b1926fc2-706c-4a37-a8b4-4eeefc66cd58/records",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Результаты и фото
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Итоговые материалы, фотографии и записи прошедших соревнований
          </p>
        </motion.div>

        <div className="space-y-8">
          {reports.map((report) => (
            <article
              key={report.id}
              className="group overflow-hidden rounded-3xl border-2 border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl md:h-[350px]"
            >
              <div className="grid grid-cols-1 md:h-full md:grid-cols-[0.75fr_1fr]">
                <div className="h-56 overflow-hidden bg-gray-100 sm:h-64 md:h-full">
                  <ImageWithFallback
                    src={report.image}
                    alt={report.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-start p-6 sm:p-7 lg:p-8">
                  <h2 className="mb-5 text-2xl font-bold leading-tight text-gray-900 lg:text-3xl">
                    {report.title}
                  </h2>

                  <div className="mb-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                          Дата проведения
                        </div>
                        <div className="font-medium">{report.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-600">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                          Место проведения
                        </div>
                        <div className="font-medium">{report.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {report.resultsUrl && (
                      <a
                        href={report.resultsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/40"
                      >
                        <TableProperties size={17} />
                        Таблица с итогами
                      </a>
                    )}
                    {report.resultsAvailable && !report.resultsUrl && (
                      <button
                        type="button"
                        disabled
                        title="Ссылка на таблицу пока не добавлена"
                        className="flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-400"
                      >
                        <TableProperties size={17} />
                        Таблица с итогами
                      </button>
                    )}
                    {report.photosUrl && (
                      <a
                        href={report.photosUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/40"
                      >
                        <Images size={17} />
                        Фото
                      </a>
                    )}
                    {report.broadcastUrl && (
                      <a
                        href={report.broadcastUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200"
                      >
                        <PlayCircle size={17} />
                        Запись трансляции
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Оставайтесь на связи
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Подписывайтесь на нас в социальных сетях, чтобы видеть ежедневные
            моменты, закулисный контент и истории спортсменов
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/MFSOOmos"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all hover:shadow-lg hover:shadow-white/50"
            >
              Telegram
            </a>
            <a
              href="https://vk.ru/club226937127"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all hover:shadow-lg hover:shadow-white/50"
            >
              ВК
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
