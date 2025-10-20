import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="HeartPulse" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">МедЦентр</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground/70 hover:text-primary transition">Главная</Link>
            <Link to="/services" className="text-foreground/70 hover:text-primary transition">Услуги</Link>
            <Link to="/about" className="text-foreground/70 hover:text-primary transition">О клинике</Link>
            <Link to="/doctors" className="text-foreground/70 hover:text-primary transition">Врачи</Link>
            <Link to="/prices" className="text-foreground/70 hover:text-primary transition">Цены</Link>
            <Link to="/reviews" className="text-foreground/70 hover:text-primary transition">Отзывы</Link>
            <Link to="/blog" className="text-foreground/70 hover:text-primary transition">Блог</Link>
            <Link to="/contacts" className="text-foreground/70 hover:text-primary transition">Контакты</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+78001234567" className="hidden md:block">
              <Button className="gap-2">
                <Icon name="Phone" size={18} />
                8 (800) 123-45-67
              </Button>
            </a>
            
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
            <Link to="/" className="text-foreground/70 hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Главная</Link>
            <Link to="/services" className="text-foreground/70 hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Услуги</Link>
            <Link to="/about" className="text-foreground/70 hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>О клинике</Link>
            <Link to="/doctors" className="text-foreground/70 hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Врачи</Link>
            <Link to="/prices" className="text-foreground/70 hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Цены</Link>
            <Link to="/reviews" className="text-foreground/70 hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Отзывы</Link>
            <Link to="/blog" className="text-foreground/70 hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Блог</Link>
            <Link to="/contacts" className="text-foreground/70 hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
            <a href="tel:+78001234567" className="md:hidden">
              <Button className="gap-2 w-full">
                <Icon name="Phone" size={18} />
                8 (800) 123-45-67
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
