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

type EventStatus =
  | "registration-open"
  | "registration-closed"
  | "coming-soon"
  | "details-pending";

type EventTag = "Сдача разрядов" | "Арт" | "Спорт";

const tagStyles: Record<EventTag, string> = {
  "Сдача разрядов": "bg-green-50 text-green-700 ring-green-200",
  Арт: "bg-pink-50 text-pink-700 ring-pink-200",
  Спорт: "bg-blue-50 text-blue-700 ring-blue-200",
};

const statusDetails = {
  "registration-open": {
    label: "Регистрация открыта",
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
    },
    {
      id: 2,
      date: "5–6 декабря 2026",
      city: "Москва / Реутов",
      title: "SN Sport&Art",
      status: "coming-soon",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
    },
    {
      id: 3,
      date: "20–21 февраля 2027",
      city: "Краснодар",
      title: "Южный рубеж",
      status: "coming-soon",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
    },
    {
      id: 4,
      date: "20–21 марта 2027",
      city: "Москва / Реутов",
      title: "SN Sport&Art",
      status: "coming-soon",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
    },
    {
      id: 5,
      date: "Апрель 2027",
      city: "Воронеж",
      title: "Полет 36",
      status: "details-pending",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
    },
    {
      id: 6,
      date: "Май 2027",
      city: "Минск",
      title: "SN Sport&Art — финал Федерации",
      status: "coming-soon",
      tags: ["Сдача разрядов", "Арт", "Спорт"],
    },
    {
      id: 7,
      date: "Июнь 2027",
      city: "Москва",
      title: "SN Summer Fest",
      status: "coming-soon",
      tags: ["Арт", "Спорт"],
    },
    {
      id: 8,
      date: "Июль 2027",
      city: "Место проведения уточняется",
      title: "Летние спортивные сборы FAAS",
      status: "details-pending",
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
            Календарь мероприятий
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Соревнования, фестивали и спортивные сборы Федерации FAAS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {events.map((event) => {
            const status = event.status ? statusDetails[event.status] : null;
            const StatusIcon = status?.icon;

            return (
              <article
                key={event.id}
                className="group relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl md:p-8"
              >
                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
                    <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-semibold text-white shadow-sm">
                      <CalendarIcon size={18} />
                      {event.date}
                    </div>

                    {event.tags && (
                      <div className="ml-auto flex flex-wrap justify-end gap-2">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${tagStyles[tag]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <h2 className="mb-6 max-w-lg text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
                    {event.title}
                  </h2>

                  <div className="mt-auto flex flex-col gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
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

                    {status && StatusIcon && (
                      <div
                        className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${status.className}`}
                      >
                        <StatusIcon size={17} />
                        {status.label}
                      </div>
                    )}
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
            Планируете участвовать?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Ознакомьтесь с требованиями Федерации, правилами и документами для
            спортсменов
          </p>
          <Link
            to="/participation"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all hover:shadow-lg hover:shadow-white/50"
          >
            Как участвовать <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
