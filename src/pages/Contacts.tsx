import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const Contacts = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "МедЦентр",
    "telephone": "+7-800-123-45-67",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Медицинская, д. 15",
      "addressLocality": "Москва",
      "addressCountry": "RU"
    },
    "openingHours": "Mo-Su 00:00-23:59"
  };
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <SEO
        title="Контакты наркологической клиники МедЦентр | Телефон, адрес"
        description="Контакты наркологической клиники МедЦентр. Адрес: Москва, ул. Медицинская, 15. Телефон: 8 (800) 123-45-67. Круглосуточно."
        keywords="наркологическая клиника адрес, наркологическая клиника телефон, контакты нарколога, как добраться"
        schema={contactSchema}
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
              <Link to="/prices" className="text-foreground/70 hover:text-primary transition">Цены</Link>
              <Link to="/contacts" className="text-primary font-semibold">Контакты</Link>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Свяжитесь с нами удобным способом. Работаем круглосуточно, без выходных.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Как с нами связаться</h2>
                
                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Icon name="Phone" className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Телефоны</h3>
                          <div className="space-y-1 text-muted-foreground">
                            <div>
                              <a href="tel:+78001234567" className="text-primary hover:underline">
                                8 (800) 123-45-67
                              </a>
                              {" "}— бесплатный по России
                            </div>
                            <div>
                              <a href="tel:+74951234567" className="text-primary hover:underline">
                                +7 (495) 123-45-67
                              </a>
                              {" "}— Москва
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Icon name="Mail" className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Email</h3>
                          <a href="mailto:info@medcentr.ru" className="text-primary hover:underline">
                            info@medcentr.ru
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Icon name="MapPin" className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Адрес</h3>
                          <p className="text-muted-foreground">
                            г. Москва, ул. Медицинская, д. 15<br />
                            Метро Проспект Мира (5 минут пешком)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Icon name="Clock" className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Режим работы</h3>
                          <p className="text-muted-foreground">
                            Круглосуточно, без выходных<br />
                            Приём по записи и экстренная помощь
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Shield" className="text-primary" size={20} />
                      Гарантируем конфиденциальность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Все консультации и лечение проводятся анонимно. 
                      Мы не передаём информацию третьим лицам и не ставим на учёт.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                    <CardDescription>
                      Заполните форму, и мы свяжемся с вами в течение 10 минут
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input
                          id="name"
                          placeholder="Как к вам обращаться?"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Сообщение (необязательно)</Label>
                        <Textarea
                          id="message"
                          placeholder="Опишите ситуацию или задайте вопрос"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full gap-2">
                        <Icon name="Send" size={18} />
                        Отправить заявку
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </CardContent>
                </Card>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <a href="https://wa.me/78001234567" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full gap-2">
                      <Icon name="MessageCircle" size={18} />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="https://t.me/medcentr" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full gap-2">
                      <Icon name="Send" size={18} />
                      Telegram
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Как нас найти</h2>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" className="text-muted-foreground mx-auto mb-2" size={48} />
                    <p className="text-muted-foreground">Карта загружается...</p>
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <Icon name="Car" className="text-primary mx-auto mb-2" size={24} />
                    <p className="text-sm font-semibold">На автомобиле</p>
                    <p className="text-xs text-muted-foreground">Бесплатная парковка</p>
                  </div>
                  <div>
                    <Icon name="Train" className="text-primary mx-auto mb-2" size={24} />
                    <p className="text-sm font-semibold">На метро</p>
                    <p className="text-xs text-muted-foreground">5 минут от м. Проспект Мира</p>
                  </div>
                  <div>
                    <Icon name="Accessibility" className="text-primary mx-auto mb-2" size={24} />
                    <p className="text-sm font-semibold">Доступность</p>
                    <p className="text-xs text-muted-foreground">Пандус, лифт</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">© 2024 МедЦентр. Все права защищены. Лицензия № ЛО-77-01-123456</p>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;