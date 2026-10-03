import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar as CalendarIcon,
  Clock3,
  Info,
  LockKeyhole,
  MapPin,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const federationFinalImage = new URL(
  "../../assets/faas-final-2026.jpg",
  import.meta.url,
).href;

const summerFestImage = new URL(
  "../../assets/summer-fest-2026.jpg",
  import.meta.url,
).href;

type EventStatus =
  | "registration-open"
  | "registration-closed"
  | "coming-soon"
  | "details-pending";

type EventTag = "Сдача разрядов" | "Арт" | "Спорт";

const tagStyle = "bg-blue-50 text-blue-700 ring-blue-200";

const statusDetails = {
  "registration-open": {
    label: "Идёт регистрация",
    className: "bg-green-50 text-green-700",
    icon: CalendarIcon,
  },
  "registration-closed": {
    label: "Регистрация закрыта",
    className: "bg-gray-100 text-gray-600",
    icon: LockKeyhole,
  },
  "coming-soon": {
    label: "Скоро откроется регистрация",
    className: "bg-blue-50 text-blue-700",
    icon: Clock3,
  },
  "details-pending": {
    label: "Подробности уточняются",
    className: "bg-amber-50 text-amber-700",
    icon: Info,
  },
} satisfies Record<
  EventStatus,
  { label: string; className: string; icon: typeof CalendarIcon }
>;

type CalendarEvent = {
  id: number;
  date: string;
  city: string;
  title: string;
  status?: EventStatus;
  tags?: EventTag[];
  registrationUrl?: string;
  image: string;
};

export function Calendar() {
  const events: CalendarEvent[] = [
    {
      id: 1,
      date: "17 октября 2026",
      city: "Москва",
      title: "SN Artistic Championship",
      status: "registration-closed",
      tags: ["Арт"],
      image: summerFestImage,
    },
    {
      id: 2,
      date: "5–6 декабря 2026",
      city: "Москва / Реутов",
      title: "SN Sport&Art",
      status: "registration-open",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
      registrationUrl: "https://forms.gle/rNHWunA9vvGu3qr27",
      image: federationFinalImage,
    },
    {
      id: 3,
      date: "20–21 февраля 2027",
      city: "Краснодар",
      title: "Южный рубеж",
      status: "coming-soon",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
      image: summerFestImage,
    },
    {
      id: 4,
      date: "20–21 марта 2027",
      city: "Москва / Реутов",
      title: "SN Sport&Art",
      status: "coming-soon",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
      image: federationFinalImage,
    },
    {
      id: 5,
      date: "Апрель 2027",
      city: "Воронеж",
      title: "Полет 36",
      status: "details-pending",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
      image: summerFestImage,
    },
    {
      id: 6,
      date: "Май 2027",
      city: "Минск",
      title: "SN Sport&Art — финал Федерации",
      status: "coming-soon",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
      image: federationFinalImage,
    },
    {
      id: 7,
      date: "Июнь 2027",
      city: "Москва",
      title: "SN Summer Fest",
      status: "coming-soon",
      tags: ["Арт", "Спорт"],
      image: summerFestImage,
    },
    {
      id: 8,
      date: "Июль 2027",
      city: "Место проведения уточняется",
      title: "Летние спортивные сборы FAAS",
      status: "details-pending",
      image: federationFinalImage,
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <CalendarIcon size={17} />
            Сезон 2026–2027
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Календарь соревнований
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Ближайшие старты, регистрация и календарный план Федерации FAAS
          </p>
        </motion.div>

        <div className="space-y-6">
          {events.map((event) => {
            const status = event.status ? statusDetails[event.status] : null;
            const StatusIcon = status?.icon;

            return (
              <article
                key={event.id}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-300 hover:shadow-xl"
              >
                <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
                  <div className="h-52 overflow-hidden bg-gray-100 md:h-full md:min-h-60">
                    <ImageWithFallback
                      src={event.image}
                      alt={`Иллюстрация к соревнованию «${event.title}»`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col p-6 md:p-8">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-semibold text-white shadow-sm">
                        <CalendarIcon size={18} />
                        {event.date}
                      </div>
                      {event.tags?.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${tagStyle}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="mb-6 text-2xl font-bold leading-tight text-gray-950 md:text-3xl">
                      {event.title}
                    </h2>

                    <div className="mt-auto flex flex-col gap-5 border-t border-gray-100 pt-5 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start gap-3 text-gray-700">
                        <MapPin
                          size={20}
                          className="mt-0.5 shrink-0 text-pink-600"
                        />
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Город
                          </div>
                          <div className="font-medium">{event.city}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {status && StatusIcon && (
                          <div
                            className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${status.className}`}
                          >
                            <StatusIcon size={17} />
                            {status.label}
                          </div>
                        )}

                        {event.registrationUrl && (
                          <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                          >
                            Подать заявку <ArrowRight size={17} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ознакомьтесь с календарным планом и подайте заявку
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Перед регистрацией изучите правила, разрядные программы и
            документы для спортсменов
          </p>
          <Link
            to="/participation"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all hover:shadow-lg hover:shadow-white/50"
          >
            Правила и документы <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
