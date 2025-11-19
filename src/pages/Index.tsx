import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, BarChart3, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-end gap-3">
          <Button
            onClick={() => navigate("/professional/auth")}
            variant="ghost"
            size="lg"
            className="text-foreground"
          >
            Entrar
          </Button>
          <Button
            onClick={() => navigate("/professional/auth")}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
          >
            Cadastre-se
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent" style={{ lineHeight: '1.2', paddingBottom: '0.1em' }}>
            Agenda Super
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sistema completo de agendamento para profissionais da beleza e bem-estar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/professional/auth")}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-lg px-8"
            >
              Quero ter o app Agendar Super
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tudo que você precisa em um só lugar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Agendamento Online</h3>
            <p className="text-muted-foreground text-sm">
              Permita que seus clientes agendem 24/7 pelo celular
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Gestão de Equipe</h3>
            <p className="text-muted-foreground text-sm">
              Gerencie horários e serviços de todos os profissionais
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Relatórios</h3>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas e desempenho em tempo real
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Fácil e Rápido</h3>
            <p className="text-muted-foreground text-sm">
              Configure em minutos e comece a receber agendamentos
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
