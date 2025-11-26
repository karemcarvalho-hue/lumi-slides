import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, DollarSign, Package, Sparkles, AlertCircle, 
  CheckCircle, Clock, Zap, MessageSquare, Image, BarChart3, 
  ArrowRight, Search, FlaskConical, Lightbulb, ExternalLink, AlertTriangle, Eye, Mic
} from 'lucide-react';

const LumiIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/lumi-icon.png" 
    alt="Lumi AI" 
    className={`object-contain ${className}`}
  />
);

export const operationsPresentation = {
  id: "lumi-update-operations-nov-2025",
  title: "Lumi: Update Operaciones",
  slides: [
    // 1. Title Slide
    <SlideContainer key="title">
      <div className="h-full flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="w-32 h-32 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center border border-gray-100 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/30 opacity-50" />
            <LumiIcon className="w-16 h-16" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-7xl font-bold text-tn-blue mb-6 tracking-tight">
            Lumi: Update
          </h1>
          <div className="flex items-center justify-center gap-4 text-xl text-tn-text font-light tracking-wide">
            <span>Operaciones & Business Metrics</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Noviembre 2025</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex gap-6"
        >
          <div className="px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
            Actions: Rollout
          </div>
          <div className="px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
            Assistant: Beta
          </div>
          <div className="px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
            Studio: Discovery
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-500">
            Snapshot: <span className="font-semibold text-tn-blue">1-24 Nov 2025</span>
          </div>
        </motion.div>
      </div>
    </SlideContainer>,

    // 2. Los 3 Pilares
    <SlideContainer key="pillars">
      <div className="h-full flex flex-col">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-tn-blue mb-3">Los 3 Pilares de Lumi</h2>
          <p className="text-lg text-tn-text font-light">Ecosistema de productos AI para el merchant</p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 flex-1 items-center px-4">
          {[
            { 
              title: "Lumi Actions", 
              icon: Zap, 
              color: "text-amber-500",
              bg: "bg-amber-50",
              desc: "IA integrada en el flujo de trabajo. Generación de contenido con un click (descripciones, SEO, imágenes).",
              status: "Full Rollout"
            },
            { 
              title: "Lumi Assistant", 
              icon: MessageSquare, 
              color: "text-tn-blue",
              bg: "bg-tn-blue/5",
              desc: "Asistente conversacional omnipresente. Gestión de productos y navegación por el admin.",
              status: "Beta Testing"
            },
            { 
              title: "Lumi Studio", 
              icon: Image, 
              color: "text-purple-500",
              bg: "bg-purple-50",
              desc: "Creación de contenido visual profesional. Fotoproducto generativo en contextos reales.",
              status: "Discovery"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="h-full max-h-[400px] p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-tn-blue mb-3">{item.title}</h3>
              <p className="text-tn-text text-base leading-relaxed mb-auto opacity-80">{item.desc}</p>
              <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mt-8 ${item.bg} ${item.color}`}>
                {item.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>,

    // 3. Features Performance - Snapshot Noviembre
    <SlideContainer key="features-nov">
       <div className="h-full flex flex-col">
         <div className="flex items-center justify-between mb-8">
            <div>
                <h2 className="text-4xl font-bold text-tn-blue mb-2">Features Performance</h2>
                <p className="text-lg text-tn-text font-light">Experiments de Octubre - Métricas de Noviembre vs Octubre</p>
            </div>
            <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm font-semibold text-tn-blue">
                Snapshot: 1-24 Nov 2025
            </div>
         </div>

         <div className="grid grid-cols-3 gap-4 flex-1">
          {[
            { 
              name: "Products from Images",
              desc: "Crear producto desde imágenes",
              metric: "16.5K",
              prevMetric: "10.4K",
              growth: "+58%",
              positive: true
            },
            { 
              name: "SEO Brands & Tags",
              desc: "Optimización de SEO, marcas y tags",
              metric: "161K",
              prevMetric: "167K",
              growth: "-3%",
              positive: false
            },
            { 
              name: "Category Suggest",
              desc: "Sugerencia de categorías",
              metric: "18.7K",
              prevMetric: "13.8K",
              growth: "+35%",
              positive: true
            },
            { 
              name: "Category Descriptions",
              desc: "Descripciones SEO para categorías",
              metric: "14.5K",
              prevMetric: "0.4K",
              growth: "+3500%",
              positive: true
            },
            { 
              name: "Smart Eraser",
              desc: "Borrado inteligente (Studio)",
              metric: "1.2K",
              prevMetric: "N/A",
              growth: "New",
              positive: true
            }
          ].map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl border transition-all hover:shadow-md bg-white border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide text-amber-600 bg-amber-100">
                  {exp.name === "Smart Eraser" ? "STUDIO" : "ACTIONS"}
                </span>
                {exp.prevMetric !== "N/A" && (
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    exp.positive 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-500 bg-gray-50'
                  }`}>
                    {exp.growth} vs Oct
                  </span>
                )}
                {exp.growth === "New" && (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full text-blue-600 bg-blue-50">
                    New
                  </span>
                )}
              </div>
              <h4 className="font-bold text-tn-blue text-base mb-1 leading-tight">{exp.name}</h4>
              <p className="text-xs text-tn-text mb-4 opacity-70">{exp.desc}</p>
              <div className="flex items-baseline gap-1.5 pt-3 border-t border-gray-100">
                <span className="text-2xl font-black text-tn-blue">{exp.metric}</span>
                <span className="text-xs font-medium text-gray-400">
                  usos
                  {exp.prevMetric !== "N/A" && <span className="opacity-60 font-normal ml-1">(vs {exp.prevMetric})</span>}
                </span>
              </div>
            </motion.div>
          ))}
         </div>

         <div className="mt-6 flex gap-4">
           <div className="flex-1 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-3">
              <Lightbulb size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                  <p className="text-blue-900 text-sm font-bold mb-1">Key Insight: One-Click to Content</p>
                  <p className="text-blue-800 text-xs leading-relaxed">
                      Features de "Unified Agents" con <strong>un solo click</strong> tienen mucha mayor adopción.
                  </p>
              </div>
           </div>
           <div className="flex-1 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-3">
              <AlertTriangle size={20} className="text-amber-500 flex-shrink-0" />
              <p className="text-amber-900 text-xs font-light leading-relaxed">
                <strong className="font-semibold">Status:</strong> Experiments de Oct digitalmente cerrados.<br/>
                Esperando fin del <strong>deploy lock</strong>.
              </p>
           </div>
         </div>
       </div>
    </SlideContainer>,

    // 4. Experiments Noviembre - Vista Consolidada
    <SlideContainer key="nov-experiments">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center border border-blue-100">
              <LumiIcon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-tn-blue tracking-tight">Experiments Noviembre</h2>
              <p className="text-lg text-tn-text font-light mt-1">Foco total en <span className="font-semibold text-blue-600">Assistant Beta (V3)</span></p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Snapshot</p>
            <div className="px-3 py-1 bg-gray-50 rounded-lg border border-gray-100 text-sm font-semibold text-tn-blue">
              1-24 Nov 2025
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
          {/* Columna Izquierda: Assistant Card */}
          <div className="col-span-2 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-tn-blue text-white p-6 rounded-3xl relative overflow-hidden shadow-lg flex-1 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full opacity-10 blur-3xl -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                      <LumiIcon className="w-6 h-6 brightness-0 invert" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Lumi Assistant Beta (V1 → V3)</h3>
                      <p className="text-blue-200 font-light">Asistente conversacional AI</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-200 border border-green-500/30 rounded-full text-xs font-medium">V2 En Prod</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-200 border border-yellow-500/30 rounded-full text-xs font-medium">V3 Staging</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-3xl font-black mb-1">48</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide font-semibold">Beta Testers</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-3xl font-black mb-1">136</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide font-semibold">Mensajes/mes</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-3xl font-black mb-1">10</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide font-semibold">Stores activas</p>
                  </div>
                </div>

                <div className="bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Eye size={16} />
                    </div>
                    <div>
                        <p className="text-[10px] text-blue-200 font-bold uppercase tracking-wider mb-0.5">Amplitude Insight</p>
                        <p className="text-xs text-white leading-tight">Presencia de Lumi sin contexto = <strong>Alto Abandono</strong>. Solución: Navigation Flow.</p>
                    </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Flow Card */}
            <div className="bg-white border-2 border-purple-100 p-5 rounded-2xl relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-1 rounded-bl-xl border-l border-b border-purple-100 uppercase tracking-wider">
                 High Priority
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-tn-blue">Navigation Flow</h4>
                  <p className="text-sm text-tn-text opacity-70">26 secciones documentadas + suggestions contextuales</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle size={16} /> MDs listos
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <Clock size={16} /> Internal testing esta semana
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Experiments List */}
          <div className="col-span-1 bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col overflow-hidden h-full">
            <h4 className="font-bold text-tn-blue mb-4 flex items-center gap-2 shrink-0">
              <FlaskConical size={18} className="text-gray-400" />
              Experiments Q4 2025
            </h4>
            <div className="space-y-3 overflow-y-auto pr-2 flex-1">
              <div className="p-3 bg-white rounded-xl border border-green-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Credits & Feedback</span>
                  </div>
                  <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md font-medium">Activo</span>
                </div>
                <p className="text-[10px] text-tn-text pl-5 opacity-80">100% rollout en features core</p>
              </div>
              
              <div className="p-3 bg-white rounded-xl border border-amber-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Historial Conv.</span>
                  </div>
                  <span className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded-md font-medium">Design</span>
                </div>
                <p className="text-[10px] text-tn-text pl-5 opacity-80">V4 Assistant • Deadline: 2 dic</p>
              </div>
              
              <div className="p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Fotoproducto</span>
                  </div>
                  <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-md font-medium">Blocked</span>
                </div>
                <p className="text-[10px] text-tn-text pl-5 opacity-80">Esperando PRD + prototipo</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Bulk Actions</span>
                  </div>
                  <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-md font-medium">Blocked</span>
                </div>
                <p className="text-[10px] text-tn-text pl-5 opacity-80">Esperando PRD + prototipo</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-tn-blue">Product Related</span>
                  </div>
                  <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-md font-medium">Blocked</span>
                </div>
                <p className="text-[10px] text-tn-text pl-5 opacity-80">Otro designer del equipo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>,

    // 5. Status Lumi Studio
    <SlideContainer key="studio-status">
        <div className="h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                    <Image size={24} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-tn-blue">Status: Lumi Studio</h2>
                    <p className="text-tn-text opacity-70">Photo Content Creation</p>
                </div>
                <div className="ml-auto px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold border border-purple-100">
                    Discovery
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 flex-1">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-tn-blue mb-4 flex items-center gap-2">
                        <FlaskConical size={18} /> Hipótesis en Validación
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        "Merchants de moda gastan demasiado en sesiones de fotos. IA puede generar fotos de producto en contexto con calidad profesional."
                    </p>
                    
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><CheckCircle size={16}/></div>
                                <div className="text-sm font-bold text-gray-700">Denimstoff (Moda)</div>
                            </div>
                            <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Testing</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><CheckCircle size={16}/></div>
                                <div className="text-sm font-bold text-gray-700">Irarte (Enterprise)</div>
                            </div>
                            <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Testing</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl opacity-70">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center"><Clock size={16}/></div>
                                <div className="text-sm font-bold text-gray-700">Almacén de Toto</div>
                            </div>
                            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">Probando</span>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 flex flex-col">
                    <h4 className="font-bold text-purple-800 mb-4">Señales Positivas</h4>
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                            <span className="text-purple-900 text-sm">Interés real y willingness to pay validado.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                            <span className="text-purple-900 text-sm">Calidad de outputs mejorando semana a semana.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">3</div>
                            <span className="text-purple-900 text-sm">Casos de uso claros: moda, accesorios.</span>
                        </li>
                    </ul>

                    <div className="mt-auto bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                        <div className="text-xs font-bold text-gray-400 uppercase mb-2">Próximo Paso</div>
                        <div className="font-bold text-tn-blue">Prototipo de "Fotoproducto"</div>
                        <div className="text-sm text-gray-500">Nuevo Action para generar fondos.</div>
                    </div>
                </div>
            </div>
        </div>
    </SlideContainer>,

    // 6. Issues Activos
    <SlideContainer key="issues">
        <div className="h-full flex flex-col">
            <h2 className="text-3xl font-bold text-tn-blue mb-8">Issues Críticos (P0/P1)</h2>

            <div className="grid grid-cols-2 gap-6 flex-1">
                {[
                    { id: "AS-003", p: "P0", title: "Navegación sin contexto", status: "Fix en testing", desc: "Assistant alucina rutas." },
                    { id: "AS-005", p: "P0", title: "Crash concurrencia", status: "En análisis", desc: "Mensajes seguidos rompen el chat." },
                    { id: "AS-004", p: "P1", title: "Guardrail estricto", status: "En desarrollo", desc: "Bloquea acciones válidas." },
                    { id: "AS-006", p: "P1", title: "Falta onboarding", status: "Fix en testing", desc: "Users no saben qué hacer." }
                ].map((issue, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold text-white ${issue.p === 'P0' ? 'bg-red-500' : 'bg-orange-500'}`}>
                                {issue.p}
                            </span>
                            <span className="text-xs font-mono text-gray-400">{issue.id}</span>
                        </div>
                        <h4 className="font-bold text-tn-blue mb-1">{issue.title}</h4>
                        <p className="text-sm text-gray-500 mb-3">{issue.desc}</p>
                        <div className="mt-auto pt-3 border-t border-gray-50 flex justify-between items-center">
                            <span className="text-xs font-medium text-tn-blue bg-blue-50 px-2 py-1 rounded">
                                {issue.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-3">
                <AlertTriangle size={20} className="text-amber-500 flex-shrink-0" />
                <p className="text-amber-900 text-sm">
                    <strong>Blocker común:</strong> Deploy Lock impide resolver issues y lanzar V3.
                </p>
            </div>
        </div>
    </SlideContainer>,

    // 7. Timeline & Next Steps
    <SlideContainer key="next-steps">
        <div className="h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-tn-blue mb-10 text-center">Próximos Pasos</h2>

            <div className="grid grid-cols-3 gap-8">
                <div className="relative">
                    <div className="absolute top-0 left-4 bottom-0 w-1 bg-gray-100"></div>
                    <div className="relative z-10 bg-white p-6 rounded-2xl border border-blue-200 shadow-sm ml-8">
                        <div className="absolute top-6 -left-12 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm">1</div>
                        <h4 className="font-bold text-tn-blue mb-1">Esta Semana</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Internal Testing: Navigation</li>
                            <li>• Resolver Issues P0</li>
                            <li>• Prototipo Fotoproducto</li>
                        </ul>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute top-0 left-4 bottom-0 w-1 bg-gray-100"></div>
                    <div className="relative z-10 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm ml-8 opacity-80">
                        <div className="absolute top-6 -left-12 w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm">2</div>
                        <h4 className="font-bold text-tn-blue mb-1">Post Deploy Lock</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• V3 Assistant a Producción</li>
                            <li>• Cierre formal Exp. Octubre</li>
                            <li>• Expansion Beta Studio</li>
                        </ul>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute top-0 left-4 bottom-0 w-1 bg-gray-100"></div>
                    <div className="relative z-10 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm ml-8 opacity-60">
                        <div className="absolute top-6 -left-12 w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm">3</div>
                        <h4 className="font-bold text-tn-blue mb-1">Q1 2026</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• V4 Assistant (Persistencia)</li>
                            <li>• Public Rollout Assistant</li>
                            <li>• Studio Beta Público</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </SlideContainer>,

    // 8. Roadmap Visual
    <SlideContainer key="roadmap">
      <div className="h-full flex flex-col">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-tn-blue">Roadmap High-Level Q4-Q1</h2>
        </div>
        
        <div className="flex-1 grid grid-rows-3 gap-4">
           {/* Actions */}
           <div className="flex items-center gap-4">
               <div className="w-32 font-bold text-tn-blue text-right">Actions</div>
               <div className="flex-1 bg-gray-50 rounded-xl p-2 flex gap-2 relative overflow-hidden">
                   <div className="w-1/3 bg-green-100 text-green-700 rounded-lg p-3 text-xs font-bold border border-green-200 flex flex-col justify-center">
                       Feedback Loop
                       <span className="font-normal opacity-70">Done</span>
                   </div>
                   <div className="w-1/3 bg-blue-100 text-blue-700 rounded-lg p-3 text-xs font-bold border border-blue-200 flex flex-col justify-center">
                       Product Related
                       <span className="font-normal opacity-70">In Progress</span>
                   </div>
                   <div className="w-1/3 bg-gray-100 text-gray-500 rounded-lg p-3 text-xs font-bold border border-gray-200 flex flex-col justify-center">
                       Bulk Actions
                       <span className="font-normal opacity-70">Planned</span>
                   </div>
               </div>
           </div>

           {/* Assistant */}
           <div className="flex items-center gap-4">
               <div className="w-32 font-bold text-tn-blue text-right">Assistant</div>
               <div className="flex-1 bg-gray-50 rounded-xl p-2 flex gap-2 relative overflow-hidden">
                   <div className="w-1/4 bg-green-100 text-green-700 rounded-lg p-3 text-xs font-bold border border-green-200 flex flex-col justify-center">
                       V2 Context
                       <span className="font-normal opacity-70">Done</span>
                   </div>
                   <div className="w-1/4 bg-blue-100 text-blue-700 rounded-lg p-3 text-xs font-bold border border-blue-200 flex flex-col justify-center">
                       V3 Multimodal
                       <span className="font-normal opacity-70">Staging</span>
                   </div>
                   <div className="w-2/4 bg-gray-100 text-gray-500 rounded-lg p-3 text-xs font-bold border border-gray-200 flex flex-col justify-center">
                       V4 Persistencia
                       <span className="font-normal opacity-70">Q1 2026</span>
                   </div>
               </div>
           </div>

           {/* Studio */}
           <div className="flex items-center gap-4">
               <div className="w-32 font-bold text-tn-blue text-right">Studio</div>
               <div className="flex-1 bg-gray-50 rounded-xl p-2 flex gap-2 relative overflow-hidden">
                   <div className="w-1/2 bg-purple-100 text-purple-700 rounded-lg p-3 text-xs font-bold border border-purple-200 flex flex-col justify-center">
                       Discovery & Validation
                       <span className="font-normal opacity-70">Active</span>
                   </div>
                   <div className="w-1/2 bg-gray-100 text-gray-500 rounded-lg p-3 text-xs font-bold border border-gray-200 flex flex-col justify-center">
                       Fotoproducto Beta
                       <span className="font-normal opacity-70">Planned</span>
                   </div>
               </div>
           </div>
        </div>
      </div>
    </SlideContainer>
  ]
};
