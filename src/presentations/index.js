import { workflowPresentation, workflowPrintSlides } from './WorkflowPresentation';

export const presentations = [
  {
    id: 'lumi-status-noviembre-2025',
    title: 'Lumi: Producto',
    date: 'Noviembre 2025',
    description: 'Roadmap Q4 2025 - Update para Director de Producto',
    component: workflowPresentation,
    printSlides: workflowPrintSlides
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
