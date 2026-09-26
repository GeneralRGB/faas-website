import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Award, Star, Trophy, Users } from "lucide-react";

export function Home() {
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
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-5xl px-4 text-center"
        >
          <h1 className="mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Где искусство встречается со спортом
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
            Присоединяйтесь к ведущей федерации соревнований по воздушной
            гимнастике и пилонному спорту
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/participation"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40"
            >
              Документы для участия
            </Link>
            <Link
              to="/calendar"
              className="rounded-full border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Календарь соревнований
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-blue-600/30">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600"
            />
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-24">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-5 inline-flex rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              О Федерации
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Наша миссия
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              Мы развиваем воздушный спорт через профессиональные соревнования,
              комплексную подготовку спортсменов и сообщество, которое ценит
              силу, грацию и художественное самовыражение.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border-2 border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20 transition-transform group-hover:scale-110">
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-purple-50/60 px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-16 text-center shadow-2xl shadow-purple-500/20 md:px-12 md:py-20"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Готовы участвовать?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-white/90">
              Ознакомьтесь с регламентами подготовки и требованиями Федерации
              FAAS перед участием в соревнованиях
            </p>
            <Link
              to="/participation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/40"
            >
              Перейти к документам <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
