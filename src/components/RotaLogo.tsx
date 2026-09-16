import React from 'react';

interface RotaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubline?: boolean;
}

export const RotaLogo: React.FC<RotaLogoProps> = ({
  className = '',
  size = 'md',
  showSubline = true,
}) => {
  const widthClasses = {
    sm: 'w-[190px]',
    md: 'w-[260px] sm:w-[300px]',
    lg: 'w-[320px] sm:w-[380px]',
  }[size];

  return (
    <div className={`flex flex-col items-center select-none ${widthClasses} ${className}`}>
      {/* Símbolo do Ciclo de Transição Energética com o Arrow Head idêntico ao original */}
      <div className="relative flex justify-center mb-1">
        <svg
          viewBox="0 0 120 120"
          className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_4px_14px_rgba(16,185,129,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradiente do arco principal (ciano para verde esmeralda e limão) */}
            <linearGradient id="rotaLoopGrad" x1="15%" y1="90%" x2="85%" y2="10%">
              <stop offset="0%" stopColor="#00C4B4" />
              <stop offset="35%" stopColor="#059669" />
              <stop offset="70%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>

            {/* Gradiente da ponta da seta */}
            <linearGradient id="rotaArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#4ADE80" />
            </linearGradient>

            {/* Gradiente da cauda interna */}
            <linearGradient id="rotaTailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C4B4" />
              <stop offset="100%" stopColor="#00B4D8" />
            </linearGradient>
          </defs>

          {/* Arco esquerdo e inferior que sobrepõe na cauda */}
          <path
            d="M 58 102
               C 34 102, 16 84, 16 60
               C 16 40, 28 26, 42 19"
            stroke="url(#rotaLoopGrad)"
            strokeWidth="9"
            strokeLinecap="round"
          />

          {/* Arco direito dinâmico que fecha o ciclo */}
          <path
            d="M 52 18
               C 74 18, 98 34, 98 60
               C 98 80, 84 96, 64 101"
            stroke="url(#rotaLoopGrad)"
            strokeWidth="8.5"
            strokeLinecap="round"
          />

          {/* Cauda dinâmica ciano no canto inferior esquerdo */}
          <path
            d="M 44 98
               C 32 94, 25 84, 25 74"
            stroke="url(#rotaTailGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Ponta da Seta (Arrowhead) no topo apontando para cima e direita */}
          <path
            d="M 60 8 L 44 26 L 68 28 Z"
            fill="url(#rotaArrowGrad)"
          />
        </svg>
      </div>

      {/* Palavra "Rota" com peso bold e kerning refinado */}
      <div className="w-full text-center">
        <span className="block font-black text-6xl sm:text-7xl tracking-[-0.04em] text-white leading-[0.82] font-sans drop-shadow-md">
          Rota
        </span>
      </div>

      {/* Subtítulo "TRANSIÇÃO ENERGÉTICA" bem próximo de Rota */}
      <div className="w-full mt-1.5 px-0.5 flex items-center justify-between font-extrabold text-[11px] sm:text-[13px] tracking-[0.22em] sm:tracking-[0.24em] uppercase leading-tight">
        <span className="text-white">TRANSIÇÃO</span>
        <span className="text-[#FF6E14]">ENERGÉTICA</span>
      </div>

      {/* Barra bicolor logo abaixo do subtítulo (Laranja + Verde-Ciano) */}
      <div className="w-full mt-1 h-[3.5px] rounded-full overflow-hidden flex shadow-sm">
        <div className="w-1/2 bg-[#FF6E14]" />
        <div className="w-1/2 bg-[#00D2B4]" />
      </div>

      {/* Identificação MSL EDUCAÇÃO presente nas peças de campanha */}
      {showSubline && (
        <div className="mt-1 text-[9px] sm:text-[10px] font-bold tracking-[0.28em] text-slate-200/90 uppercase text-center">
          MSL EDUCAÇÃO
        </div>
      )}
    </div>
  );
};
