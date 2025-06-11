import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-pink-50 via-white to-green-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-cormorant text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Свежие цветы для
                <span className="text-purple-600 block">особых моментов</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Создаем уникальные букеты из свежих цветов для ваших самых
                важных событий. Доставляем красоту и радость по всему городу.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать букет
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Быстрая доставка
                  </p>
                  <p className="text-sm text-gray-600">В течение 2 часов</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={20} className="text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Свежие цветы</p>
                  <p className="text-sm text-gray-600">
                    Только лучшее качество
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Gift" size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Подарочная упаковка
                  </p>
                  <p className="text-sm text-gray-600">Бесплатно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center"
                alt="Красивый букет цветов"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
