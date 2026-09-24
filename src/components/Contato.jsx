import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  Clock, 
  Calendar,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cargo: '',
    telefone: '',
    servico: 'Diagnóstico Operacional & PCM',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = `*Solicitação de Contato - ANL Engenharia*\n\n` +
      `👤 *Nome:* ${formData.nome}\n` +
      `🏢 *Empresa:* ${formData.empresa}\n` +
      `💼 *Cargo:* ${formData.cargo || 'Não informado'}\n` +
      `📱 *Telefone/WhatsApp:* ${formData.telefone}\n` +
      `⚙️ *Serviço de Interesse:* ${formData.servico}\n` +
      `📝 *Mensagem:* ${formData.mensagem || 'Gostaria de agendar uma reunião técnica.'}`;

    const url = `https://wa.me/5531998049626?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Slide 10 • Contato Direto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Vamos <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">Conversar?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Entre em contato diretamente com o Engenheiro Responsável. Agende uma visita técnica ou reunião diagnóstica sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Coluna da Esquerda: Dados do Engenheiro e Contato (Slide 10) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card Principal do Engenheiro */}
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/50 shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    Eng. Anderson Gonçalves Silvério
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mt-1">
                    Engenheiro Mecânico | Especialista em Segurança do Trabalho
                  </p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    CREA/MG: 382575MG
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-800 text-sm">
                
                {/* Telefone / WhatsApp */}
                <a
                  href="https://wa.me/5531998049626?text=Ol%C3%A1%20Eng.%20Anderson%2C%20encontrei%20seu%20contato%20no%20site%20da%20ANL%20Engenharia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all text-slate-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-light">Telefone & WhatsApp Oficial</span>
                    <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors font-mono">
                      (31) 9 9804-9626
                    </span>
                  </div>
                </a>

                {/* E-mail */}
                <a
                  href="mailto:engenheiroandersongoncalves@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all text-slate-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block font-light">E-mail Corporativo</span>
                    <span className="font-medium text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors break-all">
                      engenheiroandersongoncalves@gmail.com
                    </span>
                  </div>
                </a>

                {/* Atendimento */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-light">Abrangência Operacional</span>
                    <span className="font-medium text-xs sm:text-sm text-slate-200">
                      Minas Gerais e todo o Brasil (Presencial e Remoto)
                    </span>
                  </div>
                </div>

              </div>

              {/* Selo de Garantia */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Atendimento ágil, resposta técnica em até 2 horas úteis.</span>
              </div>
            </div>

          </div>

          {/* Coluna da Direita: Formulário de Proposta Direta */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Solicite uma Proposta Técnica
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8 font-light">
                Preencha os dados abaixo para receber uma avaliação preliminar do seu projeto diretamente no WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Mendes"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nome da Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Usinagem & Metalúrgica S.A."
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(31) 9 9999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Cargo / Função
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Gerente de Manutenção / Diretor"
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Serviço de Principal Interesse
                  </label>
                  <select
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                  >
                    <option value="Diagnóstico Operacional & PCM">Diagnóstico Operacional & Implantação de PCM</option>
                    <option value="Adequação NR-10, NR-12, NR-13 e NR-35">Adequação NR-10, NR-12, NR-13 e NR-35 com ART</option>
                    <option value="Inspeção Termográfica Preditiva">Inspeção Termográfica & Preditiva em Painéis</option>
                    <option value="Laudos Periculosidade, Ruído e Vibração">Laudos de Periculosidade, Ruído e Vibração</option>
                    <option value="Assistência Técnica em Perícias Judiciais">Assistência Técnica em Perícias Trabalhistas</option>
                    <option value="Treinamento e Capacitação Operacional">Treinamento e Capacitação In-Company</option>
                    <option value="Outros Serviços Técnicos">Outro Projeto Sob Medida</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Detalhes do Projeto ou Desafio
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva brevemente sua planta, quantidade de máquinas ou necessidade técnica..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-400 text-slate-950 hover:brightness-110 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  <span>Enviar Solicitação via WhatsApp Direto</span>
                </button>
                
                <p className="text-[11px] text-center text-slate-500">
                  Seus dados estão protegidos. Nenhum dado é repassado a terceiros.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
