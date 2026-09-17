import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ShieldCheck, 
  BellOff, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink,
  Lock,
  Zap
} from 'lucide-react';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { Confetti, ConfettiRef, TextLoop, BlurFade, GradientBackground } from './components/ui/sign-up';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/HXsAvPCRCHXCfNTvOH9knd?mode=gi_t';
const OFFICIAL_SITE_URL = 'https://rotatransicaoenergetica.com.br/';

export default function App() {
  const [copied, setCopied] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);

  const fireConfetti = () => {
    const fire = confettiRef.current?.fire;
    if (fire) {
      // Confetti with brand colors: WhatsApp Green, Teal Cyan, Solar Orange, White
      const colors = ['#25D366', '#00D2B4', '#10B981', '#FF6E14', '#FFFFFF'];
      const defaults = { 
        startVelocity: 35, 
        spread: 360, 
        ticks: 90, 
        zIndex: 9999,
        colors
      };
      fire({ ...defaults, particleCount: 50, origin: { x: 0.15, y: 0.85 }, angle: 60 });
      fire({ ...defaults, particleCount: 50, origin: { x: 0.85, y: 0.85 }, angle: 120 });
    }
  };

  const handleWhatsAppClick = () => {
    fireConfetti();
  };

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
    <div
      id="main-landing-page"
      className="relative min-h-screen w-full bg-[#071b30] text-white flex flex-col justify-between items-center overflow-x-hidden px-4 py-8 sm:py-12 selection:bg-[#25D366] selection:text-black"
    >
      {/* Confetti Canvas for Celebratory VIP Access */}
      <Confetti ref={confettiRef} manualstart className="fixed inset-0 pointer-events-none z-[999]" />

      {/* Modern Theme-Aware Animated Gradient Background with Brand Colors */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-85">
        <GradientBackground 
          primaryColor="#00D2B4" 
          secondaryColor="#0A3E75" 
          accentColor="#10B981" 
          warmColor="#FF6E14" 
        />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
          aria-hidden="true" 
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center my-auto">
        
        {/* Brand Logo with Ambient Glow */}
        <BlurFade delay={0.08} duration={0.5} className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative group">
            {/* Soft backdrop glow behind logo */}
            <div 
              className="absolute -inset-4 bg-gradient-to-r from-[#00D2B4]/20 via-[#10B981]/25 to-[#0A3E75]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700"
              aria-hidden="true"
            />
            <img
              id="brand-logo-image"
              src="/rota-logo-trim.png"
              alt="Rota Transição Energética"
              className="relative h-28 sm:h-36 md:h-40 w-auto object-contain select-none drop-shadow-[0_16px_36px_rgba(0,0,0,0.65)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </BlurFade>

        {/* Central Glassmorphic Card */}
        <BlurFade delay={0.16} duration={0.55} className="w-full">
          <div
            id="vip-card"
            className="glass-panel relative rounded-3xl p-6 sm:p-9 text-center flex flex-col items-center overflow-hidden"
          >
            {/* Top Border Reflection Highlight */}
            <div 
              className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" 
              aria-hidden="true"
            />

            {/* Dynamic Status Pill Badge with TextLoop */}
            <div
              id="status-badge"
              className="glass-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse shrink-0" />
              <TextLoop interval={2.5} className="font-semibold text-emerald-300">
                <span>Último Passo • Acesse o Grupo VIP</span>
                <span>100% Gratuito • Vagas Oficiais</span>
                <span>Grupo Silencioso • Apenas Avisos</span>
              </TextLoop>
            </div>

            {/* Main Headline */}
            <h1
              id="headline"
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3"
            >
              Entre gratuito no nosso{' '}
              <span className="text-[#25D366] bg-gradient-to-r from-[#25D366] via-emerald-300 to-[#00D2B4] bg-clip-text text-transparent underline decoration-[#25D366]/40 underline-offset-6">
                Grupo VIP de WhatsApp
              </span>
            </h1>

            {/* Explanatory Copy */}
            <p
              id="subheadline"
              className="text-sm sm:text-base text-slate-200/90 font-normal leading-relaxed max-w-md mb-8"
            >
              Para receber os avisos importantes, materiais exclusivos e o link oficial de acesso ao evento{' '}
              <strong className="text-white font-semibold">Rota Transição Energética</strong>, acesse o grupo agora.
            </p>

            {/* Hero WhatsApp Call to Action Button */}
            <div className="w-full relative group">
              {/* Outer pulsing emerald/teal aura */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#00D2B4] rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"
                aria-hidden="true"
              />

              <a
                id="whatsapp-cta-button"
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="whatsapp-hero-btn relative w-full flex items-center justify-center gap-3.5 bg-gradient-to-r from-[#25D366] via-[#22c55e] to-[#16a34a] text-slate-950 font-black text-base sm:text-lg py-4 sm:py-4.5 px-6 rounded-2xl shadow-[0_12px_32px_rgba(37,211,102,0.5)] cursor-pointer"
              >
                {/* Shiny glass specular light layer */}
                <div 
                  className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
                </div>

                <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-950 shrink-0 drop-shadow-sm" />
                <div className="flex flex-col items-start text-left leading-tight">
                  <span className="tracking-wide uppercase text-sm sm:text-base font-black">
                    ENTRAR NO GRUPO VIP AGORA
                  </span>
                  <span className="text-xs font-bold text-slate-900/80 font-sans tracking-normal">
                    Toque para entrar no WhatsApp
                  </span>
                </div>
              </a>
            </div>

            {/* Trust and Reassurance Badges */}
            <div
              id="trust-badges"
              className="grid grid-cols-3 gap-2 w-full mt-7 pt-6 border-t border-white/10 text-center"
            >
              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/[0.02]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-100">100% Gratuito</span>
                <span className="text-[10px] text-slate-400 hidden sm:block">Sem custos</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/[0.02]">
                <BellOff className="w-5 h-5 text-[#FF6E14] shrink-0" />
                <span className="text-xs font-semibold text-slate-100">Sem Spam</span>
                <span className="text-[10px] text-slate-400 hidden sm:block">Apenas avisos</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/[0.02]">
                <ShieldCheck className="w-5 h-5 text-[#00D2B4] shrink-0" />
                <span className="text-xs font-semibold text-slate-100">Canal Oficial</span>
                <span className="text-[10px] text-slate-400 hidden sm:block">Verificado</span>
              </div>
            </div>

            {/* Alternative Option: Copy Link */}
            <div id="copy-link-section" className="mt-5 w-full flex flex-col items-center">
              <button
                id="copy-link-button"
                type="button"
                onClick={handleCopyLink}
                className="glass-sub-button inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white py-1.5 px-4 rounded-full cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Link do WhatsApp copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Problemas ao abrir? Clique para copiar o link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </BlurFade>

        {/* Friendly Helper Note */}
        <BlurFade delay={0.24}>
          <p className="mt-5 text-center text-xs text-slate-400/90 max-w-sm flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>O WhatsApp abrirá automaticamente. Basta clicar em "Entrar no grupo".</span>
          </p>
        </BlurFade>
      </div>

      {/* Official Footer */}
      <footer
        id="page-footer"
        className="relative z-10 mt-8 pt-4 pb-2 w-full max-w-xl text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/10"
      >
        <span>© {new Date().getFullYear()} Rota Transição Energética • MSL Educação</span>
        <a
          id="official-site-link"
          href={OFFICIAL_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
        >
          <span>rotatransicaoenergetica.com.br</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </footer>

      {/* Toast Notification on Copy */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 z-50 bg-[#0a233f]/95 border border-emerald-500/50 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-sm backdrop-blur-md"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Link do WhatsApp copiado com sucesso!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
