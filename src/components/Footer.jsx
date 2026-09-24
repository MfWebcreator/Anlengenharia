import React from 'react';
import { ArrowUp, ShieldCheck, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Coluna 1: Logo & Sobre */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-anl.svg" 
                alt="Logo ANL Engenharia" 
                className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]" 
              />
              <div>
                <span className="text-lg font-black tracking-wider text-white">ANL</span>
                <span className="text-lg font-light text-cyan-400"> ENGENHARIA</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Engenharia mecânica, gestão de manutenção (PCM), segurança do trabalho e conformidade técnica para elevar a eficiência da sua indústria.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              CREA/MG: 382575MG
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#desafios" className="hover:text-cyan-400 transition-colors">Desafios da Indústria</a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-cyan-400 transition-colors">Quem Somos</a>
              </li>
              <li>
                <a href="#proposta-valor" className="hover:text-cyan-400 transition-colors">Proposta de Valor</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-cyan-400 transition-colors">Simulador de Economia</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-cyan-400 transition-colors">Matriz de Diferenciais</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços Principais */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li className="text-slate-400">Diagnóstico Operacional & PCM</li>
              <li className="text-slate-400">Adequação NR-10, NR-12, NR-13, NR-35</li>
              <li className="text-slate-400">Inspeção Termográfica Preditiva</li>
              <li className="text-slate-400">Laudos Periculosidade & Insalubridade</li>
              <li className="text-slate-400">Assistência em Perícias Trabalhistas</li>
              <li className="text-slate-400">Treinamentos Operacionais In Company</li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Responsável */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Responsável Técnico
            </h4>
            <p className="text-xs font-semibold text-slate-200">
              Eng. Anderson Gonçalves Silvério
            </p>
            <p className="text-[11px] text-slate-400 mb-4 font-light">
              Engenheiro Mecânico e de Segurança do Trabalho
            </p>

            <div className="space-y-2 text-xs">
              <a 
                href="https://wa.me/5531998049626" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                (31) 9 9804-9626
              </a>
              <a 
                href="mailto:engenheiroandersongoncalves@gmail.com" 
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                engenheiroandersongoncalves@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <p>
            © {new Date().getFullYear()} ANL Engenharia & Soluções Técnicas. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-xs"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
