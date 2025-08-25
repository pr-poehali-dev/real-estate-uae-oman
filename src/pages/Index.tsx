import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [quizData, setQuizData] = useState({
    budget: '',
    market: '',
    priority: '',
    propertyType: '',
    name: '',
    phone: '',
    email: ''
  });
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop',
      title: 'Панорамные виды Дубая'
    },
    {
      url: 'https://images.unsplash.com/photo-1570939274851-2d5982ff5fb8?w=1920&h=1080&fit=crop',
      title: 'Роскошь побережья Омана'
    },
    {
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop',
      title: 'Элитные апартаменты'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const quizQuestions = [
    {
      question: 'Какой бюджет вы рассматриваете для инвестиции?',
      options: ['До $250k', '$250k - $500k', '$500k - $1M', 'Более $1M'],
      key: 'budget'
    },
    {
      question: 'Какой рынок вас интересует больше?',
      options: ['Динамичный Дубай (ОАЭ)', 'Перспективный Оман', 'Рассматриваю оба варианта', 'Пока не знаю'],
      key: 'market'
    },
    {
      question: 'Что для вас приоритетно?',
      options: ['Максимальная доходность', 'Рост стоимости актива', 'Получение ВНЖ', 'Сохранение капитала'],
      key: 'priority'
    },
    {
      question: 'Какой вид недвижимости предпочитаете?',
      options: ['Вилла', 'Апартаменты', 'Таунхаусы'],
      key: 'propertyType'
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    setQuizData({ ...quizData, [quizQuestions[quizStep].key]: answer });
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(quizQuestions.length);
    }
  };

  const investmentCases = [
    {
      title: 'Апартаменты в Dubai Marina',
      location: 'Дубай, ОАЭ',
      price: '$580,000',
      yield: '13.5%',
      image: 'https://images.unsplash.com/photo-1571935021565-29e7ed7b6e3e?w=400&h=300&fit=crop'
    },
    {
      title: 'Вилла в Muscat Hills',
      location: 'Маскат, Оман',
      price: '$420,000',
      yield: '15.2%',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop'
    },
    {
      title: 'Таунхаус в Downtown Dubai',
      location: 'Дубай, ОАЭ',
      price: '$750,000',
      yield: '12.8%',
      image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Global Estates
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Премиум-апартаменты в ОАЭ и Омане
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gold-light font-medium">
              Ваш пассивный доход от 12% до 50% годовых
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-90">
              Персональный подбор ликвидных объектов инвестиции с полным сопровождением и юридической гарантией
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-black font-semibold px-8 py-4 text-lg"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Получить каталог объектов
              </Button>
              
              <Dialog open={isQuizOpen} onOpenChange={setIsQuizOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 text-lg"
                  >
                    <Icon name="Play" size={20} className="mr-2" />
                    Начать квиз
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-black border-gold">
                  <div className="p-6">
                    {quizStep < quizQuestions.length ? (
                      <div>
                        <h3 className="text-xl font-semibold mb-6 text-gold">
                          Вопрос {quizStep + 1} из {quizQuestions.length}
                        </h3>
                        <p className="text-white mb-6">
                          {quizQuestions[quizStep].question}
                        </p>
                        <div className="space-y-3">
                          {quizQuestions[quizStep].options.map((option, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              className="w-full text-left justify-start border-gold text-white hover:bg-gold hover:text-black"
                              onClick={() => handleQuizAnswer(option)}
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : quizStep === quizQuestions.length ? (
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gold">
                          Идеальное решение для ваших задач уже подобрано!
                        </h3>
                        <p className="text-white mb-6">
                          Оставьте контакты, чтобы наш эксперт отправил вам персональную подборку объектов и расчет доходности.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name" className="text-white">Имя</Label>
                            <Input
                              id="name"
                              value={quizData.name}
                              onChange={(e) => setQuizData({...quizData, name: e.target.value})}
                              className="bg-gray-800 border-gold text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-white">Телефон *</Label>
                            <Input
                              id="phone"
                              value={quizData.phone}
                              onChange={(e) => setQuizData({...quizData, phone: e.target.value})}
                              className="bg-gray-800 border-gold text-white"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={quizData.email}
                              onChange={(e) => setQuizData({...quizData, email: e.target.value})}
                              className="bg-gray-800 border-gold text-white"
                            />
                          </div>
                          <Button 
                            className="w-full bg-gradient-to-r from-gold to-gold-dark text-black font-semibold"
                            onClick={() => setIsQuizOpen(false)}
                          >
                            Получить подборку
                          </Button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
            Ключевые преимущества
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gold border-2 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="TrendingUp" size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gold">Доходность</h3>
                <p className="text-white opacity-90">
                  Проработанная модель аренды с доходностью от 12% годовых. Не просто продажа, а готовое решение.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gold border-2 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="MapPin" size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gold">Экспертиза</h3>
                <p className="text-white opacity-90">
                  Команда на местах в Дубае и Маскате. Доступ к эксклюзивным лотам и закрытым распродажам.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gold border-2 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="Settings" size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gold">Сервис</h3>
                <p className="text-white opacity-90">
                  Полное сопровождение «под ключ»: от подбора и сделки до управления и отчетности.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gold border-2 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="Shield" size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gold">Безопасность</h3>
                <p className="text-white opacity-90">
                  Юридический аудит каждого объекта и сопровождение сделки местным юристом.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Cases */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
            Инвестиционные кейсы
          </h2>
          <p className="text-center text-white opacity-90 mb-16 text-lg">
            Примеры успешных объектов с проработанной доходностью
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {investmentCases.map((property, index) => (
              <Card key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 border-gold border-2 overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gold">
                    {property.title}
                  </h3>
                  <p className="text-white opacity-75 mb-4 flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    {property.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">
                      {property.price}
                    </span>
                    <span className="bg-gradient-to-r from-gold to-gold-dark text-black px-3 py-1 rounded-full font-semibold">
                      {property.yield}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3"
            >
              Посмотреть другие кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
            О Global Estates
          </h2>
          <p className="text-xl text-white opacity-90 mb-12 leading-relaxed">
            Global Estates — это более 150 довольных инвесторов и $100M+ проданной недвижимости. 
            Мы ваш надежный партнер в регионе с проверенной экспертизой и безупречной репутацией.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white font-semibold">EMAAR</div>
            <div className="text-white font-semibold">DAMAC</div>
            <div className="text-white font-semibold">OMRAN</div>
            <div className="text-white font-semibold">MERAAS</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Готовы сделать первый шаг к пассивному доходу?
          </h2>
          <p className="text-xl mb-12 text-black opacity-80">
            Заполните форму ниже, и наш эксперт свяжется с вами в течение 15 минут
          </p>
          
          <div className="max-w-md mx-auto space-y-6">
            <Input 
              placeholder="Ваше имя"
              className="bg-white border-2 border-black text-black placeholder-gray-500 text-lg py-3"
            />
            <Input 
              placeholder="Ваш телефон"
              className="bg-white border-2 border-black text-black placeholder-gray-500 text-lg py-3"
            />
            <Button 
              size="lg" 
              className="w-full bg-black text-gold hover:bg-gray-800 font-semibold py-4 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Обсудить инвестицию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black border-t-2 border-gold">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Global Estates</h3>
              <p className="text-white opacity-75">
                Премиальная недвижимость в ОАЭ и Омане
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Контакты</h4>
              <div className="space-y-2 text-white opacity-75">
                <div className="flex items-center justify-center md:justify-start">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +971 50 123 4567
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@global-estates.com
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Социальные сети</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <Icon name="Instagram" size={24} className="text-gold hover:text-gold-light cursor-pointer" />
                <Icon name="MessageCircle" size={24} className="text-gold hover:text-gold-light cursor-pointer" />
                <Icon name="Phone" size={24} className="text-gold hover:text-gold-light cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gold mt-12 pt-8 text-center text-white opacity-50">
            <p>&copy; 2024 Global Estates. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;