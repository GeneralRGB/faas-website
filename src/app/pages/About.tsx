import { motion } from "motion/react";
import {
  Heart,
  Target,
  Users,
  Award,
  Building,
  FileText,
  Mail,
  Phone,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Страсть к искусству",
      description:
        "Мы ценим уникальное сочетание атлетизма и художественного выражения в воздушном спорте.",
    },
    {
      icon: Target,
      title: "Превосходство и безопасность",
      description:
        "Поддержка высочайших стандартов качества соревнований, судейства и безопасности спортсменов.",
    },
    {
      icon: Users,
      title: "Инклюзивное сообщество",
      description:
        "Создание доброжелательной среды для спортсменов любого происхождения и уровня подготовки.",
    },
    {
      icon: Award,
      title: "Профессиональное развитие",
      description:
        "Поддержка роста спортсменов через сертификацию, мастер-классы и наставничество.",
    },
  ];

  const team = [
    {
      name: "Сара Митчелл",
      role: "Основатель и президент",
      image:
        "https://images.unsplash.com/photo-1752297725917-ada2cb5d3409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bio: "Бывшая профессиональная воздушная гимнастка с 15-летним опытом участия в соревнованиях.",
    },
    {
      name: "Маркус Чен",
      role: "Директор по соревнованиям",
      image:
        "https://images.unsplash.com/photo-1772739649011-4e5e1c8b6b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bio: "Международный судья и координатор крупных мероприятий по воздушному спорту по всему миру.",
    },
    {
      name: "Елена Родригес",
      role: "Работа со спортсменами",
      image:
        "https://images.unsplash.com/photo-1759694625703-2dc01a50b9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bio: "Посвящена поддержке спортсменов и развитию сообщества.",
    },
    {
      name: "Джордан Блейк",
      role: "Технические стандарты",
      image:
        "https://images.unsplash.com/photo-1752297635224-8af034404695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bio: "Эксперт по безопасности и технический консультант по сертификации воздушного оборудования.",
    },
  ];

  const partners = [
    "Элит Воздушная Академия",
    "Студия Пол-Спорта Skybound",
    "Центр Воздушных Искусств",
    "Performance Plus Athletics",
    "FlexFlow Тренировки",
    "Gravity Defiance Студия",
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            О нашей федерации
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Посвящены развитию воздушных видов спорта через профессиональные
            соревнования, подготовку спортсменов и создание сообщества
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden border-2 border-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1773459516717-c772070071c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Воздушная гимнастика"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Наша миссия
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Федерация FAAS была основана в 2018 году группой увлечённых
                воздушных гимнастов и инструкторов, которые осознали
                необходимость профессиональной организованной структуры
                соревнований по пол-спорту, воздушному кольцу и воздушным
                полотнам.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Мы верим, что эти дисциплины заслуживают такого же признания и
                профессиональных стандартов, как традиционная гимнастика и
                танцевальные соревнования. Наша миссия - создать платформу, где
                спортсмены могут продемонстрировать свои невероятные навыки,
                получить сертификаты и связаться с поддерживающим мировым
                сообществом.
              </p>
              <p className="text-lg text-gray-700">
                Через строгие стандарты судейства, площадки мирового класса и
                комплексные протоколы безопасности мы поднимаем воздушные виды
                спорта на новые высоты и помогаем спортсменам осуществлять их
                соревновательные мечты.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.8, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Команда руководства
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 border-2 border-gray-200 group-hover:border-purple-600 transition-all">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-300 font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border-2 border-gray-200">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
              Партнёрские студии и спонсоры
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Мы гордимся сотрудничеством с ведущими студиями и организациями,
              разделяющими нашу приверженность к превосходству
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 text-center border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building size={24} className="text-white" />
                  </div>
                  <p className="font-semibold text-gray-900">{partner}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-blue-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">
                Юридическая информация
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold mb-1 text-gray-900">
                  Зарегистрированное название
                </p>
                <p>Федерация воздушно-спортивного многоборья</p>
              </div>
              <div>
                <p className="font-semibold mb-1 text-gray-900">
                  Регистрационный номер
                </p>
                <p>ИНН: 1234567890</p>
              </div>
              <div>
                <p className="font-semibold mb-1 text-gray-900">
                  Юридический адрес
                </p>
                <p>
                  ул. Воздушная, д. 123, офис 500
                  <br />
                  Москва, 101000, Россия
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-colors font-semibold"
                >
                  Скачать юридические документы
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-pink-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">
                Свяжитесь с нами
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1 text-gray-900">
                    Общие вопросы
                  </p>
                  <a
                    href="mailto:info@faas-federation.ru"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    info@faas-federation.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1 text-gray-900">
                    Поддержка спортсменов
                  </p>
                  <a
                    href="mailto:athletes@faas-federation.ru"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    athletes@faas-federation.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1 text-gray-900">Телефон</p>
                  <a
                    href="tel:+74951234567"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Часы работы: Понедельник - Пятница, 9:00 - 18:00 МСК
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
