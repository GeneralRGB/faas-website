import { motion } from "motion/react";
import { Calendar, MapPin, Users, Trophy, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Reports() {
  const reports = [
    {
      id: 1,
      title: "Весенний Воздушный Показ 2026",
      date: "15-17 марта 2026",
      location: "Москва, Россия",
      participants: 120,
      disciplines: ["Пол-спорт", "Воздушное кольцо", "Воздушные полотна"],
      images: [
        "https://images.unsplash.com/photo-1759694430835-ef9350656e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1759694625703-2dc01a50b9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1752297725917-ada2cb5d3409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      ],
      description: "Невероятный показ талантов со 120 спортсменами, выступавшими в течение трёх дней. Атмосфера была наэлектризована, участники раздвигали границы воздушного искусства.",
      highlights: [
        "Рекордная посещаемость - более 2000 зрителей",
        "Впервые участвующие спортсмены составили 40% от общего числа",
        "Выдающиеся выступления во всех трёх дисциплинах",
        "Прямая трансляция собрала 50 000 зрителей по всему миру",
      ],
      winners: [
        { category: "Пол-спорт - Продвинутый уровень", name: "Сара Митчелл" },
        { category: "Воздушное кольцо - Профессионалы", name: "Елена Родригес" },
        { category: "Воздушные полотна - Элита", name: "Майя Чен" },
      ],
    },
    {
      id: 2,
      title: "Зимний Чемпионат 2025",
      date: "10-12 декабря 2025",
      location: "Санкт-Петербург, Россия",
      participants: 95,
      disciplines: ["Пол-спорт", "Воздушное кольцо", "Воздушные полотна"],
      images: [
        "https://images.unsplash.com/photo-1773459516717-c772070071c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1763208253756-eb536cc28c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1775757418839-211ada84a421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      ],
      description: "Наш финальный чемпионат года собрал лучших спортсменов со всей страны для трёх дней захватывающих выступлений и напряжённой борьбы.",
      highlights: [
        "Наивысший балл года в пол-спорте",
        "Дебют новых критериев судейства для артистического впечатления",
        "Благотворительный сбор средств собрал 1 500 000 рублей для местных художественных программ",
        "Профессиональная фотовыставка",
      ],
      winners: [
        { category: "Пол-спорт - Элита", name: "Джордан Блейк" },
        { category: "Воздушное кольцо - Продвинутый уровень", name: "София Уильямс" },
        { category: "Воздушные полотна - Профессионалы", name: "Ария Томпсон" },
      ],
    },
    {
      id: 3,
      title: "Осенний Воздушный Кубок 2025",
      date: "22-24 октября 2025",
      location: "Екатеринбург, Россия",
      participants: 80,
      disciplines: ["Воздушное кольцо", "Воздушные полотна"],
      images: [
        "https://images.unsplash.com/photo-1752297635224-8af034404695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1772739649011-4e5e1c8b6b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1759694430835-ef9350656e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      ],
      description: "Прекрасное празднование воздушного искусства с фокусом на кольце и полотнах, с потрясающими выступлениями, оставившими зрителей в восторге.",
      highlights: [
        "Введена новая промежуточная категория для развивающихся спортсменов",
        "Мастер-классы с приглашёнными международными инструкторами",
        "Торговая площадка с воздушным оборудованием и костюмами",
        "Нетворкинг-мероприятия для спортсменов и тренеров",
      ],
      winners: [
        { category: "Воздушное кольцо - Профессионалы", name: "Изабелла Мартинес" },
        { category: "Воздушные полотна - Продвинутый уровень", name: "Хлоя Андерсон" },
      ],
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
            Празднуем достижения, выступления и незабываемые моменты наших соревнований
          </p>
        </motion.div>

        <div className="space-y-16">
          {reports.map((report, index) => (
            <motion.article
              key={report.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-80 md:h-96">
                {report.images.map((image, idx) => (
                  <div key={idx} className="relative overflow-hidden group">
                    <ImageWithFallback
                      src={image}
                      alt={`${report.title} - Фото ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                ))}
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{report.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {report.disciplines.map((discipline) => (
                      <span
                        key={discipline}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-blue-600" />
                    <span>{report.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-pink-600" />
                    <span>{report.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-purple-600" />
                    <span>{report.participants} участников</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-8">{report.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                      <Trophy className="text-yellow-500" size={20} />
                      Основные моменты
                    </h3>
                    <ul className="space-y-2">
                      {report.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                      <Trophy className="text-yellow-500" size={20} />
                      Победители по категориям
                    </h3>
                    <div className="space-y-3">
                      {report.winners.map((winner, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                          <div className="text-sm text-gray-600 mb-1">{winner.category}</div>
                          <div className="font-semibold text-gray-900">{winner.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                    <Trophy size={18} />
                    Таблица с итогами
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                    <ExternalLink size={18} />
                    Смотреть полную галерею
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                    <ExternalLink size={18} />
                    Повтор трансляции
                  </button>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Оставайтесь на связи</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Подписывайтесь на нас в социальных сетях, чтобы видеть ежедневные моменты, закулисный контент и истории спортсменов
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
