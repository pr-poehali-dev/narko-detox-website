import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Doctors = () => {
  const doctors = [
    {
      name: "Смирнов Алексей Петрович",
      role: "Главный врач, врач-нарколог",
      experience: "20 лет",
      education: "Первый МГМУ им. И.М. Сеченова",
      specialization: ["Лечение алкоголизма", "Кодирование", "Детоксикация"],
      category: "Высшая категория"
    },
    {
      name: "Иванова Мария Сергеевна",
      role: "Врач-нарколог, психотерапевт",
      experience: "15 лет",
      education: "РНИМУ им. Н.И. Пирогова",
      specialization: ["Лечение наркомании", "Психотерапия", "Реабилитация"],
      category: "Высшая категория"
    },
    {
      name: "Петров Дмитрий Александрович",
      role: "Врач-нарколог",
      experience: "12 лет",
      education: "МГМСУ им. А.И. Евдокимова",
      specialization: ["Вывод из запоя", "Детоксикация", "Медикаментозное лечение"],
      category: "Первая категория"
    },
    {
      name: "Соколова Екатерина Владимировна",
      role: "Психолог, психотерапевт",
      experience: "10 лет",
      education: "МГУ им. М.В. Ломоносова",
      specialization: ["Индивидуальная терапия", "Групповая терапия", "Семейная терапия"],
      category: "Высшая категория"
    },
    {
      name: "Козлов Сергей Николаевич",
      role: "Врач анестезиолог-реаниматолог",
      experience: "18 лет",
      education: "РНИМУ им. Н.И. Пирогова",
      specialization: ["Детоксикация", "Реанимация", "Интенсивная терапия"],
      category: "Высшая категория"
    },
    {
      name: "Новикова Анна Игоревна",
      role: "Врач-психиатр, нарколог",
      experience: "14 лет",
      education: "СПбГМУ им. И.П. Павлова",
      specialization: ["Двойная диагностика", "Психиатрическая помощь", "Реабилитация"],
      category: "Высшая категория"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <Navigation />
      <SEO
        title="Врачи наркологи МедЦентр | Опытные специалисты"
        description="Команда опытных врачей-наркологов и психотерапевтов. Высшая квалификация, стаж от 10 лет. Индивидуальный подход к каждому пациенту."
        keywords="врачи наркологи, опытные наркологи, психотерапевт, специалисты по зависимостям"
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
              <Link to="/about" className="text-foreground/70 hover:text-primary transition">О клинике</Link>
              <Link to="/doctors" className="text-primary font-semibold">Врачи</Link>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши врачи</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Команда опытных специалистов с высшей квалификацией в области наркологии и психотерапии
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon name="UserRound" className="text-primary" size={40} />
                    </div>
                    <CardTitle className="text-xl text-center">{doctor.name}</CardTitle>
                    <CardDescription className="text-center">{doctor.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Award" className="text-primary shrink-0" size={16} />
                        <span className="text-muted-foreground">{doctor.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Calendar" className="text-primary shrink-0" size={16} />
                        <span className="text-muted-foreground">Стаж: {doctor.experience}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Icon name="GraduationCap" className="text-primary shrink-0 mt-0.5" size={16} />
                        <span className="text-muted-foreground">{doctor.education}</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold mb-2">Специализация:</div>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialization.map((spec, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
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
                <h2 className="text-2xl font-bold mb-4">Запишитесь на консультацию</h2>
                <p className="text-muted-foreground mb-6">
                  Наши специалисты ответят на все вопросы и подберут программу лечения
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
                      Оставить заявку
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

export default Doctors;