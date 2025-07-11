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

  const districts = [
    { id: 1, name: "Участок №1", houses: 45 },
    { id: 2, name: "Участок №2", houses: 38 },
    { id: 3, name: "Участок №3", houses: 52 },
    { id: 4, name: "Участок №4", houses: 41 },
    { id: 5, name: "Участок №5", houses: 36 },
    { id: 6, name: "Участок №6", houses: 49 },
    { id: 7, name: "Участок №7", houses: 33 },
    { id: 8, name: "Участок №8", houses: 44 },
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Building2" size={32} className="text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  УК "Комфорт"
                </h1>
                <p className="text-sm text-gray-600">Управляющая компания</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-lg">
                <Icon name="Phone" size={16} className="text-red-600" />
                <span className="text-sm font-medium text-red-600">
                  Аварийная служба:
                </span>
                <span className="text-sm font-bold text-red-600">
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-12">
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
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                <Icon name="Users" size={20} />
                Вакансии
              </Button>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Поиск домов в управлении
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  Участки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                  <div className="text-sm text-gray-600">
                    участков в управлении
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-2">
                    338
                  </div>
                  <div className="text-sm text-gray-600">домов всего</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {districts.map((district) => (
              <Card
                key={district.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Building"
                        size={16}
                        className="text-blue-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {district.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {district.houses} домов
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* News & Appeals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* News */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Newspaper" size={20} />
                Новости
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {news.map((item) => (
                  <div
                    key={item.id}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{item.date}</p>
                    <p className="text-sm text-gray-700">{item.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Appeals Form */}
          <Card>
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
        <div className="mt-12 bg-white rounded-lg p-6 border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📍 г. Москва, ул. Примерная, 123</p>
                <p>📞 +7 (495) 123-45-67</p>
                <p>✉️ info@uk-comfort.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Режим работы</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">
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
