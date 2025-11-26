import React from 'react';
import { SlideContainer } from './SlideContainer';
import { motion } from 'framer-motion';

export const SplitContent = ({ title, subtitle, bullets, visual }) => {
  return (
    <SlideContainer>
      <div className="flex h-full gap-24 items-center">
        {/* Left: Content */}
        <div className="w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-extrabold text-tn-blue mb-4 tracking-tight">{title}</h2>
            <h3 className="text-2xl text-tn-lightblue mb-12 font-light">{subtitle}</h3>
            
            <ul className="space-y-8">
              {bullets.map((bullet, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="flex items-start gap-4 text-xl text-tn-text font-light leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 mt-3 rounded-full bg-tn-blue shrink-0 opacity-50" />
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full aspect-square bg-gray-50 rounded-[2rem] flex items-center justify-center relative overflow-hidden"
          >
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-tn-lightblue/10 rounded-bl-[4rem]" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-tn-blue/5 rounded-tr-[4rem]" />

             <div className="text-center relative z-10">
               <div className="text-8xl font-black text-tn-blue mb-2 tracking-tighter">70/30</div>
               <div className="text-sm font-bold text-tn-text uppercase tracking-[0.2em] opacity-60">Metodología</div>
             </div>
          </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
};
