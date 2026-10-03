import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Images,
  MapPin,
  Send,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const federationFinalImage = new URL(
  "../../assets/faas-final-2026.jpg",
  import.meta.url,
).href;

const summerFestImage = new URL(
  "../../assets/summer-fest-2026.jpg",
  import.meta.url,
).href;

const actions = [
  {
    title: "Подать заявку",
    description: "Выберите соревнование и перейдите к регистрации.",
    linkLabel: "Выбрать соревнование",
    to: "/calendar",
    image: federationFinalImage,
    icon: Send,
  },
  {
    title: "Правила и документы",
    description: "Разрядные и произвольные программы SPORT и ART.",
    linkLabel: "Открыть документы",
    to: "/participation",
    image: summerFestImage,
    icon: FileText,
  },
  {
    title: "Результаты и фото",
    description: "Итоговые материалы и фотографии прошедших соревнований.",
    linkLabel: "Посмотреть результаты",
    to: "/reports",
    image: federationFinalImage,
    icon: Images,
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100/70 px-4 py-12 md:py-16 lg:py-20">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 text-base font-semibold text-blue-700">
              Федерация FAAS
            </div>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-[1.08] text-gray-950 sm:text-5xl md:text-6xl">
              Соревнования по пилонному спорту и воздушной гимнастике
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
              Разрядные программы, правила и профессиональное сообщество
              спортсменов, тренеров и судей.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/calendar"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Календарь соревнований <ArrowRight size={19} />
              </Link>
              <Link
                to="/participation"
                className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 bg-white/80 px-7 py-3.5 font-semibold text-blue-700 transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Документы и правила
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] bg-gray-200 shadow-2xl shadow-blue-900/15"
          >
            <ImageWithFallback
              src={federationFinalImage}
              alt="Выступление на соревнованиях FAAS"
              className="aspect-[4/3] h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16 text-sm font-medium text-white/90">
              Пилонный спорт · Воздушная гимнастика
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 text-base font-semibold text-blue-700">
                Предстоящее соревнование
              </div>
              <h2 className="text-3xl font-bold text-gray-950 md:text-4xl">
                SN Artistic Championship
              </h2>
            </div>
            <Link
              to="/calendar"
              className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
            >
              Все соревнования <ArrowRight size={18} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="grid md:grid-cols-[260px_1fr]">
              <ImageWithFallback
                src={summerFestImage}
                alt="Воздушная гимнастика на соревнованиях FAAS"
                className="h-56 w-full object-cover md:h-full"
              />
              <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                <div>
                  <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
                    ART
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-700">
                    <span className="inline-flex items-center gap-2 font-medium">
                      <CalendarDays size={19} className="text-blue-600" />
                      17 октября 2026
                    </span>
                    <span className="inline-flex items-center gap-2 font-medium">
                      <MapPin size={19} className="text-blue-600" /> Москва
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600">
                    Регистрация закрыта
                  </span>
                  <Link
                    to="/calendar"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Подробнее <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-gray-950 md:text-4xl">
              Всё необходимое для участия
            </h2>
            <p className="text-lg text-gray-600">
              Быстрый доступ к заявкам, правилам и итоговым материалам.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {actions.map((action) => (
              <Link
                key={action.title}
                to={action.to}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={action.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <action.icon size={21} />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-950">
                    {action.title}
                  </h3>
                  <p className="mb-5 leading-relaxed text-gray-600">
                    {action.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-semibold text-blue-700">
                    {action.linkLabel} <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-950 md:text-4xl">
            Наша миссия
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            Федерация FAAS развивает соревнования по пилонному спорту и
            воздушной гимнастике, формирует разрядные программы и объединяет
            профессиональное сообщество спортсменов, тренеров и судей.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
          >
            О федерации <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
