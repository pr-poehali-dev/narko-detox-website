import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "МедЦентр",
    "description": "Наркологическая клиника в Москве. Лечение алкоголизма и наркомании.",
    "telephone": "+7-800-123-45-67",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Медицинская, д. 15",
      "addressLocality": "Москва",
      "addressCountry": "RU"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "3500-280000 RUB",
    "medicalSpecialty": "Наркология"
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    {
      icon: "Siren",
      title: "Вывод из запоя",
      description: "Экстренная помощь 24/7. Выезд врача на дом в течение часа.",
      link: "/withdrawal"
    },
    {
      icon: "HeartPulse",
      title: "Детоксикация",
      description: "Очищение организма от токсинов в комфортном стационаре.",
      link: "/detox"
    },
    {
      icon: "Brain",
      title: "Реабилитация",
      description: "Комплексная программа восстановления и социальной адаптации.",
      link: "/rehabilitation"
    },
    {
      icon: "Shield",
      title: "Все услуги",
      description: "Полный каталог наркологических услуг клиники.",
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

  const stats = [
    { value: "15+", label: "лет опыта" },
    { value: "5000+", label: "пациентов" },
    { value: "98%", label: "эффективность" },
    { value: "24/7", label: "поддержка" }
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
      <SEO
        title="МедЦентр — Лечение алкоголизма и наркомании в Москве | Вывод из запоя"
        description="Наркологическая клиника в Москве. Вывод из запоя, детоксикация, лечение наркомании. Анонимно, круглосуточно. Выезд врача на дом за час. ☎ 8 (800) 123-45-67"
        keywords="наркологическая клиника москва, вывод из запоя, детоксикация, лечение алкоголизма, лечение наркомании, кодирование, нарколог на дом, реабилитация"
        schema={organizationSchema}
      />

      <Navigation />

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Основные услуги</h2>
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужна помощь?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Звоните прямо сейчас. Наши специалисты готовы помочь 24 часа в сутки, 7 дней в неделю
            </p>
            <a href="tel:+78001234567">
              <Button size="lg" variant="secondary" className="gap-2 text-primary">
                <Icon name="Phone" size={20} />
                8 (800) 123-45-67
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
