import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Ошибка",
        description: "Введите email адрес",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Ошибка",
        description: "Введите корректный email адрес",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Успешно! 🎉",
        description: "Вы подписались на рассылку новых статей",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent p-8 md:p-12 text-white border-0 shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/20 rounded-full backdrop-blur-sm">
          <Icon name="Mail" size={32} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Получайте новые статьи первыми
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Подпишитесь на рассылку и будьте в курсе всех обновлений блога
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-foreground placeholder:text-muted-foreground border-0 h-12 text-base"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="bg-white text-primary hover:bg-white/90 font-semibold h-12 px-8 transition-all hover:scale-105"
          >
            {isLoading ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Подписка...
              </>
            ) : (
              <>
                <Icon name="Send" size={20} className="mr-2" />
                Подписаться
              </>
            )}
          </Button>
        </form>

        <p className="text-sm text-white/70 mt-4">
          Никакого спама. Только качественный контент.
        </p>
      </div>
    </Card>
  );
};

export default Newsletter;
