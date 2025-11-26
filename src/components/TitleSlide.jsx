import React from 'react';
import { SlideContainer } from './SlideContainer';
import { motion } from 'framer-motion';

export const TitleSlide = ({ title, subtitle, date, author }) => {
  return (
    <SlideContainer>
      <div className="flex-1 flex flex-col justify-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-tn-blue/10 text-tn-blue rounded-full text-xs font-bold tracking-wider uppercase">
              {date}
            </span>
            <span className="text-tn-text text-xs tracking-wider uppercase opacity-70">
              {author}
            </span>
          </div>
          
          <h1 className="text-8xl font-black text-tn-blue leading-tight tracking-tight mb-8">
            {title}
          </h1>
          
          <p className="text-3xl text-tn-text font-light leading-snug">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </SlideContainer>
  );
};
