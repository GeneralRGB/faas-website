import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Calendar,
  Trophy,
  Users,
  Award,
  ArrowRight,
  Star,
  Newspaper,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Национальный Чемпионат России 2026",
      date: "15-17 июня 2026",
      location: "Москва, Россия",
      disciplines: ["Пол-спорт", "Воздушное кольцо", "Воздушные полотна"],
      image:
        "https://images.unsplash.com/photo-1773459516717-c772070071c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      registrationOpen: true,
    },
    {
      id: 2,
      title: "Летний Воздушный Фестиваль",
      date: "20-22 июля 2026",
      location: "Санкт-Петербург, Россия",
      disciplines: ["Воздушное кольцо", "Воздушные полотна"],
      image:
        "https://images.unsplash.com/photo-1763208253756-eb536cc28c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      registrationOpen: true,
    },
    {
      id: 3,
      title: "Кубок Мастерства по Пол-Спорту",
      date: "10-12 августа 2026",
      location: "Казань, Россия",
      disciplines: ["Пол-спорт"],
      image:
        "https://images.unsplash.com/photo-1775757418839-211ada84a421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      registrationOpen: false,
    },
  ];

  const news = [
    {
      id: 1,
      title: "Открыта регистрация на Национальный Чемпионат 2026",
      date: "1 мая 2026",
      excerpt:
        "Рады объявить о старте регистрации на главное событие года! Ждём спортсменов из всех регионов страны.",
      image:
        "https://images.unsplash.com/photo-1773459516717-c772070071c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      id: 2,
      title: "Новые правила судейства на 2026 год",
      date: "25 апреля 2026",
      excerpt:
        "Обновлённая система оценки учитывает как технические элементы, так и артистическую составляющую выступления.",
      image:
        "https://images.unsplash.com/photo-1763208253756-eb536cc28c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      id: 3,
      title: "Итоги Весеннего Первенства 2026",
      date: "18 апреля 2026",
      excerpt:
        "120 спортсменов приняли участие в соревнованиях. Поздравляем всех победителей и участников!",
      image:
        "https://images.unsplash.com/photo-1759694430835-ef9350656e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      id: 4,
      title: "Мастер-классы от чемпионов",
      date: "10 апреля 2026",
      excerpt:
        "Приглашаем на серию обучающих мастер-классов от ведущих спортсменов федерации.",
      image:
        "https://images.unsplash.com/photo-1759694625703-2dc01a50b9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Весенний Показ 2026",
      image:
        "https://images.unsplash.com/photo-1759694430835-ef9350656e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      participants: 120,
    },
    {
      id: 2,
      title: "Зимний Чемпионат 2025",
      image:
        "https://images.unsplash.com/photo-1759694625703-2dc01a50b9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      participants: 95,
    },
    {
      id: 3,
      title: "Осенний Кубок 2025",
      image:
        "https://images.unsplash.com/photo-1752297725917-ada2cb5d3409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      participants: 80,
    },
    {
      id: 4,
      title: "Летний Турнир 2025",
      image:
        "https://images.unsplash.com/photo-1752297635224-8af034404695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      participants: 110,
    },
  ];

  const features = [
    {
      icon: Trophy,
      title: "Официальные соревнования",
      description:
        "Сертифицированные мероприятия с профессиональным судейством и международным признанием",
    },
    {
      icon: Award,
      title: "Аттестация спортсменов",
      description:
        "Получение официальных сертификатов и рейтингов через участие в соревнованиях",
    },
    {
      icon: Users,
      title: "Сообщество и развитие",
      description:
        "Общение со спортсменами по всей стране и совершенствование мастерства",
    },
    {
      icon: Star,
      title: "Профессиональные стандарты",
      description:
        "Площадки мирового уровня, протоколы безопасности и критерии судейства",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773459516717-c772070071c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Воздушная гимнастика"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-blue-50/50 to-white" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Где искусство встречается со спортом
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Присоединяйтесь к ведущей федерации соревнований по пол-спорту,
            воздушному кольцу и воздушным полотнам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/participation"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Подать заявку
            </Link>
            <Link
              to="/calendar"
              className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all"
            >
              Календарь соревнований
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-blue-600/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Наша миссия
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы развиваем воздушный спорт через профессиональные соревнования,
              комплексную подготовку спортсменов и сообщество, которое ценит
              силу, грацию и художественное самовыражение.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.8, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Новости
              </h2>
              <p className="text-xl text-gray-600">
                Последние события и объявления федерации
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
              Все новости <ArrowRight size={20} />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0.9, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Newspaper size={16} className="text-blue-600" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Competitions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Предстоящие соревнования
              </h2>
              <p className="text-xl text-gray-600">
                Присоединяйтесь к спортсменам со всей страны
              </p>
            </div>
            <Link
              to="/calendar"
              className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              Смотреть все <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 border-2 border-gray-200 group-hover:border-blue-600 transition-all">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {event.registrationOpen && (
                    <div className="absolute top-4 right-4 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold shadow-lg">
                      Регистрация открыта
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-gray-200">{event.location}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {event.disciplines.map((discipline) => (
                    <span
                      key={discipline}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {discipline}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            to="/calendar"
            className="md:hidden flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mt-8"
          >
            Все соревнования <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Past Events Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Прошедшие мероприятия
              </h2>
              <p className="text-xl text-gray-600">
                Достижения нашего сообщества
              </p>
            </div>
            <Link
              to="/reports"
              className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              Смотреть все <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-gray-200 group-hover:border-purple-600 transition-all">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-200">
                      {event.participants} участников
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            to="/reports"
            className="md:hidden flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mt-8"
          >
            Все отчёты <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Готовы участвовать?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Присоединяйтесь к сотням спортсменов, демонстрирующих своё
            мастерство на наших мероприятиях мирового уровня
          </p>
          <Link
            to="/participation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-white/50 transition-all"
          >
            Узнать как участвовать <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
