import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🌸</div>
              <span className="text-2xl font-cormorant font-bold text-white">
                Розовый Сад
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Создаем красоту из живых цветов уже 15 лет. Каждый букет — это
              произведение искусства, созданное с любовью и профессионализмом.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-gray-800"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-gray-800"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-gray-800"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-gray-800"
              >
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Быстрые ссылки</h3>
            <nav className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Главная
              </a>
              <a
                href="#products"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Букеты
              </a>
              <a
                href="#categories"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Категории
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Доставка
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Оплата
              </a>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Популярные категории</h3>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Свадебные букеты
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Розы
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Тюльпаны
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Комнатные растения
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Подарочные композиции
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Корпоративные заказы
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="MapPin"
                  size={20}
                  className="text-purple-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">г. Москва, ул. Цветочная, 15</p>
                  <p className="text-gray-300">ТЦ "Сад", 2 этаж</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon
                  name="Phone"
                  size={20}
                  className="text-purple-400 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-400">Круглосуточно</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon
                  name="Mail"
                  size={20}
                  className="text-purple-400 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">info@rozovy-sad.ru</p>
                  <p className="text-sm text-gray-400">
                    Ответим в течение часа
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon
                  name="Clock"
                  size={20}
                  className="text-purple-400 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">Режим работы:</p>
                  <p className="text-sm text-gray-400">
                    Ежедневно 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Розовый Сад. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Пользовательское соглашение
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Возврат и обмен
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
