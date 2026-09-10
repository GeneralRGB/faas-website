import { motion } from "motion/react";
import { ClipboardList, FileText, ScrollText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function Participation() {
  const participationDocuments = [
    "Регламент подготовки атлетов артистической категории",
    "Регламент подготовки атлетов спортивной категории",
    "Регламент подготовки атлетов к выполнению разрядных нормативов",
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
            Регламенты и официальные материалы Федерации FAAS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion
            type="multiple"
            className="space-y-5"
          >
            <AccordionItem
              value="participation"
              className="overflow-hidden rounded-3xl border-2 border-gray-200 bg-white px-6 transition-colors last:border-b-2 data-[state=open]:border-blue-300 md:px-8"
            >
              <AccordionTrigger className="py-6 text-xl font-bold text-gray-900 hover:no-underline md:text-2xl">
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <ClipboardList size={22} />
                  </span>
                  Участие
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-7">
                <div className="space-y-3 border-t border-gray-100 pt-5">
                  {participationDocuments.map((document) => (
                    <div
                      key={document}
                      className="flex items-center gap-4 rounded-2xl bg-gray-50 px-5 py-4 text-gray-800"
                    >
                      <FileText
                        size={21}
                        className="shrink-0 text-blue-600"
                      />
                      <span className="font-medium">{document}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="orders"
              className="overflow-hidden rounded-3xl border-2 border-gray-200 bg-white px-6 transition-colors last:border-b-2 data-[state=open]:border-purple-300 md:px-8"
            >
              <AccordionTrigger className="py-6 text-xl font-bold text-gray-900 hover:no-underline md:text-2xl">
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    <ScrollText size={22} />
                  </span>
                  Приказы
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-7">
                <div className="border-t border-gray-100 pt-5">
                  <div className="rounded-2xl bg-gray-50 px-5 py-8 text-center text-gray-500">
                    Приказы пока не добавлены
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
