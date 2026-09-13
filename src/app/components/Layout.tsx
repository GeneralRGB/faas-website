import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const logoImage = new URL(
  "../../imports/Logo_FAAS_2-no-bg.png",
  import.meta.url,
).href;

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/calendar", label: "Календарь" },
    { path: "/reports", label: "Отчёты" },
    { path: "/participation", label: "Документы" },
    { path: "/about", label: "О нас" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logoImage}
                alt="FAAS"
                className="h-14 w-14 object-contain"
              />
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-blue-700">FAAS</div>
                <div className="text-xs text-gray-600">
                  Федерация воздушно-спортивного многоборья
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all font-medium ${
                    isActive(item.path)
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all font-medium ${
                      isActive(item.path)
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={logoImage}
                  alt="FAAS"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <div className="font-bold text-lg text-blue-700">FAAS</div>
                  <div className="text-xs text-gray-600">
                    Федерация воздушно-спортивного многоборья
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Развиваем спорт через профессиональные соревнования.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">
                Быстрые ссылки
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    to="/calendar"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Календарь соревнований
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reports"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Отчёты о мероприятиях
                  </Link>
                </li>
                <li>
                  <Link
                    to="/participation"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Документы
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-600 transition-colors"
                  >
                    О нас
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Контакты</h3>
              <ul className="space-y-2 text-gray-600">
                <li>info@faas-federation.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    ВКонтакте
                  </a>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2026 FAAS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
