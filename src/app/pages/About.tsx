import { motion } from "motion/react";
import { Heart, Target, Users, Award, FileText, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const annaSaratovaImage = new URL(
  "../../assets/anna-saratova.jpg",
  import.meta.url,
).href;

const ekaterinaShevelyovaImage = new URL(
  "../../assets/ekaterina-shevelyova.jpg",
  import.meta.url,
).href;

const smartPoleLogo = new URL(
  "../../assets/smart-pole-logo.jpg",
  import.meta.url,
).href;

const nordanceStudioLogo = new URL(
  "../../assets/nordance-studio-logo.jpg",
  import.meta.url,
).href;

const energyLogo = new URL("../../assets/energy-logo.jpg", import.meta.url)
  .href;

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Спорт и самовыражение",
      description:
        "Поддерживаем развитие спортсменов в спортивном и артистическом направлениях.",
    },
    {
      icon: Target,
      title: "Правила и безопасность",
      description:
        "Развиваем понятные правила соревнований, критерии судейства и требования безопасности.",
    },
    {
      icon: Users,
      title: "Профессиональное сообщество",
      description:
        "Объединяем спортсменов, тренеров, судей и организаторов соревнований.",
    },
    {
      icon: Award,
      title: "Профессиональное развитие",
      description:
        "Помогаем повышать квалификацию и последовательно развивать спортивное мастерство.",
    },
  ];

  const team = [
    {
      name: "Анна Олеговна Саратова",
      role: "Президент федерации",
      image: annaSaratovaImage,
      bio: "Многократная чемпионка международных чемпионатов. Основатель Студии пилонного спорта и воздушной гимнастики Nordance Studio, основатель Бренда SN Competitions, SN Fest и спортивных съездов SN Camp.",
    },
    {
      name: "Екатерина Сергеевна Шевелёва",
      role: "Вице-президент федерации",
      image: ekaterinaShevelyovaImage,
      bio: "Основатель студии пилонного спорта и воздушной гимнастики Smart Pole, бренда SN Competitions. Судья международного и всероссийского уровня, тренер и постановщик соревновательных программ, работающий в сфере с 2014 года. Многократная победительница и призёр чемпионатов России и Европы, чемпионка России по воздушному кольцу IPSF и пилонному спорту.",
    },
  ];

  const partners = [
    { name: "Smart Pole", logo: smartPoleLogo },
    { name: "Nordance Studio", logo: nordanceStudioLogo },
    { name: "Energy", logo: energyLogo },
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
            О федерации
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mx-auto max-w-4xl">
            <div>
              <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
                Наша миссия
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Федерация FAAS развивает соревнования по пилонному спорту и
                воздушной гимнастике. Мы формируем единые правила проведения
                соревнований, разрядные программы и понятную систему оценки
                результатов.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Федерация объединяет спортсменов, тренеров, судей и
                организаторов, помогает повышать квалификацию и расти в
                спортивном и артистическом направлениях.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Наша задача — создавать безопасные и прозрачные условия для
                соревнований и развития профессионального сообщества.
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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-50 mb-4 transition-all group-hover:border-purple-600">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain"
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white text-center transition-all hover:border-blue-600 hover:shadow-lg"
                >
                  <div className="flex h-52 items-center justify-center bg-white p-5">
                    <ImageWithFallback
                      src={partner.logo}
                      alt={`Логотип ${partner.name}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="border-t border-gray-100 px-6 py-4 text-lg font-semibold text-gray-900">
                    {partner.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="contacts"
          className="grid scroll-mt-28 grid-cols-1 gap-8 md:grid-cols-2"
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
                <p>МФСОО "Федерация Воздушной Гимнастики и Пилонного Спорта"</p>
              </div>
              <div>
                <p className="font-semibold mb-1 text-gray-900">
                  Регистрационный номер
                </p>
                <p>ИНН: 9722083073</p>
                <p>КПП: 772201001</p>
              </div>
              <div>
                <p className="font-semibold mb-1 text-gray-900">
                  Юридический адрес
                </p>
                <p>
                  111033, город Москва,
                  <br />
                  Волочаевская ул, д. 13, кв. 51
                </p>
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
                  <p className="font-semibold mb-1 text-gray-900">Почта</p>
                  <a
                    href="mailto:FVSM-FAAS@yandex.ru"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    FVSM-FAAS@yandex.ru
                  </a>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="mb-3 font-semibold text-gray-900">
                  Социальные сети
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://t.me/MFSOOmos"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://vk.ru/club226937127"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-blue-50 px-5 py-2.5 font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    ВК
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
