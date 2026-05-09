import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, Calendar, FileText } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Страница не найдена</h2>
        <p className="text-xl text-gray-600 mb-12">
          Похоже, вы отправились в неизведанное воздушное пространство. Давайте вернём вас на верный путь.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group"
          >
            <Home className="text-blue-600 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-semibold text-gray-900">Главная</span>
          </Link>

          <Link
            to="/calendar"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-pink-600 hover:shadow-lg transition-all group"
          >
            <Calendar className="text-pink-600 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-semibold text-gray-900">Календарь</span>
          </Link>

          <Link
            to="/participation"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-600 hover:shadow-lg transition-all group"
          >
            <FileText className="text-purple-600 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-semibold text-gray-900">Участие</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
