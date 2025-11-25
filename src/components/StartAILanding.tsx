import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Video, Clock, CheckCircle2, Users, Lightbulb, Target } from "lucide-react";
import startaiLogo from "@/assets/startai-logo.png";
import dimepLogo from "@/assets/dimep-logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StartAILanding = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <img src={startaiLogo} alt="StartAI In Company" className="h-8 sm:h-10 w-auto" />
            </div>
            <a 
              href="https://ptx360.com.br/?fluent-form=3"
              className="border-2 border-primary text-foreground px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30 blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
              Multiplique a Capacidade Produtiva da sua Equipe com{" "}
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                IA em 1.5 Dias
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Um protocolo híbrido de diagnóstico + imersão prática para destravar resultados imediatos e colocar seu time à frente da concorrência.
            </h2>
            <a 
              href="https://ptx360.com.br/?fluent-form=3"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-pink-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-black text-lg sm:text-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              QUERO AGENDAR MEU DIAGNÓSTICO GRATUITO
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-slate-400 text-sm sm:text-base font-medium uppercase tracking-wider">
              Empresas que confiam no StartAI
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <a
              href="https://dimep.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://s3.amazonaws.com/site.dimep.com.br/uploads/images/blog/logo.png" 
                alt="Dimep Sistemas" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
            
            <a
              href="https://mousar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://static-assets.mousar.com/global/tmc-white-45.png" 
                alt="TMC" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
            
            <a
              href="#"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://madis.com.br/wp-content/uploads/2024/08/Logo-madis-solucoes-branco-1-1024x224.png" 
                alt="MADIS" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
            
            <a
              href="https://sannti.com/pt-BR/host"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://cdn.startai.digital/startai-in-company/in-company/sannti%20cloud%20branco.png" 
                alt="SANNTI" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
            
            <a
              href="#"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://cdn.startai.digital/startai-in-company/in-company/sizze_company_logo-removebg-preview.png" 
                alt="SIZZE" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
            
            <a
              href="#"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://acdn-us.mitiendanube.com/stores/002/247/867/themes/common/logo-89699148-1672751631-b0cef5538db3300d33f22c6cc403f9431672751631-480-0.png?0" 
                alt="LAURO PAOLINI" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
            
            <a
              href="#"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://vidracariaparanasp.com.br/wp-content/webp-express/webp-images/uploads/2023/09/Logo-Vidracaria-Parana-Fundo-Cinza.jpg.webp" 
                alt="VIDRAÇARIA PARANÁ" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
            
            <a
              href="#"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://cdn.startai.digital/startai-in-company/in-company/generated-image__1_-removebg-preview.png" 
                alt="GIRO SA" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
            
            <a
              href="#"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://cdn.startai.digital/startai-in-company/in-company/logo_ricci-removebg-preview.png" 
                alt="LA RICCI" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
            
            <a
              href="https://ptx360.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              <img 
                src="https://ptx360.com.br/wp-content/uploads/2025/05/Logo-PTX-Extenso-F-Azul.png" 
                alt="PTX 360" 
                className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
              />
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PROBLEMA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
              O Problema não é a IA.{" "}
              <span className="text-primary">É como sua equipe (não) a utiliza.</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300">
              A maioria das empresas trata a Inteligência Artificial como um 'Google melhorado'. Isso está custando tempo e dinheiro ao seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="mb-6">
                <Bot className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">O Uso Superficial</h3>
              <p className="text-slate-300 leading-relaxed">
                Sua equipe usa o ChatGPT apenas para e-mails básicos, ignorando 90% do poder de automação e análise de dados.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="mb-6">
                <Video className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">A Armadilha dos Cursos</h3>
              <p className="text-slate-300 leading-relaxed">
                Cursos gravados têm baixa adesão. Assistir aulas passivamente não transforma a cultura de uma empresa operacional.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="mb-6">
                <Clock className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">A Consultoria Lenta</h3>
              <p className="text-slate-300 leading-relaxed">
                Consultorias tradicionais levam semanas para entregar relatórios teóricos. Você precisa de implementação prática e ROI imediato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO MECANISMO */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
              O Protocolo StartAI:{" "}
              <span className="text-primary">Inteligência Estratégica em 3 Etapas</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300">
              Não instalamos softwares complexos. Transformamos as IAs que você já usa em especialistas treinados.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Etapa 01 */}
            <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-in">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-pink-600 rounded-full flex items-center justify-center text-2xl font-black">
                01
              </div>
              <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">O Diagnóstico de Fluxo (Online)</h3>
                <p className="text-slate-300 leading-relaxed">
                  Mapeamos processos travados e definimos quais IAs de mercado são ideais para cada função do seu time.
                </p>
              </div>
            </div>

            {/* Linha conectora */}
            <div className="hidden md:block w-1 h-8 bg-gradient-to-b from-primary to-pink-600 ml-8" />

            {/* Etapa 02 */}
            <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-in">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-pink-600 rounded-full flex items-center justify-center text-2xl font-black">
                02
              </div>
              <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">A Engenharia de Contexto (Bastidores)</h3>
                <p className="text-slate-300 leading-relaxed">
                  Nossa equipe desenha os prompts e a estratégia dos assistentes personalizados para o seu nicho.
                </p>
              </div>
            </div>

            {/* Linha conectora */}
            <div className="hidden md:block w-1 h-8 bg-gradient-to-b from-primary to-pink-600 ml-8" />

            {/* Etapa 03 */}
            <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-in">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-pink-600 rounded-full flex items-center justify-center text-2xl font-black">
                03
              </div>
              <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Implementação e Treinamento (In Company)</h3>
                <p className="text-slate-300 leading-relaxed">
                  O dia da virada. Configuramos junto com seu time os assistentes e garantimos autonomia total.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO AUTORIDADE */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                Não somos apenas 'Professores de IA'.{" "}
                <span className="text-primary">Somos Estrategistas de Negócios.</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-6">
                Focamos nos Fundamentos de Negócio. Entendemos de liderança e processos. Usamos a IA para acelerar o que sua empresa já faz bem.
              </p>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Não queremos que você dependa de nós. Queremos que sua equipe se torne autônoma.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-video bg-slate-800/50 backdrop-blur-sm border border-border rounded-2xl flex items-center justify-center overflow-hidden">
                <Users className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE OFERTA */}
      <section id="investimento" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-primary/50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-primary/20 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  Quanto custa{" "}
                  <span className="text-primary">NÃO ter Inteligência Artificial?</span>
                </h2>
                <p className="text-lg sm:text-xl text-slate-300">
                  Um funcionário improdutivo custa R$ 30k/ano. Nossa implementação custa uma fração disso.
                </p>
              </div>

              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">Diagnóstico Estratégico com a Liderança</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">Engenharia de Assistentes Personalizados</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">Imersão Presencial Hands-On (1 Dia)</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">Material de Apoio e Biblioteca de Prompts</span>
                </div>
              </div>

              <div className="text-center mb-12">
                <p className="text-slate-400 text-lg mb-2">Investimento Único a partir de</p>
                <p className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
                  R$ 10.000,00
                </p>
              </div>

              <div className="text-center">
                <a 
                  href="https://ptx360.com.br/?fluent-form=3"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-pink-600 text-white px-10 sm:px-12 py-5 sm:py-6 rounded-full font-black text-lg sm:text-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  SOLICITAR PROPOSTA DETALHADA
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-center animate-fade-in">
              Perguntas Frequentes
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
              <AccordionItem value="item-1" className="bg-slate-800/50 backdrop-blur-sm border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Preciso ter equipe técnica?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Não. Nosso foco é em negócios, não em código. Capacitamos sua equipe para usar IA de forma estratégica, independente do background técnico.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-slate-800/50 backdrop-blur-sm border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Os dados da empresa estão seguros?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Sim. Ensinamos configurações de privacidade Enterprise e boas práticas de segurança para proteger os dados da sua empresa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-slate-800/50 backdrop-blur-sm border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Funciona para meu nicho?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Sim. O diagnóstico adapta tudo à sua realidade. Personalizamos os assistentes de IA de acordo com o seu setor e processos específicos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-slate-800/50 backdrop-blur-sm border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Preciso contratar softwares caros?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Não. Focamos em potencializar as IAs que você já tem acesso, como ChatGPT, Claude e outras ferramentas do mercado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-slate-800/50 backdrop-blur-sm border border-border rounded-xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  E se a equipe tiver dúvidas?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Entregamos uma biblioteca completa de prompts e documentação para garantir autonomia total do seu time após a implementação.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6">
            <img src={startaiLogo} alt="StartAI In Company" className="h-8 w-auto" />
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            </div>
            <p className="text-slate-500 text-sm">© 2025 StartAI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartAILanding;
