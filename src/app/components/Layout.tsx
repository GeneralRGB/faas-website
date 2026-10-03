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
    if (location.hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  const navItems = [
    { path: "/calendar", label: "Соревнования" },
    { path: "/participation", label: "Документы" },
    { path: "/reports", label: "Результаты и фото" },
    { path: "/about", label: "О федерации" },
    { path: "/about#contacts", label: "Контакты" },
  ];

  const isActive = (path: string) => {
    const [pathname, hash = ""] = path.split("#");
    if (hash) {
      return location.pathname === pathname && location.hash === `#${hash}`;
    }
    if (pathname === "/about" && location.hash) return false;
    return location.pathname.startsWith(pathname);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logoImage}
                alt="FAAS"
                className="h-16 w-16 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
              />
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-blue-700">FAAS</div>
                <div className="max-w-[275px] text-sm leading-tight text-gray-600">
                  Федерация воздушной гимнастики и пилонного спорта
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-1 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all xl:px-4 xl:text-base ${
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
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
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
              className="border-t border-gray-200 bg-white lg:hidden"
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
      <main className="pt-24">
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
                    Федерация воздушной гимнастики и пилонного спорта
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Соревнования по пилонному спорту и воздушной гимнастике.
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
                    Соревнования
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reports"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Результаты и фото
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
                    О федерации
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Контакты</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="mailto:FVSM-FAAS@yandex.ru"
                    className="hover:text-blue-600 transition-colors"
                  >
                    FVSM-FAAS@yandex.ru
                  </a>
                </li>
                <li className="flex space-x-4 mt-4">
                  <a
                    href="https://t.me/MFSOOmos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://vk.ru/club226937127"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    ВК
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>
              МФСОО «Федерация Воздушной Гимнастики и Пилонного Спорта»
            </p>
            <p className="mt-2">&copy; 2026 FAAS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
