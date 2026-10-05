import React, { useState } from 'react';
import type { NavPage, Product } from '../types';
import { productsData } from '../data/productsData';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ShieldCheck, Sparkles, Eye, X, CheckCircle2 } from 'lucide-react';
import { ProgramCardImage } from '../components/ProgramCardImage';

interface ProductsPageProps {
  setCurrentPage: (page: NavPage) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ setCurrentPage }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [filter, setFilter] = useState<'all' | 'packages' | 'tech' | 'gear' | 'gift'>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const filteredProducts = filter === 'all'
    ? productsData
    : productsData.filter((p) => p.category === filter);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setAddedNotice(`Added "${product.name}" to cart!`);
    setTimeout(() => setAddedNotice(null), 3500);
  };

  return (
    <div className="space-y-16 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Toast Notification */}
      {addedNotice && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-purple-500/40 text-white shadow-2xl text-xs flex items-center gap-3 animate-fade-in">
          <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="font-medium">{addedNotice}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-3 px-3 py-1 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 hover:text-white font-bold transition-colors"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-purple-300 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span className="tracking-wide">David Banks Tour Gear &amp; Coaching Bundles</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          Coaching Packages &amp;{' '}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-200 to-white bg-clip-text text-transparent">
            Tour Gear
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
          Invest in structured lesson bundles, dedicated 3D sensor labs, official David Banks performance apparel, or send an instant coaching gift card.
        </p>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {(
            [
              { id: 'all', label: 'All Items' },
              { id: 'packages', label: 'Lesson Packages' },
              { id: 'tech', label: 'Sensor Biofeedback' },
              { id: 'gear', label: 'DB Tour Gear' },
              { id: 'gift', label: 'Gift Certificates' },
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] border border-purple-400/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10 backdrop-blur-md'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-2xl hover:shadow-[0_10px_35px_rgba(168,85,247,0.15)] hover:-translate-y-1"
          >
            <div>
              {/* Product Image with Luxury Cinematic Hover Interaction */}
              <ProgramCardImage
                src={product.image}
                alt={product.name}
                category={product.category}
                badge={product.badge}
                popular={product.badge === 'Most Popular' || product.badge === 'Best Value'}
                title={product.name}
                subtitle={
                  product.category === 'packages'
                    ? 'Trackman 4 & HackMotion Lab'
                    : product.category === 'tech'
                    ? 'Biofeedback & Sensor Lab'
                    : product.category === 'gear'
                    ? 'Official Tour Performance Gear'
                    : 'VIP Golf Coaching Certificate'
                }
                heightClass="h-64"
                showPrice={false}
              >
                {/* Quick View Button */}
                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="absolute bottom-3.5 right-3.5 z-20 p-2.5 rounded-xl bg-black/75 text-zinc-300 hover:text-white backdrop-blur-md border border-white/15 transition-all hover:bg-white/20 hover:scale-105 active:scale-95 shadow-lg group-hover:border-purple-400/40"
                  title="Quick View Details"
                  aria-label={`Quick view details for ${product.name}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </ProgramCardImage>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="font-display font-extrabold text-2xl text-white">
                      ${product.price}
                    </span>
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase">
                      CAD
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Key Features Bullet Points */}
                <div className="pt-3 border-t border-white/10">
                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 font-bold">✓</span>
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-6 pt-0 space-y-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-display font-bold text-xs transition-all shadow-[0_4px_16px_rgba(168,85,247,0.25)] flex items-center justify-center gap-2 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Facility Guarantee Card */}
      <section className="p-7 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <div className="font-display font-bold text-white text-sm mb-0.5">
              Burlington Facility Guarantee
            </div>
            <p className="leading-relaxed">
              All lesson packages and digital certificates can be redeemed throughout the calendar year with Coach David Banks at Hidden Lake Golf Club.
            </p>
          </div>
        </div>
        <button
          onClick={() => setCurrentPage('contact')}
          className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-purple-300 hover:text-white font-semibold whitespace-nowrap transition-all"
        >
          Custom Request? Contact →
        </button>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-zinc-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 text-zinc-300 hover:text-white backdrop-blur-md border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Quick View Image */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent pointer-events-none" />
            </div>

            <div className="p-7 space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest block">
                    {quickViewProduct.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    {quickViewProduct.name}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display font-extrabold text-2xl text-white">
                    ${quickViewProduct.price}
                  </span>
                  <span className="block text-[10px] font-mono text-zinc-500">
                    CAD
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {quickViewProduct.description}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-white/10">
                <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider block">
                  Package Inclusions:
                </span>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {quickViewProduct.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    handleAddToCart(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white font-display font-bold text-xs shadow-[0_0_25px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart &amp; Instant Checkout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
