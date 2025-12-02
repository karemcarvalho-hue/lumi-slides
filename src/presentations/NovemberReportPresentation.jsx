import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { 
  TrendingUp, TrendingDown, Users, Zap, Package, BarChart3, 
  AlertTriangle, CheckCircle, Clock, ArrowRight, Target,
  Rocket, FlaskConical, MessageSquare, Image, Mic, Calendar,
  AlertCircle, FileText, Sparkles, Eye, Activity, ExternalLink,
  Command, Search, Layers
} from 'lucide-react';

const LumiIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src={`${import.meta.env.BASE_URL}lumi-icon.png`}
    alt="Lumi AI" 
    className={`object-contain ${className}`}
  />
);

// Slide 1: Title
const TitleSlide = (
  <SlideContainer key="title">
    <div className="h-full flex flex-col items-center justify-center text-center">
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="mb-10">
        <div className="w-32 h-32 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/30 opacity-50" />
          <LumiIcon className="w-16 h-16" />
        </div>
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <h1 className="text-7xl font-bold text-tn-blue mb-6 tracking-tight">Reporte Noviembre 2025</h1>
        <div className="flex items-center justify-center gap-4 text-xl text-tn-text font-light tracking-wide">
          <span>Período: 1-30 Nov</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>Fecha de corte: 1 Dic</span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-16">
        <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-medium shadow-lg">
          Highlight: Lanzamiento Beta de Lumi Assistant (17 Nov)
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex gap-4">
        <div className="px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" /> Actions: Rollout
        </div>
        <div className="px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" /> Assistant: Beta
        </div>
        <div className="px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-500" /> Studio: Discovery
        </div>
      </motion.div>
    </div>
  </SlideContainer>
);

// Slide 1.5: Business Report Cover
const BusinessReportCover = (
  <SlideContainer key="business-cover">
    <div className="h-full flex flex-col items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50" />
      <div className="relative z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-blue-200">
            <BarChart3 size={48} className="text-white" />
          </div>
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="text-blue-500 font-bold text-lg tracking-widest uppercase mb-4">Parte 1</p>
          <h1 className="text-6xl font-black text-tn-blue mb-4">Business Report</h1>
          <p className="text-xl text-gray-500 font-light">Métricas de negocio y performance</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="mt-12 flex gap-6 justify-center"
        >
          {[
            { label: "AI Users", icon: Users },
            { label: "Engagement", icon: Activity },
            { label: "Upsells", icon: TrendingUp },
            { label: "Features", icon: Zap },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <item.icon size={16} className="text-blue-500" />
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 2: Executive Summary
const ExecutiveSummarySlide = (
  <SlideContainer key="executive-summary">
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-tn-blue mb-1 tracking-tight">Executive Summary</h2>
        <p className="text-base text-tn-text font-light">Métricas core de Noviembre 2025</p>
      </div>

      {/* KPIs Row */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {[
          { label: "AI Users", value: "63,085", change: "-0.2%", changeLabel: "vs Oct", color: "blue", negative: true },
          { label: "Interacciones", value: "902,977", change: "+20.2%", changeLabel: "vs Oct", color: "green" },
          { label: "Upsells", value: "1,972", change: "-33.9%", changeLabel: "vs Oct", color: "amber", negative: true },
          { label: "Beta Testers", value: "48", change: "NEW", changeLabel: "Assistant", color: "purple" },
        ].map((kpi, i) => (
          <div key={i} className={`p-4 rounded-xl border ${
            kpi.color === 'blue' ? 'bg-blue-50 border-blue-100' :
            kpi.color === 'green' ? 'bg-green-50 border-green-100' :
            kpi.color === 'amber' ? 'bg-amber-50 border-amber-100' : 'bg-purple-50 border-purple-100'
          }`}>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{kpi.label}</p>
            <p className="text-3xl font-black text-tn-blue">{kpi.value}</p>
            <p className={`text-sm font-medium ${kpi.negative ? 'text-red-500' : kpi.change === 'NEW' ? 'text-purple-600' : 'text-green-600'}`}>
              {kpi.change} <span className="text-gray-400 font-normal">{kpi.changeLabel}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Line Chart - Full History since Aug 2024 */}
      <div className="bg-white border border-gray-200 p-4 rounded-xl mb-4 flex-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-tn-blue text-sm flex items-center gap-2">
            <TrendingUp size={16} /> Evolución Histórica de AI Users
          </h3>
          <span className="text-[10px] text-gray-400">Ago 2024 - Nov 2025 (16 meses)</span>
        </div>
        
        {/* SVG Line Chart */}
        <div className="relative h-32">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[9px] text-gray-400 w-8">
            <span>70K</span>
            <span>35K</span>
            <span>0</span>
          </div>
          
          {/* Chart area */}
          <div className="absolute left-9 right-0 top-0 bottom-4">
            <svg className="w-full h-full" viewBox="0 0 750 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              <line x1="0" y1="50" x2="750" y2="50" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4,4" />
              <line x1="0" y1="25" x2="750" y2="25" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4,4" />
              <line x1="0" y1="75" x2="750" y2="75" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4,4" />
              
              {/* Area fill */}
              <motion.path 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3 }}
                d="M 0 90 L 50 66 L 100 47 L 150 27 L 200 40 L 250 31 L 300 30 L 350 24 L 400 19 L 450 16 L 500 21 L 550 20 L 600 24 L 650 24 L 700 10 L 750 10 L 750 100 L 0 100 Z" 
                fill="url(#lineGrad)" 
              />
              
              {/* Main line */}
              <motion.path 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 0 90 L 50 66 L 100 47 L 150 27 L 200 40 L 250 31 L 300 30 L 350 24 L 400 19 L 450 16 L 500 21 L 550 20 L 600 24 L 650 24 L 700 10 L 750 10"
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
            
            {/* Interactive checkpoints overlay - positioned to match SVG line path */}
            <div className="absolute inset-0">
              {[
                { m: "Ago'24", v: "7,000", g: "Inicio", x: 0, y: 90, color: "orange", isHito: true },
                { m: "Sep'24", v: "24,000", g: "+243%", x: 50, y: 66 },
                { m: "Oct'24", v: "37,000", g: "+54%", x: 100, y: 47 },
                { m: "Nov'24", v: "51,000", g: "+38%", x: 150, y: 27 },
                { m: "Dic'24", v: "42,000", g: "-18%", x: 200, y: 40, negative: true },
                { m: "Ene'25", v: "48,000", g: "+14%", x: 250, y: 31 },
                { m: "Feb'25", v: "49,000", g: "+2%", x: 300, y: 30 },
                { m: "Mar'25", v: "53,000", g: "+8%", x: 350, y: 24 },
                { m: "Abr'25", v: "57,000", g: "+8%", x: 400, y: 19 },
                { m: "May'25", v: "59,000", g: "+4%", x: 450, y: 16 },
                { m: "Jun'25", v: "55,000", g: "-7%", x: 500, y: 21, negative: true },
                { m: "Jul'25", v: "56,000", g: "+2%", x: 550, y: 20 },
                { m: "Ago'25", v: "53,000", g: "-5%", x: 600, y: 24, negative: true },
                { m: "Sep'25", v: "53,000", g: "0%", x: 650, y: 24 },
                { m: "Oct'25", v: "63,210", g: "+19%", x: 700, y: 10, color: "green", isHito: true },
                { m: "Nov'25", v: "63,085", g: "-0.2%", x: 750, y: 10, color: "blue", isHito: true },
              ].map((d, i) => (
                <div 
                  key={i} 
                  className="absolute group cursor-pointer"
                  style={{ 
                    left: `${(d.x / 750) * 100}%`, 
                    top: `${d.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Hover area - invisible but larger for easier interaction */}
                  <div className="absolute -inset-4" />
                  {/* Checkpoint dot - hidden until hover (except hitos) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      d.isHito 
                        ? `ring-2 ring-white shadow-lg ${
                            d.color === 'orange' ? 'bg-orange-500' :
                            d.color === 'green' ? 'bg-green-500' :
                            'bg-blue-500'
                          }`
                        : 'opacity-0 group-hover:opacity-100 bg-blue-500 group-hover:ring-2 group-hover:ring-white group-hover:shadow-lg'
                    }`}
                  />
                  {/* Tooltip */}
                  <div className={`absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 ${
                    d.y > 50 ? 'bottom-full mb-2' : 'top-full mt-2'
                  }`}>
                    <div className="bg-gray-900 text-white px-2.5 py-2 rounded-lg shadow-xl text-center whitespace-nowrap">
                      <p className="text-[9px] font-bold text-gray-300">{d.m}</p>
                      <p className="text-[12px] font-bold">{d.v}</p>
                      <p className={`text-[9px] font-medium ${
                        d.negative ? 'text-red-400' : d.g === '0%' ? 'text-gray-400' : 'text-green-400'
                      }`}>{d.g} MoM</p>
                    </div>
                    {/* Arrow */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-transparent ${
                      d.y > 50 ? 'border-t-4 border-t-gray-900 top-full' : 'border-b-4 border-b-gray-900 bottom-full'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* X-axis labels */}
          <div className="absolute left-9 right-0 bottom-0 flex justify-between text-[7px] text-gray-400">
            {["A", "S", "O", "N", "D", "E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N"].map((m, i) => (
              <span key={i} className={`${i === 0 ? 'text-orange-500 font-bold' : i === 14 ? 'text-green-600 font-bold' : i === 15 ? 'text-blue-600 font-bold' : ''}`}>
                {m}
              </span>
            ))}
          </div>
          {/* Year markers */}
          <div className="absolute left-9 right-0 -bottom-3 flex text-[6px] text-gray-300">
            <span className="w-[31.25%]">2024</span>
            <span className="w-[68.75%] pl-1">2025</span>
          </div>
        </div>
        
        {/* Annotations */}
        <div className="flex justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-lg">
            <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-orange-700">Lanzamiento</p>
              <p className="text-[9px] text-orange-600">Ago'24: <span className="font-bold">7,000</span> usuarios</p>
              <p className="text-[8px] text-orange-500">Inicio del proyecto</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
            <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-green-700">Récord</p>
              <p className="text-[9px] text-green-600">Oct'25: <span className="font-bold">63,210</span> usuarios</p>
              <p className="text-[8px] text-green-500">+19.1% MoM vs Sep</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
            <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-blue-700">Actual</p>
              <p className="text-[9px] text-blue-600">Nov'25: <span className="font-bold">63,085</span> usuarios</p>
              <p className="text-[8px] text-blue-500">-0.2% MoM · +800% total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50/50 border border-green-100 p-4 rounded-xl">
          <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2 text-sm">
            <TrendingUp size={16} /> Crecimiento Destacado
          </h3>
          <ul className="space-y-1.5 text-sm text-green-700">
            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> Usuarios intensivos: Mediums +31.3%, Hards +38.0%</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> Product Tags +190.8%, Product Brand +168.1%</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> Products From Images +88.9% (19,587 productos)</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> Category Descriptions +1,297% MoM</li>
          </ul>
        </div>
        <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-xl">
          <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2 text-sm">
            <AlertTriangle size={16} /> Contexto Importante
          </h3>
          <ul className="space-y-1.5 text-sm text-amber-700">
            <li className="flex items-start gap-2"><Clock size={14} className="mt-0.5 flex-shrink-0" /> Upsells: dato parcial por fecha de corte (~15 dic)</li>
            <li className="flex items-start gap-2"><Clock size={14} className="mt-0.5 flex-shrink-0" /> AI Users estables: consolidación del récord de oct</li>
            <li className="flex items-start gap-2"><Clock size={14} className="mt-0.5 flex-shrink-0" /> Mes enfocado en desarrollo (beta Assistant)</li>
            <li className="flex items-start gap-2"><Clock size={14} className="mt-0.5 flex-shrink-0" /> Drift identificado en algunas features</li>
          </ul>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 3: User Engagement Overview
const UserEngagementSlide = (
  <SlideContainer key="user-engagement">
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-tn-blue mb-2">User Engagement</h2>
        <p className="text-lg text-tn-text font-light">Distribución por intensidad de uso</p>
      </div>
      <div className="flex-1 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold text-tn-blue">Segmento</th>
              <th className="text-right py-3 px-4 font-bold text-tn-blue">Nov Users</th>
              <th className="text-right py-3 px-4 font-bold text-tn-blue">% Total</th>
              <th className="text-right py-3 px-4 font-bold text-tn-blue">Oct Users</th>
              <th className="text-right py-3 px-4 font-bold text-tn-blue">Cambio MoM</th>
              <th className="text-left py-3 px-4 font-bold text-tn-blue">Definición</th>
            </tr>
          </thead>
          <tbody>
            {[
              { segment: "Testers", nov: "44,314", pct: "70.3%", oct: "47,536", change: "-6.8%", def: "1-9 AIUs/mes", negative: true },
              { segment: "Light Users", nov: "10,345", pct: "16.4%", oct: "9,328", change: "+10.9%", def: "10-29 AIUs/mes" },
              { segment: "Medium Users", nov: "7,018", pct: "11.1%", oct: "5,344", change: "+31.3%", def: "30-99 AIUs/mes", highlight: true },
              { segment: "Hard Users", nov: "1,337", pct: "2.1%", oct: "969", change: "+38.0%", def: "100-499 AIUs/mes", highlight: true },
              { segment: "Top Users", nov: "71", pct: "0.1%", oct: "60", change: "+18.3%", def: "500+ AIUs/mes" },
            ].map((row, i) => (
              <tr key={i} className={`border-b border-gray-100 ${row.highlight ? 'bg-green-50' : ''}`}>
                <td className="py-3 px-4 font-medium text-tn-blue">{row.segment}</td>
                <td className="py-3 px-4 text-right font-mono text-gray-800 font-semibold">{row.nov}</td>
                <td className="py-3 px-4 text-right text-gray-500">{row.pct}</td>
                <td className="py-3 px-4 text-right font-mono text-gray-400">{row.oct}</td>
                <td className={`py-3 px-4 text-right font-bold ${row.negative ? 'text-red-500' : 'text-green-600'}`}>{row.change}</td>
                <td className="py-3 px-4 text-gray-500 text-xs">{row.def}</td>
              </tr>
            ))}
            <tr className="bg-tn-blue/5 font-bold">
              <td className="py-3 px-4 text-tn-blue">TOTAL</td>
              <td className="py-3 px-4 text-right font-mono text-tn-blue">63,085</td>
              <td className="py-3 px-4 text-right text-tn-blue">100%</td>
              <td className="py-3 px-4 text-right font-mono text-gray-400">63,237</td>
              <td className="py-3 px-4 text-right text-gray-500">-0.2%</td>
              <td className="py-3 px-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-xl">
        <p className="text-sm text-blue-800">
          <strong>Key Insight:</strong> Migración saludable de Testers (-6.8%) hacia usuarios regulares. 
          Los segmentos intensivos (Medium +31.3%, Hard +38.0%) crecen significativamente.
        </p>
      </div>
    </div>
  </SlideContainer>
);

// Slide 4: User Migration Analysis
const UserMigrationSlide = (
  <SlideContainer key="user-migration">
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-tn-blue mb-2">Migración de Usuarios</h2>
        <p className="text-lg text-tn-text font-light">De experimentación a uso regular</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-center">
            <div className="w-40 h-40 rounded-full bg-red-50 border-4 border-red-200 flex flex-col items-center justify-center mb-4">
              <p className="text-4xl font-black text-red-600">-6.8%</p>
              <p className="text-sm text-red-500 font-medium">Testers</p>
            </div>
            <p className="text-xs text-gray-500">44,314 usuarios</p>
          </motion.div>
          <ArrowRight size={40} className="text-gray-300" />
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-center">
            <div className="w-32 h-32 rounded-full bg-blue-50 border-4 border-blue-200 flex flex-col items-center justify-center mb-4">
              <p className="text-3xl font-black text-blue-600">+10.9%</p>
              <p className="text-xs text-blue-500 font-medium">Light</p>
            </div>
            <p className="text-xs text-gray-500">10,345 usuarios</p>
          </motion.div>
          <ArrowRight size={40} className="text-gray-300" />
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-center">
            <div className="w-36 h-36 rounded-full bg-green-50 border-4 border-green-300 flex flex-col items-center justify-center mb-4 shadow-lg shadow-green-100">
              <p className="text-4xl font-black text-green-600">+31.3%</p>
              <p className="text-sm text-green-500 font-medium">Medium</p>
            </div>
            <p className="text-xs text-gray-500">7,018 usuarios</p>
          </motion.div>
          <ArrowRight size={40} className="text-gray-300" />
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-center">
            <div className="w-40 h-40 rounded-full bg-green-100 border-4 border-green-400 flex flex-col items-center justify-center mb-4 shadow-xl shadow-green-200">
              <p className="text-5xl font-black text-green-700">+38%</p>
              <p className="text-sm text-green-600 font-medium">Hard</p>
            </div>
            <p className="text-xs text-gray-500">1,337 usuarios</p>
          </motion.div>
          <ArrowRight size={40} className="text-gray-300" />
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-center">
            <div className="w-28 h-28 rounded-full bg-purple-50 border-4 border-purple-200 flex flex-col items-center justify-center mb-4">
              <p className="text-2xl font-black text-purple-600">+18.3%</p>
              <p className="text-xs text-purple-500 font-medium">Top</p>
            </div>
            <p className="text-xs text-gray-500">71 usuarios</p>
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
          <p className="text-sm text-green-800"><strong>Interpretación positiva:</strong> Los usuarios que prueban Lumi y encuentran valor están aumentando significativamente su uso.</p>
        </div>
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <p className="text-sm text-blue-800"><strong>Total estable:</strong> -0.2% indica consolidación del récord de octubre, no pérdida de usuarios.</p>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 5: Adopción por Plan
const AdopcionPlanSlide = (
  <SlideContainer key="adopcion-plan">
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-tn-blue mb-2">Adopción por Plan</h2>
        <p className="text-lg text-tn-text font-light">Usuarios AI únicos por plan de suscripción</p>
      </div>
      <div className="flex-1 grid grid-cols-5 gap-4 items-end">
        {[
          { plan: "Plan A", users: "31,622", pct: "51.0%", change: "+3.1%", height: "100%", color: "bg-blue-500" },
          { plan: "Plan Free", users: "17,171", pct: "27.7%", change: "-3.1%", height: "54%", color: "bg-gray-400", negative: true },
          { plan: "Plan B", users: "10,603", pct: "17.1%", change: "+4.4%", height: "34%", color: "bg-green-500" },
          { plan: "Plan C", users: "1,981", pct: "3.2%", change: "+2.7%", height: "6%", color: "bg-purple-500" },
          { plan: "Enterprise", users: "709", pct: "1.1%", change: "+1.9%", height: "2%", color: "bg-amber-500" },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center">
            <div className="w-full flex flex-col items-center justify-end" style={{ height: '300px' }}>
              <div className={`w-full ${item.color} rounded-t-xl transition-all`} style={{ height: item.height, minHeight: '40px' }}>
                <div className="p-3 text-center text-white">
                  <p className="text-2xl font-black">{item.users}</p>
                  <p className="text-xs opacity-80">{item.pct}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="font-bold text-tn-blue">{item.plan}</p>
              <p className={`text-sm font-medium ${item.negative ? 'text-red-500' : 'text-green-600'}`}>{item.change}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
        <p className="text-sm text-blue-800">
          <strong>Insight:</strong> Crecimiento en todos los planes pagos. Plan Free cae -3.1% posiblemente indicando conversiones a planes pagos.
        </p>
      </div>
    </div>
  </SlideContainer>
);

// Slide 6: Revenue Upsells
const RevenueUpsellsSlide = (
  <SlideContainer key="revenue-upsells">
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-tn-blue mb-2">Revenue: Upsells</h2>
        <p className="text-lg text-tn-text font-light">Conversiones atribuidas a AI - Noviembre 2025</p>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex gap-6">
        {/* Left: Hero Metric - Styled as warning/alert */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-72 bg-white border-2 border-red-200 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingDown size={18} className="text-red-600" />
              </div>
              <p className="text-gray-500 text-sm font-medium">Total Conversiones</p>
            </div>
            <p className="text-5xl font-black text-gray-800">1,972</p>
            <div className="flex items-center gap-2 mt-3 px-3 py-1.5 bg-red-100 rounded-lg w-fit">
              <AlertTriangle size={14} className="text-red-600" />
              <span className="text-red-700 font-bold text-sm">-33.9% vs Oct</span>
            </div>
          </div>
          <div className="relative z-10 mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Octubre</span>
              <span className="font-bold text-gray-700">2,983</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">Diferencia</span>
              <span className="font-bold text-red-600">-1,011</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Tiers Detail */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Tier Cards - All showing decline */}
          <div className="grid grid-cols-3 gap-4 flex-1">
            {[
              { tier: "Tier 1", from: "Free", to: "Plan A", nov: 1763, oct: 2596, change: -32.1, pct: 89.4 },
              { tier: "Tier 2", from: "Plan A", to: "Plan B", nov: 169, oct: 327, change: -48.3, pct: 8.6 },
              { tier: "Tier 3", from: "Plan B", to: "Plan C", nov: 40, oct: 59, change: -32.2, pct: 2.0 },
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-600">{t.tier}</span>
                    <span className="text-xs text-gray-500">{t.pct}%</span>
                  </div>
                  <p className="text-sm font-medium mb-3 text-gray-600">{t.from} → {t.to}</p>
                  <p className="text-4xl font-black text-gray-800 mb-1">{t.nov.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">Oct: {t.oct.toLocaleString()}</span>
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-red-100 rounded-full">
                      <TrendingDown size={12} className="text-red-500" />
                      <span className="text-xs font-bold text-red-600">{t.change}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
            <div>
              <p className="text-sm text-amber-800"><strong>Fecha de corte:</strong> Merchants tienen 14 días para pagar. Al corte (1 dic), 204 pagaron. <strong>Métrica comparable: total conversiones.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 7: Feature Performance
const FeaturePerformanceSlide = (
  <SlideContainer key="feature-performance">
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-tn-blue mb-2">Feature Performance</h2>
        <p className="text-lg text-tn-text font-light">Top features por interacciones - Noviembre 2025</p>
      </div>
       <div className="flex-1">
         <table className="w-full text-[11px]">
           <thead>
             <tr className="border-b-2 border-gray-200">
               <th className="text-left py-1 px-2 font-bold text-tn-blue">Feature</th>
               <th className="text-right py-1 px-2 font-bold text-tn-blue">Nov</th>
               <th className="text-right py-1 px-2 font-bold text-tn-blue">Oct</th>
               <th className="text-right py-1 px-2 font-bold text-tn-blue">Cambio</th>
               <th className="text-right py-1 px-2 font-bold text-tn-blue">%</th>
             </tr>
           </thead>
           <tbody>
             {/* Products Section */}
             <tr className="bg-blue-100/50">
               <td colSpan={5} className="py-0.5 px-2 font-bold text-blue-800 text-[10px]">
                 <Package size={10} className="inline mr-1 -mt-0.5" />PRODUCTS <span className="font-normal text-blue-600 ml-1">88.6%</span>
               </td>
             </tr>
             {[
               { feature: "Product Descriptions", nov: "286,871", oct: "324,486", change: "-11.6%", pct: "31.8%", negative: true },
               { feature: "Product SEO, Brand & Tags", nov: "199,701", oct: "150,118", change: "+33.0%", pct: "22.1%", highlight: true },
               { feature: "Product SEO", nov: "99,997", oct: "64,406", change: "+55.3%", pct: "11.1%", highlight: true },
               { feature: "Product Weights & Dimensions", nov: "95,957", oct: "61,529", change: "+55.9%", pct: "10.6%", highlight: true },
               { feature: "Product Tags", nov: "69,194", oct: "23,798", change: "+190.8%", pct: "7.7%", explosive: true },
               { feature: "Product Brand", nov: "28,137", oct: "10,497", change: "+168.1%", pct: "3.1%", explosive: true },
               { feature: "Products From Images", nov: "19,587", oct: "10,367", change: "+88.9%", pct: "2.2%", highlight: true },
             ].map((row, i) => (
               <tr key={`p-${i}`} className={`border-b border-gray-50 ${row.explosive ? 'bg-green-50' : row.highlight ? 'bg-blue-50/30' : ''}`}>
                 <td className="py-0.5 px-2 pl-5 font-medium text-gray-700">{row.feature}</td>
                 <td className="py-0.5 px-2 text-right font-mono text-gray-800 font-semibold">{row.nov}</td>
                 <td className="py-0.5 px-2 text-right font-mono text-gray-400">{row.oct}</td>
                 <td className={`py-0.5 px-2 text-right font-bold ${row.negative ? 'text-red-500' : row.explosive ? 'text-green-700' : 'text-green-600'}`}>{row.change}</td>
                 <td className="py-0.5 px-2 text-right text-gray-500">{row.pct}</td>
               </tr>
             ))}
             
             {/* Images Section */}
             <tr className="bg-amber-100/50">
               <td colSpan={5} className="py-0.5 px-2 font-bold text-amber-800 text-[10px]">
                 <Image size={10} className="inline mr-1 -mt-0.5" />IMAGES <span className="font-normal text-amber-600 ml-1">7.7%</span>
               </td>
             </tr>
             {[
               { feature: "Background Removal", nov: "66,601", oct: "77,505", change: "-14.1%", pct: "7.4%" },
               { feature: "Alt Text", nov: "25,270", oct: "35,149", change: "-28.1%", pct: "2.8%" },
             ].map((row, i) => (
               <tr key={`i-${i}`} className="border-b border-gray-50 bg-red-50/30">
                 <td className="py-0.5 px-2 pl-5 font-medium text-gray-700">{row.feature}</td>
                 <td className="py-0.5 px-2 text-right font-mono text-gray-800 font-semibold">{row.nov}</td>
                 <td className="py-0.5 px-2 text-right font-mono text-gray-400">{row.oct}</td>
                 <td className="py-0.5 px-2 text-right font-bold text-red-500">{row.change}</td>
                 <td className="py-0.5 px-2 text-right text-gray-500">{row.pct}</td>
               </tr>
             ))}
             
             {/* Categories Section */}
             <tr className="bg-purple-100/50">
               <td colSpan={5} className="py-0.5 px-2 font-bold text-purple-800 text-[10px]">
                 <Target size={10} className="inline mr-1 -mt-0.5" />CATEGORIES <span className="font-normal text-purple-600 ml-1">3.2%</span>
               </td>
             </tr>
             {[
               { feature: "Category Suggestions", nov: "23,080", oct: "12,637", change: "+82.6%", pct: "2.6%", highlight: true },
               { feature: "Category Descriptions", nov: "2,934", oct: "210", change: "+1,297%", pct: "0.3%", explosive: true },
               { feature: "Category Google Shopping", nov: "2,850", oct: "2,100", change: "+35.7%", pct: "0.3%", highlight: true },
             ].map((row, i) => (
               <tr key={`c-${i}`} className={`border-b border-gray-50 ${row.explosive ? 'bg-green-50' : row.highlight ? 'bg-purple-50/30' : ''}`}>
                 <td className="py-0.5 px-2 pl-5 font-medium text-gray-700">{row.feature}</td>
                 <td className="py-0.5 px-2 text-right font-mono text-gray-800 font-semibold">{row.nov}</td>
                 <td className="py-0.5 px-2 text-right font-mono text-gray-400">{row.oct}</td>
                 <td className={`py-0.5 px-2 text-right font-bold ${row.explosive ? 'text-green-700' : 'text-green-600'}`}>{row.change}</td>
                 <td className="py-0.5 px-2 text-right text-gray-500">{row.pct}</td>
               </tr>
             ))}
             
             {/* Others Section */}
             <tr className="bg-gray-100/50">
               <td colSpan={5} className="py-0.5 px-2 font-bold text-gray-700 text-[10px]">
                 <FileText size={10} className="inline mr-1 -mt-0.5" />OTHERS <span className="font-normal text-gray-500 ml-1">0.5%</span>
               </td>
             </tr>
             {[
               { feature: "Content Pages", nov: "4,500", oct: "3,200", change: "+40.6%", pct: "0.5%" },
             ].map((row, i) => (
               <tr key={`o-${i}`} className="border-b border-gray-50 bg-gray-50/50">
                 <td className="py-0.5 px-2 pl-5 font-medium text-gray-700">{row.feature}</td>
                 <td className="py-0.5 px-2 text-right font-mono text-gray-800 font-semibold">{row.nov}</td>
                 <td className="py-0.5 px-2 text-right font-mono text-gray-400">{row.oct}</td>
                 <td className="py-0.5 px-2 text-right font-bold text-green-600">{row.change}</td>
                 <td className="py-0.5 px-2 text-right text-gray-500">{row.pct}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
      <div className="mt-2 flex gap-4">
        <div className="flex items-center gap-2 text-xs text-green-700"><div className="w-3 h-3 bg-green-50 border border-green-200 rounded" /> Crecimiento explosivo</div>
        <div className="flex items-center gap-2 text-xs text-blue-700"><div className="w-3 h-3 bg-blue-50/50 border border-blue-200 rounded" /> Crecimiento sólido</div>
        <div className="flex items-center gap-2 text-xs text-red-600"><span className="font-mono">-</span> Descenso (analizar drift)</div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 8: Feature Growth Highlights
const FeatureGrowthSlide = (
  <SlideContainer key="feature-growth">
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-tn-blue mb-2">Feature Growth Highlights</h2>
        <p className="text-lg text-tn-text font-light">Crecimiento explosivo en features clave</p>
      </div>
      <div className="grid grid-cols-3 gap-6 flex-1">
        {[
          { feature: "Category Descriptions", change: "+1,297%", nov: "2,934", oct: "210", color: "green", icon: FileText, note: "Nueva feature, adopción rápida" },
          { feature: "Product Tags", change: "+190.8%", nov: "69,194", oct: "23,798", color: "green", icon: Sparkles, note: "Unified agent driving adoption" },
          { feature: "Product Brand", change: "+168.1%", nov: "28,137", oct: "10,497", color: "green", icon: Package, note: "One-click content generation" },
          { feature: "Products From Images", change: "+88.9%", nov: "19,587", oct: "10,367", color: "blue", icon: Image, note: "Agente más completo de Lumi" },
          { feature: "Category Suggestions", change: "+82.6%", nov: "23,080", oct: "12,637", color: "blue", icon: Target, note: "AI-powered categorization" },
          { feature: "Weights & Dimensions", change: "+55.9%", nov: "95,957", oct: "61,529", color: "blue", icon: BarChart3, note: "Completar info de productos" },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className={`p-5 rounded-2xl border ${item.color === 'green' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color === 'green' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                <item.icon size={20} />
              </div>
              <span className={`text-3xl font-black ${item.color === 'green' ? 'text-green-700' : 'text-blue-700'}`}>{item.change}</span>
            </div>
            <h4 className="font-bold text-tn-blue mb-1">{item.feature}</h4>
            <p className="text-xs text-gray-500 mb-2">{item.nov} vs {item.oct}</p>
            <p className={`text-xs ${item.color === 'green' ? 'text-green-700' : 'text-blue-700'}`}>{item.note}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-xl">
        <p className="text-sm text-blue-800"><strong>Key Insight:</strong> Features de "Unified Agents" con un solo click tienen mayor adopción. El usuario prefiere contenido listo instantáneo.</p>
      </div>
    </div>
  </SlideContainer>
);

// Slide 9: Drift Analysis
const DriftAnalysisSlide = (
  <SlideContainer key="drift-analysis">
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-tn-blue mb-2">Drift Analysis</h2>
        <p className="text-lg text-tn-text font-light">Concentración de uso en top merchants - Noviembre 2025</p>
      </div>
      <div className="flex-1">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-1 px-2 font-bold text-tn-blue">Feature</th>
              <th className="text-right py-1 px-2 font-bold text-tn-blue">Total</th>
              <th className="text-left py-1 px-2 font-bold text-tn-blue">Top Store</th>
              <th className="text-right py-1 px-2 font-bold text-tn-blue">Usos</th>
              <th className="text-right py-1 px-2 font-bold text-tn-blue">%</th>
              <th className="text-center py-1 px-2 font-bold text-tn-blue">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Products Section */}
            <tr className="bg-blue-100/50">
              <td colSpan={6} className="py-0.5 px-2 font-bold text-blue-800 text-[10px]">
                <Package size={10} className="inline mr-1 -mt-0.5" />PRODUCTS
              </td>
            </tr>
            {[
              { feature: "Product Descriptions", total: "286,871", store: "3816702", uses: "1,486", pct: "0.5%", status: "healthy" },
              { feature: "Product SEO Brand & Tags", total: "199,701", store: "6712160", uses: "2,958", pct: "1.5%", status: "warning" },
              { feature: "Product Weights & Dimensions", total: "95,957", store: "6712160", uses: "2,947", pct: "3.1%", status: "danger" },
              { feature: "Product Tags", total: "69,194", store: "6388827", uses: "1,161", pct: "1.7%", status: "warning" },
              { feature: "Product Brand", total: "28,137", store: "1636425", uses: "243", pct: "0.9%", status: "healthy" },
              { feature: "Products From Images", total: "19,587", store: "5903965", uses: "260", pct: "1.3%", status: "healthy" },
            ].map((row, i) => (
              <tr key={`p-${i}`} className={`border-b border-gray-50 ${row.status === 'danger' ? 'bg-red-50' : row.status === 'warning' ? 'bg-amber-50' : ''}`}>
                <td className="py-0.5 px-2 pl-5 font-medium text-gray-700">{row.feature}</td>
                <td className="py-0.5 px-2 text-right font-mono text-gray-800 font-semibold">{row.total}</td>
                <td className="py-0.5 px-2"><a href={`https://stats.tiendanube.com/store/profile?store_id=${row.store}`} target="_blank" rel="noopener noreferrer" className="font-mono text-blue-600 hover:text-blue-800 hover:underline">{row.store}</a></td>
                <td className="py-0.5 px-2 text-right font-mono text-gray-800">{row.uses}</td>
                <td className="py-0.5 px-2 text-right text-gray-600">{row.pct}</td>
                <td className="py-0.5 px-2 text-center">
                  {row.status === 'healthy' && <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full text-[9px] font-bold">✅</span>}
                  {row.status === 'warning' && <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[9px] font-bold">⚠️</span>}
                  {row.status === 'danger' && <span className="px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full text-[9px] font-bold">🚨</span>}
                </td>
              </tr>
            ))}
            
            {/* Images Section */}
            <tr className="bg-amber-100/50">
              <td colSpan={6} className="py-0.5 px-2 font-bold text-amber-800 text-[10px]">
                <Image size={10} className="inline mr-1 -mt-0.5" />IMAGES
              </td>
            </tr>
            {[
              { feature: "Background Removal", total: "66,601", store: "6439745", uses: "1,078", pct: "1.6%", status: "warning" },
              { feature: "Alt Text", total: "25,270", store: "3181567", uses: "2,132", pct: "8.4%", status: "danger" },
            ].map((row, i) => (
              <tr key={`i-${i}`} className={`border-b border-gray-50 ${row.status === 'danger' ? 'bg-red-50' : row.status === 'warning' ? 'bg-amber-50' : ''}`}>
                <td className="py-0.5 px-2 pl-5 font-medium text-gray-700">{row.feature}</td>
                <td className="py-0.5 px-2 text-right font-mono text-gray-800 font-semibold">{row.total}</td>
                <td className="py-0.5 px-2"><a href={`https://stats.tiendanube.com/store/profile?store_id=${row.store}`} target="_blank" rel="noopener noreferrer" className="font-mono text-blue-600 hover:text-blue-800 hover:underline">{row.store}</a></td>
                <td className="py-0.5 px-2 text-right font-mono text-gray-800">{row.uses}</td>
                <td className="py-0.5 px-2 text-right text-gray-600">{row.pct}</td>
                <td className="py-0.5 px-2 text-center">
                  {row.status === 'warning' && <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[9px] font-bold">⚠️</span>}
                  {row.status === 'danger' && <span className="px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full text-[9px] font-bold">🚨</span>}
                </td>
              </tr>
            ))}
            
            {/* Categories Section */}
            <tr className="bg-purple-100/50">
              <td colSpan={6} className="py-0.5 px-2 font-bold text-purple-800 text-[10px]">
                <Target size={10} className="inline mr-1 -mt-0.5" />CATEGORIES
              </td>
            </tr>
            {[
              { feature: "Category Suggestions", total: "23,080", store: "2243608", uses: "312", pct: "1.4%", status: "healthy" },
              { feature: "Category Descriptions", total: "2,934", store: "2243608", uses: "172", pct: "5.9%", status: "danger" },
            ].map((row, i) => (
              <tr key={`c-${i}`} className={`border-b border-gray-50 ${row.status === 'danger' ? 'bg-red-50' : ''}`}>
                <td className="py-0.5 px-2 pl-5 font-medium text-gray-700">{row.feature}</td>
                <td className="py-0.5 px-2 text-right font-mono text-gray-800 font-semibold">{row.total}</td>
                <td className="py-0.5 px-2"><a href={`https://stats.tiendanube.com/store/profile?store_id=${row.store}`} target="_blank" rel="noopener noreferrer" className="font-mono text-blue-600 hover:text-blue-800 hover:underline">{row.store}</a></td>
                <td className="py-0.5 px-2 text-right font-mono text-gray-800">{row.uses}</td>
                <td className="py-0.5 px-2 text-right text-gray-600">{row.pct}</td>
                <td className="py-0.5 px-2 text-center">
                  {row.status === 'healthy' && <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full text-[9px] font-bold">✅</span>}
                  {row.status === 'danger' && <span className="px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full text-[9px] font-bold">🚨</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded-xl">
        <p className="text-[10px] text-amber-800"><strong>Nota:</strong> Store <code className="bg-amber-100 px-1 rounded">6712160</code> aparece como top en 2 features con ~3,000 usos cada una. Monitorear.</p>
      </div>
    </div>
  </SlideContainer>
);

// Slide 10: Drift Comparativo
const StoreLink = ({ storeId, name, danger }) => (
  <a href={`https://stats.tiendanube.com/store/profile?store_id=${storeId}`} target="_blank" rel="noopener noreferrer" 
    className={`font-mono hover:underline ${danger ? 'text-red-600' : 'text-gray-700 hover:text-blue-600'}`}>
    {storeId}
  </a>
);

const DriftComparativoSlide = (
  <SlideContainer key="drift-comparativo">
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-tn-blue mb-2">Drift: Oct vs Nov</h2>
        <p className="text-lg text-tn-text font-light">Explicación de caídas MoM por pérdida de top merchants</p>
      </div>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {[
          { feature: "Alt Text", change: "-28.1%", octStore: "6493412", octName: "Espaço Info Computadores", octMeta: "🇧🇷 Smart Seller · Plan B", octDanger: true, octUses: "2,845", novStore: "3181567", novName: "Innove Saúde", novMeta: "🇧🇷 Struggling · Plan C", novUses: "2,132", analysis: "Store 6493412 bloqueada por Fraud Team." },
          { feature: "Background Removal", change: "-14.1%", octStore: "6052626", octName: "EN TU CASA", octMeta: "🇦🇷 Top Seller · Enterprise", octUses: "2,020", novStore: "6439745", novName: "Leonardi Foulard", novMeta: "🇦🇷 No Seller · Plan C", novUses: "1,078", analysis: "Store 6052626 desapareció. Nuevo top tiene ~1K menos." },
          { feature: "Product Descriptions", change: "-11.6%", octStore: "1035106", octName: "Harenna Oficial", octMeta: "🇦🇷 Small Seller · Plan C", octUses: "1,847", novStore: "3816702", novName: "IsoFestas", novMeta: "🇧🇷 Tiny Seller · Plan C", novUses: "1,486", analysis: "2 stores desaparecieron (3,629 usos combinados)." },
          { feature: "Weights & Dimensions", change: "+55.9%", octStore: "2524104", octName: "PAPELANDIA", octMeta: "🇦🇷 Medium Seller · Plan C", octUses: "2,321", novStore: "6712160", novName: "Mercolatina S.A.", novMeta: "🇦🇷 Struggling · Plan C", novUses: "2,947", analysis: "Crecimiento real, pero con nuevo drift.", warning: true },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className={`p-4 rounded-2xl border ${item.warning ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-tn-blue">{item.feature}</h4>
              <span className={`text-lg font-black ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{item.change}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
              <div className={`p-2 rounded ${item.octDanger ? 'bg-red-50 border border-red-200' : 'bg-gray-100'}`}>
                <p className={`font-medium mb-1 ${item.octDanger ? 'text-red-600' : 'text-gray-600'}`}>Oct Top {item.octDanger && '🚨'}</p>
                <p className={`text-lg font-black ${item.octDanger ? 'text-red-700' : 'text-gray-800'}`}>{item.octUses} <span className="text-[10px] font-normal">usos</span></p>
                <p className={`text-[10px] font-medium truncate ${item.octDanger ? 'text-red-600' : 'text-gray-700'}`}>{item.octName}</p>
                <p className={`text-[9px] mb-1 ${item.octDanger ? 'text-red-400' : 'text-gray-400'}`}>{item.octMeta}</p>
                <a href={`https://stats.tiendanube.com/store/profile?store_id=${item.octStore}`} target="_blank" rel="noopener noreferrer" 
                  className={`font-mono text-[10px] hover:underline inline-flex items-center gap-1 ${item.octDanger ? 'text-red-500' : 'text-gray-500 hover:text-blue-600'}`}>
                  {item.octStore} <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <p className="font-medium text-blue-600 mb-1">Nov Top</p>
                <p className="text-lg font-black text-blue-800">{item.novUses} <span className="text-[10px] font-normal">usos</span></p>
                <p className="text-[10px] font-medium text-blue-700 truncate">{item.novName}</p>
                <p className="text-[9px] text-blue-400 mb-1">{item.novMeta}</p>
                <a href={`https://stats.tiendanube.com/store/profile?store_id=${item.novStore}`} target="_blank" rel="noopener noreferrer" 
                  className="font-mono text-[10px] text-blue-500 hover:text-blue-700 hover:underline inline-flex items-center gap-1">
                  {item.novStore} <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-600">🔍 {item.analysis}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideContainer>
);

// Slide 11: Assistant Beta Insights
const AssistantBetaSlide = (
  <SlideContainer key="assistant-beta">
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center">
          <LumiIcon className="w-7 h-7 brightness-0 invert" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-tn-blue">Lumi Assistant Beta</h2>
          <p className="text-sm text-tn-text">Análisis de ~218 conversaciones de 48 merchants (17-30 Nov)</p>
        </div>
      </div>

      {/* Context Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
        <p className="text-sm text-blue-800">
          <strong>¿Qué estamos midiendo?</strong> Categorizamos cada mensaje según cómo Lumi respondió: 
          si explicó qué puede hacer, si ejecutó una acción, si navegó al usuario, si no pudo ayudar, o si hubo un error.
        </p>
      </div>

      {/* KPIs - Simplified with descriptions */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Éxitos */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-black text-green-600">70.9%</span>
            <CheckCircle size={24} className="text-green-500" />
          </div>
          <p className="font-bold text-green-800 text-sm mb-1">Interacciones Exitosas</p>
          <p className="text-xs text-green-700">Lumi pudo ayudar: explicar, ejecutar acciones o navegar al usuario</p>
        </div>

        {/* Refusals */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-black text-purple-600">4.6%</span>
            <AlertCircle size={24} className="text-purple-500" />
          </div>
          <p className="font-bold text-purple-800 text-sm mb-1">Refusals <span className="text-xs font-normal bg-purple-200 px-1.5 py-0.5 rounded">✓ Datos Reales</span></p>
          <p className="text-xs text-purple-700">Merchants pidieron algo que Lumi aún no puede hacer</p>
        </div>

        {/* Errors */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-black text-red-600">2.6%</span>
            <AlertTriangle size={24} className="text-red-500" />
          </div>
          <p className="font-bold text-red-800 text-sm mb-1">Errores Técnicos</p>
          <p className="text-xs text-red-700">Fallos del sistema a resolver</p>
        </div>
      </div>

      {/* Chats - Examples */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Refusals Examples */}
        <div className="flex-1 bg-white rounded-xl border border-purple-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-purple-100 px-4 py-2 border-b border-purple-200">
            <p className="font-bold text-purple-800 text-sm">💡 Refusals = Oportunidades de Roadmap</p>
          </div>
          <div className="flex-1 bg-gray-50 p-3 space-y-2 overflow-auto">
            {[
              { q: "¿Cuánto stock tengo?", insight: "Inventario" },
              { q: "¿Dónde está mi envío?", insight: "Tracking" },
              { q: "Ventas del mes", insight: "Analytics" },
            ].map((chat, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }} 
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2">
                <div className="bg-[#5C47CD] text-white px-2 py-1 rounded text-xs flex-1">{chat.q}</div>
                <span className="text-[10px] text-purple-600 font-bold bg-purple-100 px-2 py-1 rounded">{chat.insight}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Examples */}
        <div className="flex-1 bg-white rounded-xl border border-green-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-green-100 px-4 py-2 border-b border-green-200">
            <p className="font-bold text-green-800 text-sm">✓ Éxitos = Casos de Uso Validados</p>
          </div>
          <div className="flex-1 bg-gray-50 p-3 space-y-2 overflow-auto">
            {[
              { action: "Clarification", example: "¿Qué es Lumi?", pct: "30.5%" },
              { action: "Applied", example: "Simplificá la descripción", pct: "21.9%" },
              { action: "Redirected", example: "Configurar dominio", pct: "18.5%" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2">
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                  item.action === 'Clarification' ? 'bg-blue-100 text-blue-600' :
                  item.action === 'Applied' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                }`}>{item.action}</span>
                <span className="text-xs text-gray-700 flex-1">"{item.example}"</span>
                <span className="text-xs font-bold text-gray-500">{item.pct}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-amber-600 mt-3 text-center bg-amber-50 py-2 rounded-lg border border-amber-200">
        ⚠️ Datos incluyen pruebas internas (WIP depuración). <strong>Los refusals son de merchants reales confirmados.</strong>
      </p>
    </div>
  </SlideContainer>
);

// Slide 12: Business Conclusions
const BusinessConclusionsSlide = (
  <SlideContainer key="business-conclusions">
    <div className="h-full flex flex-col">
      <div className="mb-4"><h2 className="text-4xl font-bold text-tn-blue mb-2">Conclusiones Business Report</h2><p className="text-lg text-tn-text font-light">Resumen ejecutivo de Noviembre 2025</p></div>
      
      {/* Key Insight Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl mb-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <Zap size={24} />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-green-100 mb-1">Key Learning: One-Click to Content</p>
          <p className="text-white">Features de <strong>Unified Agents</strong> con un solo click tienen <strong className="text-yellow-300">3x más adopción</strong> que flujos de múltiples pasos. El usuario prefiere contenido listo instantáneo.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="bg-green-50 border border-green-200 p-4 rounded-2xl">
          <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2"><CheckCircle size={18} /> Logros</h3>
          <ul className="space-y-1.5 text-sm text-green-700"><li>• <strong>Beta Assistant</strong> (17 nov, 48 testers)</li><li>• <strong>Consolidación récord:</strong> 63,085 usuarios</li><li>• <strong>+20.2% interacciones</strong></li><li>• <strong>Products From Images +88.9%</strong></li></ul>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl">
          <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2"><AlertTriangle size={18} /> Contexto</h3>
          <ul className="space-y-1.5 text-sm text-amber-700"><li>• <strong>Upsells:</strong> 1,972 - dato parcial</li><li>• <strong>Drift identificado</strong> en 3 features</li><li>• <strong>Beta data:</strong> WIP depuración</li></ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl">
          <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2"><Rocket size={18} /> Oportunidades</h3>
          <ul className="space-y-1.5 text-sm text-blue-700"><li>• <strong>Escalar Assistant</strong> + más testers</li><li>• <strong>AI Bulk Actions Premium</strong></li><li>• <strong>Funcionalidades pedidas</strong> (refusals)</li></ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl">
          <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><Activity size={18} /> Mejoras</h3>
          <ul className="space-y-1.5 text-sm text-gray-600"><li>• <strong>Monitoreo drift</strong> mensual</li><li>• <strong>Feedback Loop:</strong> completar</li><li>• <strong>Beta:</strong> depurar traces</li></ul>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 12.5: Product Report Cover
const ProductReportCover = (
  <SlideContainer key="product-cover">
    <div className="h-full flex flex-col items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      <div className="relative z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-purple-200">
            <Rocket size={48} className="text-white" />
          </div>
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="text-purple-500 font-bold text-lg tracking-widest uppercase mb-4">Parte 2</p>
          <h1 className="text-6xl font-black text-tn-blue mb-4">Product Report</h1>
          <p className="text-xl text-gray-500 font-light">Lanzamientos, desarrollos y roadmap</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="mt-12 flex gap-6 justify-center"
        >
          {[
            { label: "Lanzamientos", icon: Sparkles },
            { label: "Desarrollos", icon: Package },
            { label: "Discoveries", icon: FlaskConical },
            { label: "Roadmap", icon: Target },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <item.icon size={16} className="text-purple-500" />
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 13: Lanzamientos
const LanzamientosSlide = (
  <SlideContainer key="lanzamientos">
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold tracking-wider uppercase mb-2 inline-block">PARTE 2: PRODUCT REPORT</span>
          <h2 className="text-4xl font-bold text-tn-blue">Lanzamientos Noviembre</h2>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">2 lanzamientos este mes</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-6">
        
        {/* Lumi Assistant Beta - Feature Principal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                <LumiIcon className="w-10 h-10 brightness-0 invert" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lumi Assistant Beta</h3>
                <p className="text-blue-100">Lanzamiento: 17 de noviembre</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-4xl font-black">48</p>
                <p className="text-sm text-blue-100">Merchants Testers</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-4xl font-black">218</p>
                <p className="text-sm text-blue-100">Mensajes</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-4xl font-black">10+</p>
                <p className="text-sm text-blue-100">Activos Diarios</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <p className="text-sm text-blue-100 mb-2">Funcionalidades disponibles:</p>
              <div className="flex flex-wrap gap-2">
                {["Productos", "SEO", "Imágenes", "Navegación", "Clarificaciones"].map(f => (
                  <span key={f} className="px-3 py-1 bg-white/20 rounded-full text-sm">{f}</span>
                ))}
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-white/20">
              <div className="flex items-center justify-center gap-2 text-white">
                <Target size={16} />
                <span className="text-sm font-bold">Objetivo Dic: 48 → 1,000 merchants</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feedback Loop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="w-80 bg-white border border-gray-200 rounded-2xl p-5 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center">
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-tn-blue">Feedback Loop</h3>
              <p className="text-xs text-amber-600">Rollout progresivo</p>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            {/* Activo */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={16} className="text-green-600" />
                <p className="text-sm font-bold text-green-700">Activo (2 features)</p>
              </div>
              <div className="space-y-2">
                <div className="bg-green-50 border border-green-200 px-3 py-2 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-green-700">Sugerencia de Categorías</span>
                    <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold">100%</span>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 px-3 py-2 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-green-700">Pesos y Dimensiones</span>
                    <span className="text-[10px] bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full font-bold">30% sellers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* En proceso */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-amber-600" />
                <p className="text-sm font-bold text-amber-700">Pendientes (6 features)</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["Descripción", "SEO Tags", "From Images", "BG Removal", "Alt Text", "Content Pages"].map(f => (
                  <div key={f} className="bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg text-center">
                    <span className="text-xs font-medium text-amber-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">Objetivo: 100% features con feedback en Dic</p>
          </div>
        </motion.div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 13.5: Demo Video Assistant
const DemoVideoSlide = (
  <SlideContainer key="demo-video">
    <div className="h-full flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <LumiIcon className="w-7 h-7 brightness-0 invert" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-tn-blue">Demo: Lumi Assistant</h2>
          <p className="text-sm text-gray-500">Vista previa de la experiencia beta</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full ml-4">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-purple-700">Video Demo</span>
        </div>
      </div>

      {/* Video Container - 16:10 aspect ratio, centered */}
      <div className="w-full max-w-4xl aspect-[16/10] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
        <iframe
          src="https://drive.google.com/file/d/1mjJtRryQO-xGX2p4Gn26JI66b0uXMqzL/preview"
          className="w-full h-full"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          title="Lumi Assistant Demo"
          frameBorder="0"
        />
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <Users size={16} /> 48 merchants en beta
        </span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span className="flex items-center gap-2">
          <MessageSquare size={16} /> Chat conversacional
        </span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span className="flex items-center gap-2">
          <Zap size={16} /> Acciones en tiempo real
        </span>
      </div>
    </div>
  </SlideContainer>
);

// Slide 13.6: Demo Video Feedback & Credits
const DemoFeedbackSlide = (
  <SlideContainer key="demo-feedback">
    <div className="h-full flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
          <MessageSquare size={26} className="text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-tn-blue">Demo: Feedback & Credits</h2>
          <p className="text-sm text-gray-500">Sistema de feedback con créditos de AI</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full ml-4">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-amber-700">Video Demo</span>
        </div>
      </div>

      {/* Video Container - 16:10 aspect ratio, centered */}
      <div className="w-full max-w-4xl aspect-[16/10] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
        <iframe
          src="https://drive.google.com/file/d/1Ra_ri8P8b1oO_tkd5Cwwr_aolz3tvZec/preview"
          className="w-full h-full"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          title="Feedback & Credits Demo"
          frameBorder="0"
        />
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <CheckCircle size={16} /> Feedback en 4 features
        </span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span className="flex items-center gap-2">
          <Zap size={16} /> Sistema de créditos
        </span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span className="flex items-center gap-2">
          <TrendingUp size={16} /> Loop de mejora continua
        </span>
      </div>
    </div>
  </SlideContainer>
);

// Slide 14: Desarrollos
const DesarrollosSlide = (
  <SlideContainer key="desarrollos">
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-4xl font-bold text-tn-blue">Desarrollos en Progreso</h2>
          <p className="text-lg text-tn-text font-light">Sprint: Dec 1-23, 2025</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-gray-600">In Progress</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <span className="text-gray-600">Not Started</span>
          </div>
        </div>
      </div>

      {/* Content Grid - 3 columns */}
      <div className="grid grid-cols-3 gap-5 flex-1">
        
        {/* Column 1: Assistant */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <LumiIcon className="w-6 h-6 brightness-0 invert" />
            </div>
            <div>
              <h3 className="font-bold text-blue-800 text-lg">Assistant</h3>
              <p className="text-xs text-blue-600">5 tareas en sprint</p>
            </div>
          </div>
          <div className="space-y-2 flex-1">
            {[
              { n: "Contexto Dinámico", d: "Info de tienda en tiempo real", s: true },
              { n: "Contexto Estático v2", d: "Mejoras en knowledge base", s: false },
              { n: "Histórico Conversaciones", d: "Memoria de chats anteriores", s: false },
              { n: "Handoff a Support", d: "Derivación a soporte humano", s: false },
              { n: "Trackear Costos", d: "Monitoreo de uso por merchant", s: false },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.1 + i * 0.05 }}
                className="bg-white p-3 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.s ? 'bg-blue-500' : 'bg-gray-300'}`} />
                  <p className="text-sm font-bold text-gray-800">{item.n}</p>
                </div>
                <p className="text-xs text-gray-500 pl-4">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 2: Actions */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
              <Zap size={22} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-amber-800 text-lg">Actions</h3>
              <p className="text-xs text-amber-600">2 features en desarrollo</p>
            </div>
          </div>
          <div className="space-y-3 flex-1">
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="bg-white p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <p className="font-bold text-gray-800">AI Bulk Actions</p>
              </div>
              <p className="text-xs text-gray-600">Primera feature premium (Plan B+)</p>
              <div className="mt-2 flex gap-1">
                <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Premium</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.3 }}
              className="bg-white p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <p className="font-bold text-gray-800">Feedback Loop</p>
              </div>
              <p className="text-xs text-gray-600">Desplegar en features restantes</p>
            </motion.div>
          </div>
        </div>

        {/* Column 3: Multimodalidad */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
              <Clock size={22} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-purple-800 text-lg">Multimodalidad</h3>
              <p className="text-xs text-purple-600">Pendiente deploy (post-BF)</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <a 
              href="https://www.figma.com/design/cB66axoYLWFYNcCaJW88zu/Agente-de-IA?node-id=8563-46293"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.3 }}
                className="bg-white p-5 rounded-xl shadow-sm text-center hover:shadow-md hover:border-purple-300 border border-transparent transition-all"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mic size={24} className="text-purple-600" />
                </div>
                <p className="font-bold text-gray-800">Envío de Audio</p>
                <p className="text-xs text-gray-500 mt-1">Transcripción y procesamiento</p>
                <p className="text-[10px] text-purple-600 mt-2 flex items-center justify-center gap-1">
                  <ExternalLink size={10} /> Ver en Figma
                </p>
              </motion.div>
            </a>
            <a 
              href="https://www.figma.com/design/cB66axoYLWFYNcCaJW88zu/Agente-de-IA?node-id=8563-46292"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.4 }}
                className="bg-white p-5 rounded-xl shadow-sm text-center hover:shadow-md hover:border-purple-300 border border-transparent transition-all"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Image size={24} className="text-purple-600" />
                </div>
                <p className="font-bold text-gray-800">Envío de Imágenes</p>
                <p className="text-xs text-gray-500 mt-1">Análisis visual con IA</p>
                <p className="text-[10px] text-purple-600 mt-2 flex items-center justify-center gap-1">
                  <ExternalLink size={10} /> Ver en Figma
                </p>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 14.5: Demo Video Bulk Actions
const DemoBulkActionsSlide = (
  <SlideContainer key="demo-bulk-actions">
    <div className="h-full flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
          <Layers size={26} className="text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-tn-blue">Demo: AI Bulk Actions</h2>
          <p className="text-sm text-gray-500">Acciones masivas con IA - Feature Premium</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full ml-4">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-amber-700">Video Demo</span>
        </div>
      </div>

      {/* Video Container - 16:10 aspect ratio, centered */}
      <div className="w-full max-w-4xl aspect-[16/10] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
        <iframe
          src="https://drive.google.com/file/d/148pw8wLpOqz1jyRiDVCfzanhxeVU8Wx5/preview"
          className="w-full h-full"
          allow="encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          title="AI Bulk Actions Demo"
          frameBorder="0"
        />
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <Package size={16} /> Acciones en lote
        </span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span className="flex items-center gap-2">
          <Zap size={16} /> Feature Premium (Plan B+)
        </span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span className="flex items-center gap-2">
          <TrendingUp size={16} /> En desarrollo
        </span>
      </div>
    </div>
  </SlideContainer>
);

// Slide 15: Discoveries
const DiscoveriesSlide = (
  <SlideContainer key="discoveries">
    <div className="h-full flex flex-col">
      <div className="mb-4"><h2 className="text-4xl font-bold text-tn-blue mb-2">Discoveries & Conceptos</h2></div>
      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Left Column: Discoveries + Beta Testers */}
        <div className="flex flex-col">
          <h3 className="font-bold text-purple-700 mb-3 flex items-center gap-2"><FlaskConical size={18} /> Discoveries Iniciados (Studio)</h3>
          <div className="space-y-3 mb-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
              <h4 className="font-bold text-purple-800 mb-2">Foto Producto</h4>
              <p className="text-xs text-purple-700">Herramientas de edición y generación de imágenes con IA.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
              <h4 className="font-bold text-purple-800 mb-2">Galería de Imágenes</h4>
              <p className="text-xs text-purple-700">Repositorio de assets integrado al admin.</p>
            </motion.div>
          </div>
          
          {/* Beta Testers Studio */}
          <div className="bg-white border border-purple-200 rounded-xl p-4 flex-1">
            <h4 className="font-bold text-purple-700 text-sm mb-3 flex items-center gap-2">
              <Users size={14} /> Beta Testers Studio
            </h4>
            <div className="space-y-2">
              {[
                { name: "Denimstoff", id: "6828529", country: "🇦🇷", vertical: "Moda", status: "Testeando", color: "green" },
                { name: "Irarte", id: "440495", country: "🇦🇷", vertical: "Moda", status: "Testeando", color: "green" },
                { name: "Almacén de Toto", id: "1021574", country: "🇦🇷", vertical: "Multi", status: "Testeando", color: "green" },
                { name: "Paloma Clothes", id: "721837", country: "🇦🇷", vertical: "Moda", status: "Testeando", color: "green" },
              ].map((tester, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center justify-between bg-gray-50 p-2.5 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${tester.color === 'green' ? 'bg-green-500' : 'bg-amber-500'}`} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{tester.name}</p>
                      <p className="text-[10px] text-gray-400">{tester.country} · {tester.vertical}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                      tester.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>{tester.status}</span>
                    <a 
                      href={`https://stats.tiendanube.com/store/profile?store_id=${tester.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] text-blue-500 hover:text-blue-700 hover:underline"
                    >
                      {tester.id}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Conceptos en Análisis */}
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-600 mb-3 flex items-center gap-2"><Eye size={18} /> Conceptos en Análisis</h3>
          <div className="space-y-3 flex-1">
            {/* Plan Mode with Mockup */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-500 text-white rounded-xl flex items-center justify-center">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-800">Plan Mode</h4>
                  <p className="text-[10px] text-indigo-600">Planificar antes de ejecutar</p>
                </div>
              </div>
              {/* Mini Mockup */}
              <div className="bg-white border border-indigo-100 rounded-lg p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Target size={12} className="text-indigo-500" />
                  <span className="text-[10px] font-bold text-gray-700">Plan: Black Friday</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={10} className="text-green-500" />
                    <span className="text-[9px] text-gray-400 line-through">Analizar stock</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={10} className="text-green-500" />
                    <span className="text-[9px] text-gray-400 line-through">Crear categoría</span>
                  </div>
                  <div className="flex items-center gap-2 bg-indigo-50 px-2 py-1 rounded">
                    <div className="w-2 h-2 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-[9px] text-indigo-700 font-medium">Generando banners...</span>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mt-2">Lumi planifica tareas complejas antes de ejecutarlas</p>
            </motion.div>

            {/* Lumi Command with Mockup */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-fuchsia-50 to-white border border-fuchsia-200 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-fuchsia-500 text-white rounded-xl flex items-center justify-center">
                  <Command size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-fuchsia-800">Lumi Command</h4>
                  <p className="text-[10px] text-fuchsia-600">Cmd+L desde cualquier lugar</p>
                </div>
              </div>
              {/* Mini Mockup - Search Bar */}
              <div className="bg-white border border-fuchsia-100 rounded-lg p-2 shadow-sm">
                <div className="flex items-center gap-2 p-2 rounded-full bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-gray-100">
                  <Search size={12} className="text-gray-400" />
                  <span className="text-[10px] text-gray-600">Buscar producto remera...</span>
                  <div className="ml-auto flex gap-1">
                    <span className="text-[8px] text-gray-400 bg-gray-100 px-1 rounded">⌘</span>
                    <span className="text-[8px] text-gray-400 bg-gray-100 px-1 rounded">L</span>
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1 bg-blue-50 rounded">
                    <Package size={10} className="text-blue-500" />
                    <span className="text-[9px] text-blue-700">Remera Básica Blanca</span>
                    <ArrowRight size={8} className="ml-auto text-blue-400" />
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 rounded">
                    <Package size={10} className="text-gray-400" />
                    <span className="text-[9px] text-gray-600">Remera Oversize</span>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mt-2">Búsqueda global con navegación inteligente</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 16: Issues
const IssuesSlide = (
  <SlideContainer key="issues">
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-4xl font-bold text-tn-blue">Issues y Problems Activos</h2>
          <p className="text-sm text-gray-500">Tracking de bugs y mejoras pendientes</p>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://docs.google.com/spreadsheets/d/1TTYOUzjuOPawY74uuSyUie8u_QogeTzAbpRp08YPQjU/edit?gid=262839206#gid=262839206"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            <ExternalLink size={12} /> Ver Sheet completo
          </a>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 bg-red-500 text-white rounded font-bold">P0</span>
              <span className="text-gray-600">Crítico</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 bg-amber-500 text-white rounded font-bold">P1</span>
              <span className="text-gray-600">Alto</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Producción */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle size={18} className="text-red-600" />
            <h3 className="font-bold text-red-700">Producción - Assistant</h3>
            <span className="text-xs text-gray-500">(5 issues)</span>
          </div>
          <div className="space-y-2 flex-1 overflow-auto">
            {[
              { id: "AS-005", p: "P0", t: "Time out >30s", d: "Respuestas lentas afectan UX, usuarios abandonan", s: "✅ Resuelto - Pendiente deploy (post-BF)", resolved: true },
              { id: "AS-012", p: "P0", t: "Navegación alucina", d: "Redirige a pantallas inexistentes o incorrectas", s: null },
              { id: "AS-015", p: "P0", t: "Session ID", d: "Pérdida de contexto entre mensajes del mismo chat", s: "No permitir mensajes al pausar workflow" },
              { id: "AS-014", p: "P1", t: "Guardrail estricto", d: "Rechaza requests válidos por exceso de precaución", s: null },
              { id: "AS-006", p: "P1", t: "Falta onboarding", d: "Usuarios no saben qué puede hacer Lumi", s: "Quick Actions dinámicas" },
            ].map((i, x) => (
              <motion.div 
                key={x} 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.1 + x * 0.05 }}
                className={`p-3 rounded-xl border ${i.resolved ? 'bg-green-50 border-green-200' : i.p === 'P0' ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold text-white ${i.resolved ? 'bg-green-500' : i.p === 'P0' ? 'bg-red-500' : 'bg-amber-500'}`}>{i.resolved ? '✓' : i.p}</span>
                  <span className="font-mono text-[10px] text-gray-400">{i.id}</span>
                  <span className={`font-bold text-sm flex-1 ${i.resolved ? 'text-green-800 line-through' : 'text-gray-800'}`}>{i.t}</span>
                </div>
                <p className={`text-xs pl-6 ${i.resolved ? 'text-green-600' : 'text-gray-600'}`}>{i.d}</p>
                {i.s && (
                  <div className="mt-1.5 pl-6 flex items-center gap-1.5">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${i.resolved ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100'}`}>{i.resolved ? '🚀' : '💡'} {i.s}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Staging */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <FlaskConical size={18} className="text-purple-600" />
            <h3 className="font-bold text-purple-700">Staging - Multimodalidad</h3>
            <span className="text-xs text-gray-500">(3 issues)</span>
          </div>
          <div className="space-y-2">
            {[
              { id: "STG-001", p: "P0", t: "Link imagen en card", d: "Al hacer click en imagen no abre preview", s: "Agregar handler onClick al componente" },
              { id: "STG-002", p: "P1", t: "Pérdida contexto imagen", d: "Lumi no recuerda la imagen enviada en el chat", s: "Persistir imagen en contexto del chat" },
              { id: "STG-003", p: "P1", t: "Texto incorrecto", d: "Respuestas mencionan imagen cuando no hay", s: "Validar existencia de imagen antes de responder" },
            ].map((i, x) => (
              <motion.div 
                key={x} 
                initial={{ opacity: 0, x: 10 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.2 + x * 0.05 }}
                className={`p-3 rounded-xl border ${i.p === 'P0' ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold text-white ${i.p === 'P0' ? 'bg-red-500' : 'bg-amber-500'}`}>{i.p}</span>
                  <span className="font-mono text-[10px] text-gray-400">{i.id}</span>
                  <span className="font-bold text-sm text-gray-800 flex-1">{i.t}</span>
                </div>
                <p className="text-xs text-gray-600 pl-6">{i.d}</p>
                {i.s && (
                  <div className="mt-1.5 pl-6 flex items-center gap-1.5">
                    <span className="text-[10px] text-green-600 font-medium bg-green-100 px-2 py-0.5 rounded">💡 {i.s}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Context Note */}
          <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-xl">
            <p className="text-xs text-purple-700">
              <strong>Nota:</strong> Issues de Multimodalidad bloquean deploy de Audio e Imágenes. 
              Objetivo: resolver antes de fin de diciembre.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 17: Roadmap
const RoadmapSlide = (
  <SlideContainer key="roadmap">
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-4xl font-bold text-tn-blue">Roadmap Diciembre 2025</h2>
          <p className="text-sm text-gray-500">Prioridades ordenadas por impacto</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full">
          <Calendar size={16} className="text-amber-600" />
          <span className="text-sm font-medium text-amber-700">Deploy lock hasta 4 Dic</span>
        </div>
      </div>

      {/* Priority 1 - Full Rollouts (Hero) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-5 text-white mb-4 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl font-black">1</span>
            <div>
              <h3 className="font-bold text-xl">Full Rollouts</h3>
              <p className="text-red-100 text-sm">Prioridad máxima post-deploy lock</p>
            </div>
          </div>
          <div className="flex gap-3">
            {["Products From Images", "SEO Brand Tags", "Category Suggestions", "Smart Eraser"].map((f, i) => (
              <div key={i} className="bg-white/20 backdrop-blur px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2">
                <Rocket size={14} /> {f}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Priority 2, 3, 4 - Grid */}
      <div className="grid grid-cols-3 gap-4 flex-1">
        {/* AI Bulk Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-5 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-bold">2</span>
            <div>
              <h3 className="font-bold text-amber-800">AI Bulk Actions</h3>
              <p className="text-xs text-amber-600">Primera feature premium</p>
            </div>
          </div>
          <div className="space-y-2 flex-1">
            {["Implementación backend + frontend", "Feature gating (Plan B+)", "Testing y QA"].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-xl text-sm text-gray-700 shadow-sm">{item}</div>
            ))}
          </div>
        </motion.div>

        {/* Expandir Beta */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-5 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 bg-blue-500 text-white rounded-xl flex items-center justify-center text-lg font-bold">3</span>
            <div>
              <h3 className="font-bold text-blue-800">Expandir Beta</h3>
              <p className="text-xs text-blue-600">De 48 → <strong>1,000 merchants</strong></p>
            </div>
          </div>
          <div className="space-y-2 flex-1">
            {["Depurar traces internos", "Ampliar merchants testers", "Iterar sobre feedback P0/P1"].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-xl text-sm text-gray-700 shadow-sm">{item}</div>
            ))}
          </div>
          <div className="mt-auto pt-3 border-t border-blue-200">
            <p className="text-xs text-blue-600 font-medium text-center">🎯 Objetivo Dic: 1,000 merchants</p>
          </div>
        </motion.div>

        {/* Feedback Loop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-5 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 bg-green-500 text-white rounded-xl flex items-center justify-center text-lg font-bold">4</span>
            <div>
              <h3 className="font-bold text-green-800">Feedback Loop</h3>
              <p className="text-xs text-green-600">Completar coverage</p>
            </div>
          </div>
          <div className="space-y-2 flex-1">
            <p className="text-xs text-gray-600 mb-2">Features pendientes:</p>
            <div className="flex flex-wrap gap-2">
              {["Descripción", "SEO Tags", "From Images", "BG Removal"].map((f, i) => (
                <span key={i} className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-medium">{f}</span>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-3 border-t border-green-200">
            <p className="text-xs text-green-600 font-medium text-center">🎯 Objetivo: 100% coverage</p>
          </div>
        </motion.div>
      </div>
    </div>
  </SlideContainer>
);

// Slide 18: Próximos Pasos
const ProximosPasosSlide = (
  <SlideContainer key="proximos-pasos">
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-3">
        <h2 className="text-3xl font-bold text-tn-blue">Próximos Pasos & Q1 2026</h2>
        <p className="text-xs text-gray-500">Acciones inmediatas y planificación trimestral</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Left Column - Acciones Diciembre */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white relative overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Calendar size={18} />
              </div>
              <div>
                <h3 className="font-bold text-base">Acciones Diciembre</h3>
                <p className="text-blue-100 text-[10px]">Prioridades inmediatas</p>
              </div>
            </div>
            <div className="space-y-2 flex-1 overflow-auto">
              {[
                { t: "Recopilar feedback beta", d: "Encuestas + análisis traces" },
                { t: "Desarrollo Bulk Actions", d: "Completar implementación" },
                { t: "Full rollouts", d: "4 features post-deploy lock" },
                { t: "Resolver issues P0", d: "Session ID, Navegación" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="bg-white/20 backdrop-blur p-2 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-blue-200 flex-shrink-0" />
                    <span className="font-medium text-sm">{item.t}</span>
                  </div>
                  <p className="text-[10px] text-blue-100 pl-5">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Decisions & Risks */}
        <div className="w-72 flex flex-col gap-3">
          {/* Decisiones Pendientes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex-1"
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={14} className="text-amber-600" />
              <h3 className="font-bold text-amber-800 text-sm">Decisiones Pendientes</h3>
            </div>
            <div className="space-y-1.5">
              {[
                "Criterios para expandir beta",
                "Timeline lanzamiento público",
                "Pricing modelo Bulk Actions",
              ].map((d, i) => (
                <div key={i} className="bg-white p-2 rounded-lg flex items-center gap-2 shadow-sm">
                  <span className="text-amber-500 font-bold text-sm">?</span>
                  <span className="text-xs text-gray-700">{d}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Riesgos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="bg-red-50 border border-red-200 rounded-xl p-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={14} className="text-red-600" />
              <h3 className="font-bold text-red-800 text-sm">Riesgos</h3>
            </div>
            <div className="space-y-1.5">
              {[
                { r: "Timeline desarrollo", m: "Sprints ajustados" },
                { r: "Feedback beta limitado", m: "Solo 48 testers" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-2 rounded-lg shadow-sm">
                  <p className="text-xs font-medium text-red-700">⚠️ {item.r}</p>
                  <p className="text-[10px] text-gray-500">{item.m}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Q1 2026 Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }}
        className="mt-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-3"
      >
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-bold text-tn-blue text-sm flex items-center gap-2">
            <Target size={14} /> Visión Q1 2026
          </h4>
          <div className="flex gap-2">
            <a 
              href="https://docs.google.com/document/d/1j_K31_8jgwViiQV7Tr8VDR_j9UuJiseurc_G_CcqLeA/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <FileText size={10} /> Product Doc
            </a>
            <a 
              href="https://docs.google.com/document/d/1O9D_-SMyp_LM7e0G-cqKvjqoyfds1UoAgWAXDgZf45w/edit?tab=t.mhpf9wn8jsie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Calendar size={10} /> Dev Planning
            </a>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            { p: "Assistant", c: "blue", g: "Objetivo Dic: 1,000 merchants" },
            { p: "Bulk Actions", c: "amber", g: "Rollout completo" },
            { p: "Studio", c: "purple", g: "Decisión Go/No-Go" },
            { p: "Command", c: "gray", g: "Continuar discovery" },
          ].map((item, i) => (
            <div key={i} className={`bg-white p-2 rounded-lg border shadow-sm ${
              item.c === 'blue' ? 'border-blue-200' :
              item.c === 'amber' ? 'border-amber-200' :
              item.c === 'purple' ? 'border-purple-200' : 'border-gray-200'
            }`}>
              <p className={`text-xs font-bold ${
                item.c === 'blue' ? 'text-blue-700' :
                item.c === 'amber' ? 'text-amber-700' :
                item.c === 'purple' ? 'text-purple-700' : 'text-gray-700'
              }`}>{item.p}</p>
              <p className="text-[10px] text-gray-600">{item.g}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </SlideContainer>
);

// Slide Final: Contraportada
const ClosingSlide = (
  <SlideContainer key="closing">
    <div className="h-full flex flex-col items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-tn-blue/5 via-white to-purple-50/50" />
      <div className="relative z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <LumiIcon className="w-20 h-20 mx-auto" />
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-5xl font-black text-tn-blue mb-4">Gracias</h1>
          <p className="text-xl text-gray-500 font-light mb-8">Reporte Noviembre 2025</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex gap-4">
            <div className="px-5 py-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-2xl font-black text-blue-700">63K</p>
              <p className="text-xs text-blue-500">AI Users</p>
            </div>
            <div className="px-5 py-3 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-2xl font-black text-green-700">903K</p>
              <p className="text-xs text-green-500">Interacciones</p>
            </div>
            <div className="px-5 py-3 bg-purple-50 border border-purple-200 rounded-xl">
              <p className="text-2xl font-black text-purple-700">48</p>
              <p className="text-xs text-purple-500">Beta Testers</p>
            </div>
          </div>

          <div className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <p className="text-white font-bold flex items-center gap-2">
              <Target size={18} />
              Objetivo Dic: 1,000 merchants en Assistant
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="mt-12 text-sm text-gray-400"
        >
          <p>Lumi Product · Diciembre 2025</p>
        </motion.div>
      </div>
    </div>
  </SlideContainer>
);

export const novemberReportPresentation = {
  id: "reporte-noviembre-2025",
  slides: [
    TitleSlide,
    BusinessReportCover,
    ExecutiveSummarySlide,
    UserEngagementSlide,
    UserMigrationSlide,
    AdopcionPlanSlide,
    RevenueUpsellsSlide,
    FeaturePerformanceSlide,
    FeatureGrowthSlide,
    DriftAnalysisSlide,
    DriftComparativoSlide,
    AssistantBetaSlide,
    BusinessConclusionsSlide,
    ProductReportCover,
    LanzamientosSlide,
    DemoVideoSlide,
    DemoFeedbackSlide,
    DesarrollosSlide,
    DemoBulkActionsSlide,
    DiscoveriesSlide,
    IssuesSlide,
    RoadmapSlide,
    ProximosPasosSlide,
    ClosingSlide,
  ]
};

export const novemberReportPrintSlides = novemberReportPresentation.slides;
