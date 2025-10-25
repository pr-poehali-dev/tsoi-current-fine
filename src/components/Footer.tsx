import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    blog: [
      { name: 'Все статьи', href: '/' },
      { name: 'Технологии', href: '/?category=tech' },
      { name: 'Дизайн', href: '/?category=design' },
      { name: 'Бизнес', href: '/?category=business' },
    ],
    about: [
      { name: 'О блоге', href: '#' },
      { name: 'Авторы', href: '#' },
      { name: 'Контакты', href: '#' },
      { name: 'Реклама', href: '#' },
    ],
    legal: [
      { name: 'Политика конфиденциальности', href: '#' },
      { name: 'Условия использования', href: '#' },
      { name: 'Cookie', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Telegram', icon: 'Send', href: '#', color: 'hover:text-[#0088cc]' },
    { name: 'VK', icon: 'MessageCircle', href: '#', color: 'hover:text-[#0077FF]' },
    { name: 'YouTube', icon: 'Youtube', href: '#', color: 'hover:text-[#FF0000]' },
    { name: 'Twitter', icon: 'Twitter', href: '#', color: 'hover:text-[#1DA1F2]' },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Блог
              </h3>
            </Link>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Современные идеи о технологиях, дизайне и развитии. Вдохновение каждый день.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/20 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Категории</h4>
            <ul className="space-y-3">
              {footerLinks.blog.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-purple-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">О проекте</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-purple-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-purple-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-100 text-sm text-center md:text-left">
              © {currentYear} Блог. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-purple-100 text-sm">
              <Icon name="Heart" size={16} className="text-pink-300" />
              <span>Создано с любовью</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
