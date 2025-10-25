import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
}

interface SearchBarProps {
  articles: Article[];
}

const SearchBar = ({ articles }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const filteredArticles = searchQuery.trim()
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Icon
          name="Search"
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          type="text"
          placeholder="Поиск по статьям..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="pl-12 pr-12 h-14 text-base bg-white shadow-lg border-2 focus:border-primary transition-all"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        )}
      </div>

      {isFocused && searchQuery && (
        <Card className="absolute top-full mt-2 w-full max-h-96 overflow-y-auto z-50 shadow-2xl animate-fade-in">
          {filteredArticles.length > 0 ? (
            <div className="p-2">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="block p-4 hover:bg-muted rounded-lg transition-colors group"
                >
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <Icon name="SearchX" size={48} className="mx-auto mb-3 opacity-50" />
              <p className="font-medium">Ничего не найдено</p>
              <p className="text-sm mt-1">Попробуйте изменить запрос</p>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
