import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🌸</div>
            <span className="text-2xl font-cormorant font-bold text-purple-600">
              Розовый Сад
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Букеты
            </a>
            <a
              href="#categories"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Категории
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Cart & Mobile menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Icon name="ShoppingCart" size={24} />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#products"
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Букеты
              </a>
              <a
                href="#categories"
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Категории
              </a>
              <a
                href="#about"
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
