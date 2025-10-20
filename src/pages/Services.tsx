import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "Siren",
      title: "Вывод из запоя",
      description: "Экстренная помощь при алкогольном опьянении. Круглосуточный выезд врача на дом. Капельницы, детоксикация, восстановление организма.",
      price: "от 3 500 ₽",
      link: "/withdrawal",
      features: ["Выезд врача 24/7", "Анонимно", "Капельница на дому", "Быстрое улучшение"]
    },
    {
      id: 2,
      icon: "HeartPulse",
      title: "Детоксикация организма",
      description: "Комплексное очищение организма от токсинов и продуктов распада наркотических веществ. Медикаментозная поддержка.",
      price: "от 8 500 ₽/сутки",
      link: "/detox",
      features: ["Стационар", "Круглосуточное наблюдение", "Современное оборудование", "Опытные врачи"]
    },
    {
      id: 3,
      icon: "Brain",
      title: "Реабилитация",
      description: "Программы восстановления от 1 до 6 месяцев. Психологическая помощь, социальная адаптация, возвращение к нормальной жизни.",
      price: "от 35 000 ₽/мес",
      link: "/rehabilitation",
      features: ["Индивидуальная терапия", "Групповые занятия", "Комфортные условия", "Высокая эффективность"]
    },
    {
      id: 4,
      icon: "Activity",
      title: "Кодирование от алкоголизма",
      description: "Медикаментозное и психотерапевтическое кодирование. Различные методики. Индивидуальный подход к каждому пациенту.",
      price: "от 4 000 ₽",
      link: "/services",
      features: ["Консультация нарколога", "Выбор метода", "Гарантия", "Поддержка после"]
    },
    {
      id: 5,
      icon: "Pill",
      title: "Лечение наркомании",
      description: "Комплексная терапия наркотической зависимости. Медикаментозное лечение, психотерапия, реабилитация.",
      price: "от 15 000 ₽",
      link: "/services",
      features: ["Полная диагностика", "Индивидуальный план", "Конфиденциальность", "Современные методы"]
    },
    {
      id: 6,
      icon: "Users",
      title: "Психотерапия",
      description: "Индивидуальные и групповые сеансы с психотерапевтом. Работа с созависимостью, семейная терапия.",
      price: "от 3 000 ₽",
      link: "/services",
      features: ["Опытные специалисты", "Разные методики", "Семейная терапия", "Группы поддержки"]
    },
    {
      id: 7,
      icon: "Stethoscope",
      title: "Консультация нарколога",
      description: "Первичный осмотр, диагностика, составление индивидуального плана лечения. Анонимно и конфиденциально.",
      price: "от 2 000 ₽",
      link: "/services",
      features: ["Анонимно", "Полная диагностика", "План лечения", "Рекомендации"]
    },
    {
      id: 8,
      icon: "Home",
      title: "Стационарное лечение",
      description: "Размещение в комфортабельном стационаре с круглосуточным наблюдением врачей. Полный курс лечения.",
      price: "от 7 000 ₽/сутки",
      link: "/services",
      features: ["Комфортные палаты", "Питание", "Медицинский контроль", "Безопасность"]
    },
    {
      id: 9,
      icon: "Syringe",
      title: "Подшивка от алкоголизма",
      description: "Имплантация препарата пролонгированного действия. Длительная защита от срывов.",
      price: "от 8 000 ₽",
      link: "/services",
      features: ["Эффект до 5 лет", "Безопасно", "Минимум побочных", "Консультации"]
    },
    {
      id: 10,
      icon: "Ambulance",
      title: "Экстренная госпитализация",
      description: "Срочная доставка пациента в клинику. Бригада с реанимационным оборудованием. Круглосуточно.",
      price: "от 5 000 ₽",
      link: "/services",
      features: ["Выезд 24/7", "Реанимация", "Быстрая доставка", "Опытная бригада"]
    },
    {
      id: 11,
      icon: "FileText",
      title: "Справки и документы",
      description: "Оформление медицинских справок для работы, учебы, ГИБДД. Официальные документы с печатью клиники.",
      price: "от 1 500 ₽",
      link: "/services",
      features: ["Быстрое оформление", "Официально", "Все виды справок", "С доставкой"]
    },
    {
      id: 12,
      icon: "MessageSquare",
      title: "Онлайн-консультация",
      description: "Консультация нарколога или психолога онлайн. Удобно для первичной оценки ситуации и получения рекомендаций.",
      price: "Бесплатно",
      link: "/contacts",
      features: ["Видеосвязь", "Анонимно", "Удобное время", "Без визита"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <SEO
        title="Услуги наркологической клиники МедЦентр — Полный каталог"
        description="Все услуги наркологической клиники: вывод из запоя, детоксикация, кодирование, лечение наркомании, реабилитация. Анонимно, круглосуточно. Выезд врача на дом."
        keywords="услуги нарколога, наркологические услуги, вывод из запоя, детоксикация, кодирование, лечение алкоголизма, лечение наркомании"
      />

      <Navigation />

      <main>
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Каталог услуг
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Полный спектр наркологических услуг для лечения алкогольной и наркотической зависимости. 
                Помощь на любой стадии заболевания.
              </p>
              <a href="tel:+78001234567">
                <Button size="lg" variant="secondary" className="gap-2 text-primary">
                  <Icon name="Phone" size={20} />
                  Получить консультацию
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="w-full">Подробнее</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Почему пациенты выбирают нас</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Award" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Лицензированная клиника</h3>
                    <p className="text-muted-foreground">Официальная лицензия на медицинскую деятельность. Все специалисты имеют сертификаты.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Работаем круглосуточно</h3>
                    <p className="text-muted-foreground">Экстренная помощь 24/7 без выходных и праздников. Выезд врача в любое время.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Eye" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Полная анонимность</h3>
                    <p className="text-muted-foreground">Не ставим на учёт, не передаём данные. Конфиденциальность гарантирована.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="TrendingUp" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Высокая эффективность</h3>
                    <p className="text-muted-foreground">Более 95% пациентов достигают устойчивой ремиссии при соблюдении рекомендаций.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Позвоните нам для подробной консультации. Ответим на все вопросы и подберем оптимальный план лечения.
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

export default Services;
