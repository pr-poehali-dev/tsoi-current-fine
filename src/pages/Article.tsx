import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

const categories = [
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
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    author: 'Александр Петров',
    content: `
      <p>Искусственный интеллект продолжает развиваться невероятными темпами. То, что казалось фантастикой всего пять лет назад, сегодня становится реальностью.</p>
      
      <h2>Основные тренды 2025 года</h2>
      <p>Современные нейросети способны не только генерировать текст и изображения, но и создавать полноценные приложения, анализировать сложные данные и принимать решения на уровне экспертов.</p>
      
      <h3>Мультимодальные модели</h3>
      <p>Новое поколение AI объединяет работу с текстом, изображениями, видео и звуком в единую систему. Это открывает невероятные возможности для креативных индустрий.</p>
      
      <h3>Персонализация на новом уровне</h3>
      <p>AI-ассистенты становятся по-настоящему персональными, запоминая контекст и адаптируясь под уникальный стиль каждого пользователя.</p>
      
      <h2>Этические вопросы</h2>
      <p>С ростом возможностей AI растут и вопросы об ответственности, приватности и безопасности. Как общество, мы должны найти баланс между инновациями и защитой прав человека.</p>
      
      <p>Будущее AI не за горами — оно уже здесь. Важно не только использовать эти технологии, но и понимать их влияние на наш мир.</p>
    `
  },
  {
    id: 2,
    title: 'Минималистичный дизайн: меньше — значит больше',
    excerpt: 'Как создавать чистые и функциональные интерфейсы в современном мире',
    category: 'design',
    date: '12 октября 2024',
    readTime: '5 мин',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    author: 'Мария Соколова',
    content: `
      <p>Минимализм в дизайне — это не просто тренд, это философия создания по-настоящему полезных продуктов.</p>
      
      <h2>Принципы минимализма</h2>
      <p>Убрать всё лишнее — значит оставить только самое важное. Каждый элемент должен иметь цель и функцию.</p>
      
      <h3>Белое пространство</h3>
      <p>Пустое пространство — это не потерянная площадь, а инструмент для создания фокуса и улучшения восприятия.</p>
      
      <h2>Практическое применение</h2>
      <p>Чистый интерфейс помогает пользователям сосредоточиться на главном и быстрее достигать своих целей.</p>
    `
  },
  {
    id: 3,
    title: 'Стратегии роста для стартапов',
    excerpt: 'Проверенные методы масштабирования бизнеса от нуля до миллиона',
    category: 'business',
    date: '10 октября 2024',
    readTime: '12 мин',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    author: 'Дмитрий Волков',
    content: `
      <p>Путь от идеи до успешного бизнеса полон вызовов. Разберём проверенные стратегии роста.</p>
      
      <h2>Фокус на продукте</h2>
      <p>Лучший маркетинг — это отличный продукт, который решает реальные проблемы пользователей.</p>
      
      <h2>Метрики, которые важны</h2>
      <p>CAC, LTV, Churn Rate — эти показатели определяют здоровье вашего бизнеса.</p>
      
      <h3>Рост команды</h3>
      <p>Нанимайте медленно, увольняйте быстро. Культура компании — ваше главное конкурентное преимущество.</p>
    `
  },
  {
    id: 4,
    title: 'Утренние ритуалы успешных людей',
    excerpt: 'Как первые часы дня определяют вашу продуктивность и настроение',
    category: 'lifestyle',
    date: '8 октября 2024',
    readTime: '6 мин',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop',
    author: 'Елена Новикова',
    content: `
      <p>То, как вы начинаете свой день, определяет его течение. Утренний ритуал — это инвестиция в себя.</p>
      
      <h2>Ранний подъём</h2>
      <p>Большинство успешных людей встают до 6 утра. Тишина и спокойствие утра дают возможность сосредоточиться.</p>
      
      <h3>Движение и энергия</h3>
      <p>15 минут зарядки или йоги запускают метаболизм и заряжают энергией на весь день.</p>
      
      <h2>Планирование дня</h2>
      <p>Потратьте 10 минут на планирование приоритетов. Это сэкономит часы в течение дня.</p>
    `
  },
  {
    id: 5,
    title: 'Революция в веб-разработке с AI',
    excerpt: 'Новые инструменты, которые ускоряют процесс создания сайтов в десятки раз',
    category: 'tech',
    date: '5 октября 2024',
    readTime: '10 мин',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
    author: 'Игорь Смирнов',
    content: `
      <p>AI-инструменты меняют подход к веб-разработке. Создание сайтов становится быстрее и доступнее.</p>
      
      <h2>Генерация кода</h2>
      <p>Современные AI могут писать код на основе описания. Это не заменяет разработчиков, а усиливает их.</p>
      
      <h3>Автоматизация рутины</h3>
      <p>Тестирование, рефакторинг, документация — AI берёт на себя скучные задачи.</p>
      
      <h2>Будущее профессии</h2>
      <p>Разработчики будущего — это архитекторы и креативные решатели проблем, а не просто кодеры.</p>
    `
  },
  {
    id: 6,
    title: 'Цветовая психология в брендинге',
    excerpt: 'Как правильный выбор цветов влияет на восприятие вашего бренда',
    category: 'design',
    date: '3 октября 2024',
    readTime: '7 мин',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop',
    author: 'Анна Королёва',
    content: `
      <p>Цвета — это мощный инструмент коммуникации. Они вызывают эмоции и формируют первое впечатление.</p>
      
      <h2>Значение цветов</h2>
      <p>Синий вызывает доверие, красный — энергию, зелёный — спокойствие. Каждый цвет несёт своё послание.</p>
      
      <h3>Сочетания цветов</h3>
      <p>Правильная цветовая палитра создаёт гармонию и усиливает узнаваемость бренда.</p>
      
      <h2>Культурный контекст</h2>
      <p>Важно помнить, что восприятие цветов различается в разных культурах.</p>
    `
  }
];

const Article = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Icon name="FileQuestion" size={64} className="mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-3xl font-bold mb-2">Статья не найдена</h1>
          <Link to="/">
            <Button className="mt-4">Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const categoryData = categories.find(c => c.id === article.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 group">
            <Icon name="ArrowLeft" size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Назад к статьям
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8 animate-fade-in">
            <div className="mb-4">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                <Icon name={categoryData?.icon || 'FileText'} size={14} className="mr-1" />
                {categoryData?.name}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Icon name="User" size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none mb-12 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Newsletter />
          </div>

          {relatedArticles.length > 0 && (
            <section className="mt-16 pt-8 border-t animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-bold mb-6">Похожие статьи</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.id} to={`/article/${related.id}`}>
                    <Card className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Icon name="Clock" size={14} />
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>

      <style>{`
        .prose h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, hsl(271 91% 65%), hsl(326 78% 63%));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: hsl(240 10% 15%);
        }
        
        .prose p {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          color: hsl(240 6% 25%);
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Article;