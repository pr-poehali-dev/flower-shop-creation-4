import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Свадебные букеты",
      description: "Изысканные композиции для самого важного дня",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop&crop=center",
      icon: "Heart",
      color: "pink",
    },
    {
      id: 2,
      name: "Комнатные растения",
      description: "Зеленые друзья для дома и офиса",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      icon: "Leaf",
      color: "green",
    },
    {
      id: 3,
      name: "Подарочные композиции",
      description: "Особенные букеты для особенных людей",
      image:
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=400&h=300&fit=crop&crop=center",
      icon: "Gift",
      color: "purple",
    },
    {
      id: 4,
      name: "Сезонные букеты",
      description: "Цветы по времени года и настроению",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop&crop=center",
      icon: "Sun",
      color: "yellow",
    },
    {
      id: 5,
      name: "Корпоративные заказы",
      description: "Оформление мероприятий и офисных пространств",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",
      icon: "Building",
      color: "blue",
    },
    {
      id: 6,
      name: "Траурные венки",
      description: "Композиции для выражения соболезнований",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      icon: "Flower",
      color: "gray",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: "bg-pink-100 text-pink-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      yellow: "bg-yellow-100 text-yellow-600",
      blue: "bg-blue-100 text-blue-600",
      gray: "bg-gray-100 text-gray-600",
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section
      id="categories"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Наши категории
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            От романтических букетов до корпоративного оформления — мы создаем
            цветы для любого повода
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-16 h-16 rounded-full ${getColorClasses(category.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-opacity-90`}
                  >
                    <Icon name={category.icon as any} size={28} />
                  </div>
                </div>
              </div>

              <CardContent className="p-6 text-center">
                <h3 className="font-cormorant text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
