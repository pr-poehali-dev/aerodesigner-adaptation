import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [calculatorData, setCalculatorData] = useState({
    eventType: '',
    guestCount: '',
    duration: '',
    decorationLevel: ''
  });

  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculatePrice = () => {
    const basePrice = 5000;
    const guestMultiplier = parseInt(calculatorData.guestCount) || 0;
    const durationMultiplier = parseInt(calculatorData.duration) || 1;
    const decorationMultiplier = calculatorData.decorationLevel === 'premium' ? 2 : calculatorData.decorationLevel === 'standard' ? 1.5 : 1;
    
    const total = basePrice + (guestMultiplier * 100) * durationMultiplier * decorationMultiplier;
    setCalculatedPrice(total);
  };

  const portfolioItems = [
    {
      title: 'Корпоративный праздник',
      description: 'Яркое оформление офисного мероприятия',
      image: '/img/8faed35f-2336-4e38-949e-6c49288b4fc4.jpg',
      category: 'Корпоративные'
    },
    {
      title: 'Свадебное торжество', 
      description: 'Нежное оформление в пастельных тонах',
      image: '/img/3af6739e-d578-42b3-b630-23e765ace0a9.jpg',
      category: 'Свадьбы'
    },
    {
      title: 'День рождения',
      description: 'Веселое детское оформление',
      image: '/img/8faed35f-2336-4e38-949e-6c49288b4fc4.jpg',
      category: 'Дни рождения'
    }
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'Арки из шаров',
      description: 'Эффектные входные группы'
    },
    {
      icon: 'Heart',
      title: 'Фотозоны',
      description: 'Уникальные декоративные композиции'
    },
    {
      icon: 'Crown',
      title: 'Цифры и буквы',
      description: 'Объемные шаровые конструкции'
    },
    {
      icon: 'Gift',
      title: 'Букеты из шаров',
      description: 'Праздничные композиции'
    }
  ];

  const tariffs = [
    {
      name: 'Базовый',
      price: '15 000',
      features: ['До 50 гостей', 'Простое оформление', 'Базовая фотозона', 'Консультация'],
      popular: false
    },
    {
      name: 'Стандарт',
      price: '35 000', 
      features: ['До 100 гостей', 'Арка + фотозона', 'Цветовая композиция', 'Доставка и монтаж'],
      popular: true
    },
    {
      name: 'Премиум',
      price: '65 000',
      features: ['Без ограничений', 'Полное оформление', 'Эксклюзивный дизайн', 'Персональный менеджер'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-light to-white font-open-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-turquoise flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold font-montserrat bg-gradient-to-r from-orange to-turquoise bg-clip-text text-transparent">
                AeroDesign
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {['Главная', 'Портфолио', 'Услуги', 'Тарифы', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-orange transition-colors font-medium">
                  {item}
                </a>
              ))}
            </nav>
            <Button className="bg-gradient-to-r from-orange to-turquoise hover:from-orange-dark hover:to-turquoise-dark text-white">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="главная" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange/10 text-orange mb-6">
                <Icon name="Sparkles" size={16} className="mr-2" />
                <span className="text-sm font-medium">Профессиональный аэродизайн</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold font-montserrat leading-tight mb-6">
                Создаём
                <span className="bg-gradient-to-r from-orange to-turquoise bg-clip-text text-transparent"> волшебство </span>
                для ваших событий
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Превращаем обычные праздники в незабываемые моменты с помощью уникальных композиций из воздушных шаров
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange to-turquoise hover:from-orange-dark hover:to-turquoise-dark text-white px-8">
                  Рассчитать стоимость
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
                <Button variant="outline" size="lg" className="border-orange text-orange hover:bg-orange hover:text-white">
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-orange/20 to-turquoise/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/8faed35f-2336-4e38-949e-6c49288b4fc4.jpg" 
                alt="Аэродизайн" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-montserrat mb-4">Виды аэродизайна</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предлагаем полный спектр услуг по оформлению праздников воздушными шарами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-light/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange to-turquoise flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-bold font-montserrat mb-3">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="портфолио" className="py-20 bg-gradient-to-br from-gray-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-montserrat mb-4">Наши работы</h3>
            <p className="text-xl text-gray-600">Вдохновляющие примеры наших проектов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Badge className="absolute top-4 left-4 bg-orange text-white">{item.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold font-montserrat mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold font-montserrat mb-4">Калькулятор стоимости</h3>
              <p className="text-xl text-gray-600">Рассчитайте примерную стоимость оформления вашего события</p>
            </div>
            <Card className="p-8 border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="eventType" className="text-base font-semibold mb-3 block">Тип события</Label>
                    <Select value={calculatorData.eventType} onValueChange={(value) => setCalculatorData({...calculatorData, eventType: value})}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Выберите тип события" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Свадьба</SelectItem>
                        <SelectItem value="birthday">День рождения</SelectItem>
                        <SelectItem value="corporate">Корпоратив</SelectItem>
                        <SelectItem value="anniversary">Юбилей</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="guestCount" className="text-base font-semibold mb-3 block">Количество гостей</Label>
                    <Input 
                      type="number" 
                      placeholder="Введите количество"
                      className="h-12"
                      value={calculatorData.guestCount}
                      onChange={(e) => setCalculatorData({...calculatorData, guestCount: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="duration" className="text-base font-semibold mb-3 block">Длительность (часы)</Label>
                    <Select value={calculatorData.duration} onValueChange={(value) => setCalculatorData({...calculatorData, duration: value})}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Выберите длительность" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 часа</SelectItem>
                        <SelectItem value="6">6 часов</SelectItem>
                        <SelectItem value="8">8 часов</SelectItem>
                        <SelectItem value="12">12 часов</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="decorationLevel" className="text-base font-semibold mb-3 block">Уровень оформления</Label>
                    <Select value={calculatorData.decorationLevel} onValueChange={(value) => setCalculatorData({...calculatorData, decorationLevel: value})}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Выберите уровень" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Базовое</SelectItem>
                        <SelectItem value="standard">Стандартное</SelectItem>
                        <SelectItem value="premium">Премиум</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center bg-gradient-to-br from-orange/5 to-turquoise/5 rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold font-montserrat mb-2">Расчетная стоимость</h4>
                    <div className="text-5xl font-bold font-montserrat bg-gradient-to-r from-orange to-turquoise bg-clip-text text-transparent">
                      {calculatedPrice.toLocaleString()} ₽
                    </div>
                    <p className="text-gray-600 mt-2">*Примерная стоимость</p>
                  </div>
                  
                  <Button 
                    onClick={calculatePrice}
                    className="w-full bg-gradient-to-r from-orange to-turquoise hover:from-orange-dark hover:to-turquoise-dark text-white h-12"
                    size="lg"
                  >
                    <Icon name="Calculator" className="mr-2" size={18} />
                    Рассчитать стоимость
                  </Button>
                  
                  <Button variant="outline" className="w-full mt-4 border-orange text-orange hover:bg-orange hover:text-white">
                    Получить точную смету
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="тарифы" className="py-20 bg-gradient-to-br from-gray-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-montserrat mb-4">Тарифные планы</h3>
            <p className="text-xl text-gray-600">Выберите подходящий пакет услуг</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${tariff.popular ? 'border-2 border-orange shadow-xl scale-105' : 'border-0'}`}>
                {tariff.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange to-turquoise text-white text-center py-2 font-bold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <CardContent className={`p-8 ${tariff.popular ? 'pt-16' : ''}`}>
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold font-montserrat mb-4">{tariff.name}</h4>
                    <div className="text-4xl font-bold font-montserrat mb-2">
                      <span className="bg-gradient-to-r from-orange to-turquoise bg-clip-text text-transparent">
                        {tariff.price} ₽
                      </span>
                    </div>
                    <p className="text-gray-600">за мероприятие</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" className="text-green-500 mr-3 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full h-12 ${tariff.popular 
                      ? 'bg-gradient-to-r from-orange to-turquoise hover:from-orange-dark hover:to-turquoise-dark text-white' 
                      : 'border-orange text-orange hover:bg-orange hover:text-white'
                    }`}
                    variant={tariff.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Panel Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-montserrat mb-4">Управление платформой</h3>
            <p className="text-xl text-gray-600">Инструменты для администрирования</p>
          </div>
          
          <Tabs defaultValue="dashboard" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="orders">Заказы</TabsTrigger>
              <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
              <TabsTrigger value="templates">Шаблоны</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard" className="mt-8">
              <Card className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-orange/10 to-orange/5 rounded-xl">
                    <div className="text-3xl font-bold text-orange mb-2">247</div>
                    <div className="text-gray-600">Всего заказов</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-turquoise/10 to-turquoise/5 rounded-xl">
                    <div className="text-3xl font-bold text-turquoise mb-2">2.4M ₽</div>
                    <div className="text-gray-600">Общий доход</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-skyblue/10 to-skyblue/5 rounded-xl">
                    <div className="text-3xl font-bold text-skyblue mb-2">98%</div>
                    <div className="text-gray-600">Довольных клиентов</div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders" className="mt-8">
              <Card className="p-8">
                <h4 className="text-xl font-bold mb-4">Последние заказы</h4>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-semibold">Заказ #{1000 + idx}</div>
                        <div className="text-sm text-gray-600">Свадебное оформление</div>
                      </div>
                      <Badge className={idx === 0 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}>
                        {idx === 0 ? 'Завершен' : 'В работе'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="portfolio" className="mt-8">
              <Card className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-bold">Управление портфолио</h4>
                  <Button className="bg-gradient-to-r from-orange to-turquoise text-white">
                    <Icon name="Plus" className="mr-2" size={16} />
                    Добавить работу
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolioItems.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="border rounded-lg p-4">
                      <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded mb-3" />
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.category}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Icon name="Edit" size={14} />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-500">
                            <Icon name="Trash" size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="templates" className="mt-8">
              <Card className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-bold">Шаблоны сайтов</h4>
                  <Button className="bg-gradient-to-r from-orange to-turquoise text-white">
                    <Icon name="Plus" className="mr-2" size={16} />
                    Создать шаблон
                  </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {['Базовый', 'Премиум', 'Корпоративный'].map((template, idx) => (
                    <div key={idx} className="border rounded-lg p-4 text-center">
                      <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-3 flex items-center justify-center">
                        <Icon name="Layout" className="text-gray-400" size={32} />
                      </div>
                      <div className="font-semibold mb-2">{template}</div>
                      <Button size="sm" variant="outline" className="w-full">
                        Редактировать
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-turquoise flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={20} />
                </div>
                <h1 className="text-2xl font-bold font-montserrat bg-gradient-to-r from-orange to-turquoise bg-clip-text text-transparent">
                  AeroDesign
                </h1>
              </div>
              <p className="text-gray-400">
                Создаём незабываемые моменты с помощью профессионального аэродизайна
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Арки из шаров</li>
                <li>Фотозоны</li>
                <li>Цифры и буквы</li>
                <li>Букеты из шаров</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">События</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Свадьбы</li>
                <li>Дни рождения</li>
                <li>Корпоративы</li>
                <li>Юбилеи</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-3" size={16} />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-3" size={16} />
                  hello@aerodesign.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-3" size={16} />
                  Москва, ул. Примерная, 123
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AeroDesign. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}