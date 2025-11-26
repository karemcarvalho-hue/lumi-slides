import React from 'react';
import { SlideContainer } from './SlideContainer';
import { motion } from 'framer-motion';
import { CheckCircle, Inbox, Filter, FlaskConical, Zap, ChevronRight, AlertCircle, Search, Rocket, Lightbulb } from 'lucide-react';

const icons = {
  Inbox, Filter, FlaskConical, Zap, CheckCircle, AlertCircle, Search, Rocket, Lightbulb
};

export const ProcessFlow = ({ title, subtitle, steps, note }) => {
  return (
    <SlideContainer>
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{title}</h2>
        {subtitle && <h3 className="text-lg text-tn-text font-light">{subtitle}</h3>}
      </div>

      <div className="flex-1 flex items-center justify-center px-8">
        {/* Timeline Container */}
        <div className="relative w-full max-w-4xl">
          
          {/* Horizontal Line */}
          <div className="absolute top-10 left-8 right-8 h-1 bg-gradient-to-r from-tn-blue via-tn-lightblue to-tn-blue rounded-full opacity-20" />
        
          {/* Steps Row */}
          <div className="flex justify-between items-start relative">
          {steps.map((step, index) => {
            const Icon = icons[step.icon] || CheckCircle;
              const isLast = index === steps.length - 1;
              
            return (
              <motion.div 
                key={index}
                  className="relative z-10 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                  style={{ width: '18%' }}
                >
                  {/* Icon Circle with ring */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-tn-lightblue/30 flex items-center justify-center shadow-lg">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-tn-blue to-tn-lightblue flex items-center justify-center text-white">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Step Number */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border-2 border-tn-lightblue text-tn-blue rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  {!isLast && (
                    <div className="absolute top-10 left-[calc(100%)] w-[calc(100%-20px)] flex items-center justify-center" style={{ transform: 'translateX(-50%)' }}>
                      <ChevronRight size={24} className="text-tn-lightblue/50" />
                </div>
                  )}
                  
                  {/* Label */}
                  <div className="text-center mt-5">
                  <h4 className="font-bold text-tn-blue text-base mb-1">{step.label}</h4>
                    <p className="text-xs text-tn-text opacity-60">{step.description || step.sub}</p>
                </div>
              </motion.div>
            );
          })}
          </div>
          
        </div>
      </div>

      {note && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="mt-8 text-center"
        >
          <span className="px-4 py-2 bg-gray-50 rounded-full text-xs text-tn-text font-medium border border-gray-100">
            💡 {note}
          </span>
        </motion.div>
      )}
    </SlideContainer>
  );
};
