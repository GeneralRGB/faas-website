import { motion } from "motion/react";
import { Link } from "react-router";
import { FileText, Download, ArrowRight } from "lucide-react";

export function Participation() {
  const documents = [
    {
      id: 1,
      title: "Регламент соревнований 2026",
      description: "Полный регламент проведения соревнований федерации FAAS на 2026 год, включающий общие положения, порядок проведения и требования к участникам.",
      fileName: "reglament_2026.pdf",
    },
    {
      id: 2,
      title: "Правила судейства - Пол-спорт",
      description: "Критерии оценки выступлений по пол-спорту: техническая сложность, исполнение, артистичность и композиция программы.",
      fileName: "rules_pole_sport.pdf",
    },
    {
      id: 3,
      title: "Правила судейства - Воздушное кольцо",
      description: "Система судейства для дисциплины воздушное кольцо, включая обязательные и технические элементы.",
      fileName: "rules_aerial_hoop.pdf",
    },
    {
      id: 4,
      title: "Правила судейства - Воздушные полотна",
      description: "Критерии и система оценки для выступлений на воздушных полотнах, требования к трюкам и связкам.",
      fileName: "rules_aerial_silks.pdf",
    },
    {
      id: 5,
      title: "Требования к костюмам и музыке",
      description: "Стандарты для соревновательных костюмов, требования безопасности, правила использования музыкального сопровождения.",
      fileName: "costume_music_requirements.pdf",
    },
    {
      id: 6,
      title: "Медицинские требования и страхование",
      description: "Обязательные медицинские документы для участников, требования к страхованию спортсменов.",
      fileName: "medical_insurance.pdf",
    },
    {
      id: 7,
      title: "Кодекс поведения участников",
      description: "Правила поведения на соревнованиях, этические нормы, процедуры разрешения споров и апелляций.",
      fileName: "code_of_conduct.pdf",
    },
    {
      id: 8,
      title: "Категории и возрастные группы",
      description: "Описание всех категорий участников: начинающий, средний, продвинутый, профессионал и элита. Возрастные ограничения.",
      fileName: "categories_ages.pdf",
    },
  ];

  const handleDownload = (fileName: string, title: string) => {
    // В реальном приложении здесь будет скачивание файла
    console.log(`Скачивание: ${fileName}`);
    alert(`Скачивание документа: ${title}`);
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Документы для участников
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ознакомьтесь с правилами и требованиями федерации перед участием в соревнованиях
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleDownload(doc.fileName, doc.title)}
              className="group cursor-pointer bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FileText size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {doc.description}
              </p>

              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                <Download size={18} />
                <span>Скачать PDF</span>
                <ArrowRight size={16} className="ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Готовы участвовать?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Зарегистрироваться на интересующее вас мероприятие можно в календаре соревнований.
            Выберите соревнование и нажмите кнопку "Зарегистрироваться".
          </p>
          <Link
            to="/calendar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-white/50 transition-all"
          >
            Перейти к календарю соревнований <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
