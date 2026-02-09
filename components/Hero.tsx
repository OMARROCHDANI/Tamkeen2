
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-20 overflow-hidden">
      {/* Background Decorative Grid/Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 w-[1px] h-full bg-primary/5 hidden lg:block" />
        <div className="absolute left-[50%] top-0 w-[1px] h-full bg-primary/5 hidden lg:block" />
        <div className="absolute right-[10%] top-0 w-[1px] h-full bg-primary/5 hidden lg:block" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative h-full flex flex-col justify-center">
        
        {/* Top Meta Info */}
        <div className="absolute top-10 left-6 lg:left-12 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-cta" />
            <span className="uppercase tracking-[0.5em] text-[9px] font-bold text-accent">Studio &bull; Vol 01</span>
          </motion.div>
        </div>

        <div className="relative grid grid-cols-12 gap-4 items-center">
          
          {/* Left Column: Description & Sub-image */}
          <div className="col-span-12 lg:col-span-4 order-2 lg:order-1 mt-12 lg:mt-0 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-xs space-y-8"
            >
              <div className="space-y-4">
                <span className="accent-text text-xl md:text-2xl text-accent block italic">
                  Digital Artifacts of Purpose
                </span>
                <p className="font-light text-bodyText leading-relaxed text-sm md:text-base">
                  Tamkeen is a boutique design studio crafting high-end digital experiences rooted in Islamic values. We believe in beauty as a form of worship and ethics as the foundation of innovation.
                </p>
              </div>
              
              <div className="pt-8">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-4 text-primary font-bold uppercase tracking-[0.4em] text-[10px]"
                >
                  <span>Explore Catalog</span>
                  <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                    <span className="text-xs">↓</span>
                  </div>
                </a>
              </div>

              {/* Detail Image */}
              <motion.div 
                className="hidden lg:block pt-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                <div className="w-48 aspect-[3/4] overflow-hidden grayscale brightness-90 border border-primary/5 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1518005020250-675f040ec567?auto=format&fit=crop&q=80&w=400" 
                    alt="Abstract architecture detail"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Center Column: Massive Title & Hero Image */}
          <div className="col-span-12 lg:col-span-8 order-1 lg:order-2 relative">
            
            {/* Primary Headline */}
            <div className="relative z-30">
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="heading-luxury text-[18vw] lg:text-[14vw] leading-none text-primary text-right lg:-mr-12"
              >
                Ihsaan
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="flex items-end justify-end gap-6 -mt-4 lg:-mt-10"
              >
                <span className="text-cta italic font-serif text-4xl md:text-6xl mb-4 lg:mb-8">at</span>
                <h1 className="heading-luxury text-[15vw] lg:text-[12vw] leading-none text-primary">
                  Scale
                </h1>
              </motion.div>
            </div>

            {/* Main Hero Image - Strategically Overlapped */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute top-[20%] left-[-10%] lg:left-[-20%] w-[60%] lg:w-[45%] aspect-[3/4] z-10"
            >
              <div className="relative w-full h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
                <div className="absolute -inset-4 border border-cta/20 -z-10 translate-x-8 translate-y-8" />
                <img
                  src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200"
                  alt="High-end architectural landscape"
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Enhanced Arabic Backdrop */}
      <div className="absolute bottom-[-10%] right-[-5%] pointer-events-none select-none z-0">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2 }}
          className="heading-luxury text-[40vw] text-primary leading-none whitespace-nowrap"
        >
          تمكين
        </motion.p>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="text-[8px] uppercase tracking-[0.6em] text-accent font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-cta to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
