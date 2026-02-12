import { workflowPresentation, workflowPrintSlides } from './WorkflowPresentation';
import { sprintPlanningPresentation, sprintPlanningPrintSlides } from './SprintPlanningPresentation';
import { novemberReportPresentation, novemberReportPrintSlides } from './NovemberReportPresentation';
import { bulkActionsPresentation, bulkActionsPrintSlides } from './BulkActionsPresentation';
import { lumiOrdersPresentation, lumiOrdersPrintSlides } from './LumiOrdersPresentation';
import { discoveryPresentation, discoveryPrintSlides } from './DiscoveryPresentation';

export const presentations = [
  {
    id: 'lumi-status-noviembre-2025',
    title: 'Lumi: Producto',
    date: 'Noviembre 2025',
    description: 'Roadmap Q4 2025 - Update para Director de Producto',
    component: workflowPresentation,
    printSlides: workflowPrintSlides
  },
  {
    id: 'sprint-planning-dic-2025',
    title: 'Sprint Planning',
    date: 'Dic 1-15, 2025',
    description: 'Sprint Planning para Dev Team - Actions + Assistant',
    component: sprintPlanningPresentation,
    printSlides: sprintPlanningPrintSlides
  },
  {
    id: 'reporte-noviembre-2025',
    title: 'Reporte Noviembre 2025',
    date: 'Noviembre 2025',
    description: 'Reporte mensual de Lumi - Business & Product Report',
    component: novemberReportPresentation,
    printSlides: novemberReportPrintSlides
  },
  {
    id: 'bulk-actions-flow',
    title: 'Fluxo de Ação em Massa',
    date: 'Dezembro 2025',
    description: 'Bulk Actions - Fluxo completo de ações em massa no Lumi',
    component: bulkActionsPresentation,
    printSlides: bulkActionsPrintSlides
  },
  {
    id: 'lumi-orders-capabilities',
    title: 'Lumi em Orders',
    date: 'Fevereiro 2026',
    description: 'Capacidades, limitações e oportunidades do Lumi em Orders',
    component: lumiOrdersPresentation,
    printSlides: lumiOrdersPrintSlides
  },
  {
    id: 'discovery-chat-panel',
    title: 'Discovery & Insights: Novo Painel de Chat',
    date: 'Fevereiro 2026',
    description: 'Discovery, insights de pesquisa com usuários e priorização das 3 frentes estratégicas',
    component: discoveryPresentation,
    printSlides: discoveryPrintSlides
  }
];

export const getPresentation = (id) => {
  return presentations.find(p => p.id === id);
};

// Get print-optimized slides for a presentation
export const getPrintSlides = (presentationIndex) => {
  const presentation = presentations[presentationIndex];
  // Use print-specific slides if available, otherwise fall back to regular slides
  return presentation.printSlides || presentation.component.slides;
};
