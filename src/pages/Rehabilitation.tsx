import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Rehabilitation = () => {
  const stages = [
    {
      number: "1",
      title: "Адаптация",
      duration: "1-2 недели",
      description: "Знакомство с программой, режимом дня и специалистами"
    },
    {
      number: "2",
      title: "Интеграция",
      duration: "1-2 месяца",
      description: "Работа с психологом, групповая терапия, осознание проблемы"
    },
    {
      number: "3",
      title: "Стабилизация",
      duration: "2-3 месяца",
      description: "Формирование новых привычек, навыков трезвой жизни"
    },
    {
      number: "4",
      title: "Социализация",
      duration: "1-2 месяца",
      description: "Подготовка к возвращению в общество, поиск работы"
    }
  ];

  const methods = [
    {
      icon: "Brain",
      title: "Психотерапия",
      description: "Индивидуальная и групповая работа с психологами"
    },
    {
      icon: "Users",
      title: "Группы поддержки",
      description: "12-шаговые программы и терапевтические сообщества"
    },
    {
      icon: "Activity",
      title: "Физическая активность",
      description: "Спорт, йога, прогулки на свежем воздухе"
    },
    {
      icon: "Briefcase",
      title: "Трудотерапия",
      description: "Обучение новым навыкам, восстановление работоспособности"
    },
    {
      icon: "Book",
      title: "Образование",
      description: "Лекции о зависимости, здоровом образе жизни"
    },
    {
      icon: "Heart",
      title: "Работа с семьей",
      description: "Семейная терапия, восстановление отношений"
    }
  ];

  const conditions = [
    {
      icon: "Home",
      title: "Комфортное проживание",
      description: "Благоустроенные комнаты на 2-4 человека с удобствами"
    },
    {
      icon: "Utensils",
      title: "Питание",
      description: "4-разовое сбалансированное питание, диетическое меню"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Охраняемая территория, видеонаблюдение 24/7"
    },
    {
      icon: "Wifi",
      title: "Досуг",
      description: "Библиотека, настольные игры, спортзал, телевизор"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <SEO
        title="Реабилитация наркозависимых и алкоголиков — МедЦентр"
        description="Реабилитационный центр для лечения зависимостей. Программы от 3 до 6 месяцев. Индивидуальная и групповая терапия. Комфортные условия проживания. Эффективность 95%."
        keywords="реабилитация наркозависимых, реабилитация алкоголиков, реабилитационный центр, лечение зависимостей, программа 12 шагов"
      />

      <Navigation />

      <main>
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Реабилитация зависимых
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Комплексная программа восстановления для людей с алкогольной и наркотической зависимостью. 
                Психологическая поддержка, социальная адаптация, возвращение к полноценной жизни.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+78001234567">
                  <Button size="lg" variant="secondary" className="gap-2 text-primary w-full sm:w-auto">
                    <Icon name="Phone" size={20} />
                    Записаться на программу
                  </Button>
                </a>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                    <Icon name="Calendar" size={20} />
                    Консультация психолога
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Этапы реабилитации</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Программа разделена на 4 последовательных этапа
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, idx) => (
                <Card key={idx} className="relative">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                      {stage.number}
                    </div>
                    <CardTitle className="text-xl mb-2">{stage.title}</CardTitle>
                    <div className="text-sm text-primary font-semibold mb-2">{stage.duration}</div>
                    <p className="text-muted-foreground text-sm">{stage.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Методы реабилитации</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексный подход для полного восстановления
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methods.map((method, idx) => (
                <Card key={idx} className="hover:shadow-lg transition">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={method.icon as any} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-lg mb-2">{method.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Условия проживания</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комфортная и безопасная среда для выздоровления
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map((condition, idx) => (
                <Card key={idx} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={condition.icon as any} className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-lg mb-2">{condition.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{condition.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Что вы получите</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Для пациента</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Устойчивая ремиссия без срывов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Новые навыки и инструменты борьбы с зависимостью</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Улучшение физического и психического здоровья</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Уверенность в себе и своем будущем</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Поддержку сообщества и новые знакомства</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Для семьи</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Возвращение близкого человека</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Восстановление доверия в семье</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Обучение взаимодействию с зависимым</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Снижение уровня стресса и тревоги</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Возможность планировать будущее</span>
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
              <h2 className="text-3xl font-bold mb-6">Стоимость программ</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Реабилитация от 35 000 рублей в месяц. Доступна рассрочка. Цена зависит от длительности программы и условий проживания.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/prices">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Icon name="FileText" size={20} />
                    Подробные цены
                  </Button>
                </Link>
                <a href="tel:+78001234567">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    <Icon name="Phone" size={20} />
                    Получить консультацию
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Сделайте первый шаг к выздоровлению</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Позвоните нам — мы поможем подобрать оптимальную программу реабилитации
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

export default Rehabilitation;
