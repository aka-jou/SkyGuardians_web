import React, { useState, useEffect } from 'react';
import { 
  Code2, Cpu, Wind, ShieldCheck, 
  Activity, Layers, ArrowRight, CheckCircle2, 
  Send, Menu, X, Terminal, Monitor,
  Compass, BarChart3, ChevronRight, UserCircle2, Briefcase, Settings
} from 'lucide-react';
import { GlassCard, Chip } from './Ui';                       

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Layers className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Sky<span className="text-cyan-400">Guardians</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#nosotros" className="hover:text-cyan-400 transition-colors">Quiénes somos</a>
          <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
          <a href="#industrias" className="hover:text-cyan-400 transition-colors">Industrias</a>
          <a href="#proceso" className="hover:text-cyan-400 transition-colors">Proceso</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contacto" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/50 rounded-lg text-white text-sm font-medium transition-all duration-300">
            Hablemos <ArrowRight size={16} />
          </a>
          <button className="md:hidden text-slate-300" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col items-start text-left space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Ingeniería de Software & Drones
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
          Construimos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">tecnología</span> a la medida de tu operación.
        </h1>
        <p className="text-lg text-slate-300 max-w-xl leading-relaxed drop-shadow-md">
          Desarrollamos sistemas desde cero para retos reales. Combinamos arquitectura de software avanzada y soluciones técnicas con drones para la industria.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#contacto" className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Iniciar un proyecto <ArrowRight size={18} />
          </a>
          <a href="#servicios" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            Explorar servicios
          </a>
        </div>
      </div>

      <div className="relative h-[600px] hidden lg:block perspective-1000 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center transform rotate-y-[-10deg] rotate-x-[5deg]">
          <GlassCard className="w-full h-80 absolute top-20 z-20 backdrop-blur-xl border-white/20 shadow-2xl p-6 flex flex-col gap-4 animate-float">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-slate-400 font-mono">system_core.exe</div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-3">
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                <div className="h-4 bg-white/10 rounded w-full"></div>
                <div className="h-4 bg-white/10 rounded w-5/6"></div>
                <div className="h-24 bg-gradient-to-t from-cyan-500/20 to-transparent border-b-2 border-cyan-400 mt-6 rounded-sm"></div>
              </div>
              <div className="col-span-1 space-y-3">
                <div className="h-20 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center flex-col gap-1">
                  <Activity className="text-cyan-400 w-6 h-6" />
                  <span className="text-xs text-slate-300">Uptime 99.9%</span>
                </div>
                <div className="h-20 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center flex-col gap-1">
                  <ShieldCheck className="text-blue-400 w-6 h-6" />
                  <span className="text-xs text-slate-300">Secured</span>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="w-64 h-40 absolute bottom-10 -right-10 z-30 p-5 flex flex-col justify-between animate-float-delayed">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Compass className="text-blue-400 w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Telemetría</div>
                  <div className="text-xs text-cyan-400">Drone_X01 Activo</div>
                </div>
             </div>
             <div className="flex justify-between items-end">
               <div className="space-y-1">
                 <div className="text-xs text-slate-400">Altitud</div>
                 <div className="text-lg font-mono text-white">124.5m</div>
               </div>
               <Activity className="text-cyan-400 w-8 h-8 opacity-50" />
             </div>
          </GlassCard>

           <GlassCard className="w-56 h-auto absolute top-10 -left-10 z-10 p-4 border-cyan-500/20 bg-slate-900/80 animate-float-slow">
              <Terminal className="text-slate-500 w-4 h-4 mb-2" />
              <div className="space-y-2 font-mono text-[10px] text-slate-300">
                <p><span className="text-pink-400">const</span> <span className="text-blue-300">initProtocol</span> = <span className="text-yellow-300">()</span> <span className="text-pink-400">{`=>`}</span> {`{`}</p>
                <p className="pl-4">system.connect();</p>
                <p className="pl-4">data.sync();</p>
                <p>{`}`}</p>
              </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
);

export const QuienesSomos = () => (
  <section id="nosotros" className="py-24 bg-[#030712]/50 backdrop-blur-md relative z-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Un equipo pequeño. <br/><span className="text-slate-400">Una capacidad técnica enorme.</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            No somos una agencia tradicional. Somos una empresa de ingeniería aplicada que entiende operaciones complejas.
          </p>
          <div className="pt-4 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">Visión Multidisciplinaria</h4>
                <p className="text-sm text-slate-400">Analizamos los problemas desde el software y el hardware operativo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">Enfoque 100% Personalizado</h4>
                <p className="text-sm text-slate-400">Diseñamos soluciones exactas para procesos reales.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-2xl"></div>
          
          <GlassCard className="p-6 flex flex-col items-center text-center space-y-4 relative z-10 bg-[#030712]/60">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-lg">
              <Code2 className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Ingeniería de Software</h3>
              <p className="text-sm text-slate-400 mt-2">Arquitectura de sistemas, desarrollo web y plataformas.</p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 flex flex-col items-center text-center space-y-4 relative z-10 sm:mt-12 bg-[#030712]/60">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-lg">
              <Settings className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Manufactura & Drones</h3>
              <p className="text-sm text-slate-400 mt-2">Soporte técnico, inspección y hardware especializado.</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
);

export const Servicios = () => {
  const services = [
    { icon: <Monitor size={24} />, title: "Software a la Medida", desc: "Sistemas empresariales desarrollados desde cero." },
    { icon: <Wind size={24} />, title: "Soluciones con Drones", desc: "Inspección y monitoreo para el sector industrial." },
    { icon: <Activity size={24} />, title: "Automatización", desc: "Digitalización de procesos operativos manuales." },
    { icon: <BarChart3 size={24} />, title: "Dashboards", desc: "Visualización de datos en tiempo real." },
    { icon: <Cpu size={24} />, title: "Plataformas Digitales", desc: "Herramientas web escalables de alto rendimiento." },
    { icon: <Briefcase size={24} />, title: "Consultoría", desc: "Trazamos tu ruta tecnológica más rentable." }
  ];

  return (
    <section id="servicios" className="py-24 bg-[#030712]/40 backdrop-blur-md relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Servicios Especializados</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <GlassCard key={idx} className="p-8 group cursor-pointer bg-[#030712]/50">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all duration-300">
                {srv.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">{srv.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{srv.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Diferenciadores = () => (
  <section className="py-24 bg-[#030712]/60 backdrop-blur-md border-y border-white/5 relative z-10 overflow-hidden">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Por qué somos la opción <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">correcta</span>.
          </h2>
          <ul className="space-y-4">
            {['Desarrollo 100% desde cero.', 'Experiencia comprobada en sector eólico.', 'Integración nativa hardware/software.', 'Orientación a procesos reales.'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <ChevronRight className="text-cyan-400 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-4">
            <GlassCard className="p-6 bg-[#030712]/70">
              <div className="text-4xl font-light text-cyan-400 mb-2">01</div>
              <h4 className="text-white font-medium mb-2">Visión Técnica</h4>
            </GlassCard>
            <GlassCard className="p-6 sm:translate-y-8 bg-[#030712]/70">
              <div className="text-4xl font-light text-blue-400 mb-2">02</div>
              <h4 className="text-white font-medium mb-2">Código Limpio</h4>
            </GlassCard>
            <GlassCard className="p-6 bg-[#030712]/70">
              <div className="text-4xl font-light text-purple-400 mb-2">03</div>
              <h4 className="text-white font-medium mb-2">Sector Industrial</h4>
            </GlassCard>
            <GlassCard className="p-6 sm:translate-y-8 bg-[#030712]/70">
              <div className="text-4xl font-light text-cyan-400 mb-2">04</div>
              <h4 className="text-white font-medium mb-2">Acompañamiento Total</h4>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Industrias = () => (
  <section id="industrias" className="py-24 bg-[#030712]/50 backdrop-blur-md relative z-10 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experiencia Sectorial</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 aspect-video flex items-end p-8">
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
           <div className="absolute inset-0 bg-slate-800 opacity-60 group-hover:scale-105 transition-transform duration-700 bg-[url('[https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80](https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)')] bg-cover bg-center mix-blend-overlay"></div>
           <div className="relative z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
             <div className="inline-block px-3 py-1 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full mb-4">
               Sector Eólico
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Inspección & Software de Monitoreo</h3>
           </div>
        </div>
        <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 aspect-video flex items-end p-8">
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
           <div className="absolute inset-0 bg-slate-800 opacity-60 group-hover:scale-105 transition-transform duration-700 bg-[url('[https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)')] bg-cover bg-center mix-blend-overlay"></div>
           <div className="relative z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
             <div className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-xs font-semibold rounded-full mb-4">
               Manufactura e Industria 4.0
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Sistemas de Gestión a Medida</h3>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export const Proceso = () => {
  const steps = [
    { num: "01", title: "Entendemos la Necesidad" },
    { num: "02", title: "Análisis & Diseño" },
    { num: "03", title: "Desarrollo Ágil" },
    { num: "04", title: "Pruebas & Ajustes" },
    { num: "05", title: "Implementación" }
  ];

  return (
    <section id="proceso" className="py-24 bg-[#030712]/40 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cómo Trabajamos</h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -translate-y-1/2"></div>
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-xl font-bold text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all duration-300 mb-6 bg-[#030712]">
                  {step.num}
                </div>
                <h4 className="text-white font-medium mb-2">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Tecnologias = () => (
  <section className="py-24 bg-[#030712]/60 backdrop-blur-md border-y border-white/5 relative z-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-medium text-slate-300 mb-10">Capacidades Tecnológicas</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        <Chip text="Arquitectura de Software" />
        <Chip text="Desarrollo Web Full-Stack" />
        <Chip text="Integración de Datos (APIs)" />
        <Chip text="Operación Técnica de Drones" />
        <Chip text="Procesamiento de Imágenes" />
        <Chip text="Cloud Infrastructure" />
      </div>
    </div>
  </section>
);

export const Contacto = () => (
  <section id="contacto" className="py-24 bg-gradient-to-b from-[#030712]/70 to-[#030712]/95 backdrop-blur-md relative z-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <GlassCard className="p-8 md:p-12 lg:p-16 bg-[#030712]/80" hover={false}>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Convirtamos tu necesidad en un <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">sistema real.</span>
            </h2>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <UserCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
                <span>Atención directa por especialistas.</span>
              </div>
            </div>
          </div>
          <div className="bg-[#050b14]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50" placeholder="Tu nombre" />
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50" placeholder="correo@empresa.com" />
              <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50 resize-none" placeholder="Describe brevemente tu necesidad..."></textarea>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium flex items-center justify-center gap-2">
                Enviar mensaje <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </GlassCard>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-[#030712] py-12 border-t border-white/10 relative z-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-sm text-slate-500">
      <p>&copy; {new Date().getFullYear()} AeroCode Systems. Todos los derechos reservados.</p>
    </div>
  </footer>
);
