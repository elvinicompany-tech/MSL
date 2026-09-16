import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, BellOff, Sparkles, Copy, Check, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './components/WhatsAppIcon';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/HXsAvPCRCHXCfNTvOH9knd?mode=gi_t';
const OFFICIAL_SITE_URL = 'https://rotatransicaoenergetica.com.br/';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_GROUP_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <main
      id="main-landing-page"
      className="relative min-h-screen w-full bg-[#071b30] text-white flex flex-col justify-between items-center overflow-x-hidden px-4 py-8 sm:py-12 selection:bg-[#25D366] selection:text-black"
    >
      {/* Efeitos de iluminação ambiente no tom da identidade visual */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#00D2B4]/15 via-[#10B981]/10 to-transparent rounded-full blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-32 w-80 h-80 bg-[#FF6E14]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 -left-32 w-80 h-80 bg-[#00D2B4]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Grade sutil de fundo */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-35"
        aria-hidden="true"
      />

      {/* Container Principal */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center my-auto">
        
        {/* Logo Oficial com a Imagem Real Enviada */}
        <motion.div
          id="brand-logo-section"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 sm:mb-8 flex justify-center"
        >
          <img
            id="brand-logo-image"
            src="/rota-logo-trim.png"
            alt="Rota Transição Energética"
            className="h-28 sm:h-36 md:h-40 w-auto object-contain select-none drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Card Central com Alta Taxa de Conversão */}
        <motion.div
          id="vip-card"
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          className="w-full bg-[#0a233f]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.5)] text-center flex flex-col items-center"
        >
          {/* Badge de Próximo Passo */}
          <div
            id="status-badge"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Último Passo • Acesse o Grupo VIP</span>
          </div>

          {/* Título Principal Conforme Pedido */}
          <h1
            id="headline"
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3"
          >
            Entre gratuito no nosso{' '}
            <span className="text-[#25D366] underline decoration-[#25D366]/40 underline-offset-4">
              Grupo VIP de WhatsApp
            </span>
          </h1>

          {/* Texto de Apoio Reafirmando a Inscrição */}
          <p
            id="subheadline"
            className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-md mb-7"
          >
            Para receber os avisos importantes, materiais exclusivos e o link oficial de acesso ao evento{' '}
            <strong className="text-white font-semibold">Rota Transição Energética</strong>, entre no grupo oficial.
          </p>

          {/* Botão de Chamada para Ação (WhatsApp Green com Glow) */}
          <div className="w-full relative group">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#00D2B4] rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"
              aria-hidden="true"
            />

            <a
              id="whatsapp-cta-button"
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full flex items-center justify-center gap-3.5 bg-gradient-to-r from-[#25D366] to-[#20bd5a] hover:from-[#22c55e] hover:to-[#16a34a] text-slate-950 font-black text-base sm:text-lg py-4 sm:py-4.5 px-6 rounded-xl shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-300 transform active:scale-[0.98] cursor-pointer"
            >
              <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-950 shrink-0" />
              <div className="flex flex-col items-start text-left leading-tight">
                <span className="tracking-wide uppercase text-sm sm:text-base font-extrabold">
                  ENTRAR NO GRUPO VIP AGORA
                </span>
                <span className="text-xs font-semibold text-slate-900/80 font-sans tracking-normal">
                  Toque para entrar no WhatsApp
                </span>
              </div>
            </a>
          </div>

          {/* Sinais de Confiança e Segurança */}
          <div
            id="trust-badges"
            className="grid grid-cols-3 gap-2 w-full mt-7 pt-6 border-t border-white/10 text-center"
          >
            <div className="flex flex-col items-center gap-1 p-1 sm:p-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">100% Gratuito</span>
              <span className="text-[10px] text-slate-400 hidden sm:block">Sem custos</span>
            </div>

            <div className="flex flex-col items-center gap-1 p-1 sm:p-2">
              <BellOff className="w-5 h-5 text-[#FF6E14] shrink-0" />
              <span className="text-xs font-semibold text-slate-200">Sem Spam</span>
              <span className="text-[10px] text-slate-400 hidden sm:block">Apenas avisos</span>
            </div>

            <div className="flex flex-col items-center gap-1 p-1 sm:p-2">
              <ShieldCheck className="w-5 h-5 text-[#00D2B4] shrink-0" />
              <span className="text-xs font-semibold text-slate-200">Canal Oficial</span>
              <span className="text-[10px] text-slate-400 hidden sm:block">Verificado</span>
            </div>
          </div>

          {/* Opção Alternativa: Copiar Link */}
          <div id="copy-link-section" className="mt-5 w-full flex flex-col items-center">
            <button
              id="copy-link-button"
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors py-1 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Link do WhatsApp copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Problemas ao abrir? Clique para copiar o link direto</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Lembrete de Abertura Automática */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-center text-xs text-slate-400 max-w-sm"
        >
          O WhatsApp abrirá automaticamente. Basta confirmar a entrada no grupo.
        </motion.p>
      </div>

      {/* Rodapé Oficial */}
      <footer
        id="page-footer"
        className="relative z-10 mt-8 pt-4 pb-2 w-full max-w-xl text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/5"
      >
        <span>© {new Date().getFullYear()} Rota Transição Energética • MSL Educação</span>
        <a
          id="official-site-link"
          href={OFFICIAL_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
        >
          <span>rotatransicaoenergetica.com.br</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </footer>

      {/* Toast de Confirmação */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 z-50 bg-slate-900/95 border border-emerald-500/50 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-sm backdrop-blur-md"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Link do WhatsApp copiado com sucesso!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
