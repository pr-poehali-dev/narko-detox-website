import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "Siren",
      title: "Вывод из запоя",
      description: "Экстренная помощь при алкогольном опьянении. Круглосуточный выезд врача на дом. Капельницы, детоксикация, восстановление организма.",
      price: "от 3 500 ₽",
      features: ["Выезд врача 24/7", "Анонимно", "Капельница на дому", "Быстрое улучшение"]
    },
    {
      id: 2,
      icon: "HeartPulse",
      title: "Детоксикация организма",
      description: "Комплексное очищение организма от токсинов и продуктов распада наркотических веществ. Медикаментозная поддержка.",
      price: "от 5 000 ₽",
      features: ["Стационар", "Круглосуточное наблюдение", "Современное оборудование", "Опытные врачи"]
    },
    {
      id: 3,
      icon: "Activity",
      title: "Кодирование от алкоголизма",
      description: "Медикаментозное и психотерапевтическое кодирование. Различные методики. Индивидуальный подход к каждому пациенту.",
      price: "от 4 000 ₽",
      features: ["Консультация нарколога", "Выбор метода", "Гарантия", "Поддержка после"]
    },
    {
      id: 4,
      icon: "Hospital",
      title: "Лечение наркомании",
      description: "Стационарное лечение наркотической зависимости. Медикаментозная терапия, психологическая помощь, реабилитация.",
      price: "от 15 000 ₽",
      features: ["Программа лечения", "Психотерапия", "Реабилитация", "Социальная адаптация"]
    },
    {
      id: 5,
      icon: "Brain",
      title: "Психотерапия зависимостей",
      description: "Индивидуальные и групповые сеансы психотерапии. Работа с причинами зависимости. Профилактика срывов.",
      price: "от 3 000 ₽",
      features: ["Индивидуальные сеансы", "Групповая терапия", "Семейная терапия", "Долгосрочная поддержка"]
    },
    {
      id: 6,
      icon: "Users",
      title: "Реабилитация",
      description: "Комплексная программа восстановления после лечения. Социальная адаптация, возвращение к нормальной жизни.",
      price: "от 50 000 ₽/мес",
      features: ["Проживание в центре", "Трудотерапия", "Спорт и досуг", "Подготовка к выписке"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="HeartPulse" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">МедЦентр</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground/70 hover:text-primary transition">Главная</Link>
              <Link to="/services" className="text-primary font-semibold">Услуги</Link>
              <Link to="/about" className="text-foreground/70 hover:text-primary transition">О клинике</Link>
              <Link to="/doctors" className="text-foreground/70 hover:text-primary transition">Врачи</Link>
              <Link to="/prices" className="text-foreground/70 hover:text-primary transition">Цены</Link>
              <Link to="/contacts" className="text-foreground/70 hover:text-primary transition">Контакты</Link>
            </nav>
            <a href="tel:+78001234567">
              <Button className="gap-2">
                <Icon name="Phone" size={18} />
                8 (800) 123-45-67
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Полный спектр наркологических услуг. Квалифицированная помощь, анонимность, современное оборудование.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contacts">
                      <Button className="w-full">Записаться</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Нужна консультация?</CardTitle>
                <CardDescription className="text-center text-base">
                  Свяжитесь с нами удобным способом — мы ответим на все вопросы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+78001234567">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      <Icon name="Phone" size={20} />
                      Позвонить сейчас
                    </Button>
                  </a>
                  <Link to="/contacts">
                    <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                      <Icon name="Mail" size={20} />
                      Написать нам
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">© 2024 МедЦентр. Все права защищены. Лицензия № ЛО-77-01-123456</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
