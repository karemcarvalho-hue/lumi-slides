import React, { useState, createContext, useContext } from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, CheckCircle, XCircle, AlertCircle, ArrowRight,
  Search, Filter, Package, CreditCard, Truck, Archive, RefreshCw,
  MessageSquare, Eye, FileText, Link2, TrendingUp, Target,
  Lightbulb, Rocket, Users, BarChart3, HelpCircle, Navigation,
  Globe
} from 'lucide-react';

// Language Context
const LanguageContext = createContext('pt-BR');

// Translations
const translations = {
  'pt-BR': {
    // Title slide
    title: 'Lumi em Orders',
    subtitle: ['Capacidades', 'Limitações', 'Oportunidades'],
    badges: ['O que faz', 'O que guia', 'O que não faz'],
    
    // Slide 2
    slide2Title: 'Tipos de Ações em Orders',
    slide2Subtitle: 'Entendendo a diferença entre ações transacionais e não transacionais',
    transactional: 'Ações Transacionais',
    transactionalDesc: 'Mudam o estado da venda',
    transactionalItems: [
      'Pagamento (marcar como recebido, reembolsar)',
      'Fulfillment (empaquetar, desempaquetar)',
      'Envio (notificar, editar rastreio)',
      'Status (arquivar, cancelar, reabrir)'
    ],
    transactionalNote: 'São as ações mais sensíveis e requerem cuidado',
    nonTransactional: 'Ações Não Transacionais',
    nonTransactionalDesc: 'Consulta, busca, organização',
    nonTransactionalItems: [
      'Buscar vendas (número, cliente, valor)',
      'Filtrar por status, data, pagamento, envio',
      'Exportar lista (CSV)',
      'Copiar links e dados'
    ],
    nonTransactionalNote: 'Não alteram nada na venda, são seguras',
    
    // Slide 3 - V1
    slide3Title: 'V1 - Entrega Atual',
    slide3Badge: 'Lumi FAZ agora',
    slide3Items: [
      {
        title: 'Buscar vendas',
        description: 'Por número da venda, nome, email, telefone do cliente ou valor.',
        where: 'Chat conversacional'
      },
      {
        title: 'Filtrar vendas',
        description: 'Status, data, pagamento, envio, canal, cupons, tipo de venda e muito mais.',
        where: 'Chat conversacional'
      },
      {
        title: 'Responder perguntas',
        description: 'Status, dados do cliente, produtos, valores, rastreio e informações da venda.',
        where: 'Chat conversacional'
      },
      {
        title: 'Explicar status',
        description: 'Traduz status de pagamento e envio para linguagem simples e clara.',
        where: 'Chat conversacional'
      }
    ],
    slide3Note: 'V1 foca em consulta e informação - ações sem risco de alteração de dados',
    
    // Slide 3b - V2
    slide3bTitle: 'V2 - Próxima Entrega',
    slide3bBadge: 'Lumi FARÁ (V2)',
    slide3bItems: [
      {
        title: 'Marcar pagamento',
        description: 'Muda status para pago. Só funciona se a venda não estiver paga. Registra no histórico.',
        where: 'Listado e Detalhe'
      },
      {
        title: 'Marcar como empaquetada',
        description: 'Atualiza status de fulfillment. Marca todos os fulfillments físicos em vendas múltiplas.',
        where: 'Listado e Detalhe'
      },
      {
        title: 'Desempaquetar venda',
        description: 'Volta o fulfillment para "por empaquetar". Só se ainda não foi enviada.',
        where: 'Detalhe da venda'
      },
      {
        title: 'Reabrir venda',
        description: 'Muda status de fechada para aberta. Valida estoque antes de executar.',
        where: 'Detalhe da venda'
      }
    ],
    slide3bNote: 'V2 adiciona ações transacionais - chave para o fluxo de Picking List',
    
    // Slide 4
    slide4Title: 'Ações com Orientação',
    slide4Badge: 'Lumi GUIA o usuário',
    slide4Items: [
      {
        title: 'Notificar envio',
        description: 'Adiciona código ou link de rastreio. Atualiza status para enviada. Pode enviar email ao cliente.',
        status: 'Pode fazer, mas experiência massiva é ruim',
        improvement: 'Ideal: Lumi receber lista + tracking e aplicar em massa'
      },
      {
        title: 'Arquivar venda',
        description: 'Fecha a venda. Impede novas ações até reabrir.',
        status: 'Pode fazer ou apenas guiar',
        improvement: 'Decisão de produto em aberto'
      },
      {
        title: 'Editar código de rastreio',
        description: 'Atualiza ou substitui tracking existente. Registra alteração no histórico.',
        status: 'Pode fazer ou guiar',
        improvement: 'Depende do contexto da operação'
      },
      {
        title: 'Adicionar nota na venda',
        description: 'Adiciona nota manual no detalhe da venda.',
        status: 'Pode ser útil em alguns casos',
        improvement: 'Cuidado para não sobrescrever notas existentes'
      }
    ],
    slide4Note: 'Guiar = Lumi explica o que fazer, leva até a tela correta, mas o usuário executa a ação final',
    
    // Slide 5
    slide5Title: 'Ações Não Suportadas',
    slide5Badge: 'Lumi NÃO faz',
    slide5Items: [
      {
        title: 'Editar venda',
        description: 'Alterar produtos, descontos, frete e total. Pode atualizar estoque.',
        reason: 'Só disponível se a venda não estiver empaquetada. Ação complexa demais.',
        alternative: 'Lumi pode levar o usuário até a venda correta'
      },
      {
        title: 'Reembolsar pagamento',
        description: 'Disponível só para Pago Nube / Nuvem Pago (com exceções). Reembolso total cancela a venda.',
        reason: 'Ação financeira sensível com muitas variáveis.',
        alternative: 'Pode ver se é reembolsável e guiar até a tela certa'
      },
      {
        title: 'Cancelar venda',
        description: 'Fecha a venda. Pode devolver estoque. Pode enviar email.',
        reason: 'Ação irreversível com múltiplas consequências.',
        alternative: 'Pode guiar o processo ou sugerir auto-cancelamento'
      },
      {
        title: 'Comprar etiquetas',
        description: 'Gerar etiquetas de envio através de integrações.',
        reason: 'Requer integração com transportadoras e pagamento.',
        alternative: 'Pode explicar o processo e direcionar'
      }
    ],
    why: 'Por quê',
    alternativeLabel: 'Alternativa',
    
    // Slide 6
    slide6Title: 'Insights do Usuário',
    slide6Subtitle: 'O que os usuários mais perguntam e precisam',
    slide6Items: [
      {
        quote: '"Quantos pedidos foram pagos esse mês?"',
        insight: 'Vendas = pagamentos aprovados',
        need: 'Saber se está vendendo bem'
      },
      {
        quote: '"Qual é a minha taxa de aprovação?"',
        insight: 'Taxa de aprovação é métrica central',
        need: 'Saber se é boa ou ruim, comparar'
      },
      {
        quote: '"Por que caiu? O que faço agora?"',
        insight: 'Quer direção, não só número',
        need: 'Próximo passo claro'
      },
      {
        quote: '"Como faço meu produto aparecer mais?"',
        insight: 'SEO e busca = vender mais',
        need: 'Vender mais rápido'
      },
      {
        quote: '"O que significa esse status de envio?"',
        insight: 'Logística vira problema de venda',
        need: 'Tradução humana de status'
      },
      {
        quote: '"Pode aplicar direto? Manda ver!"',
        insight: 'Aceita sugestões prontas',
        need: 'Menos decisão, mais execução'
      }
    ],
    needLabel: 'Precisa',
    viableNow: 'Viável agora',
    partial: 'Parcial',
    outOfOrders: 'Fora de Orders',
    
    // Slide 7
    slide7Title: 'Roadmap de Produto',
    slide7Subtitle: 'O que está em V1 e o que vem em V2',
    viableNowTitle: 'V1 - Entrega Atual',
    viableNowItems: [
      'Buscar e filtrar vendas',
      'Responder perguntas sobre vendas',
      'Explicar status de envio e pagamento',
      'Análise guiada por conversa'
    ],
    v2Title: 'V2 - Próxima Entrega',
    v2Items: [
      'Marcar pagamento como recebido',
      'Marcar como empaquetada',
      'Desempaquetar venda',
      'Reabrir venda'
    ],
    asGuideTitle: 'Como Guia / Suporte',
    asGuideItems: [
      'Cancelamento de vendas',
      'Reembolso de pagamentos',
      'Edição de vendas existentes',
      'Problemas logísticos externos',
      'Configuração de auto-cancelamento'
    ],
    futureTitle: 'Oportunidades Claras de Produto',
    futureItems: [
      'KPI de Saúde de Vendas',
      'Taxa de Aprovação',
      'Comparação de Períodos',
      'Playbooks Acionáveis',
      'Ações Logísticas Diretas'
    ],
    
    // Slide 8
    slide8Title: 'O que Lumi Sabe Responder',
    slide8Subtitle: 'Dados disponíveis sobre vendas e produtos',
    saleData: 'Dados da Venda',
    saleDataItems: [
      'Status geral', 'Status de pagamento', 'Status de envio', 'Total e produtos',
      'Nome do cliente', 'Email do cliente', 'Telefone', 'Canal de origem',
      'Meio de pagamento', 'Cupom aplicado', 'Notas do cliente', 'Notas da venda'
    ],
    productData: 'Dados dos Produtos',
    productDataItems: [
      'Nome do produto', 'SKU', 'Variação', 'Quantidade', 'Preço unitário', 'Preço total'
    ],
    linksTitle: 'Links e IDs disponíveis',
    linksItems: ['Link de checkout', 'Link de rastreio', 'ID da transação'],
    
    // Slide 9
    slide9Title: 'Resumo',
    slide9Subtitle: 'Visão consolidada das capacidades do Lumi em Orders',
    v1Label: 'V1 (Agora)',
    v1Items: ['Buscar vendas', 'Filtrar vendas', 'Responder perguntas', 'Explicar status'],
    v2Label: 'V2 (Próximo)',
    v2Items: ['Marcar pagamento', 'Empaquetar', 'Desempaquetar', 'Reabrir venda'],
    guides: 'GUIA',
    guidesItems: ['Cancelamento', 'Reembolso', 'Edição de venda', 'Configurações', 'Problemas logísticos'],
    doesNot: 'NÃO FAZ',
    doesNotItems: ['Editar venda', 'Reembolsar', 'Cancelar', 'Comprar etiquetas'],
    finalCta: 'Este documento é base para: Backlog • Escopo • Experiência Conversacional',
    finalCtaSub: 'V1 em produção • V2 no roadmap'
  },
  'es-AR': {
    // Title slide
    title: 'Lumi en Orders',
    subtitle: ['Capacidades', 'Limitaciones', 'Oportunidades'],
    badges: ['Lo que hace', 'Lo que guía', 'Lo que no hace'],
    
    // Slide 2
    slide2Title: 'Tipos de Acciones en Orders',
    slide2Subtitle: 'Entendiendo la diferencia entre acciones transaccionales y no transaccionales',
    transactional: 'Acciones Transaccionales',
    transactionalDesc: 'Cambian el estado de la venta',
    transactionalItems: [
      'Pago (marcar como recibido, reembolsar)',
      'Fulfillment (empaquetar, desempaquetar)',
      'Envío (notificar, editar seguimiento)',
      'Estado (archivar, cancelar, reabrir)'
    ],
    transactionalNote: 'Son las acciones más sensibles y requieren cuidado',
    nonTransactional: 'Acciones No Transaccionales',
    nonTransactionalDesc: 'Consulta, búsqueda, organización',
    nonTransactionalItems: [
      'Buscar ventas (número, cliente, valor)',
      'Filtrar por estado, fecha, pago, envío',
      'Exportar lista (CSV)',
      'Copiar links y datos'
    ],
    nonTransactionalNote: 'No alteran nada en la venta, son seguras',
    
    // Slide 3 - V1
    slide3Title: 'V1 - Entrega Actual',
    slide3Badge: 'Lumi HACE ahora',
    slide3Items: [
      {
        title: 'Buscar ventas',
        description: 'Por número de venta, nombre, email, teléfono del cliente o valor.',
        where: 'Chat conversacional'
      },
      {
        title: 'Filtrar ventas',
        description: 'Estado, fecha, pago, envío, canal, cupones, tipo de venta y mucho más.',
        where: 'Chat conversacional'
      },
      {
        title: 'Responder preguntas',
        description: 'Estado, datos del cliente, productos, valores, seguimiento e información de la venta.',
        where: 'Chat conversacional'
      },
      {
        title: 'Explicar estados',
        description: 'Traduce estados de pago y envío a lenguaje simple y claro.',
        where: 'Chat conversacional'
      }
    ],
    slide3Note: 'V1 se enfoca en consulta e información - acciones sin riesgo de alteración de datos',
    
    // Slide 3b - V2
    slide3bTitle: 'V2 - Próxima Entrega',
    slide3bBadge: 'Lumi HARÁ (V2)',
    slide3bItems: [
      {
        title: 'Marcar pago',
        description: 'Cambia estado a pagado. Solo funciona si la venta no está pagada. Registra en el historial.',
        where: 'Listado y Detalle'
      },
      {
        title: 'Marcar como empaquetada',
        description: 'Actualiza estado de fulfillment. Marca todos los fulfillments físicos en ventas múltiples.',
        where: 'Listado y Detalle'
      },
      {
        title: 'Desempaquetar venta',
        description: 'Vuelve el fulfillment a "por empaquetar". Solo si aún no fue enviada.',
        where: 'Detalle de la venta'
      },
      {
        title: 'Reabrir venta',
        description: 'Cambia estado de cerrada a abierta. Valida stock antes de ejecutar.',
        where: 'Detalle de la venta'
      }
    ],
    slide3bNote: 'V2 agrega acciones transaccionales - clave para el flujo de Picking List',
    
    // Slide 4
    slide4Title: 'Acciones con Orientación',
    slide4Badge: 'Lumi GUÍA al usuario',
    slide4Items: [
      {
        title: 'Notificar envío',
        description: 'Agrega código o link de seguimiento. Actualiza estado a enviada. Puede enviar email al cliente.',
        status: 'Puede hacer, pero experiencia masiva es mala',
        improvement: 'Ideal: Lumi recibir lista + tracking y aplicar en masa'
      },
      {
        title: 'Archivar venta',
        description: 'Cierra la venta. Impide nuevas acciones hasta reabrir.',
        status: 'Puede hacer o solo guiar',
        improvement: 'Decisión de producto abierta'
      },
      {
        title: 'Editar código de seguimiento',
        description: 'Actualiza o reemplaza tracking existente. Registra cambio en el historial.',
        status: 'Puede hacer o guiar',
        improvement: 'Depende del contexto de la operación'
      },
      {
        title: 'Agregar nota en la venta',
        description: 'Agrega nota manual en el detalle de la venta.',
        status: 'Puede ser útil en algunos casos',
        improvement: 'Cuidado de no sobrescribir notas existentes'
      }
    ],
    slide4Note: 'Guiar = Lumi explica qué hacer, lleva hasta la pantalla correcta, pero el usuario ejecuta la acción final',
    
    // Slide 5
    slide5Title: 'Acciones No Soportadas',
    slide5Badge: 'Lumi NO hace',
    slide5Items: [
      {
        title: 'Editar venta',
        description: 'Modificar productos, descuentos, envío y total. Puede actualizar stock.',
        reason: 'Solo disponible si la venta no está empaquetada. Acción muy compleja.',
        alternative: 'Lumi puede llevar al usuario hasta la venta correcta'
      },
      {
        title: 'Reembolsar pago',
        description: 'Disponible solo para Pago Nube (con excepciones). Reembolso total cancela la venta.',
        reason: 'Acción financiera sensible con muchas variables.',
        alternative: 'Puede ver si es reembolsable y guiar hasta la pantalla correcta'
      },
      {
        title: 'Cancelar venta',
        description: 'Cierra la venta. Puede devolver stock. Puede enviar email.',
        reason: 'Acción irreversible con múltiples consecuencias.',
        alternative: 'Puede guiar el proceso o sugerir auto-cancelación'
      },
      {
        title: 'Comprar etiquetas',
        description: 'Generar etiquetas de envío a través de integraciones.',
        reason: 'Requiere integración con transportistas y pago.',
        alternative: 'Puede explicar el proceso y direccionar'
      }
    ],
    why: 'Por qué',
    alternativeLabel: 'Alternativa',
    
    // Slide 6
    slide6Title: 'Insights del Usuario',
    slide6Subtitle: 'Lo que los usuarios más preguntan y necesitan',
    slide6Items: [
      {
        quote: '"¿Cuántos pedidos fueron pagados este mes?"',
        insight: 'Ventas = pagos aprobados',
        need: 'Saber si está vendiendo bien'
      },
      {
        quote: '"¿Cuál es mi tasa de aprobación?"',
        insight: 'Tasa de aprobación es métrica central',
        need: 'Saber si es buena o mala, comparar'
      },
      {
        quote: '"¿Por qué bajó? ¿Qué hago ahora?"',
        insight: 'Quiere dirección, no solo número',
        need: 'Próximo paso claro'
      },
      {
        quote: '"¿Cómo hago que mi producto aparezca más?"',
        insight: 'SEO y búsqueda = vender más',
        need: 'Vender más rápido'
      },
      {
        quote: '"¿Qué significa este estado de envío?"',
        insight: 'Logística se vuelve problema de venta',
        need: 'Traducción humana de estado'
      },
      {
        quote: '"¿Podés aplicar directo? ¡Dale!"',
        insight: 'Acepta sugerencias listas',
        need: 'Menos decisión, más ejecución'
      }
    ],
    needLabel: 'Necesita',
    viableNow: 'Viable ahora',
    partial: 'Parcial',
    outOfOrders: 'Fuera de Orders',
    
    // Slide 7
    slide7Title: 'Roadmap de Producto',
    slide7Subtitle: 'Lo que está en V1 y lo que viene en V2',
    viableNowTitle: 'V1 - Entrega Actual',
    viableNowItems: [
      'Buscar y filtrar ventas',
      'Responder preguntas sobre ventas',
      'Explicar estados de envío y pago',
      'Análisis guiado por conversación'
    ],
    v2Title: 'V2 - Próxima Entrega',
    v2Items: [
      'Marcar pago como recibido',
      'Marcar como empaquetada',
      'Desempaquetar venta',
      'Reabrir venta'
    ],
    asGuideTitle: 'Como Guía / Soporte',
    asGuideItems: [
      'Cancelación de ventas',
      'Reembolso de pagos',
      'Edición de ventas existentes',
      'Problemas logísticos externos',
      'Configuración de auto-cancelación'
    ],
    futureTitle: 'Oportunidades Claras de Producto',
    futureItems: [
      'KPI de Salud de Ventas',
      'Tasa de Aprobación',
      'Comparación de Períodos',
      'Playbooks Accionables',
      'Acciones Logísticas Directas'
    ],
    
    // Slide 8
    slide8Title: 'Lo que Lumi Sabe Responder',
    slide8Subtitle: 'Datos disponibles sobre ventas y productos',
    saleData: 'Datos de la Venta',
    saleDataItems: [
      'Estado general', 'Estado de pago', 'Estado de envío', 'Total y productos',
      'Nombre del cliente', 'Email del cliente', 'Teléfono', 'Canal de origen',
      'Medio de pago', 'Cupón aplicado', 'Notas del cliente', 'Notas de la venta'
    ],
    productData: 'Datos de los Productos',
    productDataItems: [
      'Nombre del producto', 'SKU', 'Variación', 'Cantidad', 'Precio unitario', 'Precio total'
    ],
    linksTitle: 'Links e IDs disponibles',
    linksItems: ['Link de checkout', 'Link de seguimiento', 'ID de la transacción'],
    
    // Slide 9
    slide9Title: 'Resumen',
    slide9Subtitle: 'Visión consolidada de las capacidades de Lumi en Orders',
    v1Label: 'V1 (Ahora)',
    v1Items: ['Buscar ventas', 'Filtrar ventas', 'Responder preguntas', 'Explicar estados'],
    v2Label: 'V2 (Próximo)',
    v2Items: ['Marcar pago', 'Empaquetar', 'Desempaquetar', 'Reabrir venta'],
    guides: 'GUÍA',
    guidesItems: ['Cancelación', 'Reembolso', 'Edición de venta', 'Configuraciones', 'Problemas logísticos'],
    doesNot: 'NO HACE',
    doesNotItems: ['Editar venta', 'Reembolsar', 'Cancelar', 'Comprar etiquetas'],
    finalCta: 'Este documento es base para: Backlog • Alcance • Experiencia Conversacional',
    finalCtaSub: 'V1 en producción • V2 en el roadmap'
  }
};

const LumiIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src={`${import.meta.env.BASE_URL}lumi-icon.png`}
    alt="Lumi AI" 
    className={`object-contain ${className}`}
  />
);

// Status badge component
const StatusBadge = ({ status, label }) => {
  const styles = {
    can: 'bg-green-50 text-green-700 border-green-200',
    guide: 'bg-amber-50 text-amber-700 border-amber-200',
    cannot: 'bg-red-50 text-red-700 border-red-200'
  };
  const icons = {
    can: <CheckCircle size={14} />,
    guide: <Navigation size={14} />,
    cannot: <XCircle size={14} />
  };
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      {icons[status]}
      {label}
    </span>
  );
};

// Language Selector Component
const LanguageSelector = ({ language, setLanguage }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="absolute top-6 right-6 z-50"
  >
    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-200 shadow-sm">
      <Globe size={14} className="text-gray-400" />
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          language === 'pt-BR' 
            ? 'bg-tn-blue text-white' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        PT-BR
      </button>
      <button
        onClick={() => setLanguage('es-AR')}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          language === 'es-AR' 
            ? 'bg-tn-blue text-white' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        ES-AR
      </button>
    </div>
  </motion.div>
);

// Wrapper component to handle language state
const PresentationWrapper = ({ children }) => {
  const [language, setLanguage] = useState('pt-BR');
  
  return (
    <LanguageContext.Provider value={language}>
      <div className="relative">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

// Hook to get translations
const useTranslations = () => {
  const language = useContext(LanguageContext);
  return translations[language];
};

// Slide Components
const TitleSlideContent = () => {
  const t = useTranslations();
  
  return (
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
        <h1 className="text-6xl font-bold text-tn-blue mb-6 tracking-tight">
          {t.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-xl text-tn-text font-light tracking-wide">
          {t.subtitle.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              {i < t.subtitle.length - 1 && <span className="w-1 h-1 rounded-full bg-gray-300" />}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex gap-4"
      >
        <div className="px-5 py-2.5 rounded-full bg-green-50 border border-green-100 text-sm text-green-700 flex items-center gap-2.5">
          <CheckCircle size={16} />
          {t.badges[0]}
        </div>
        <div className="px-5 py-2.5 rounded-full bg-amber-50 border border-amber-100 text-sm text-amber-700 flex items-center gap-2.5">
          <Navigation size={16} />
          {t.badges[1]}
        </div>
        <div className="px-5 py-2.5 rounded-full bg-red-50 border border-red-100 text-sm text-red-700 flex items-center gap-2.5">
          <XCircle size={16} />
          {t.badges[2]}
        </div>
      </motion.div>
    </div>
  );
};

const ActionTypesSlide = () => {
  const t = useTranslations();
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.slide2Title}</h2>
        <p className="text-lg text-tn-text font-light">{t.slide2Subtitle}</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 p-8 rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-xl flex items-center justify-center">
              <RefreshCw size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-tn-blue">{t.transactional}</h3>
              <p className="text-sm text-tn-text opacity-70">{t.transactionalDesc}</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-tn-text">
            {[CreditCard, Package, Truck, Archive].map((Icon, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icon size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{t.transactionalItems[i]}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-3 bg-white/60 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-700 font-medium">⚠️ {t.transactionalNote}</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 p-8 rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-green-500 text-white rounded-xl flex items-center justify-center">
              <Eye size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-tn-blue">{t.nonTransactional}</h3>
              <p className="text-sm text-tn-text opacity-70">{t.nonTransactionalDesc}</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-tn-text">
            {[Search, Filter, FileText, Link2].map((Icon, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icon size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>{t.nonTransactionalItems[i]}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-3 bg-white/60 rounded-lg border border-green-100">
            <p className="text-xs text-green-700 font-medium">✅ {t.nonTransactionalNote}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const WhatLumiDoesSlide = () => {
  const t = useTranslations();
  const icons = [Search, Filter, MessageSquare, Eye];
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full mb-4">
          <CheckCircle size={20} className="text-green-600" />
          <span className="text-green-700 font-medium">{t.slide3Badge}</span>
        </div>
        <h2 className="text-4xl font-bold text-tn-blue tracking-tight">{t.slide3Title}</h2>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {t.slide3Items.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-green-200 p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-50 border border-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-tn-blue mb-2">{item.title}</h3>
              <p className="text-sm text-tn-text opacity-80 leading-relaxed mb-3">{item.description}</p>
              <div className="text-xs text-tn-lightblue font-medium">📍 {item.where}</div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 bg-green-50 border border-green-100 p-4 rounded-xl text-center"
      >
        <p className="text-sm text-green-800">{t.slide3Note}</p>
      </motion.div>
    </div>
  );
};

const V2Slide = () => {
  const t = useTranslations();
  const icons = [CreditCard, Package, RefreshCw, Archive];
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-4">
          <Rocket size={20} className="text-blue-600" />
          <span className="text-blue-700 font-medium">{t.slide3bBadge}</span>
        </div>
        <h2 className="text-4xl font-bold text-tn-blue tracking-tight">{t.slide3bTitle}</h2>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {t.slide3bItems.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-blue-200 p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-tn-blue mb-2">{item.title}</h3>
              <p className="text-sm text-tn-text opacity-80 leading-relaxed mb-3">{item.description}</p>
              <div className="text-xs text-tn-lightblue font-medium">📍 {item.where}</div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-xl text-center"
      >
        <p className="text-sm text-blue-800">{t.slide3bNote}</p>
      </motion.div>
    </div>
  );
};

const WhatLumiGuidesSlide = () => {
  const t = useTranslations();
  const icons = [Truck, Archive, FileText, MessageSquare];
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full mb-4">
          <Navigation size={20} className="text-amber-600" />
          <span className="text-amber-700 font-medium">{t.slide4Badge}</span>
        </div>
        <h2 className="text-4xl font-bold text-tn-blue tracking-tight">{t.slide4Title}</h2>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {t.slide4Items.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center border border-amber-100 flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-tn-blue mb-2">{item.title}</h3>
                  <p className="text-sm text-tn-text opacity-80 leading-relaxed mb-3">{item.description}</p>
                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 mb-2">
                    <p className="text-xs text-amber-800 font-medium">🟡 {item.status}</p>
                  </div>
                  <p className="text-xs text-tn-lightblue font-medium">💡 {item.improvement}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-xl"
      >
        <p className="text-sm text-blue-800 text-center">
          <strong>{t.slide4Note.split('=')[0]}=</strong>{t.slide4Note.split('=')[1]}
        </p>
      </motion.div>
    </div>
  );
};

const WhatLumiCannotSlide = () => {
  const t = useTranslations();
  const icons = [FileText, CreditCard, XCircle, Truck];
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-4">
          <XCircle size={20} className="text-red-600" />
          <span className="text-red-700 font-medium">{t.slide5Badge}</span>
        </div>
        <h2 className="text-4xl font-bold text-tn-blue tracking-tight">{t.slide5Title}</h2>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {t.slide5Items.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-red-100 p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center border border-red-100 flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-tn-blue mb-2">{item.title}</h3>
                  <p className="text-sm text-tn-text opacity-80 leading-relaxed mb-3">{item.description}</p>
                  <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-3">
                    <p className="text-xs text-red-700"><strong>{t.why}:</strong> {item.reason}</p>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                    <p className="text-xs text-green-700"><strong>{t.alternativeLabel}:</strong> {item.alternative}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const UserInsightsSlide = () => {
  const t = useTranslations();
  const canDoFlags = [true, false, true, false, true, true];
  const colors = ['green', 'amber', 'green', 'blue', 'green', 'green'];
  
  const colorClasses = {
    green: 'border-green-200 bg-green-50/50',
    amber: 'border-amber-200 bg-amber-50/50',
    blue: 'border-blue-200 bg-blue-50/50'
  };
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.slide6Title}</h2>
        <p className="text-lg text-tn-text font-light">{t.slide6Subtitle}</p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-5">
        {t.slide6Items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`p-5 rounded-xl border ${colorClasses[colors[i]]}`}
          >
            <div className="text-sm text-tn-text italic mb-3 leading-relaxed">
              💬 {item.quote}
            </div>
            <div className="border-t border-gray-200 pt-3">
              <h4 className="text-sm font-bold text-tn-blue mb-1">{item.insight}</h4>
              <p className="text-xs text-tn-text opacity-70 mb-2">{t.needLabel}: {item.need}</p>
              <StatusBadge 
                status={canDoFlags[i] ? 'can' : (colors[i] === 'amber' ? 'guide' : 'cannot')} 
                label={canDoFlags[i] ? t.viableNow : (colors[i] === 'amber' ? t.partial : t.outOfOrders)} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const OpportunitiesSlide = () => {
  const t = useTranslations();
  const futureIcons = [BarChart3, Target, TrendingUp, Lightbulb, Truck];
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.slide7Title}</h2>
        <p className="text-lg text-tn-text font-light">{t.slide7Subtitle}</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-green-50 border border-green-100 p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center">
              <CheckCircle size={20} />
            </div>
            <h3 className="text-xl font-bold text-tn-blue">{t.viableNowTitle}</h3>
          </div>
          <ul className="space-y-3">
            {t.viableNowItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 border border-blue-100 p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center">
              <Rocket size={20} />
            </div>
            <h3 className="text-xl font-bold text-tn-blue">{t.v2Title}</h3>
          </div>
          <ul className="space-y-3">
            {t.v2Items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                <Rocket size={16} className="mt-0.5 flex-shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 p-6 rounded-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-amber-500 text-white rounded-lg flex items-center justify-center">
            <Navigation size={20} />
          </div>
          <h3 className="text-xl font-bold text-tn-blue">{t.asGuideTitle}</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {t.asGuideItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white border border-amber-200 rounded-lg px-4 py-2">
              <Navigation size={14} className="text-amber-600" />
              <span className="text-sm text-amber-800">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const DataKnowledgeSlide = () => {
  const t = useTranslations();
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.slide8Title}</h2>
        <p className="text-lg text-tn-text font-light">{t.slide8Subtitle}</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100">
              <ShoppingCart size={24} />
            </div>
            <h3 className="text-xl font-bold text-tn-blue">{t.saleData}</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {t.saleDataItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-tn-text bg-gray-50 px-3 py-2 rounded-lg">
                <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center border border-purple-100">
              <Package size={24} />
            </div>
            <h3 className="text-xl font-bold text-tn-blue">{t.productData}</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {t.productDataItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-tn-text bg-gray-50 px-3 py-2 rounded-lg">
                <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-100 pt-5">
            <h4 className="text-sm font-bold text-tn-blue mb-3">{t.linksTitle}</h4>
            <div className="space-y-2">
              {t.linksItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-tn-text bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
                  <Link2 size={14} className="text-blue-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SummarySlide = () => {
  const t = useTranslations();
  
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.slide9Title}</h2>
        <p className="text-lg text-tn-text font-light">{t.slide9Subtitle}</p>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 p-5 rounded-2xl"
        >
          <div className="text-center mb-4">
            <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-2">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-green-700">{t.v1Label}</h3>
          </div>
          <ul className="space-y-2">
            {t.v1Items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-green-800">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 border border-blue-200 p-5 rounded-2xl"
        >
          <div className="text-center mb-4">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-2">
              <Rocket size={28} />
            </div>
            <h3 className="text-xl font-bold text-blue-700">{t.v2Label}</h3>
          </div>
          <ul className="space-y-2">
            {t.v2Items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-blue-800">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-amber-50 border border-amber-200 p-5 rounded-2xl"
        >
          <div className="text-center mb-4">
            <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-2">
              <Navigation size={28} />
            </div>
            <h3 className="text-xl font-bold text-amber-700">{t.guides}</h3>
          </div>
          <ul className="space-y-2">
            {t.guidesItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-amber-800">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-red-50 border border-red-200 p-5 rounded-2xl"
        >
          <div className="text-center mb-4">
            <div className="w-14 h-14 bg-red-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-2">
              <XCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-red-700">{t.doesNot}</h3>
          </div>
          <ul className="space-y-2">
            {t.doesNotItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-red-800">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-gradient-to-r from-tn-blue to-tn-lightblue text-white p-6 rounded-2xl text-center"
      >
        <h3 className="text-xl font-bold mb-2">{t.finalCta}</h3>
        <p className="text-blue-100 text-sm">{t.finalCtaSub}</p>
      </motion.div>
    </div>
  );
};

// Main presentation with wrapper for language support
export const lumiOrdersPresentation = {
  id: "lumi-orders-capabilities",
  slides: [
    <SlideContainer key="title">
      <PresentationWrapper>
        <TitleSlideContent />
      </PresentationWrapper>
    </SlideContainer>,
    
    <SlideContainer key="action-types">
      <PresentationWrapper>
        <ActionTypesSlide />
      </PresentationWrapper>
    </SlideContainer>,
    
    <SlideContainer key="what-lumi-does">
      <PresentationWrapper>
        <WhatLumiDoesSlide />
      </PresentationWrapper>
    </SlideContainer>,
    
    <SlideContainer key="v2-slide">
      <PresentationWrapper>
        <V2Slide />
      </PresentationWrapper>
    </SlideContainer>,
    
    <SlideContainer key="what-lumi-guides">
      <PresentationWrapper>
        <WhatLumiGuidesSlide />
      </PresentationWrapper>
    </SlideContainer>,
    
    <SlideContainer key="what-lumi-cannot">
      <PresentationWrapper>
        <WhatLumiCannotSlide />
      </PresentationWrapper>
    </SlideContainer>,
    
    <SlideContainer key="user-insights">
      <PresentationWrapper>
        <UserInsightsSlide />
      </PresentationWrapper>
    </SlideContainer>,
    
    <SlideContainer key="opportunities">
      <PresentationWrapper>
        <OpportunitiesSlide />
      </PresentationWrapper>
    </SlideContainer>,
    
    <SlideContainer key="data-knowledge">
      <PresentationWrapper>
        <DataKnowledgeSlide />
      </PresentationWrapper>
    </SlideContainer>,
    
    <SlideContainer key="summary">
      <PresentationWrapper>
        <SummarySlide />
      </PresentationWrapper>
    </SlideContainer>
  ]
};

// Print slides
export const lumiOrdersPrintSlides = lumiOrdersPresentation.slides;
