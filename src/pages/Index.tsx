import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import ThemeToggle from '@/components/ThemeToggle';

const categories = [
  { id: 'all', name: 'Все статьи', icon: 'LayoutGrid' },
  { id: 'tech', name: 'Технологии', icon: 'Cpu' },
  { id: 'design', name: 'Дизайн', icon: 'Palette' },
  { id: 'business', name: 'Бизнес', icon: 'TrendingUp' },
  { id: 'lifestyle', name: 'Стиль жизни', icon: 'Coffee' }
];

const articles = [
  {
    id: 1,
    title: 'Будущее искусственного интеллекта в 2025',
    excerpt: 'Исследуем новые горизонты AI и машинного обучения, которые изменят наш мир',
    category: 'tech',
    date: '15 октября 2024',
    readTime: '8 мин',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Минималистичный дизайн: меньше — значит больше',
    excerpt: 'Как создавать чистые и функциональные интерфейсы в современном мире',
    category: 'design',
    date: '12 октября 2024',
    readTime: '5 мин',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Стратегии роста для стартапов',
    excerpt: 'Проверенные методы масштабирования бизнеса от нуля до миллиона',
    category: 'business',
    date: '10 октября 2024',
    readTime: '12 мин',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Утренние ритуалы успешных людей',
    excerpt: 'Как первые часы дня определяют вашу продуктивность и настроение',
    category: 'lifestyle',
    date: '8 октября 2024',
    readTime: '6 мин',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Революция в веб-разработке с AI',
    excerpt: 'Новые инструменты, которые ускоряют процесс создания сайтов в десятки раз',
    category: 'tech',
    date: '5 октября 2024',
    readTime: '10 мин',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Цветовая психология в брендинге',
    excerpt: 'Как правильный выбор цветов влияет на восприятие вашего бренда',
    category: 'design',
    date: '3 октября 2024',
    readTime: '7 мин',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop'
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Блог
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Современные идеи о технологиях, дизайне и развитии
          </p>
          <SearchBar articles={articles} />
        </header>

        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg scale-105'
                  : 'bg-white text-foreground hover:shadow-md hover:scale-105'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArticles.map((article, index) => (
            <Link key={article.id} to={`/article/${article.id}`}>
              <Card
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                    {categories.find(c => c.id === article.category)?.name}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <Icon name="FileX" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-bold mb-2">Статьи не найдены</h3>
            <p className="text-muted-foreground">
              В этой категории пока нет статей
            </p>
          </div>
        )}

        <div className="mt-16 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Newsletter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;