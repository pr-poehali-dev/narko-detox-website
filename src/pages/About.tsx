import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const advantages = [
    {
      icon: "ShieldCheck",
      title: "Лицензированная клиника",
      description: "Официальная лицензия на медицинскую деятельность. Все документы в порядке."
    },
    {
      icon: "Users",
      title: "Опытные специалисты",
      description: "Врачи высшей категории с опытом работы от 10 лет. Регулярное повышение квалификации."
    },
    {
      icon: "Eye",
      title: "Полная анонимность",
      description: "Не ставим на учёт. Конфиденциальность гарантируется. Никакой передачи данных третьим лицам."
    },
    {
      icon: "Clock",
      title: "Работаем 24/7",
      description: "Круглосуточная помощь без выходных и праздников. Быстрый выезд врача на дом."
    },
    {
      icon: "Award",
      title: "Современное оборудование",
      description: "Новейшее медицинское оборудование. Комфортные условия стационара."
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description: "Персональная программа лечения. Внимание к каждому пациенту и его близким."
    }
  ];

  const stats = [
    { number: "15+", label: "лет работы" },
    { number: "5000+", label: "пациентов" },
    { number: "20+", label: "специалистов" },
    { number: "95%", label: "успешных случаев" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <Navigation />
      <SEO
        title="О наркологической клинике МедЦентр | 15 лет опыта"
        description="Наркологическая клиника МедЦентр — 15 лет успешной работы. Лицензированная клиника, опытные врачи, современное оборудование. Анонимность гарантирована."
        keywords="о наркологической клинике, лицензия наркологической клиники, опыт работы, отзывы пациентов"
      />
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="HeartPulse" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">МедЦентр</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground/70 hover:text-primary transition">Главная</Link>
              <Link to="/services" className="text-foreground/70 hover:text-primary transition">Услуги</Link>
              <Link to="/about" className="text-primary font-semibold">О клинике</Link>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">О нашей клинике</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              МедЦентр — современная наркологическая клиника с 15-летним опытом помощи людям
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Мы помогаем людям справиться с зависимостью и вернуться к полноценной жизни. 
                  Наша команда профессионалов использует современные методики лечения, 
                  доказавшие свою эффективность.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  В нашей клинике созданы комфортные условия для лечения и реабилитации. 
                  Мы гарантируем полную анонимность и индивидуальный подход к каждому пациенту.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Наша цель — не просто избавить от зависимости, но и помочь человеку 
                  построить новую жизнь без алкоголя и наркотиков.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center">Наши преимущества</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, idx) => (
                <Card key={idx} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={advantage.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto bg-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Готовы начать путь к выздоровлению?</h2>
                <p className="text-muted-foreground mb-6">
                  Свяжитесь с нами для бесплатной консультации
                </p>
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

      <Footer />
    </div>
  );
};

export default About;