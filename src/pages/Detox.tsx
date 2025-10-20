import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Detox = () => {
  const methods = [
    {
      icon: "Droplet",
      title: "Инфузионная терапия",
      description: "Капельницы для очищения крови от токсинов и метаболитов"
    },
    {
      icon: "Pill",
      title: "Медикаментозная поддержка",
      description: "Препараты для защиты печени, почек и нервной системы"
    },
    {
      icon: "Activity",
      title: "Аппаратная детоксикация",
      description: "Плазмаферез и гемосорбция для глубокого очищения"
    },
    {
      icon: "Leaf",
      title: "Витаминотерапия",
      description: "Восстановление дефицита витаминов и микроэлементов"
    }
  ];

  const programs = [
    {
      title: "Базовая программа",
      duration: "3-5 дней",
      price: "от 8 500 ₽/сутки",
      features: [
        "Размещение в палате на 2-4 человека",
        "Инфузионная терапия",
        "Медикаментозная поддержка",
        "Контроль врача 2 раза в день",
        "Трехразовое питание"
      ]
    },
    {
      title: "Стандартная программа",
      duration: "5-7 дней",
      price: "от 12 000 ₽/сутки",
      features: [
        "Размещение в палате на 2 человека",
        "Расширенная детоксикация",
        "Гепатопротекторы и ноотропы",
        "Консультация психотерапевта",
        "Контроль врача 3 раза в день",
        "Диетическое питание"
      ],
      popular: true
    },
    {
      title: "VIP программа",
      duration: "7-10 дней",
      price: "от 18 000 ₽/сутки",
      features: [
        "Одноместная палата повышенной комфортности",
        "Комплексная детоксикация с аппаратными методами",
        "Индивидуальная работа с психологом",
        "Круглосуточный контроль врача",
        "Персональное меню",
        "Массаж и физиотерапия"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <SEO
        title="Детоксикация организма от наркотиков и алкоголя — МедЦентр"
        description="Медицинская детоксикация в стационаре. Капельницы, плазмаферез, очищение крови. Комфортные палаты, опытные врачи. Анонимно и безопасно."
        keywords="детоксикация организма, детоксикация от наркотиков, детоксикация от алкоголя, очищение организма, плазмаферез, детокс в клинике"
      />

      <Navigation />

      <main>
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Детоксикация организма
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Медицинское очищение организма от токсинов и ядов в комфортных условиях стационара. 
                Современные методы, безопасные препараты, круглосуточный контроль врачей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+78001234567">
                  <Button size="lg" variant="secondary" className="gap-2 text-primary w-full sm:w-auto">
                    <Icon name="Phone" size={20} />
                    Записаться на лечение
                  </Button>
                </a>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                    <Icon name="MessageSquare" size={20} />
                    Бесплатная консультация
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Методы детоксикации</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Применяем комплексный подход для эффективного очищения организма
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methods.map((method, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={method.icon as any} className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-lg mb-2">{method.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Программы детоксикации</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите оптимальный вариант лечения
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program, idx) => (
                <Card key={idx} className={`relative ${program.popular ? 'border-primary border-2' : ''}`}>
                  {program.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Популярный выбор
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                    <div className="text-muted-foreground mb-2">{program.duration}</div>
                    <div className="text-3xl font-bold text-primary">{program.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {program.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={program.popular ? 'default' : 'outline'}>
                      Выбрать программу
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Показания к детоксикации</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Wine" className="text-primary" size={24} />
                      Алкогольная зависимость
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Выход из длительного запоя</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Подготовка к кодированию</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Хроническая алкогольная интоксикация</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Pill" className="text-primary" size={24} />
                      Наркотическая зависимость
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Опиатная зависимость</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Психостимуляторы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Синтетические наркотики</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Начните лечение сегодня</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Звоните для консультации и записи на детоксикацию
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

export default Detox;
