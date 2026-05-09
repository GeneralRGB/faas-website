import { motion } from "motion/react";
import { Calendar as CalendarIcon, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function Calendar() {
  const competitions = [
    {
      id: 1,
      title: "Национальный Чемпионат России 2026",
      date: "15-17 июня 2026",
      location: "Москва, Россия",
      disciplines: ["Пол-спорт", "Воздушное кольцо", "Воздушные полотна"],
      image: "https://images.unsplash.com/photo-1773459516717-c772070071c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      registrationOpen: true,
      spots: 150,
      spotsRemaining: 45,
      earlyBirdDeadline: "20 мая 2026",
      description: "Наше главное ежегодное мероприятие с участием лучших спортсменов со всей страны во всех трёх дисциплинах.",
    },
    {
      id: 2,
      title: "Летний Воздушный Фестиваль",
      date: "20-22 июля 2026",
      location: "Санкт-Петербург, Россия",
      disciplines: ["Воздушное кольцо", "Воздушные полотна"],
      image: "https://images.unsplash.com/photo-1763208253756-eb536cc28c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      registrationOpen: true,
      spots: 100,
      spotsRemaining: 72,
      earlyBirdDeadline: "10 июня 2026",
      description: "Празднование воздушного искусства с выступлениями, мастер-классами и соревнованиями по кольцу и полотнам.",
    },
    {
      id: 3,
      title: "Кубок Мастерства по Пол-Спорту",
      date: "10-12 августа 2026",
      location: "Казань, Россия",
      disciplines: ["Пол-спорт"],
      image: "https://images.unsplash.com/photo-1775757418839-211ada84a421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      registrationOpen: false,
      spots: 80,
      spotsRemaining: 0,
      openDate: "1 июня 2026",
      description: "Элитные соревнования по пол-спорту, демонстрирующие силу, технику и художественное выражение.",
    },
    {
      id: 4,
      title: "Региональный Отборочный Тур - Сибирь",
      date: "5-7 сентября 2026",
      location: "Новосибирск, Россия",
      disciplines: ["Пол-спорт", "Воздушное кольцо", "Воздушные полотна"],
      image: "https://images.unsplash.com/photo-1759694430835-ef9350656e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      registrationOpen: false,
      spots: 120,
      spotsRemaining: 0,
      openDate: "15 июля 2026",
      description: "Пройдите отбор на Национальный Чемпионат на региональном мероприятии.",
    },
    {
      id: 5,
      title: "Осенний Воздушный Показ",
      date: "18-20 октября 2026",
      location: "Екатеринбург, Россия",
      disciplines: ["Воздушное кольцо", "Воздушные полотна"],
      image: "https://images.unsplash.com/photo-1759694625703-2dc01a50b9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      registrationOpen: false,
      spots: 90,
      spotsRemaining: 0,
      openDate: "20 августа 2026",
      description: "Камерный показ с участием продвинутых воздушных гимнастов.",
    },
    {
      id: 6,
      title: "Финал Чемпионата Года",
      date: "10-12 декабря 2026",
      location: "Сочи, Россия",
      disciplines: ["Пол-спорт", "Воздушное кольцо", "Воздушные полотна"],
      image: "https://images.unsplash.com/photo-1752297725917-ada2cb5d3409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      registrationOpen: false,
      spots: 200,
      spotsRemaining: 0,
      openDate: "1 сентября 2026",
      description: "Грандиозный финал соревновательного сезона с участием чемпионов всех региональных отборов.",
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
            Календарь соревнований
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изучите предстоящие мероприятия и забронируйте своё место на соревнованиях мирового уровня
          </p>
        </motion.div>

        <div className="space-y-8">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={competition.image}
                      alt={competition.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
                    {competition.registrationOpen && (
                      <div className="absolute top-4 right-4 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold shadow-lg">
                        Регистрация открыта
                      </div>
                    )}
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">{competition.title}</h2>
                      <p className="text-gray-600 mb-6">{competition.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-700">
                          <CalendarIcon size={20} className="text-blue-600" />
                          <span>{competition.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <MapPin size={20} className="text-pink-600" />
                          <span>{competition.location}</span>
                        </div>
                        {competition.registrationOpen && (
                          <>
                            <div className="flex items-center gap-3 text-gray-700">
                              <Users size={20} className="text-purple-600" />
                              <span>
                                {competition.spotsRemaining} из {competition.spots} мест свободно
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                              <Clock size={20} className="text-blue-600" />
                              <span>Ранняя регистрация до {competition.earlyBirdDeadline}</span>
                            </div>
                          </>
                        )}
                        {!competition.registrationOpen && competition.openDate && (
                          <div className="flex items-center gap-3 text-gray-700">
                            <Clock size={20} className="text-blue-600" />
                            <span>Регистрация откроется {competition.openDate}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {competition.disciplines.map((discipline) => (
                          <span
                            key={discipline}
                            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {discipline}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      {competition.registrationOpen ? (
                        <>
                          <Link
                            to="/participation"
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                          >
                            Зарегистрироваться <ArrowRight size={20} />
                          </Link>
                          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                            Подробнее
                          </button>
                        </>
                      ) : (
                        <button className="flex-1 px-6 py-3 bg-gray-200 rounded-xl font-semibold text-gray-500 cursor-not-allowed">
                          Регистрация закрыта
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {competition.registrationOpen && (
                  <div className="px-8 pb-6">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${((competition.spots - competition.spotsRemaining) / competition.spots) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Не знаете с чего начать?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Узнайте о требованиях к участию, правилах и как подготовиться к вашему первому соревнованию
          </p>
          <Link
            to="/participation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-white/50 transition-all"
          >
            Как участвовать <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
