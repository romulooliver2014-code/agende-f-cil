import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, DollarSign, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock database of professionals with their specific data
const professionalsData = {
  "salao-maria": {
    id: "1",
    name: "Salão Maria",
    businessName: "Salão de Beleza Maria Santos",
    description: "Especializado em cortes femininos e coloração",
    services: [
      { id: "1", name: "Corte Feminino", price: 60 },
      { id: "2", name: "Escova", price: 40 },
      { id: "3", name: "Coloração", price: 120 },
      { id: "4", name: "Hidratação", price: 80 },
    ],
    timeSlots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
  },
  "joao-barbeiro": {
    id: "2",
    name: "João Barbeiro",
    businessName: "Barbearia João Silva",
    description: "Cortes masculinos e barba",
    services: [
      { id: "1", name: "Corte de Cabelo", price: 45 },
      { id: "2", name: "Barba", price: 25 },
      { id: "3", name: "Corte + Barba", price: 65 },
      { id: "4", name: "Pezinho", price: 15 },
    ],
    timeSlots: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  },
  "exemplo123": {
    id: "3",
    name: "Studio Exemplo",
    businessName: "Studio de Beleza Exemplo",
    description: "Beleza e bem-estar",
    services: [
      { id: "1", name: "Corte de Cabelo", price: 50 },
      { id: "2", name: "Manicure", price: 30 },
      { id: "3", name: "Pedicure", price: 35 },
      { id: "4", name: "Pacote Completo", price: 100 },
    ],
    timeSlots: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
  },
};

const paymentMethods = [
  "Dinheiro", "Cartão de Débito", "Cartão de Crédito", "PIX"
];

const ClientBooking = () => {
  const navigate = useNavigate();
  const { professionalSlug } = useParams<{ professionalSlug: string }>();
  const [professionalData, setProfessionalData] = useState<typeof professionalsData[keyof typeof professionalsData] | null>(null);
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  useEffect(() => {
    // Load professional data based on slug
    if (professionalSlug && professionalsData[professionalSlug as keyof typeof professionalsData]) {
      setProfessionalData(professionalsData[professionalSlug as keyof typeof professionalsData]);
    } else {
      // Professional not found, redirect to 404
      toast.error("Profissional não encontrado");
      navigate("/");
    }
  }, [professionalSlug, navigate]);

  const selectedServiceData = professionalData?.services.find(s => s.id === selectedService);

  const handleBooking = () => {
    if (!selectedService || !selectedTime || !selectedPayment) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    navigate("/client/signup", { 
      state: { 
        booking: {
          professional: professionalData?.businessName,
          service: selectedServiceData?.name,
          time: selectedTime,
          payment: selectedPayment,
          price: selectedServiceData?.price
        }
      }
    });
  };

  if (!professionalData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 px-4">
      <div className="container max-w-2xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <Card className="p-8">
          {/* Professional Header */}
          <div className="mb-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{professionalData.businessName}</h1>
            <p className="text-muted-foreground">{professionalData.description}</p>
          </div>

          <div className="space-y-6">
            {/* Service Selection */}

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Serviço
              </Label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  {professionalData.services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name} - R$ {service.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Horário
              </Label>
              <div className="grid grid-cols-4 gap-2">
                {professionalData.timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className={selectedTime === time ? "bg-primary" : ""}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                Forma de Pagamento
              </Label>
              <Select value={selectedPayment} onValueChange={setSelectedPayment}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a forma de pagamento" />
                </SelectTrigger>
                <SelectContent>
                  {paymentMethods.map((method) => (
                    <SelectItem key={method} value={method}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedServiceData && (
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Valor Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    R$ {selectedServiceData.price}
                  </span>
                </div>
              </Card>
            )}

            <Button
              onClick={handleBooking}
              className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
              size="lg"
            >
              Finalizar Agendamento
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ClientBooking;
