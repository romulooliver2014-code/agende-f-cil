import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Users } from "lucide-react";
import { toast } from "sonner";

const segments = [
  { id: "male_salon", name: "Salão de Beleza Masculino/Barbearia", icon: Scissors },
  { id: "female_salon", name: "Salão de Beleza Feminino", icon: Sparkles },
  { id: "unisex_salon", name: "Salão de Beleza Unissex", icon: Users },
  { id: "manicure", name: "Manicure", icon: Sparkles },
  { id: "pedicure", name: "Pedicure", icon: Sparkles },
  { id: "manicure_pedicure", name: "Manicure e Pedicure", icon: Sparkles },
];

const ProfessionalOnboarding = () => {
  const navigate = useNavigate();
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedSegment) {
      toast.success("Segmento selecionado com sucesso!");
      navigate("/professional/dashboard");
    } else {
      toast.error("Por favor, selecione um segmento");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <Dialog open={true}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              Escolha o segmento do seu negócio
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {segments.map((segment) => {
              const Icon = segment.icon;
              return (
                <button
                  key={segment.id}
                  onClick={() => setSelectedSegment(segment.id)}
                  className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                    selectedSegment === segment.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        selectedSegment === segment.id
                          ? "bg-gradient-to-br from-primary to-primary-dark"
                          : "bg-muted"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          selectedSegment === segment.id
                            ? "text-white"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <span className="text-sm font-medium text-center">
                      {segment.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <Button
            onClick={handleContinue}
            disabled={!selectedSegment}
            className="w-full mt-6 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
          >
            Continuar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfessionalOnboarding;
