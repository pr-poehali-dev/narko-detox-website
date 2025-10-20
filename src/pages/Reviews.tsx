import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна М.",
      date: "15 октября 2024",
      rating: 5,
      text: "Огромная благодарность всему коллективу клиники! Помогли моему мужу выйти из запоя и начать лечение. Врачи приехали быстро, работали профессионально и деликатно. Особенно хочу отметить доктора Смирнова — настоящий специалист своего дела. Рекомендую!",
      service: "Вывод из запоя"
    },
    {
      name: "Сергей К.",
      date: "8 октября 2024",
      rating: 5,
      text: "Проходил реабилитацию в клинике 3 месяца. Хочу сказать спасибо психологу Екатерине Владимировне за терпение и поддержку. Программа действительно работает, если сам этого хочешь. Уже полгода не употребляю, жизнь наладилась.",
      service: "Реабилитация"
    },
    {
      name: "Марина П.",
      date: "2 октября 2024",
      rating: 5,
      text: "Обратились в клинику для детоксикации сына. Очень переживали, но всё прошло хорошо. Условия комфортные, врачи внимательные, постоянно на связи. Цены адекватные. Спасибо вам за помощь и человеческое отношение!",
      service: "Детоксикация"
    },
    {
      name: "Дмитрий В.",
      date: "25 сентября 2024",
      rating: 5,
      text: "Кодировался от алкоголя у доктора Петрова. Всё прошло быстро и без боли. Врач подробно всё объяснил, ответил на все вопросы. Прошло уже 8 месяцев — никаких срывов. Чувствую себя отлично. Рекомендую эту клинику!",
      service: "Кодирование"
    },
    {
      name: "Елена С.",
      date: "18 сентября 2024",
      rating: 5,
      text: "Хочу выразить благодарность за помощь моему брату. Он прошёл полный курс лечения от наркозависимости. Сейчас работает, вернулся к нормальной жизни. Особое спасибо психотерапевту Марии Сергеевне — она творит чудеса!",
      service: "Лечение наркомании"
    },
    {
      name: "Александр Т.",
      date: "10 сентября 2024",
      rating: 5,
      text: "Вызывал врача на дом для вывода из запоя. Приехали за 40 минут, как и обещали. Всё сделали на высшем уровне. На следующий день чувствовал себя человеком. Цена соответствует качеству. Спасибо!",
      service: "Вывод из запоя"
    },
    {
      name: "Ольга Н.",
      date: "3 сентября 2024",
      rating: 5,
      text: "Проходила стационарное лечение в клинике. Палата чистая, питание хорошее, персонал вежливый. Врачи действительно заботятся о пациентах. После выписки продолжаю посещать групповую терапию. Очень помогает. Спасибо вам огромное!",
      service: "Стационарное лечение"
    },
    {
      name: "Павел Р.",
      date: "28 августа 2024",
      rating: 5,
      text: "Обращался за консультацией психолога. Екатерина Владимировна помогла разобраться в причинах зависимости и найти мотивацию для лечения. Очень компетентный специалист. Продолжаю работать с ней. Результаты есть!",
      service: "Психотерапия"
    },
    {
      name: "Наталья К.",
      date: "20 августа 2024",
      rating: 5,
      text: "Огромное спасибо всему коллективу клиники за спасение моего сына! Он прошел детоксикацию и реабилитацию. Сейчас уже год как не употребляет, поступил в институт. Вы вернули нам сына! Низкий вам поклон!",
      service: "Комплексное лечение"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Средний рейтинг" },
    { value: "500+", label: "Отзывов" },
    { value: "95%", label: "Рекомендуют нас" },
    { value: "15 лет", label: "На рынке" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <SEO
        title="Отзывы пациентов о МедЦентр — Реальные истории выздоровления"
        description="Отзывы пациентов наркологической клиники МедЦентр. Реальные истории лечения алкоголизма и наркомании. Читайте мнения о врачах, услугах и результатах."
        keywords="отзывы о наркологической клинике, отзывы пациентов, отзывы о лечении алкоголизма, отзывы о реабилитации"
      />

      <Navigation />

      <main>
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Отзывы наших пациентов
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Реальные истории людей, которые прошли лечение в нашей клинике. 
                Мы ценим каждый отзыв и благодарны за доверие.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {reviews.map((review, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="font-semibold text-lg">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                        ))}
                      </div>
                    </div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {review.service}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Оставьте свой отзыв</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ваше мнение очень важно для нас и поможет другим людям сделать правильный выбор
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+78001234567">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Icon name="Phone" size={20} />
                    Позвонить
                  </Button>
                </a>
                <a href="mailto:info@medcentr.ru">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    <Icon name="Mail" size={20} />
                    Написать письмо
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Начните свой путь к выздоровлению</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам людей, которые смогли побороть зависимость
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

export default Reviews;
