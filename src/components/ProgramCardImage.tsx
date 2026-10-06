import React from 'react';

interface ProgramCardImageProps {
  src: string;
  alt: string;
  category?: string;
  popular?: boolean;
  badge?: string;
  price?: number;
  showPrice?: boolean;
  title: string;
  subtitle: string;
  heightClass?: string;
  objectPosition?: string;
  children?: React.ReactNode;
}

export const ProgramCardImage: React.FC<ProgramCardImageProps> = ({
  src,
  alt,
  category,
  popular = false,
  badge,
  price,
  showPrice = true,
  title,
  subtitle,
  heightClass = 'h-56',
  objectPosition = 'object-center',
  children
}) => {
  return (
    <div className={`relative ${heightClass} overflow-hidden bg-brand-dark select-none`}>
      {/* 1. Main Photography (subtly scales to ~1.03x with slow smooth ease-out 700-900ms) */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${objectPosition} transform transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]`}
      />

      {/* 2. Dark Transparent Gradient (rises smoothly from bottom toward top with charcoal/royal-violet tint) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#080511]/95 via-[#0e0818]/65 via-55% to-black/25 opacity-40 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Ghosted Faded Image Texture (extremely low opacity, slight blur, subtle photographic echo) */}
      <div
        className={`absolute inset-0 bg-cover ${objectPosition.replace('object-', 'bg-')} opacity-0 group-hover:opacity-15 mix-blend-soft-light filter blur-[0.6px] scale-100 group-hover:scale-[1.04] transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none`}
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />

      {/* 4. Cinematic Light Sweep (soft, restrained diagonal highlight reflection travels across once) */}
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />

      {/* 5. Badges (remain stable at top-left without jumping, tiny brightness/glow boost) */}
      <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-20 pointer-events-none">
        {badge ? (
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md border border-purple-500/40 text-purple-300 shadow-lg transition-all duration-500 ease-out group-hover:brightness-125 group-hover:border-purple-400/70 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.4)]">
            {badge}
          </span>
        ) : category ? (
          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-purple-600/90 text-white backdrop-blur-sm border border-brand-purple-400/40 transition-all duration-500 ease-out group-hover:brightness-110 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.35)]">
            {category === 'junior'
              ? 'JUNIOR'
              : category === 'women'
              ? "WOMEN'S"
              : category === 'private'
              ? 'PRIVATE'
              : category === 'packages'
              ? 'PACKAGES'
              : category === 'gear'
              ? 'GEAR'
              : category === 'tech'
              ? 'TECH LAB'
              : category === 'gift'
              ? 'GIFT'
              : category.toUpperCase()}
          </span>
        ) : null}

        {popular && !badge && (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/90 text-brand-dark backdrop-blur-sm transition-all duration-500 ease-out group-hover:brightness-110 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.4)]">
            POPULAR
          </span>
        )}
      </div>

      {/* TEXT REVEAL: Emerges from dark gradient (translates up 14px, fades from opacity 0 to 1) */}
      <div className={`absolute inset-x-0 bottom-3.5 left-4 ${(showPrice && price !== undefined) ? 'right-28' : children ? 'right-16' : 'right-4'} pointer-events-none z-10`}>
        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="w-6 h-[2px] bg-gradient-to-r from-brand-purple-400 to-transparent mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
          <h4 className="font-display font-black text-sm sm:text-base text-white leading-snug line-clamp-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {title}
          </h4>
          <p className="text-[11px] font-mono tracking-wider text-purple-300 line-clamp-1 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] opacity-95 mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* 6. Price at bottom (smoothly moves upward 6-10px and becomes more prominent) */}
      {showPrice && price !== undefined && (
        <div className="absolute bottom-3 right-4 z-10 pointer-events-none transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
          <div className="font-display font-extrabold text-xl sm:text-2xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            ${price}{' '}
            <span className="text-xs font-normal text-brand-muted group-hover:text-purple-300 transition-colors duration-500">
              CAD
            </span>
          </div>
        </div>
      )}

      {/* Optional Custom Children (e.g. Quick View Eye Button) */}
      {children}
    </div>
  );
};
