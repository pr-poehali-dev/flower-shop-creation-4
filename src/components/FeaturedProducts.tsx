import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Нежный рассвет",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop&crop=center",
      description: "Букет из роз и эустомы в пастельных тонах",
    },
    {
      id: 2,
      name: "Весенняя свежесть",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop&crop=center",
      description: "Тюльпаны и зелень в стильной упаковке",
    },
    {
      id: 3,
      name: "Романтический вечер",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=400&fit=crop&crop=center",
      description: "Красные розы с зеленью и лентами",
    },
    {
      id: 4,
      name: "Солнечное настроение",
      price: 2100,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
      description: "Подсолнухи и хризантемы в яркой гамме",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Популярные букеты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наши флористы создают уникальные композиции, которые дарят радость и
            восхищение
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-purple-600 hover:bg-purple-50"
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-cormorant text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-purple-600">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />В
                      корзину
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8"
          >
            Посмотреть все букеты
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
