import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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
            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden sm:flex border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Icon name="User" size={18} />
                  Войти
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-cormorant text-purple-600 text-center">
                    Регистрация
                  </DialogTitle>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Имя
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      className="focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      className="focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700">
                      Пароль
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Введите пароль"
                      className="focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-700">
                      Подтвердите пароль
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Повторите пароль"
                      className="focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 mt-6"
                  >
                    <Icon name="UserPlus" size={18} />
                    Создать аккаунт
                  </Button>
                  <p className="text-center text-sm text-gray-600 mt-4">
                    Уже есть аккаунт?
                    <button
                      type="button"
                      className="text-purple-600 hover:underline ml-1"
                    >
                      Войти
                    </button>
                  </p>
                </form>
              </DialogContent>
            </Dialog>

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
              <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogTrigger asChild>
                  <button className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors flex items-center space-x-2">
                    <Icon name="User" size={18} />
                    <span>Войти/Регистрация</span>
                  </button>
                </DialogTrigger>
              </Dialog>
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
