import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const services = [
    {
      icon: "Siren",
      title: "Вывод из запоя",
      description: "Экстренная помощь 24/7. Выезд врача на дом в течение часа.",
      link: "/services"
    },
    {
      icon: "HeartPulse",
      title: "Детоксикация",
      description: "Очищение организма от токсинов в комфортном стационаре.",
      link: "/services"
    },
    {
      icon: "Brain",
      title: "Лечение наркомании",
      description: "Комплексная программа лечения и реабилитации.",
      link: "/services"
    },
    {
      icon: "Shield",
      title: "Кодирование",
      description: "Эффективные методы борьбы с алкогольной зависимостью.",
      link: "/services"
    }
  ];

  const advantages = [
    {
      icon: "Eye",
      title: "Анонимность",
      description: "Полная конфиденциальность. Не ставим на учёт."
    },
    {
      icon: "Award",
      title: "Лицензия",
      description: "Официальная лицензия на медицинскую деятельность."
    },
    {
      icon: "Clock",
      title: "24/7",
      description: "Круглосуточная помощь без выходных."
    },
    {
      icon: "Users",
      title: "Опыт",
      description: "Более 15 лет успешной работы."
    }
  ];

  const faqs = [
    {
      question: "Как быстро вы можете приехать?",
      answer: "Наш врач выезжает на дом в течение 30-60 минут после звонка. Работаем круглосуточно по всей Москве и области."
    },
    {
      question: "Гарантируете ли вы анонимность?",
      answer: "Да, мы гарантируем полную конфиденциальность. Не ставим на учёт, не передаём информацию третьим лицам. Все данные защищены."
    },
    {
      question: "Какие методы лечения вы используете?",
      answer: "Применяем только современные, научно обоснованные методы: медикаментозную терапию, психотерапию, реабилитацию. Программа подбирается индивидуально."
    },
    {
      question: "Можно ли оплатить лечение в рассрочку?",
      answer: "Да, мы предоставляем рассрочку на 3-6 месяцев без процентов. Принимаем наличные и безналичный расчёт."
    },
    {
      question: "Какова эффективность лечения?",
      answer: "При соблюдении всех рекомендаций эффективность лечения составляет более 95%. Важна мотивация пациента и поддержка близких."
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
              <Link to="/" className="text-primary font-semibold">Главная</Link>
              <Link to="/services" className="text-foreground/70 hover:text-primary transition">Услуги</Link>
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
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Помощь при алкогольной и наркотической зависимости
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Анонимно. Круглосуточно. Профессионально. Лицензированная клиника с опытом работы более 15 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+78001234567">
                  <Button size="lg" variant="secondary" className="gap-2 text-primary hover:bg-white w-full sm:w-auto">
                    <Icon name="Phone" size={20} />
                    Экстренный вызов
                  </Button>
                </a>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                    <Icon name="MessageSquare" size={20} />
                    Получить консультацию
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
            <Icon name="HeartPulse" className="w-full h-full" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный спектр наркологических услуг от экстренной помощи до полной реабилитации
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <Link key={idx} to={service.link}>
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon name={service.icon as any} className="text-primary" size={28} />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {advantages.map((advantage, idx) => (
                <Card key={idx} className="text-center border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={advantage.icon as any} className="text-primary" size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
                <p className="text-lg text-muted-foreground">
                  Ответы на самые распространённые вопросы о лечении
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto bg-white">
              <CardContent className="p-8 md:p-12 text-center">
                <Icon name="Phone" className="text-primary mx-auto mb-4" size={48} />
                <h2 className="text-3xl font-bold mb-4 text-foreground">Нужна срочная помощь?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Звоните прямо сейчас — наш врач выедет к вам в течение часа
                </p>
                <a href="tel:+78001234567">
                  <Button size="lg" className="gap-2 text-lg px-8">
                    <Icon name="Phone" size={24} />
                    8 (800) 123-45-67
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Бесплатный звонок по России • Работаем 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="HeartPulse" size={28} />
                <span className="text-xl font-bold">МедЦентр</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональная помощь при зависимостях. Лицензия № ЛО-77-01-123456
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/services" className="hover:text-white transition">Вывод из запоя</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Детоксикация</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Кодирование</Link></li>
                <li><Link to="/services" className="hover:text-white transition">Реабилитация</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">О клинике</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-white transition">О нас</Link></li>
                <li><Link to="/doctors" className="hover:text-white transition">Врачи</Link></li>
                <li><Link to="/prices" className="hover:text-white transition">Цены</Link></li>
                <li><Link to="/contacts" className="hover:text-white transition">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="tel:+78001234567" className="hover:text-white transition">
                    8 (800) 123-45-67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@medcentr.ru" className="hover:text-white transition">
                    info@medcentr.ru
                  </a>
                </li>
                <li>г. Москва, ул. Медицинская, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>© 2024 МедЦентр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
