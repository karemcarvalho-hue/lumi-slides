import React from 'react';
import { TitleSlide } from '../components/TitleSlide';
import { ProcessFlow } from '../components/ProcessFlow';
import { SplitContent } from '../components/SplitContent';
import { ContentSlide } from '../components/ContentSlide';
import { SlideContainer } from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { 
  Package, Zap, CheckCircle, ArrowRight, Layers, 
  Settings, Play, Eye, FileCheck, Rocket, 
  TrendingUp, Tag, DollarSign, Box, AlertCircle,
  Clock, ExternalLink, Users, Database, Sparkles
} from 'lucide-react';

const LumiIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src={`${import.meta.env.BASE_URL}lumi-icon.png`}
    alt="Lumi AI" 
    className={`object-contain ${className}`}
  />
);

export const bulkActionsPresentation = {
  id: "bulk-actions-flow",
  slides: [
    // Slide 1: Title
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
            Fluxo de Ação em Massa
          </h1>
          <div className="flex items-center justify-center gap-4 text-xl text-tn-text font-light tracking-wide">
            <span>Bulk Actions</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Lumi</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex gap-4"
        >
          <div className="px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
            Em Desenvolvimento
          </div>
          <div className="px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
            Integrado com Assistant
          </div>
        </motion.div>
      </div>
    </SlideContainer>,

    // Slide 2: Visão Geral
    <SlideContainer key="overview">
      <div className="h-full flex flex-col">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">Visão Geral</h2>
          <p className="text-lg text-tn-text font-light">O que são Bulk Actions e por que são importantes</p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Problema */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-red-50 border border-red-100 p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-tn-blue">O Problema</h3>
            </div>
            <ul className="space-y-3 text-sm text-tn-text">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                Merchants precisam atualizar centenas de produtos manualmente
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                Processo repetitivo e propenso a erros
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                Consome muito tempo e recursos
              </li>
            </ul>
          </motion.div>

          {/* Solução */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-green-50 border border-green-100 p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-tn-blue">A Solução</h3>
            </div>
            <ul className="space-y-3 text-sm text-tn-text">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                Ações em massa através do Lumi Assistant
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                Processo automatizado e validado
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                Economia de tempo e redução de erros
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Benefícios */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-white border border-gray-100 p-6 rounded-2xl"
        >
          <h3 className="text-lg font-bold text-tn-blue mb-4 flex items-center gap-2">
            <Sparkles size={20} className="text-tn-lightblue" />
            Benefícios Principais
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-black text-tn-blue mb-1">10x</div>
              <div className="text-xs text-tn-text">Mais rápido</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-tn-blue mb-1">99%</div>
              <div className="text-xs text-tn-text">Menos erros</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-tn-blue mb-1">∞</div>
              <div className="text-xs text-tn-text">Escalável</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>,

    // Slide 3: Fluxo de Processo
    <ProcessFlow
      key="process-flow"
      title="Fluxo de Processo"
      subtitle="Como funciona uma ação em massa no Lumi"
      steps={[
        {
          icon: 'Search',
          label: 'Seleção',
          description: 'Usuário seleciona produtos ou define critérios'
        },
        {
          icon: 'Zap',
          label: 'Definição',
          description: 'Especifica a ação desejada via chat'
        },
        {
          icon: 'Eye',
          label: 'Preview',
          description: 'Visualiza mudanças antes de executar'
        },
        {
          icon: 'Play',
          label: 'Execução',
          description: 'Processa ações em massa de forma segura'
        },
        {
          icon: 'CheckCircle',
          label: 'Confirmação',
          description: 'Recebe relatório de resultados'
        }
      ]}
      note="Todas as etapas são validadas antes da execução final"
    />,

    // Slide 4: Casos de Uso
    <SlideContainer key="use-cases">
      <div className="h-full flex flex-col">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">Casos de Uso</h2>
          <p className="text-lg text-tn-text font-light">Exemplos práticos de quando usar Bulk Actions</p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {[
            {
              icon: DollarSign,
              title: 'Atualização de Preços',
              description: 'Ajustar preços de múltiplos produtos de uma vez, com regras personalizadas (ex: +10%, aplicar desconto, etc.)',
              color: 'green',
              example: 'Aumentar 15% em produtos da categoria "Verão"'
            },
            {
              icon: Layers,
              title: 'Mudança de Categorias',
              description: 'Reorganizar produtos entre categorias em massa, útil para reestruturação de catálogo',
              color: 'blue',
              example: 'Mover todos os produtos "Outlet" para "Promoções"'
            },
            {
              icon: Tag,
              title: 'Aplicação de Tags',
              description: 'Adicionar ou remover tags de múltiplos produtos simultaneamente para melhor organização',
              color: 'purple',
              example: 'Adicionar tag "Black Friday" em 200 produtos'
            },
            {
              icon: Box,
              title: 'Atualização de Estoque',
              description: 'Modificar quantidade de estoque de vários produtos, com validações de segurança',
              color: 'amber',
              example: 'Zerar estoque de produtos descontinuados'
            }
          ].map((useCase, i) => {
            const Icon = useCase.icon;
            const colorClasses = {
              green: 'bg-green-50 border-green-100 text-green-600',
              blue: 'bg-blue-50 border-blue-100 text-blue-600',
              purple: 'bg-purple-50 border-purple-100 text-purple-600',
              amber: 'bg-amber-50 border-amber-100 text-amber-600'
            };
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${colorClasses[useCase.color]} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-tn-blue mb-2">{useCase.title}</h3>
                <p className="text-sm text-tn-text mb-4 opacity-80 leading-relaxed">{useCase.description}</p>
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                  <p className="text-xs font-medium text-gray-500 mb-1">Exemplo:</p>
                  <p className="text-xs text-tn-text italic">"{useCase.example}"</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideContainer>,

    // Slide 5: Arquitetura Técnica
    <SlideContainer key="technical">
      <div className="h-full flex flex-col">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">Arquitetura Técnica</h2>
          <p className="text-lg text-tn-text font-light">Como funciona por baixo dos panos</p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {/* Componente 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-100 p-6 rounded-2xl"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold text-tn-blue mb-3">Assistant Interface</h3>
            <p className="text-sm text-tn-text opacity-80 leading-relaxed">
              Usuário interage via chat natural. Lumi interpreta intenção e valida permissões.
            </p>
          </motion.div>

          {/* Componente 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-100 p-6 rounded-2xl"
          >
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Database size={24} />
            </div>
            <h3 className="text-lg font-bold text-tn-blue mb-3">Bulk Engine</h3>
            <p className="text-sm text-tn-text opacity-80 leading-relaxed">
              Processa ações em lote com validações, rollback automático em caso de erro.
            </p>
          </motion.div>

          {/* Componente 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-100 p-6 rounded-2xl"
          >
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
              <FileCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-tn-blue mb-3">Validation Layer</h3>
            <p className="text-sm text-tn-text opacity-80 leading-relaxed">
              Valida cada ação antes de executar. Preview mostra exatamente o que será alterado.
            </p>
          </motion.div>
        </div>

        {/* Fluxo Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                <Users size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-tn-blue">Fluxo de Dados</p>
                <p className="text-xs text-tn-text opacity-70">Assistant → Engine → Validation → API → Result</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-tn-lightblue" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-tn-blue">Resultado</p>
                <p className="text-xs text-tn-text opacity-70">Relatório detalhado de sucessos e falhas</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Limitações */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-amber-50 border border-amber-100 p-4 rounded-xl"
        >
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">Considerações Técnicas</p>
              <ul className="text-xs text-amber-700 space-y-1">
                <li>• Limite de 1000 itens por operação para garantir performance</li>
                <li>• Operações são assíncronas para grandes volumes</li>
                <li>• Logs completos de todas as alterações para auditoria</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>,

    // Slide 6: Status e Roadmap
    <SlideContainer key="status">
      <div className="h-full flex flex-col">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">Status e Roadmap</h2>
          <p className="text-lg text-tn-text font-light">Estado atual e próximos passos</p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Status Atual */}
          <div>
            <h3 className="text-xl font-bold text-tn-blue mb-6 flex items-center gap-2">
              <Clock size={20} className="text-tn-lightblue" />
              Estado Atual
            </h3>
            <div className="space-y-4">
              {[
                { status: 'completed', label: 'Especificação Técnica', desc: 'PRD completo e aprovado' },
                { status: 'in-progress', label: 'Desenvolvimento Core', desc: 'Bulk Engine em implementação' },
                { status: 'not-started', label: 'Integração Assistant', desc: 'Próxima fase' },
                { status: 'not-started', label: 'Beta Testing', desc: 'Aguardando desenvolvimento' }
              ].map((item, i) => {
                const statusColors = {
                  'completed': 'bg-green-50 border-green-200 text-green-700',
                  'in-progress': 'bg-blue-50 border-blue-200 text-blue-700',
                  'not-started': 'bg-gray-50 border-gray-200 text-gray-500'
                };
                const statusIcons = {
                  'completed': <CheckCircle size={16} />,
                  'in-progress': <Clock size={16} />,
                  'not-started': <AlertCircle size={16} />
                };
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-4 rounded-xl border ${statusColors[item.status]} flex items-start gap-3`}
                  >
                    <div className="mt-0.5">{statusIcons[item.status]}</div>
                    <div className="flex-1">
                      <p className="font-bold text-sm mb-1">{item.label}</p>
                      <p className="text-xs opacity-80">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <h3 className="text-xl font-bold text-tn-blue mb-6 flex items-center gap-2">
              <Rocket size={20} className="text-tn-lightblue" />
              Próximos Passos
            </h3>
            <div className="space-y-4">
              {[
                { phase: 'Q4 2025', tasks: ['Finalizar Bulk Engine', 'Integração com Assistant V3', 'Testes internos'] },
                { phase: 'Q1 2026', tasks: ['Beta com merchants selecionados', 'Coleta de feedback', 'Ajustes de UX'] },
                { phase: 'Q2 2026', tasks: ['Rollout gradual', 'Monitoramento de métricas', 'Otimizações'] }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-100 p-5 rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-tn-blue text-white rounded-lg flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-tn-blue">{phase.phase}</h4>
                  </div>
                  <ul className="space-y-2 ml-10">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-tn-text">
                        <div className="w-1 h-1 rounded-full bg-tn-lightblue mt-1.5"></div>
                        {task}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-tn-blue to-tn-lightblue text-white p-6 rounded-2xl text-center"
        >
          <h3 className="text-xl font-bold mb-2">Pronto para revolucionar a gestão de produtos?</h3>
          <p className="text-blue-100 text-sm">Bulk Actions chegará em breve para transformar como você gerencia seu catálogo</p>
        </motion.div>
      </div>
    </SlideContainer>
  ]
};

// Print slides (same as regular slides for now)
export const bulkActionsPrintSlides = bulkActionsPresentation.slides;


