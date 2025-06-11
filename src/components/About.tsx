import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Award",
      title: "15 лет опыта",
      description: "Профессиональные флористы с многолетним стажем",
    },
    {
      icon: "Users",
      title: "10000+ довольных клиентов",
      description: "Мы ценим каждого клиента и стремимся к совершенству",
    },
    {
      icon: "Clock",
      title: "Работаем 24/7",
      description: "Всегда готовы помочь в создании цветочного чуда",
    },
    {
      icon: "MapPin",
      title: "Доставка по всему городу",
      description: "Быстрая и бережная доставка в любую точку",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-gray-900">
                О магазине
                <span className="text-purple-600">Розовый Сад</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы создаем не просто букеты — мы создаем эмоции. Каждая
                композиция рождается из любви к красоте и желания дарить
                радость. Наши флористы отбирают только самые свежие цветы и
                создают уникальные произведения искусства.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                От свадебных букетов до корпоративных мероприятий — мы воплощаем
                в жизнь самые смелые цветочные фантазии. Доверьте нам ваши
                особенные моменты.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name={feature.icon as any}
                      size={24}
                      className="text-purple-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[3/4] bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop&crop=center"
                    alt="Флорист за работой"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gradient-to-br from-green-200 to-pink-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1428931996691-a5108d4cdbf5?w=300&h=300&fit=crop&crop=center"
                    alt="Интерьер магазина"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=300&fit=crop&crop=center"
                    alt="Красивые букеты"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-pink-200 to-green-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1487070183336-b863922373d4?w=300&h=400&fit=crop&crop=center"
                    alt="Процесс создания букета"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-pink-200 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-200 rounded-full opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
