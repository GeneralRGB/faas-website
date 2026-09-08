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
};

export function Reports() {
  const reports: Report[] = [
    {
      id: 1,
      title: "Весенний Воздушный Показ 2026",
      date: "15-17 марта 2026",
      location: "Москва, Россия",
      image:
        "https://images.unsplash.com/photo-1759694430835-ef9350656e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 2,
      title: "Зимний Чемпионат 2025",
      date: "10-12 декабря 2025",
      location: "Санкт-Петербург, Россия",
      image:
        "https://images.unsplash.com/photo-1773459516717-c772070071c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 3,
      title: "Осенний Воздушный Кубок 2025",
      date: "22-24 октября 2025",
      location: "Екатеринбург, Россия",
      image:
        "https://images.unsplash.com/photo-1752297635224-8af034404695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
            Отчёты о мероприятиях
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Празднуем достижения, выступления и незабываемые моменты наших
            соревнований
          </p>
        </motion.div>

        <div className="space-y-8">
          {reports.map((report, index) => (
            <motion.article
              key={report.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/40">
                      <TableProperties size={17} />
                      Таблица с итогами
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200">
                      <Images size={17} />
                      Фото
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200">
                      <PlayCircle size={17} />
                      Запись трансляции
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
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
            <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-white/50 transition-all">
              Instagram
            </button>
            <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-white/50 transition-all">
              ВКонтакте
            </button>
            <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-white/50 transition-all">
              Telegram
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
