import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const vacancies = [
    { 
      id: 1, 
      title: "Слесарь-сантехник", 
      department: "Аварийная служба",
      salary: "от 45 000 руб.",
      schedule: "5/2"
    },
    { 
      id: 2, 
      title: "Дворник", 
      department: "Благоустройство",
      salary: "от 35 000 руб.",
      schedule: "6/1"
    },
    { 
      id: 3, 
      title: "Электрик", 
      department: "Техническая служба",
      salary: "от 50 000 руб.",
      schedule: "5/2"
    },
    { 
      id: 4, 
      title: "Управляющий домами", 
      department: "Управление",
      salary: "от 60 000 руб.",
      schedule: "5/2"
    },
  ];

  const news = [
    {
      id: 1,
      title: "Плановое отключение горячей воды",
      date: "15 июля 2025",
      content:
        "С 16 по 20 июля будет проводиться плановое отключение горячей воды в домах участка №3 и №5",
    },
    {
      id: 2,
      title: "Общее собрание собственников",
      date: "12 июля 2025",
      content:
        "Приглашаем всех собственников на общее собрание 20 июля в 18:00 в актовом зале школы №15",
    },
    {
      id: 3,
      title: "Новые тарифы на коммунальные услуги",
      date: "10 июля 2025",
      content:
        "С 1 августа вступают в силу новые тарифы на коммунальные услуги согласно решению городской администрации",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    alert("Ваше обращение принято! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", address: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background pattern-dots">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Building2" size={32} className="text-accent" />
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  УК "Комфорт"
                </h1>
                <p className="text-sm text-muted-foreground">
                  Управляющая компания
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-destructive/10 px-3 py-2 rounded-lg border border-destructive/20">
                <Icon name="Phone" size={16} className="text-destructive" />
                <span className="text-sm font-medium text-destructive">
                  Аварийная служба:
                </span>
                <span className="text-sm font-bold text-destructive">
                  8 (800) 123-45-67
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 text-accent-foreground mb-12 pattern-lines glow-accent">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Управляющая компания "Комфорт"
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Мы обеспечиваем комфортное проживание в 338 домах на 8 участках
              города. Наша команда профессионалов работает 24/7 для решения
              любых вопросов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg">
                <Icon name="FileText" size={20} />
                Документы
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-accent-foreground border-accent-foreground hover:bg-accent-foreground hover:text-accent"
              >
                <Icon name="Users" size={20} />
                Вакансии
              </Button>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Поиск домов в управлении
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 subtle-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Search" size={20} />
                  Поиск по адресу
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    placeholder="Введите адрес дома..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button>
                    <Icon name="Search" size={16} />
                    Найти
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="subtle-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Вакансии
                </CardTitle>
                <CardSubtitle className="text-sm text-muted-foreground">
                  Присоединяйтесь к нашей команде
                </CardSubtitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {vacancies.slice(0, 2).map((vacancy) => (
                    <div key={vacancy.id} className="p-3 rounded-lg bg-muted/50 border border-border/50 hover:border-accent/50 transition-colors">
                      <h4 className="font-medium text-foreground mb-1">{vacancy.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{vacancy.department}</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-accent font-medium">{vacancy.salary}</span>
                        <span className="text-muted-foreground">{vacancy.schedule}</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-3" size="sm">
                    <Icon name="ExternalLink" size={14} className="mr-2" />
                    Все вакансии
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vacancies.slice(2).map((vacancy) => (
              <Card
                key={vacancy.id}
                className="hover:shadow-md transition-all duration-300 cursor-pointer hover:border-accent/50 subtle-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20 mt-1">
                        <Icon name="Briefcase" size={16} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          {vacancy.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {vacancy.department}
                        </p>
                        <div className="space-y-1">
                          <div className="text-sm text-accent font-medium">
                            {vacancy.salary}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            График: {vacancy.schedule}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Icon name="ArrowRight" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* News & Appeals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* News */}
          <Card className="subtle-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Newspaper" size={20} />
                Новости
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {news.map((item) => (
                  <div key={item.id} className="border-l-4 border-accent pl-4">
                    <h4 className="font-medium text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.date}
                    </p>
                    <p className="text-sm text-foreground">{item.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Appeals Form */}
          <Card className="subtle-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MessageCircle" size={20} />
                Обращение жителя
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address">Адрес</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Icon name="Send" size={16} />
                  Отправить обращение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-card rounded-lg p-6 border border-border pattern-grid subtle-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 г. Москва, ул. Примерная, 123</p>
                <p>📞 +7 (495) 123-45-67</p>
                <p>✉️ info@uk-comfort.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Режим работы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">
                Полезные ссылки
              </h4>
              <div className="space-y-2">
                <Button variant="link" className="p-0 h-auto text-sm">
                  Памятка для собственников
                </Button>
                <br />
                <Button variant="link" className="p-0 h-auto text-sm">
                  Документы
                </Button>
                <br />
                <Button variant="link" className="p-0 h-auto text-sm">
                  Вакансии
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;