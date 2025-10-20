import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Prices = () => {
  const priceCategories = [
    {
      title: "Вывод из запоя",
      services: [
        { name: "Выезд врача на дом", price: "3 500 ₽" },
        { name: "Стандартная капельница", price: "4 000 ₽" },
        { name: "Усиленная детоксикация", price: "6 000 ₽" },
        { name: "VIP программа на дому", price: "10 000 ₽" }
      ]
    },
    {
      title: "Детоксикация в стационаре",
      services: [
        { name: "Детоксикация (1 сутки)", price: "5 000 ₽" },
        { name: "Детоксикация (3 суток)", price: "14 000 ₽" },
        { name: "Ускоренная детоксикация УБОД", price: "45 000 ₽" },
        { name: "VIP палата (доплата в сутки)", price: "+ 3 000 ₽" }
      ]
    },
    {
      title: "Кодирование",
      services: [
        { name: "Консультация нарколога", price: "2 000 ₽" },
        { name: "Кодирование (гипноз)", price: "5 000 ₽" },
        { name: "Медикаментозное кодирование", price: "7 000 ₽" },
        { name: "Имплантация препарата", price: "12 000 ₽" }
      ]
    },
    {
      title: "Лечение наркомании",
      services: [
        { name: "Консультация специалиста", price: "3 000 ₽" },
        { name: "Стационарное лечение (1 месяц)", price: "от 80 000 ₽" },
        { name: "Комплексная программа (3 месяца)", price: "от 200 000 ₽" },
        { name: "Амбулаторное лечение (консультация)", price: "4 000 ₽" }
      ]
    },
    {
      title: "Психотерапия",
      services: [
        { name: "Индивидуальная консультация психолога", price: "3 000 ₽" },
        { name: "Семейная терапия (1 сеанс)", price: "5 000 ₽" },
        { name: "Групповая терапия (1 сеанс)", price: "2 000 ₽" },
        { name: "Курс психотерапии (10 сеансов)", price: "25 000 ₽" }
      ]
    },
    {
      title: "Реабилитация",
      services: [
        { name: "Пребывание в реабилитационном центре (1 месяц)", price: "50 000 ₽" },
        { name: "Программа социальной адаптации", price: "60 000 ₽" },
        { name: "Полный курс реабилитации (6 месяцев)", price: "280 000 ₽" },
        { name: "Постреабилитационная поддержка (месяц)", price: "15 000 ₽" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <Navigation />
      <SEO
        title="Цены на услуги наркологической клиники | Стоимость лечения"
        description="Цены на наркологические услуги: вывод из запоя от 3500₽, детоксикация от 5000₽, кодирование от 4000₽. Прозрачное ценообразование. Рассрочка."
        keywords="цены на лечение алкоголизма, стоимость вывода из запоя, цена детоксикации, кодирование стоимость"
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
              <Link to="/doctors" className="text-foreground/70 hover:text-primary transition">Врачи</Link>
              <Link to="/prices" className="text-primary font-semibold">Цены</Link>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Цены на услуги</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Прозрачное ценообразование. Возможна рассрочка. Окончательная стоимость определяется после консультации.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {priceCategories.map((category, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription>Актуальные цены на {new Date().getFullYear()} год</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-2/3">Услуга</TableHead>
                          <TableHead className="text-right">Стоимость</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.services.map((service, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{service.name}</TableCell>
                            <TableCell className="text-right text-primary font-semibold">{service.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="CreditCard" className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Рассрочка</h3>
                  <p className="text-sm text-muted-foreground">Возможна рассрочка платежа на 3-6 месяцев без процентов</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Договор</h3>
                  <p className="text-sm text-muted-foreground">Все услуги оказываются по официальному договору</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="FileText" className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Документы</h3>
                  <p className="text-sm text-muted-foreground">Предоставляем все необходимые документы для отчётности</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto bg-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Нужна консультация по ценам?</h2>
                <p className="text-muted-foreground mb-6">
                  Позвоните нам, и мы подробно расскажем о стоимости лечения в вашем случае
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

export default Prices;