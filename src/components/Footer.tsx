import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="HeartPulse" className="text-primary" size={32} />
              <span className="text-xl font-bold">МедЦентр</span>
            </div>
            <p className="text-gray-400 text-sm">
              Наркологическая клиника с опытом работы более 15 лет. Анонимная помощь 24/7.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/withdrawal" className="hover:text-primary transition">Вывод из запоя</Link></li>
              <li><Link to="/detox" className="hover:text-primary transition">Детоксикация</Link></li>
              <li><Link to="/rehabilitation" className="hover:text-primary transition">Реабилитация</Link></li>
              <li><Link to="/services" className="hover:text-primary transition">Все услуги</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">О клинике</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-primary transition">О нас</Link></li>
              <li><Link to="/doctors" className="hover:text-primary transition">Врачи</Link></li>
              <li><Link to="/prices" className="hover:text-primary transition">Цены</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition">Отзывы</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+78001234567" className="hover:text-primary transition">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@medcentr.ru" className="hover:text-primary transition">info@medcentr.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1" />
                <span>г. Москва, ул. Медицинская, д. 15</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Круглосуточно, без выходных</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 МедЦентр. Все права защищены. Лицензия № ЛО-77-01-123456
          </p>
          <div className="flex gap-4 text-gray-400 text-sm">
            <Link to="/privacy" className="hover:text-primary transition">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-primary transition">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
