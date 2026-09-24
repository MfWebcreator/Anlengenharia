import React from 'react';
import { Percent, Shield, Award, LineChart } from 'lucide-react';

export default function Metrics() {
  return (
    <section id="metricas" className="py-16 relative z-10 border-t border-teal-500/20 bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="spotlight-card p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-[#00e5a3] text-xl mb-4">
                <Percent className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#00e5a3]">5% a 15%</div>
              <div className="text-sm text-slate-200 font-semibold mt-1">Custos evitáveis recuperados</div>
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">Redução imediata de desperdícios operacionais e paradas não planejadas de maquinário.</p>
          </div>

          <div className="spotlight-card p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-[#00e5a3] text-xl mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#00e5a3]">NR-12 / 13</div>
              <div className="text-sm text-slate-200 font-semibold mt-1">Conformidade e Laudos Oficiais</div>
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">Segurança técnica, jurídica e blindagem da empresa contra multas e acidentes.</p>
          </div>

          <div className="spotlight-card p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-[#00e5a3] text-xl mb-4">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#00e5a3]">100%</div>
              <div className="text-sm text-slate-200 font-semibold mt-1">Respaldo Técnico com ART</div>
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">Supervisão formal de engenheiro mecânico habilitado no CREA/MG 382575MG.</p>
          </div>

          <div className="spotlight-card p-7 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-[#00e5a3] text-xl mb-4">
                <LineChart className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#00e5a3]">PCM &amp; MTBF</div>
              <div className="text-sm text-slate-200 font-semibold mt-1">Previsibilidade e Gestão</div>
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">Processos padronizados e controle total da manutenção para maior produtividade.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
