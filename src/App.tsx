import { motion } from 'motion/react';
import { 
  Shield, Globe, Scale, MessageCircle, Lock, 
  CheckCircle2, ShieldCheck, UserCheck, Target, 
  Globe2, CalendarCheck, Instagram, Menu, X 
} from 'lucide-react';

import React from 'react';

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=77999067283";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

function WhatsAppButton({ text = "Agendar primeira consulta gratuita", className = "" }: { text?: string, className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative overflow-hidden inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-dark hover:via-brand-gold-light active:via-brand-gold-light text-black px-6 sm:px-8 py-4 uppercase tracking-widest text-[10px] sm:text-[11px] md:text-sm font-bold transition-all duration-500 shadow-[0_0_30px_rgba(197,160,89,0.5)] hover:shadow-[0_0_50px_rgba(197,160,89,0.8)] active:shadow-[0_0_50px_rgba(197,160,89,0.8)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] text-center rounded-sm group ${className}`}
      style={{ backgroundSize: '200% auto' }}
    >
      <div className="absolute inset-0 w-[150%] -translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-shimmer animate-[shimmer_3s_infinite_linear]"></div>
      <MessageCircle className="w-5 h-5 shrink-0 relative z-10" />
      <span className="relative z-10">{text}</span>
    </a>
  );
}

function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-px h-24 bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent"></div>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Quem sou eu", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Informações", href: "#informacoes" },
    { label: "Como Funciona", href: "#comofunciona" }
  ];

  // Prevent scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-10 py-6 border-b ${isMenuOpen ? 'border-transparent' : 'border-brand-gold/10'}`}>
        <div className="font-serif text-white text-xs sm:text-sm tracking-widest font-normal uppercase opacity-80 z-[60] relative">
          Thailan <span className="italic text-brand-gold font-light">Vasconcelos</span>
        </div>
        <button 
          onClick={toggleMenu} 
          className="w-10 h-10 flex items-center justify-center text-brand-gold hover:text-white transition-colors duration-300 relative z-[60]"
          aria-label="Alternar menu"
        >
          {isMenuOpen ? <X className="w-8 h-8 md:w-10 md:h-10 text-white" /> : <Menu className="w-6 h-6 md:w-8 md:h-8" />}
        </button>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-darker/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8 text-center">
          {navItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              onClick={toggleMenu}
              className={`text-white hover:text-brand-gold text-2xl md:text-5xl font-serif tracking-widest transition-all duration-300 delay-${idx * 100} ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative pt-28 md:pt-40 lg:pt-48 pb-20 md:pb-24 lg:pb-40 overflow-hidden bg-brand-darker">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-16 xl:gap-24">
          <div className="flex-1 text-center lg:text-left z-10 w-full lg:w-1/2">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] font-serif text-white mb-6 leading-[1.15] mt-8 md:mt-12 lg:mt-0">
                Eu sou Thailan Vasconcelos,<br />
                <span className="italic text-brand-gold font-light">Advogado do digital.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light lg:border-l border-brand-gold/30 lg:pl-5 xl:pl-6">
                Atuo com Compliance & Estruturação Empresarial, Negócios Digitais, Transações Internacionais, Bitcoin, Autonomia Financeira & Estratégia.
              </p>
              
              <div className="flex flex-col items-center lg:items-start gap-4">
                <WhatsAppButton />
                <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mt-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                  Resposta rápida • Sem compromisso
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="flex-1 w-full lg:w-1/2 max-w-lg lg:max-w-none relative z-10 px-4 md:px-0 mt-8 lg:mt-0 lg:ml-auto">
            <FadeIn delay={0.2} className="relative flex justify-center lg:justify-end xl:justify-center">
               <div className="relative w-[320px] sm:w-[400px] md:w-[460px] lg:w-[480px] xl:w-[540px] aspect-square mx-auto lg:mx-0 group cursor-pointer active:scale-[0.98] transition-all duration-300">
                  <div className="w-full h-full bg-brand-card border border-brand-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group-hover:border-brand-gold/60 group-active:border-brand-gold/60 transition-colors duration-500">
                    <img 
                      src="https://i.imgur.com/4n20XRK.jpeg" 
                      alt="Thailan Vasconcelos" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 group-active:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-darker to-transparent z-10 pointer-events-none"></div>
                  </div>
               </div>
               
               {/* Elegant decorative element */}
               <div className="absolute top-1/2 lg:-left-6 -translate-y-1/2 w-48 h-48 bg-brand-gold/10 rounded-full blur-[40px] pointer-events-none"></div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

function HighlightOverlap() {
  return (
    <div className="relative z-20 mt-12 md:-mt-16 lg:-mt-24 container mx-auto px-4 md:px-6 max-w-6xl xl:max-w-7xl">
      <FadeIn>
        <div className="bg-brand-card border border-brand-gold/20 p-8 md:p-14 lg:p-16 flex flex-col md:flex-row items-center gap-10 lg:gap-16 xl:gap-20 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden rounded-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[50px] mix-blend-screen pointer-events-none"></div>
          
          <div className="flex-1 text-center md:text-left z-10 md:w-[55%]">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight mb-4 lg:mb-6">
              Proteção Jurídica & <br className="hidden sm:block" /><span className="text-brand-gold italic">Autonomia Global</span>
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed lg:text-lg">
              Ajudo você a garantir segurança jurídica e proteção patrimonial nas suas operações de negócios no Brasil e no exterior.
            </p>
          </div>
          <div className="flex-1 md:w-[45%] md:border-l border-brand-gold/20 md:pl-10 lg:pl-16 z-10">
            <p className="text-zinc-300 text-lg font-serif italic mb-6">
              "Proteger a sua estrutura empresarial e os seus ativos hoje é o que garante a sua total liberdade amanhã."
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-brand-gold/50 p-0.5 shrink-0">
                <img src="https://i.imgur.com/ZZz2MbH.jpeg" alt="Thailan" className="w-full h-full object-cover object-[center_15%] rounded-full"/>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-xs">Thailan Vasconcelos</h4>
                <p className="text-brand-gold text-xs">Especialista Digital</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 xl:py-40 bg-brand-darker relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl xl:max-w-[90rem]">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24 xl:gap-32">
          <div className="flex-1 w-full lg:w-1/2 max-w-md lg:max-w-none relative order-2 lg:order-1 px-4 lg:px-0">
            <FadeIn>
              <div className="relative mx-auto w-full max-w-[340px] md:max-w-md lg:max-w-[500px] xl:max-w-[600px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group border border-brand-gold/30 hover:border-brand-gold/60 active:border-brand-gold/60 overflow-hidden rounded-xl cursor-pointer active:scale-[0.98] transition-all duration-500">
                  <img 
                    src="https://i.imgur.com/ZZz2MbH.jpeg" 
                    alt="Thailan Vasconcelos trabalhando" 
                    className="w-full h-auto block object-cover group-hover:scale-105 group-active:scale-105 transition-all duration-1000"
                  />
              </div>
            </FadeIn>
          </div>
          
          <div className="flex-1 z-10 w-full lg:w-1/2 order-1 lg:order-2">
            <FadeIn delay={0.2}>
              <h2 className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 xl:mb-6 text-center lg:text-left">Quem sou eu</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-6 md:mb-8 xl:mb-10 leading-tight text-center lg:text-left">
                Conhecendo o <span className="italic text-brand-gold font-light">Direito Digital</span>
              </h3>
              <p className="text-base md:text-lg xl:text-xl text-zinc-400 leading-relaxed mb-8 md:mb-10 lg:mb-12 font-light text-justify lg:text-left">
                Sou advogado especialista em Direito Digital e Estruturação Empresarial. Minha missão é traduzir a complexidade em estratégias blindadas para preservar o seu patrimônio.
              </p>
              
              <div className="space-y-6 lg:space-y-8">
                {[
                  {
                    icon: Scale,
                    title: "Compliance & Estruturação",
                    desc: "Blindagem jurídica e organização para o seu negócio."
                  },
                  {
                    icon: Globe,
                    title: "Negócios Digitais & Transações",
                    desc: "Suporte global para operações e contratos."
                  },
                  {
                    icon: Lock,
                    title: "Autonomia & Bitcoin",
                    desc: "Estratégias para proteção, soberania e liberdade dos seus ativos."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start p-6 xl:p-8 bg-brand-card border border-brand-gold/10 hover:border-brand-gold/40 active:border-brand-gold/60 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-all duration-500 rounded-lg group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-brand-darker border border-brand-gold/20 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 group-active:bg-brand-gold/20 transition-colors duration-500">
                      <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-brand-gold" />
                    </div>
                    <div className="pt-1 xl:pt-2">
                      <h4 className="text-lg xl:text-xl font-serif text-white mb-1.5 xl:mb-2">{item.title}</h4>
                      <p className="text-sm xl:text-base text-zinc-400 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyTrust() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-[#080808] border-y border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <FadeIn className="mb-16">
          <h2 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">Diferenciais</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Por que me escolher como <br className="hidden md:block"/><span className="italic text-brand-gold font-light">defensor estratégico?</span>
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {[
            {
              title: "Compliance Digital",
              icon: ShieldCheck,
              desc: "Auditoria minuciosa da sua estrutura para mitigar riscos."
            },
            {
              title: "Atendimento Comigo",
              icon: UserCheck,
              desc: "Condução estratégica diretamente comigo."
            },
            {
              title: "Clareza e Estratégia",
              icon: Target,
              desc: "Soluções dinâmicas explicadas sem burocracia."
            },
            {
              title: "Visão Internacional",
              icon: Globe2,
              desc: "Conhecimento para guiar transações transfronteiriças."
            }
          ].map((item, i) => (
             <FadeIn key={i} delay={i * 0.1} className="h-full">
                <div className="bg-brand-card p-6 sm:p-8 md:p-10 border border-brand-gold/10 h-full hover:border-brand-gold/40 active:border-brand-gold/60 transition-all duration-500 hover:-translate-y-2 active:translate-y-0 active:scale-[0.98] group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="w-14 h-14 xl:w-16 xl:h-16 bg-brand-darker rounded-full flex items-center justify-center mb-6 md:mb-8 border border-brand-gold/20 group-hover:scale-110 group-active:scale-110 transition-transform duration-500 mx-auto">
                    <item.icon className="w-6 h-6 xl:w-7 xl:h-7 text-brand-gold" />
                  </div>
                  <h3 className="text-xl xl:text-2xl font-serif text-white mb-3 xl:mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-zinc-400 font-light text-sm xl:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
             </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="mt-16">
           <WhatsAppButton text="FALE COM O ESPECIALISTA" className="px-10 py-5" />
        </FadeIn>
      </div>
    </section>
  )
}

function Results() {
  const images = [
    "https://i.imgur.com/Nxa9kl7.png",
    "https://i.imgur.com/bvCWkKm.png",
    "https://i.imgur.com/VNC90Vk.png",
    "https://i.imgur.com/WV4WHAa.png",
    "https://i.imgur.com/Q1UhxHJ.png",
    "https://i.imgur.com/xp05gav.png",
    "https://i.imgur.com/Nl51Ofl.png",
    "https://i.imgur.com/B2ygd00.png",
    "https://i.imgur.com/pR4c5eX.png",
    "https://i.imgur.com/mF7cBIW.png"
  ];

  return (
    <section id="informacoes" className="py-20 lg:py-32 bg-brand-darker text-center border-b border-brand-gold/10">
       <div className="container mx-auto px-6 max-w-7xl">
         <FadeIn>
           <h2 className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">Informações e Conteúdos</h2>
           <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 sm:mb-6">Informações Importantes</h3>
           <p className="text-zinc-400 font-light mb-12 sm:mb-16 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
             Conceitos essenciais sobre estruturação e proteção para o seu negócio e patrimônio.
           </p>
         </FadeIn>
         
         <div className="columns-1 sm:columns-2 lg:columns-5 gap-4 space-y-4 max-w-[1400px] mx-auto text-left px-2 sm:px-4">
            {images.map((src, i) => (
              <FadeIn key={i} delay={i * 0.05} className="break-inside-avoid relative overflow-hidden border border-brand-gold/20 rounded-md bg-brand-card hover:border-brand-gold/60 active:border-brand-gold/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] active:shadow-[0_0_30px_rgba(197,160,89,0.4)] transition-all duration-500 group cursor-pointer active:scale-[0.98]">
                <img src={src} alt={`Informação ${i+1}`} className="w-full h-auto object-cover transition-transform duration-700" loading="lazy" />
              </FadeIn>
            ))}
         </div>
       </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="comofunciona" className="py-24 lg:py-32 bg-[#0A0A0A] border-b border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-20">
          <h2 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">Passo a passo</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-8">
            Como funciona a <span className="italic text-brand-gold font-light">primeira consulta</span>
          </h3>
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-gold/5 text-brand-gold text-xs tracking-widest uppercase font-semibold border border-brand-gold/20">
            <CheckCircle2 className="w-4 h-4" />
            100% Gratuita e sem compromisso
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>

          {[
            {
              step: "I",
              title: "Contato Via WhatsApp",
              icon: MessageCircle,
              desc: "Você clica no botão e inicia o contato direto comigo na mesma hora."
            },
            {
              step: "II",
              title: "Agendamento Discreto",
              icon: CalendarCheck,
              desc: "Definimos o melhor horário para analisar o seu modelo de negócio."
            },
            {
              step: "III",
              title: "Diagnóstico Estratégico",
              icon: Target,
              desc: "Realizamos a avaliação meticulosa da sua operação e mitigação de riscos."
            }
          ].map((item, i) => (
             <FadeIn key={i} delay={i * 0.15} className="relative z-10 text-center flex flex-col items-center">
               <div className="w-20 h-20 bg-brand-card border border-brand-gold/30 rounded-full flex items-center justify-center mb-6 relative group hover:border-brand-gold active:border-brand-gold active:scale-[0.95] transition-all duration-500 shadow-[0_0_20px_rgba(197,160,89,0.1)] cursor-pointer">
                  <item.icon className="w-8 h-8 text-brand-gold group-hover:scale-110 group-active:scale-110 transition-transform duration-500" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-gold text-black flex items-center justify-center font-bold text-[10px] shadow-[0_0_10px_rgba(197,160,89,0.5)] font-serif">
                    {item.step}
                  </div>
               </div>
               <h4 className="text-xl font-serif text-white mb-4 tracking-wide">{item.title}</h4>
               <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-xs">{item.desc}</p>
             </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="py-20 lg:py-32 bg-brand-darker border-b border-brand-gold/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">Bastidores</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white">Atendimento Premium</h3>
        </FadeIn>
        
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            <div className="border border-brand-gold/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] rounded-xl bg-brand-card mx-auto sm:mx-0 w-full max-w-[360px] md:max-w-none group relative overflow-hidden hover:border-brand-gold/50 active:border-brand-gold/50 active:scale-[0.98] transition-all duration-500 cursor-pointer">
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                <img src="https://i.imgur.com/BxfzEE6.jpeg" alt="Atendimento 1" className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-all duration-1000" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-transparent z-10 h-40"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20">
                  <span className="text-white text-[10px] md:text-sm uppercase tracking-widest font-light flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-gold rotate-45 shadow-[0_0_10px_rgba(197,160,89,1)]"></span> Personalizado
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-brand-gold/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] rounded-xl bg-brand-card mx-auto sm:mx-0 w-full max-w-[360px] md:max-w-none group relative overflow-hidden hover:border-brand-gold/50 active:border-brand-gold/50 active:scale-[0.98] transition-all duration-500 cursor-pointer">
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                <img src="https://i.imgur.com/zlbiswW.jpeg" alt="Atendimento 2" className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-all duration-1000" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-transparent z-10 h-40"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20">
                  <span className="text-white text-[10px] md:text-sm uppercase tracking-widest font-light flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-gold rotate-45 shadow-[0_0_10px_rgba(197,160,89,1)]"></span> Estratégia de Alto Nível
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function FooterCta() {
  return (
    <section className="py-24 md:py-32 bg-[#080808] border-b border-brand-gold/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-[#080808] to-[#080808] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-brand-gold/30 mb-8 bg-brand-card">
             <Shield className="w-8 h-8 text-brand-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
            Garanta a <span className="italic text-brand-gold">blindagem jurídica</span> e a soberania financeira que sua operação precisa.
          </h2>
          <p className="text-lg text-zinc-400 mb-12 font-light max-w-2xl mx-auto">
            Não arrisque seu patrimônio. Agende a sua primeira consulta agora.
          </p>
          <WhatsAppButton className="px-10 md:px-16" />
        </FadeIn>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-[#050505] text-center border-t-4 border-brand-gold">
      <div className="container mx-auto px-6">
        <p className="text-brand-gold text-2xl mb-4 font-serif font-bold tracking-widest uppercase">
          Thailan Vasconcelos
        </p>
        <p className="text-zinc-500 mb-8 max-w-sm mx-auto font-light text-sm uppercase tracking-widest">
          Advocacia especializada em Compliance & Estruturação Empresarial.
        </p>
        <div className="flex items-center justify-center gap-6 mb-12">
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center text-zinc-400 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-300">
              <Instagram className="w-5 h-5" />
           </a>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider text-zinc-600 font-light uppercase">
          <p>© {new Date().getFullYear()} Thailan Vasconcelos. Todos os direitos reservados.</p>
          <p>Design & Desenvolvimento Exclusivo</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-darker overflow-x-hidden">
      <Header />
      <Hero />
      <HighlightOverlap />
      <SectionDivider />
      <WhyTrust />
      <About />
      <SectionDivider />
      <Results />
      <HowItWorks />
      <Gallery />
      <FooterCta />
      <Footer />
    </div>
  );
}
