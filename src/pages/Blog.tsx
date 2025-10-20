import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Признаки алкогольной зависимости: когда пора обратиться к врачу",
      excerpt: "Алкоголизм развивается постепенно. Важно вовремя распознать первые признаки зависимости и обратиться за помощью к специалистам.",
      category: "Алкоголизм",
      date: "15 октября 2024",
      readTime: "5 мин",
      icon: "Wine"
    },
    {
      id: 2,
      title: "Детоксикация организма: что это и зачем нужно",
      excerpt: "Детоксикация — первый и важнейший этап лечения зависимости. Разбираем, как проходит процедура и почему она необходима.",
      category: "Лечение",
      date: "12 октября 2024",
      readTime: "7 мин",
      icon: "Droplet"
    },
    {
      id: 3,
      title: "Как поддержать близкого человека с зависимостью",
      excerpt: "Советы психологов о том, как правильно вести себя с зависимым, не допустить созависимости и помочь ему начать лечение.",
      category: "Для родственников",
      date: "8 октября 2024",
      readTime: "6 мин",
      icon: "Users"
    },
    {
      id: 4,
      title: "Мифы о кодировании от алкоголизма",
      excerpt: "Развенчиваем популярные заблуждения о кодировании. Что правда, а что миф? Объясняет врач-нарколог с 20-летним стажем.",
      category: "Кодирование",
      date: "5 октября 2024",
      readTime: "5 мин",
      icon: "Shield"
    },
    {
      id: 5,
      title: "Стадии лечения наркомании: от детокса до социализации",
      excerpt: "Полный путь от первого обращения в клинику до возвращения к полноценной жизни. Разбираем каждый этап подробно.",
      category: "Наркомания",
      date: "1 октября 2024",
      readTime: "10 мин",
      icon: "TrendingUp"
    },
    {
      id: 6,
      title: "Программа 12 шагов: как это работает",
      excerpt: "Самая известная программа реабилитации в мире. История создания, принципы работы и почему она эффективна.",
      category: "Реабилитация",
      date: "28 сентября 2024",
      readTime: "8 мин",
      icon: "BookOpen"
    },
    {
      id: 7,
      title: "Созависимость: как помочь себе, помогая другому",
      excerpt: "Созависимость — болезнь родственников зависимых. Признаки, последствия и способы преодоления. Консультация психолога.",
      category: "Для родственников",
      date: "25 сентября 2024",
      readTime: "6 мин",
      icon: "Heart"
    },
    {
      id: 8,
      title: "Запой: причины, последствия и методы лечения",
      excerpt: "Что такое запой с медицинской точки зрения? Почему он опасен и как из него правильно выйти? Рекомендации нарколога.",
      category: "Алкоголизм",
      date: "20 сентября 2024",
      readTime: "7 мин",
      icon: "AlertTriangle"
    },
    {
      id: 9,
      title: "Восстановление после реабилитации: первые шаги",
      excerpt: "Закончилась программа реабилитации — что дальше? Как адаптироваться к жизни вне центра и не сорваться.",
      category: "Реабилитация",
      date: "15 сентября 2024",
      readTime: "9 мин",
      icon: "Footprints"
    }
  ];

  const categories = [
    { name: "Все статьи", count: articles.length },
    { name: "Алкоголизм", count: 2 },
    { name: "Наркомания", count: 1 },
    { name: "Лечение", count: 1 },
    { name: "Реабилитация", count: 2 },
    { name: "Для родственников", count: 2 },
    { name: "Кодирование", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <SEO
        title="Блог о лечении зависимостей — МедЦентр"
        description="Статьи о лечении алкоголизма и наркомании. Советы врачей-наркологов и психологов. Информация для пациентов и их родственников."
        keywords="блог о наркологии, статьи о лечении алкоголизма, советы нарколога, информация о зависимостях"
      />

      <Navigation />

      <main>
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Блог МедЦентр
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Полезные статьи о лечении зависимостей от наших специалистов. 
                Информация для пациентов и их родственников.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category, idx) => (
                <Badge key={idx} variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition">
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={article.icon as any} className="text-primary" size={28} />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-3 line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <span className="text-primary text-sm font-medium hover:underline">Читать далее →</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Не нашли ответ на свой вопрос?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Позвоните нам или запишитесь на бесплатную консультацию. 
                Наши специалисты ответят на все ваши вопросы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+78001234567">
                  <Link to="/contacts">
                    <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full sm:w-auto">
                      <Icon name="Calendar" size={20} />
                      Записаться на консультацию
                    </button>
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужна помощь?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Звоните прямо сейчас — мы работаем круглосуточно
            </p>
            <a href="tel:+78001234567">
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8">
                <Icon name="Phone" size={20} />
                8 (800) 123-45-67
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
