import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Target, Users, TrendingUp, CheckCircle, Zap, Brain, Rocket, Search, Settings, Lightbulb, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import dimepLogo from '@/assets/dimep-logo.png';

const StartAILanding = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Diagnóstico de Liderança",
      description: "Trabalhamos com sua liderança para definir uma cultura de IA alinhada aos valores e objetivos da empresa"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mapeamento Personalizado",
      description: "Identificamos as ferramentas de IA mais adequadas para cada área e função do seu time"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Implementação Prática",
      description: "Treinamento intensivo com foco em assistentes e agentes de IA aplicados ao seu negócio"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Diagnóstico de Liderança",
      description: "Meio período online para entender a visão da liderança e co-criar uma cultura de IA personalizada",
      icon: <Search className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Mapeamento de Ferramentas",
      description: "Selecionamos as melhores ferramentas de IA (assistentes e agentes) alinhadas ao diagnóstico",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Treinamento Intensivo",
      description: "Um dia presencial de imersão prática com as ferramentas mapeadas para sua empresa",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const features = [
    "Diagnóstico estratégico com liderança",
    "Co-criação de cultura de IA personalizada",
    "Mapeamento de ferramentas por necessidade",
    "Treinamento em assistentes de IA",
    "Treinamento em agentes inteligentes",
    "Material exclusivo e casos práticos",
    "Certificação de conclusão"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">StartAI <span className="text-purple-400 text-sm sm:text-lg">In Company</span></span>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Falar com Especialista
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  🚀 Treinamento Corporativo de IA
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1]">
                Transforme IA em
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"> Vantagem Competitiva</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-medium">
                Diagnóstico estratégico + Treinamento personalizado para sua empresa dominar assistentes e agentes de IA com <span className="text-purple-400 font-bold">resultados práticos no mesmo dia</span>.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 bg-slate-900/50 border border-purple-500/30 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
                <div className="text-center sm:text-left">
                  <p className="text-3xl sm:text-4xl font-bold text-purple-400">1.5</p>
                  <p className="text-sm text-slate-400 mt-1">dias de programa</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-3xl sm:text-4xl font-bold text-purple-400">100%</p>
                  <p className="text-sm text-slate-400 mt-1">personalizado</p>
                </div>
                <div className="text-center sm:text-left sm:col-span-1 flex items-center justify-center sm:justify-start">
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-purple-400 leading-tight">Resultados no mesmo dia</p>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">Criação prática de agentes de IA</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-lg sm:text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                  Quero Transformar Minha Empresa
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>Sem compromisso • Diagnóstico gratuito</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">StartAI In Company</h3>
                      <p className="text-slate-400 text-sm">Diagnóstico + Treinamento</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {['Diagnóstico com liderança', 'Cultura de IA personalizada', 'Treinamento intensivo presencial', 'Assistentes e Agentes de IA'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400">Diagnóstico</span>
                      <span className="text-white font-semibold">Meio período online</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Treinamento</span>
                      <span className="text-white font-semibold">1 dia presencial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-slate-400 text-sm sm:text-base font-medium uppercase tracking-wider mb-8">
              Empresas que confiam no StartAI
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Dimep Logo */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group">
              <img src={dimepLogo} alt="Dimep Sistemas" className="max-w-full h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" />
            </div>
            
            {/* Text-based clients */}
            {[
              'RSF',
              'MADIS',
              'SANNTI HOST',
              'SIZZE',
              'LAURO PAOLINI',
              'VIDRAÇARIA PARANÁ',
              'GIRO SA',
              'LA RICCI',
              'PTX 360',
              'AL JARIRI',
              'TMC'
            ].map((client, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                <span className="text-slate-300 group-hover:text-white font-bold text-center text-sm sm:text-base transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Por que escolher o <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">StartAI</span>?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Não somos só mais um curso de IA. Somos parceiros estratégicos na transformação digital da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                📋 Nossa Metodologia
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Como funciona o <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">StartAI In Company</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Um processo estruturado em 3 etapas para garantir máxima efetividade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent opacity-30">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                  ✨ O que está incluído
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                O que você recebe no <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">StartAI</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Um programa completo desde o diagnóstico até a implementação prática de assistentes e agentes de IA no seu negócio.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Agendar Diagnóstico
                  <Rocket className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 border border-purple-500/30 flex items-center gap-4 hover:border-purple-500/60 transition-all duration-300 hover:translate-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 border border-purple-500/30">
            <div className="text-center mb-12">
              <Lightbulb className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Formato <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Híbrido e Prático</span>
              </h2>
              <p className="text-xl text-slate-300">
                Otimizamos seu tempo com o melhor dos dois mundos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-950/50 rounded-2xl p-8 border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Diagnóstico de Liderança</h3>
                <p className="text-slate-300 mb-4">Meio período de sessão estratégica com liderança para co-criar uma cultura de IA alinhada ao DNA da empresa</p>
                <div className="flex items-center gap-2 text-purple-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Flexível e eficiente</span>
                </div>
              </div>

              <div className="bg-slate-950/50 rounded-2xl p-8 border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Treinamento Presencial</h3>
                <p className="text-slate-300 mb-4">Um dia intensivo de imersão prática com as ferramentas de IA mapeadas especialmente para sua empresa</p>
                <div className="flex items-center gap-2 text-purple-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Hands-on e resultados imediatos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Investimento
            </h2>
            <p className="text-lg sm:text-xl text-slate-300">
              Transparência total no valor e no que você recebe
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Price Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-6 sm:p-8 border-2 border-purple-500/50 h-full flex flex-col justify-center text-center lg:sticky lg:top-24">
                <div className="mb-6">
                  <p className="text-purple-300 text-base sm:text-lg mb-2">A partir de</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl sm:text-5xl font-bold text-white">R$</span>
                    <span className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10k</span>
                  </div>
                  <p className="text-slate-300 mt-4">Programa completo</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-purple-300 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Diagnóstico incluído</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-purple-300 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Treinamento personalizado</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-purple-300 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Materiais exclusivos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included Breakdown */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 sm:p-6 border border-purple-500/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Diagnóstico Estratégico com Liderança</h3>
                    <p className="text-sm sm:text-base text-slate-300 mb-3">Meio período online para entender visão, desafios e co-criar uma cultura de IA sob medida</p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Entendimento profundo da liderança
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Definição de cultura de IA personalizada
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Identificação de necessidades específicas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 sm:p-6 border border-purple-500/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Mapeamento Personalizado de Ferramentas</h3>
                    <p className="text-sm sm:text-base text-slate-300 mb-3">Seleção estratégica das melhores ferramentas de IA para cada área do seu negócio</p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Assistentes de IA por função
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Agentes inteligentes para automação
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Stack tecnológico otimizado
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 sm:p-6 border border-purple-500/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Treinamento Intensivo Presencial</h3>
                    <p className="text-sm sm:text-base text-slate-300 mb-3">Um dia completo de imersão prática com as ferramentas mapeadas</p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Hands-on com casos reais da empresa
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Implementação de projetos piloto
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Material de referência e templates
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                        Certificação de conclusão
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-5 sm:p-6 border border-purple-500/50">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg">ROI Esperado</p>
                    <p className="text-sm sm:text-base text-slate-300">Resultados práticos e aplicação imediata durante o próprio treinamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
              Solicitar Proposta Detalhada
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <p className="text-slate-400 mt-4 text-sm sm:text-base px-4">Valores podem variar conforme tamanho da equipe e necessidades específicas</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                ❓ Perguntas Frequentes
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Dúvidas sobre o <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">StartAI</span>?
            </h2>
            <p className="text-xl text-slate-300">
              Tire suas principais dúvidas sobre o programa
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-purple-500/30">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-b border-purple-500/20">
                <AccordionTrigger className="text-white hover:text-purple-400 text-left text-lg font-semibold">
                  O que diferencia o StartAI In Company de outros treinamentos de IA?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Não oferecemos apenas um treinamento genérico. Começamos com um diagnóstico estratégico da sua liderança para co-criar uma cultura de IA alinhada ao DNA da sua empresa. Depois, mapeamos as ferramentas específicas (assistentes e agentes de IA) que fazem sentido para cada área do seu negócio. O treinamento é 100% personalizado com base nesse diagnóstico.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-purple-500/20">
                <AccordionTrigger className="text-white hover:text-purple-400 text-left text-lg font-semibold">
                  Qual o formato e duração do programa?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  O programa é dividido em duas etapas: (1) Meio período online com a liderança para diagnóstico estratégico e definição da cultura de IA; (2) Um dia completo presencial de treinamento intensivo e prático com as ferramentas mapeadas. Total de aproximadamente 1,5 dias, otimizado para máxima eficiência.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-purple-500/20">
                <AccordionTrigger className="text-white hover:text-purple-400 text-left text-lg font-semibold">
                  Quantas pessoas podem participar do treinamento?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Recomendamos grupos de 10 a 30 participantes para garantir interação e hands-on de qualidade. Para equipes maiores, podemos estruturar múltiplas turmas ou formatos customizados. O diagnóstico de liderança é feito com o C-level e principais decisores (até 10 pessoas).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-purple-500/20">
                <AccordionTrigger className="text-white hover:text-purple-400 text-left text-lg font-semibold">
                  Qual o investimento e o que está incluído?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  O investimento começa em R$ 10.000 e inclui: diagnóstico estratégico com liderança, mapeamento personalizado de ferramentas de IA, um dia de treinamento presencial intensivo, material exclusivo e templates, e certificação de conclusão. O valor pode variar conforme tamanho da equipe e necessidades específicas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-purple-500/20">
                <AccordionTrigger className="text-white hover:text-purple-400 text-left text-lg font-semibold">
                  Quais ferramentas de IA são ensinadas no treinamento?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  As ferramentas são selecionadas após o diagnóstico, com base nas necessidades específicas da sua empresa. Trabalhamos com assistentes de IA (ChatGPT, Claude, Gemini), agentes inteligentes (automação e workflows), ferramentas de produtividade, geração de conteúdo, análise de dados e muito mais. O foco é no que realmente vai gerar valor para o seu negócio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-purple-500/20">
                <AccordionTrigger className="text-white hover:text-purple-400 text-left text-lg font-semibold">
                  É necessário ter conhecimento prévio em IA?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Não! O programa é desenhado para profissionais de todos os níveis de conhecimento. Começamos do zero e evoluímos até cases avançados. O importante é ter disposição para aprender e aplicar. Durante o diagnóstico, identificamos o nível do time e adaptamos o conteúdo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b-0">
                <AccordionTrigger className="text-white hover:text-purple-400 text-left text-lg font-semibold">
                  Quanto tempo leva para ver resultados práticos?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Os resultados são imediatos! O treinamento é 100% hands-on, então os participantes já saem criando e aplicando agentes de IA em projetos reais da empresa durante o próprio dia de treinamento. Você verá sua equipe construindo soluções práticas ao vivo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-300 mb-6 text-lg">Ainda tem dúvidas?</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              Falar com um Especialista
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm text-center">
              <Zap className="w-16 h-16 text-purple-300 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Pronto para transformar IA em vantagem competitiva?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Comece com um diagnóstico personalizado e descubra como assistentes e agentes de IA podem revolucionar sua operação.
              </p>
              <button className="bg-white text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">StartAI <span className="text-purple-400">In Company</span></span>
          </div>
          <p className="text-slate-400">
            Transformando empresas através da inteligência artificial estratégica
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StartAILanding;
