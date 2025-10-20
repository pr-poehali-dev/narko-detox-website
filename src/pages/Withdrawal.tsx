import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Withdrawal = () => {
  const benefits = [
    {
      icon: "Clock",
      title: "Выезд за 30-60 минут",
      description: "Бригада врачей прибудет в течение часа после вызова"
    },
    {
      icon: "Ambulance",
      title: "Полностью оборудованная бригада",
      description: "Все необходимое оборудование и препараты с собой"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Только сертифицированные препараты и опытные врачи"
    },
    {
      icon: "Eye",
      title: "Анонимность",
      description: "Приезжаем без опознавательных знаков и формы"
    }
  ];

  const stages = [
    {
      number: "1",
      title: "Вызов врача",
      description: "Звоните по телефону или оставляете заявку на сайте"
    },
    {
      number: "2",
      title: "Осмотр пациента",
      description: "Врач измеряет давление, пульс, оценивает состояние"
    },
    {
      number: "3",
      title: "Капельница",
      description: "Инфузионная терапия для детоксикации организма"
    },
    {
      number: "4",
      title: "Стабилизация",
      description: "Нормализация состояния и устранение симптомов"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <SEO
        title="Вывод из запоя на дому и в стационаре — МедЦентр Москва"
        description="Круглосуточный вывод из запоя на дому и в клинике. Выезд врача за 30-60 минут. Анонимно, безопасно, эффективно. Капельницы, детоксикация, стабилизация состояния."
        keywords="вывод из запоя, вывод из запоя на дому, вывод из запоя москва, капельница от запоя, вывод из запоя круглосуточно"
      />

      <Navigation />

      <main>
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Вывод из запоя
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Профессиональная помощь при алкогольном запое. Выезд на дом или лечение в стационаре. 
                Безопасные методы детоксикации и стабилизации состояния.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+78001234567">
                  <Button size="lg" variant="secondary" className="gap-2 text-primary w-full sm:w-auto">
                    <Icon name="Phone" size={20} />
                    Вызвать врача
                  </Button>
                </a>
                <Link to="/prices">
                  <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                    <Icon name="DollarSign" size={20} />
                    Узнать цены
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества нашей услуги</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon as any} className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как проходит процедура</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Вывод из запоя выполняется в 4 этапа
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, idx) => (
                <div key={idx} className="relative">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                        {stage.number}
                      </div>
                      <CardTitle className="text-xl mb-2">{stage.title}</CardTitle>
                      <p className="text-muted-foreground">{stage.description}</p>
                    </CardHeader>
                  </Card>
                  {idx < stages.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <Icon name="ArrowRight" className="text-primary" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Что входит в процедуру</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Syringe" className="text-primary" size={24} />
                      Инфузионная терапия
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Детоксикация организма</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Восстановление водно-солевого баланса</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Витаминная поддержка</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="HeartPulse" className="text-primary" size={24} />
                      Симптоматическая терапия
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Нормализация давления и пульса</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Устранение тремора и тревожности</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>Нормализация сна</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Стоимость услуги</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Вывод из запоя на дому от 3 500 рублей. Цена зависит от состояния пациента и необходимых препаратов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/prices">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Icon name="FileText" size={20} />
                    Полный прайс-лист
                  </Button>
                </Link>
                <a href="tel:+78001234567">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    <Icon name="Phone" size={20} />
                    Узнать точную стоимость
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужна помощь прямо сейчас?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Звоните — бригада выедет в течение 30-60 минут
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

export default Withdrawal;
