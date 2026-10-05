import React from 'react';

interface LuxuryImageCardProps {
  src: string;
  alt: string;
  subTitle?: string;
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
}

export const LuxuryImageCard: React.FC<LuxuryImageCardProps> = ({
  src,
  alt,
  subTitle,
  className = '',
  imgClassName = '',
  children
}) => {
  return (
    <div className={`relative overflow-hidden group cursor-pointer select-none ${className}`}>
      {/* 1. Base Original Image (remains completely visible underneath without distortion) */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] ${imgClassName}`}
      />

      {/* 2. Soft Faded Image Texture (Very subtle, low-opacity duplicate of the image visible inside/behind overlay) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 mix-blend-soft-light transition-all duration-700 ease-out pointer-events-none filter blur-[0.5px] scale-100 group-hover:scale-105"
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />

      {/* 3. Dark, Low-Opacity Gradient Overlay (Smoothly animates from bottom of image to top) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-55% to-transparent opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
        aria-hidden="true"
      />

      {/* 4 & 5. Brand Text "DAVID BANKS GOLF." (Smoothly fades in and slides upward from bottom) */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col justify-end pointer-events-none z-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-600 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* Subtle luxury hairline indicator */}
          <div className="w-7 h-[1.5px] bg-gradient-to-r from-brand-purple-400 to-white/30 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150" />

          <h4 className="font-display font-extrabold text-sm sm:text-base md:text-lg text-white tracking-[0.22em] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            DAVID BANKS GOLF
          </h4>

          {subTitle && (
            <p className="text-[10px] font-mono tracking-[0.25em] text-zinc-300 uppercase mt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] opacity-85">
              {subTitle}
            </p>
          )}
        </div>
      </div>

      {/* Optional custom children (e.g. badges, price tags, or interactive elements) */}
      {children}
    </div>
  );
};

