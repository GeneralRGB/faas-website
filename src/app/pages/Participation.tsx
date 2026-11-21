import { motion } from "motion/react";
import {
  ClipboardList,
  ExternalLink,
  FileText,
  ScrollText,
} from "lucide-react";

export function Participation() {
  const participationDocuments = [
    {
      title: "Регламент подготовки атлетов артистической категории",
      url: "https://disk.yandex.ru/d/_KtFz6LR-WIR9A/%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%9B%D0%AC%D0%9D%D0%AB%D0%95%20%D0%9A%D0%90%D0%A2%D0%95%D0%93%D0%9E%D0%A0%D0%98%D0%98%20%D0%9F%D0%A0%D0%90%D0%92%D0%98%D0%9B%D0%90/%D0%90%D0%A0%D0%A2%D0%98%D0%A1%D0%A2%D0%98%D0%9A%20%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%9B%D0%AC%D0%9D%D0%AB%D0%95",
    },
    {
      title: "Регламент подготовки атлетов спортивной категории",
      url: "https://disk.yandex.ru/d/_KtFz6LR-WIR9A/%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%9B%D0%AC%D0%9D%D0%AB%D0%95%20%D0%9A%D0%90%D0%A2%D0%95%D0%93%D0%9E%D0%A0%D0%98%D0%98%20%D0%9F%D0%A0%D0%90%D0%92%D0%98%D0%9B%D0%90/%D0%A1%D0%9F%D0%9E%D0%A0%D0%A2%D0%98%D0%92%D0%9D%D0%AB%D0%95%20%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%9B%D0%AC%D0%9D%D0%AB%D0%95",
    },
    {
      title:
        "Регламент подготовки атлетов к выполнению разрядных нормативов",
      url: "https://disk.yandex.ru/d/_KtFz6LR-WIR9A/%D0%A0%D0%90%D0%97%D0%A0%D0%AF%D0%94%D0%9D%D0%AB%D0%95%20%D0%9F%D0%A0%D0%90%D0%92%D0%98%D0%9B%D0%90",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Документы
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Разрядные программы, правила SPORT и ART и официальные материалы
            Федерации FAAS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-5">
            <section
              className="overflow-hidden rounded-3xl border-2 border-gray-200 bg-white px-6 md:px-8"
            >
              <h2 className="py-6 text-xl font-bold text-gray-900 md:text-2xl">
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <ClipboardList size={22} />
                  </span>
                  Правила и разрядные программы
                </span>
              </h2>
              <div className="pb-7">
                <div className="space-y-3 border-t border-gray-100 pt-5">
                  {participationDocuments.map((document) => (
                    <a
                      key={document.title}
                      href={document.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-2xl bg-gray-50 px-5 py-4 text-gray-800 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      <FileText
                        size={21}
                        className="shrink-0 text-blue-600"
                      />
                      <span className="font-medium">{document.title}</span>
                      <ExternalLink
                        size={18}
                        className="ml-auto shrink-0 text-gray-400 transition-colors group-hover:text-blue-600"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section
              className="overflow-hidden rounded-3xl border-2 border-gray-200 bg-white px-6 md:px-8"
            >
              <h2 className="py-6 text-xl font-bold text-gray-900 md:text-2xl">
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    <ScrollText size={22} />
                  </span>
                  Приказы
                </span>
              </h2>
              <div className="pb-7">
                <div className="space-y-3 border-t border-gray-100 pt-5">
                  <a
                    href="https://disk.yandex.ru/d/xBco4Q0LB3cM6g"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-gray-50 px-5 py-4 text-gray-800 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  >
                    <FileText size={21} className="shrink-0 text-blue-600" />
                    <span className="font-medium">О присвоении квалификационных категорий</span>
                    <ExternalLink size={18} className="ml-auto shrink-0 text-gray-400 transition-colors group-hover:text-blue-600" />
                  </a>
                  <a
                    href="https://disk.yandex.ru/d/u310MJWMGKAJhg"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-gray-50 px-5 py-4 text-gray-800 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  >
                    <FileText size={21} className="shrink-0 text-blue-600" />
                    <span className="font-medium">О присвоении спортивных разрядов</span>
                    <ExternalLink size={18} className="ml-auto shrink-0 text-gray-400 transition-colors group-hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
