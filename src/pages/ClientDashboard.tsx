import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, DollarSign } from "lucide-react";

const ClientDashboard = () => {
  const booking = {
    professional: "João Silva",
    service: "Corte + Barba",
    date: "25/11/2025",
    time: "14:00",
    price: 65,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold">Meus Agendamentos</h1>
          </div>
          <Button variant="outline" size="sm">
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Olá! 👋</h2>
            <p className="text-muted-foreground">Confira seu próximo agendamento</p>
          </div>

          <Card className="p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Próximo Agendamento</h3>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Confirmado
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Profissional</p>
                  <p className="font-medium">{booking.professional}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Serviço</p>
                  <p className="font-medium">{booking.service}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Data</p>
                    <p className="font-medium">{booking.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Horário</p>
                    <p className="font-medium">{booking.time}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-medium">Valor Total</span>
                </div>
                <span className="text-2xl font-bold text-primary">
                  R$ {booking.price}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1">
                Reagendar
              </Button>
              <Button variant="destructive" className="flex-1">
                Cancelar
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-primary/20">
            <h3 className="font-semibold mb-2">Histórico de Agendamentos</h3>
            <p className="text-sm text-muted-foreground">
              Você ainda não tem agendamentos anteriores
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
