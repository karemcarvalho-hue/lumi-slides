import React, { useState, createContext, useContext } from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { ProcessFlow } from '../components/ProcessFlow';
import { motion } from 'framer-motion';
import {
  MessageSquare, Users, Search, Tag, Eye, CheckCircle,
  AlertCircle, ArrowRight, Layers, Settings, Rocket,
  TrendingUp, Filter, Star, Zap, Heart, BarChart3,
  MessageCircle, Smile, UserCheck, FileText, PenLine,
  Send, Clock, LayoutGrid, Sparkles, Target, Quote,
  ChevronRight, Monitor, Smartphone, Globe, Hash,
  Bot, RefreshCw, ShoppingBag, Bell, Megaphone
} from 'lucide-react';

// ============================================
// LANGUAGE SYSTEM
// ============================================
const LanguageContext = createContext('es-AR');

const translations = {
  'pt-BR': {
    // Slide 1 - Title
    title: 'Discovery & Insights',
    subtitle: 'Novo Painel de Chat',
    breadcrumb: ['Pesquisa com Usuarios', 'Priorizacao', 'Roadmap'],
    badge1: 'Multicanal',
    badge2: 'Melhoria do Painel',
    badge3: 'Voz do Lojista',

    // Slide 2 - Agenda
    agendaTitle: 'Agenda',
    agendaSubtitle: 'O que vamos cobrir nesta apresentacao',
    agendaItems: [
      { num: '01', title: 'Processo de Discovery', desc: 'Como conduzimos a pesquisa e quem participou' },
      { num: '02', title: 'Vozes dos Usuarios', desc: 'O que ouvimos dos lojistas nas entrevistas' },
      { num: '03', title: 'Principais Insights', desc: 'Destaques positivos e dores identificadas' },
      { num: '04', title: 'Melhorias Prioritarias', desc: 'Top funcionalidades demandadas com evidencias' },
      { num: '05', title: '3 Frentes Estrategicas', desc: 'Multicanal, Painel e Funcionalidades do Lojista' },
      { num: '06', title: 'Roadmap & Proximos Passos', desc: 'Etapas de entrega e priorizacao consolidada' },
    ],

    // Slide 3 - Discovery Process
    processTitle: 'Processo de Discovery',
    processSubtitle: 'Como chegamos aos insights que guiam a priorizacao',
    processSteps: [
      { label: 'Pesquisa', description: 'Entrevistas com lojistas reais de diferentes perfis' },
      { label: 'Observacao', description: 'Analise de uso do painel atual e dores operacionais' },
      { label: 'Insights', description: 'Consolidacao de padroes e necessidades recorrentes' },
      { label: 'Priorizacao', description: 'Classificacao por impacto, esforco e estrategia' },
      { label: 'Roadmap', description: 'Definicao de etapas e sequencia de entregas' },
    ],
    processNote: '5 lojistas entrevistados: Ewol, Alice Salazar, Paloma Clothes, Empire Padel e NetCafes + Feedback direto de operador do bot',
    processLink: 'https://notes.granola.ai/t/d7326df3-46c6-4530-ba97-747336c4308a',
    processLinkLabel: 'Ver transcricoes completas',

    // Slide 4 - Users
    usersTitle: 'Quem Ouvimos',
    usersSubtitle: 'Perfis diversos que representam nossos lojistas',
    users: [
      { name: 'Ewol', role: 'Gaston', focus: 'Suporte tecnico, workflows automatizados', highlight: 'Tags para leads frio/morno/quente' },
      { name: 'Alice Salazar', role: 'Carol', focus: 'Coordenacao de equipe, gestao de estoque', highlight: '"Eu tenho etiqueta pra tudo"' },
      { name: 'Paloma Clothes', role: 'Equipe', focus: 'Atendimento multicanal de alta volumetria', highlight: '266 msgs nao lidas sem sync' },
      { name: 'Empire Padel', role: 'Equipe', focus: 'Varejo e atacado, listas de preco', highlight: 'Nao consegue enviar Excel via API' },
      { name: 'NetCafes', role: 'Julio', focus: 'Gestao de status e organizacao de atendimentos', highlight: 'Separar: nao lidos, em andamento, concluidos' },
    ],
    sourceInterview: 'Entrevista',
    sourceFeedback: 'Feedback Bot',
    highlightLabel: 'Destaque:',

    // Slide 5 - Positives
    positiveTitle: 'O que Funcionou Bem',
    positiveSubtitle: 'Destaques positivos das entrevistas',
    layoutTitle: 'Layout Intuitivo',
    layoutTag: 'Destaque principal',
    layoutQuote: '"Pessoa de 20 ou 50 anos vai conseguir se entender"',
    layoutAuthor: '— Alice Salazar',
    layoutDesc: 'Interface acessivel para diferentes perfis de usuarios, validando a abordagem de design universal.',
    filterTitle: 'Filtros por Canal',
    filterTag: 'Muito bem recebido',
    filterQuote: '"Super positivo" poder separar conversas do Instagram, WhatsApp e Facebook',
    filterAuthor: '— Alice Salazar',
    filterDesc: 'Separar conversas por canal e percebido como ganho direto de produtividade na gestao multicanal.',
    positiveFooter: 'Estamos no caminho certo: a base de UX do novo painel foi validada pelos proprios usuarios',
    botPositiveTitle: 'Bot Util e Facil de Configurar',
    botPositiveTag: 'Feedback Bot',
    botPositiveQuote: '"O bot para responder consultas por WhatsApp e uma ferramenta muito util e simples de usar e configurar"',
    botPositiveAuthor: '— Operador',
    botPositiveDesc: 'Biblioteca de respostas, etiquetas e leitura de imagens foram destacadas como melhores atualizacoes.',

    // Slide 6 - Pain Points
    painTitle: 'Principais Dores',
    painSubtitle: 'O que mais incomodou ou pareceu confuso',
    pain1Title: 'Sincronizacao Lido/Nao Lido',
    pain1Tag: 'CRITICO',
    pain1Quote1: '"O Chat Nube nao sincroniza adequadamente o status de lido/nao lido com o WhatsApp Web - mostra 266 mensagens nao lidas na intervencao humana"',
    pain1Author1: '— Paloma Clothes (traduzido do espanhol)',
    pain1Quote2: '"O controle de nao lido faz falta no gerenciamento das mensagens"',
    pain1Author2: '— Alice Salazar',
    pain2Title: 'Emojis e Stickers',
    pain2Tag: 'ALTO IMPACTO',
    pain2Quote1: '"Os emojis" como prioridade #1',
    pain2Author1: '— Paloma Clothes (traduzido do espanhol)',
    pain2Quote2: '"Emojizim ja quebra alguma coisa, cria vinculo" + figurinhas personalizadas',
    pain2Author2: '— Alice Salazar',
    pain3Title: 'Falta de Etiquetas/Tags',
    pain3Tag: '3 DE 4 CLIENTES',
    pain3Quote1: '"Eu tenho etiqueta pra tudo" - coordenacao de estoque, entregas, follow-ups',
    pain3Author1: '— Alice Salazar',
    pain3Quote2: '"Tags para classificar leads (frio/morno/quente) e trigger automatico para workflows"',
    pain3Author2: '— Ewol (traduzido do espanhol)',
    pain4Title: 'Atribuicao de Conversas',
    pain4Tag: 'ESSENCIAL',
    pain4Quote1: '"Gaston atribui suporte tecnico para Agustin" - essencial para coordenacao de equipe',
    pain4Author1: '— Ewol (traduzido do espanhol)',
    pain4Quote2: '"Precisamos rastrear quem atendeu cada conversa"',
    pain4Author2: '— Empire Padel (traduzido do espanhol)',

    // Slide 7 - Deep Dive Unread
    deepDiveTag: 'Deep Dive',
    deepDiveTitle: 'O Recurso "Nao Lido"',
    deepDiveSubtitle: 'Nao e nice-to-have, e necessidade operacional critica',
    deepDiveReasons: [
      { title: 'Organizacao Operacional', desc: 'Sistema de controle de fluxo para evitar que mensagens se percam, especialmente com multiplos atendentes' },
      { title: 'Coordenacao de Equipe', desc: 'Fundamental para handoff entre atendentes - marcar conversas que precisam ser retomadas por outro membro' },
      { title: 'Gestao de Prioridades', desc: 'Flag visual para identificar o que ainda precisa de atencao, separando do que ja foi resolvido' },
      { title: 'Sincronizacao entre Ferramentas', desc: 'Falta de sync gera confusao operacional, duplicacao ou perda de atendimentos' },
    ],
    deepDiveVoices: [
      { name: 'NetCafes (Julio)', quote: '"Classificacao por status - Separar: nao lidos, em andamento, concluidos - Evitar lista unica confusa"', note: 'Prioridade #1 identificada', source: 'Entrevista' },
      { name: 'Alice Salazar (Carol)', quote: '"Camila, essa aqui precisa de atencao, eu nao consegui finalizar"', note: 'Essencial para coordenacao entre Carol e assistente Camila', source: 'Entrevista' },
      { name: 'Paloma Clothes', quote: '"Nao tem como marcar conversas como nao lidas para acompanhar depois"', note: '266 mensagens nao lidas sem sincronizacao', source: 'Entrevista' },
    ],

    // Slide 8 - Top Priorities
    topTitle: 'Melhorias Prioritarias',
    topSubtitle: 'As 6 maiores demandas identificadas na pesquisa',
    topItems: [
      { title: 'Etiquetas/Tags', evidence: '3 de 4 clientes', quote: '"Eu tenho etiqueta pra tudo"', who: 'Alice Salazar', priority: 'P0', source: 'Entrevista' },
      { title: 'Sync Lido/Nao Lido', evidence: 'Problema critico', quote: '"266 mensagens nao lidas sem sincronizacao"', who: 'Paloma Clothes', priority: 'P0', source: 'Entrevista' },
      { title: 'Emojis e Stickers', evidence: 'Prioridade #1 usuario', quote: '"Cria vinculo com o cliente"', who: 'Alice + Feedback Bot', priority: 'P1', source: 'Ambos' },
      { title: 'Atribuicao de Conversas', evidence: 'Essencial p/ equipes', quote: '"Gaston delega para Agustin"', who: 'Ewol', priority: 'P0', source: 'Entrevista' },
      { title: 'Compartilhar Arquivos', evidence: 'Limitacao operacional', quote: '"Nao consegue enviar arquivos Excel via API"', who: 'Empire + Feedback Bot', priority: 'P1', source: 'Ambos' },
      { title: 'Editar Nomes de Contato', evidence: 'Organizacao visual', quote: '"Clientes aparecem como uma bolinha"', who: 'Empire Padel', priority: 'P2', source: 'Entrevista' },
    ],

    // Slide 9 - 3 Fronts
    frontsTitle: '3 Frentes Estrategicas',
    frontsSubtitle: 'Como organizamos a evolucao do painel de chat',
    front1Title: 'Multicanal',
    front1Desc: 'Suporte a multiplos canais de comunicacao com consistencia de experiencia e escalabilidade.',
    front1Items: ['Avatar multicanal', 'Conexao Instagram/Messenger', 'Filtros por canal', 'Fundo padronizado'],
    front1Count: '5 componentes',
    front2Title: 'Melhoria do Painel',
    front2Desc: 'Melhorias estruturais, visuais e de usabilidade que aumentam eficiencia operacional.',
    front2Items: ['Input de mensagem (Nimbus)', 'Message Bubble novo', 'Tabs Lido/Nao Lido', 'Cenario 24h'],
    front2Count: '10 componentes',
    front3Title: 'Voz do Lojista',
    front3Desc: 'Funcionalidades identificadas em entrevistas que facilitam gestao e atendimento.',
    front3Items: ['Etiquetas/Tags', 'Atribuicao de conversas', 'Emojis e stickers', 'Iniciar conversa'],
    front3Count: '10 componentes',

    // Slide 10 - Front 1 Detail
    f1Title: 'Frente 1: Multicanal',
    f1Subtitle: 'Base para operacao em multiplos canais',
    f1Stage: 'Etapa 1',
    f1Items: [
      { name: 'Avatar Multicanal', desc: 'Avatar com identificacao do canal (Instagram, WhatsApp, Messenger)', origin: 'DS + Figma', priority: 'P0' },
      { name: 'Conexao Multicanal', desc: 'Permitir conectar Instagram e Messenger no onboarding e configuracoes', origin: 'Estrategico', priority: 'P0' },
      { name: 'Troca do Fundo do Painel', desc: 'Padronizacao visual para fundo branco - garante consistencia entre canais', origin: 'Figma', priority: 'P0' },
      { name: 'Filtros de Conversas', desc: 'Filtros por etiqueta, canal, carrinho e pagamento', origin: 'Figma + Estrategico', priority: 'P0' },
      { name: 'Edicao de Nomes de Contato', desc: 'Editar nomes de contatos na lista - suporte multicanal', origin: 'Pesquisa', priority: 'P2' },
    ],
    f1Footer: 'Objetivo: Habilitar a operacao multicanal como fundacao para todas as demais funcionalidades',

    // Slide 11 - Front 2 Detail
    f2Title: 'Frente 2: Melhoria do Painel',
    f2Subtitle: 'Evolucao estrutural e de experiencia',
    f2Stage: 'Etapa 2',
    f2Items: [
      { name: 'Tabs Todos/Nao Lido', desc: 'Substituicao por segment control', priority: 'P0', origin: 'Figma + Pesquisa' },
      { name: 'Cenario 24h', desc: 'Bloqueio de envio e sugestao de templates', priority: 'P0', origin: 'Estrategico' },
      { name: 'Input de Mensagem', desc: 'Nova variante baseada no Nimbus', priority: 'P1', origin: 'DS + Figma' },
      { name: 'Message Bubble', desc: 'Novo componente de visualizacao de mensagens', priority: 'P1', origin: 'Figma' },
      { name: 'Lista de Mensagens', desc: 'Novo componente para exibicao e estados', priority: 'P1', origin: 'Figma' },
      { name: 'Recolocacao Automacao', desc: 'Status de automacao no header', priority: 'P1', origin: 'Figma' },
      { name: 'Acoes Message Bubble IA', desc: 'Feedback, copiar texto e copiar codigo', priority: 'P2', origin: 'Figma' },
      { name: 'Otimizacao da Busca', desc: 'Busca acionada por botao (quick win)', priority: 'P2', origin: 'Figma' },
      { name: 'Alteracao Header', desc: 'Simplificacao: Nuvent Chat para Chat', priority: 'P2', origin: 'Figma' },
    ],
    f2Footer: 'Foco em padronizacao com Design System, eficiencia operacional e conformidade com canais',

    // Slide 12 - Front 3 Detail
    f3Title: 'Frente 3: Voz do Lojista',
    f3Subtitle: 'Funcionalidades baseadas em pesquisa com usuarios',
    f3Stage: 'Etapa 3',
    f3Items: [
      { name: 'Etiquetas/Tags Personalizaveis', desc: 'Criacao e gestao de tags proprias', priority: 'P0', evidence: '3 de 4 clientes' },
      { name: 'Sync Lido/Nao Lido', desc: 'Sincronizacao de status entre plataformas', priority: 'P0', evidence: 'Critico operacional' },
      { name: 'Controle Manual Nao Lido', desc: 'Marcar conversas como nao lidas', priority: 'P0', evidence: 'Alta demanda' },
      { name: 'Atribuicao de Conversas', desc: 'Delegar e identificar responsaveis', priority: 'P0', evidence: 'Essencial equipes' },
      { name: 'Emojis e Stickers', desc: 'Envio de emojis e figurinhas', priority: 'P1', evidence: 'Prioridade #1 usuario' },
      { name: 'Compartilhamento Arquivos', desc: 'Documentos, imagens, Excel', priority: 'P1', evidence: 'Limitacao critica' },
      { name: 'Iniciar Conversa pelo Painel', desc: 'Lojista inicia sem msg do cliente', priority: 'P2', evidence: 'Demanda operacional' },
      { name: 'Atalhos Respostas Rapidas', desc: 'Acionamento rapido de respostas salvas', priority: 'P2', evidence: 'Produtividade' },
      { name: 'Horario de Funcionamento IA', desc: 'Horarios automaticos para ativacao', priority: 'P2', evidence: 'Gestao operacional' },
      { name: 'Estatisticas do Chat', desc: 'Metricas e indicadores de atendimento', priority: 'P2', evidence: 'Funcionalidade futura' },
    ],
    f3Footer: 'Todas as funcionalidades sustentadas por evidencias diretas de pesquisa com usuarios reais',

    // Slide 13 - Feedback Bot
    fbTitle: 'Feedback Direto: Operador do Bot',
    fbSubtitle: 'Insights adicionais de quem opera o chatbot diariamente',
    fbSourceTag: 'Feedback Bot',
    fbValidated: 'Validado pela Pesquisa',
    fbNew: 'Insight Novo',
    fbValidatedItems: [
      { title: 'Emojis e Imagens', desc: 'Enviar emojis, screenshots e figurinhas para responder pelo painel', who: 'Operador Bot' },
      { title: 'Respostas Rapidas', desc: 'Atalhos para responder consultas de atencao humana sem ir ao WhatsApp Web', who: 'Operador Bot' },
      { title: 'Compartilhar Arquivos', desc: 'Adjuntar capturas de tela e imagens diretamente no painel', who: 'Operador Bot' },
    ],
    fbNewItems: [
      { title: 'Estatisticas Mais Ricas', desc: 'Grafico do que mais perguntam, vendas fechadas pelo bot, produtos mais pedidos', icon: 'BarChart3' },
      { title: 'Notificacao de Restock', desc: 'Avisar clientes quando produto volta ao estoque - pedido muito frequente', icon: 'Bell' },
      { title: 'Difusao de Marketing', desc: 'Enviar promocoes para quem escreveu no ultimo mes ou assinou newsletter', icon: 'Megaphone' },
      { title: 'Simplificar Busca de Pedido', desc: 'Aceitar so numero do pedido OU email (nao exigir ambos)', icon: 'Search' },
      { title: 'Token Expira Rapido', desc: 'Renovacao frequente atrasa atendimento em eventos de alto volume', icon: 'RefreshCw' },
      { title: 'Informacoes Incorretas', desc: 'Bot as vezes da info errada sobre localizacao de lojas e conversao de tamanhos', icon: 'AlertCircle' },
    ],
    fbFooter: 'Feedback valida demandas da pesquisa e traz novas oportunidades de melhoria',

    // Slide 14 - Priority Matrix
    matrixTitle: 'Priorizacao Consolidada',
    matrixSubtitle: 'Visao por nivel de prioridade',
    p0Label: 'Alta',
    p0Desc: 'Essencial / Bloqueante',
    p1Label: 'Media',
    p1Desc: 'Importante / Nao bloqueante',
    p2Label: 'Baixa',
    p2Desc: 'Incremental / Complementar',
    matrixP0: [
      { name: 'Avatar multicanal', cat: 'MC' }, { name: 'Conexao multicanal', cat: 'MC' },
      { name: 'Troca fundo painel', cat: 'MC' }, { name: 'Filtros de conversas', cat: 'MC' },
      { name: 'Tabs Lido/Nao Lido', cat: 'PA' }, { name: 'Cenario 24h', cat: 'PA' },
      { name: 'Etiquetas/Tags', cat: 'LJ' }, { name: 'Sync lido/nao lido', cat: 'LJ' },
      { name: 'Controle nao lido', cat: 'LJ' }, { name: 'Atribuicao conversas', cat: 'LJ' },
    ],
    matrixP1: [
      { name: 'Input de mensagem', cat: 'PA' }, { name: 'Message Bubble', cat: 'PA' },
      { name: 'Lista de mensagens', cat: 'PA' }, { name: 'Recolocacao automacao', cat: 'LJ' },
      { name: 'Emojis e stickers', cat: 'LJ' }, { name: 'Compartilhar arquivos', cat: 'LJ' },
    ],
    matrixP2: [
      { name: 'Edicao nome contato', cat: 'MC' }, { name: 'Acoes Bubble IA', cat: 'PA' },
      { name: 'Otimizacao busca', cat: 'PA' }, { name: 'Alteracao header', cat: 'PA' },
      { name: 'Iniciar conversa', cat: 'LJ' }, { name: 'Respostas rapidas', cat: 'LJ' },
      { name: 'Horario IA', cat: 'LJ' }, { name: 'Estatisticas chat', cat: 'LJ' },
    ],
    legendMC: 'Multicanal',
    legendPA: 'Painel',
    legendLJ: 'Lojista',
    items: 'itens',

    // Slide 15 - Roadmap
    roadmapTitle: 'Roadmap de Entregas',
    roadmapSubtitle: 'Sequencia de etapas para evolucao do painel',
    stage1Title: 'Base Multicanal',
    stage1Tag: 'Fundacao',
    stage1Items: ['Avatar multicanal', 'Conexao multicanal', 'Troca do fundo do painel', 'Novos filtros de conversa', 'Edicao de nomes de contato'],
    stage1Footer: 'Prioridade maxima',
    stage2Title: 'Evolucao do Painel',
    stage2Tag: 'Estrutura',
    stage2Items: ['Input de envio de mensagem', 'Message Bubble', 'Lista de mensagens', 'Tabs Lido/Nao Lido', 'Cenario 24h sem envio', 'Recolocacao info automacao', 'Otimizacao busca + header'],
    stage2Footer: 'Design System',
    stage3Title: 'Voz do Lojista',
    stage3Tag: 'Diferenciacao',
    stage3Items: ['Sync lido/nao lido', 'Controle manual nao lido', 'Etiquetas/tags', 'Emojis e stickers', 'Atribuicao de conversas', 'Compartilhamento arquivos', 'Iniciar conversa + atalhos'],
    stage3Footer: 'Pesquisa com usuarios',

    // Slide 16 - Risks
    risksTitle: 'Riscos e Dependencias',
    risksSubtitle: 'Pontos de atencao para planejamento',
    risksLabel: 'Riscos Identificados',
    risksItems: [
      { title: 'Dependencias de backend', desc: 'Sync lido/nao lido e integracoes multicanal dependem de trabalho de backend', severity: 'alto' },
      { title: 'Integracoes externas', desc: 'Conexao com Instagram/Messenger depende de APIs e aprovacoes externas', severity: 'medio' },
      { title: 'Escopo amplo', desc: '24 funcionalidades mapeadas que podem gerar pressao de entrega', severity: 'medio' },
    ],
    // Slide 17 - Next Steps
    nextTitle: 'Proximos Passos',
    nextSubtitle: 'Acoes imediatas para seguir em frente',
    nextSteps: [
      { title: 'Validacao com Produto e Engenharia', desc: 'Alinhar priorizacoes e viabilidade tecnica' },
      { title: 'Definicao de Milestones', desc: 'Sequencia de entregas por etapa' },
      { title: 'Detalhamento de Design', desc: 'Foco em itens P0' },
      { title: 'Planejamento de Roadmap', desc: 'Cronograma e alocacao de recursos' },
    ],
    nextCta: 'O discovery nos deu a direcao. Agora vamos construir juntos.',
    nextCtaSub: '24 funcionalidades mapeadas | 3 frentes estrategicas | Evidencias reais de usuarios',
  },

  'es-AR': {
    // Slide 1 - Title
    title: 'Discovery & Insights',
    subtitle: 'Nuevo Panel de Chat',
    breadcrumb: ['Investigacion con Usuarios', 'Priorizacion', 'Roadmap'],
    badge1: 'Multicanal',
    badge2: 'Mejora del Panel',
    badge3: 'Voz del Comerciante',

    // Slide 2 - Agenda
    agendaTitle: 'Agenda',
    agendaSubtitle: 'Lo que vamos a cubrir en esta presentacion',
    agendaItems: [
      { num: '01', title: 'Proceso de Discovery', desc: 'Como realizamos la investigacion y quienes participaron' },
      { num: '02', title: 'Voces de los Usuarios', desc: 'Lo que escuchamos de los comerciantes en las entrevistas' },
      { num: '03', title: 'Principales Insights', desc: 'Puntos positivos y dolores identificados' },
      { num: '04', title: 'Mejoras Prioritarias', desc: 'Top funcionalidades demandadas con evidencias' },
      { num: '05', title: '3 Frentes Estrategicos', desc: 'Multicanal, Panel y Funcionalidades del Comerciante' },
      { num: '06', title: 'Roadmap & Proximos Pasos', desc: 'Etapas de entrega y priorizacion consolidada' },
    ],

    // Slide 3 - Discovery Process
    processTitle: 'Proceso de Discovery',
    processSubtitle: 'Como llegamos a los insights que guian la priorizacion',
    processSteps: [
      { label: 'Investigacion', description: 'Entrevistas con comerciantes reales de diferentes perfiles' },
      { label: 'Observacion', description: 'Analisis del uso del panel actual y dolores operativos' },
      { label: 'Insights', description: 'Consolidacion de patrones y necesidades recurrentes' },
      { label: 'Priorizacion', description: 'Clasificacion por impacto, esfuerzo y estrategia' },
      { label: 'Roadmap', description: 'Definicion de etapas y secuencia de entregas' },
    ],
    processNote: '5 comerciantes entrevistados: Ewol, Alice Salazar, Paloma Clothes, Empire Padel y NetCafes + Feedback directo de operador del bot',
    processLink: 'https://notes.granola.ai/t/d7326df3-46c6-4530-ba97-747336c4308a',
    processLinkLabel: 'Ver transcripciones completas',

    // Slide 4 - Users
    usersTitle: 'A Quienes Escuchamos',
    usersSubtitle: 'Perfiles diversos que representan a nuestros comerciantes',
    users: [
      { name: 'Ewol', role: 'Gaston', focus: 'Soporte tecnico, workflows automatizados', highlight: 'Tags para leads frio/tibio/caliente' },
      { name: 'Alice Salazar', role: 'Carol', focus: 'Coordinacion de equipo, gestion de stock', highlight: '"Tengo etiqueta para todo"' },
      { name: 'Paloma Clothes', role: 'Equipo', focus: 'Atencion multicanal de alto volumen', highlight: '266 msgs no leidos sin sync' },
      { name: 'Empire Padel', role: 'Equipo', focus: 'Mayorista y minorista, listas de precios', highlight: 'No puede enviar Excel via API' },
      { name: 'NetCafes', role: 'Julio', focus: 'Gestion de estados y organizacion de atenciones', highlight: 'Separar: no leidos, en curso, concluidos' },
    ],
    sourceInterview: 'Entrevista',
    sourceFeedback: 'Feedback Bot',
    highlightLabel: 'Destacado:',

    // Slide 5 - Positives
    positiveTitle: 'Lo que Funciono Bien',
    positiveSubtitle: 'Puntos positivos de las entrevistas',
    layoutTitle: 'Layout Intuitivo',
    layoutTag: 'Punto principal',
    layoutQuote: '"Una persona de 20 o 50 anos va a poder entenderlo"',
    layoutAuthor: '— Alice Salazar',
    layoutDesc: 'Interfaz accesible para diferentes perfiles de usuarios, validando el enfoque de diseno universal.',
    filterTitle: 'Filtros por Canal',
    filterTag: 'Muy bien recibido',
    filterQuote: '"Super positivo" poder separar conversaciones de Instagram, WhatsApp y Facebook',
    filterAuthor: '— Alice Salazar',
    filterDesc: 'Separar conversaciones por canal es percibido como ganancia directa de productividad en la gestion multicanal.',
    positiveFooter: 'Estamos en el camino correcto: la base de UX del nuevo panel fue validada por los propios usuarios',
    botPositiveTitle: 'Bot Util y Facil de Configurar',
    botPositiveTag: 'Feedback Bot',
    botPositiveQuote: '"El bot para responder consultas por WhatsApp es una herramienta muy util y sencilla de usar y configurar"',
    botPositiveAuthor: '— Operador',
    botPositiveDesc: 'La biblioteca de respuestas, etiquetas y lectura de imagenes fueron destacadas como mejores actualizaciones.',

    // Slide 6 - Pain Points
    painTitle: 'Principales Dolores',
    painSubtitle: 'Lo que mas molesto o parecio confuso',
    pain1Title: 'Sincronizacion Leido/No Leido',
    pain1Tag: 'CRITICO',
    pain1Quote1: '"El Chat Nube no sincroniza adecuadamente el estado de leido/no leido con WhatsApp Web - muestra 266 mensajes no leidos en la intervencion humana"',
    pain1Author1: '— Paloma Clothes',
    pain1Quote2: '"El control de no leido hace falta en la gestion de los mensajes"',
    pain1Author2: '— Alice Salazar',
    pain2Title: 'Emojis y Stickers',
    pain2Tag: 'ALTO IMPACTO',
    pain2Quote1: '"Los emojis" como prioridad #1',
    pain2Author1: '— Paloma Clothes',
    pain2Quote2: '"Un emojicito ya rompe algo, crea vinculo" + figuritas personalizadas',
    pain2Author2: '— Alice Salazar',
    pain3Title: 'Falta de Etiquetas/Tags',
    pain3Tag: '3 DE 4 CLIENTES',
    pain3Quote1: '"Tengo etiqueta para todo" - coordinacion de stock, entregas, follow-ups',
    pain3Author1: '— Alice Salazar',
    pain3Quote2: 'Tags para clasificar leads (frio/tibio/caliente) y trigger automatico',
    pain3Author2: '— Ewol',
    pain4Title: 'Asignacion de Conversaciones',
    pain4Tag: 'ESENCIAL',
    pain4Quote1: 'Gaston asigna soporte tecnico a Agustin - esencial para coordinacion',
    pain4Author1: '— Ewol',
    pain4Quote2: 'Necesidad de rastrear quien atendio cada conversacion',
    pain4Author2: '— Empire Padel',

    // Slide 7 - Deep Dive Unread
    deepDiveTag: 'Deep Dive',
    deepDiveTitle: 'El Recurso "No Leido"',
    deepDiveSubtitle: 'No es nice-to-have, es una necesidad operativa critica',
    deepDiveReasons: [
      { title: 'Organizacion Operativa', desc: 'Sistema de control de flujo para evitar que los mensajes se pierdan, especialmente con multiples agentes' },
      { title: 'Coordinacion de Equipo', desc: 'Fundamental para handoff entre agentes - marcar conversaciones que necesitan ser retomadas por otro miembro' },
      { title: 'Gestion de Prioridades', desc: 'Flag visual para identificar lo que aun necesita atencion, separando lo que ya fue resuelto' },
      { title: 'Sincronizacion entre Herramientas', desc: 'La falta de sync genera confusion operativa, duplicacion o perdida de atenciones' },
    ],
    deepDiveVoices: [
      { name: 'NetCafes (Julio)', quote: '"Clasificacion por estado - Separar: no leidos, en curso, concluidos - Evitar lista unica confusa"', note: 'Prioridad #1 identificada', source: 'Entrevista' },
      { name: 'Alice Salazar (Carol)', quote: '"Camila, esta necesita atencion, no pude finalizarla"', note: 'Esencial para coordinacion entre Carol y asistente Camila', source: 'Entrevista' },
      { name: 'Paloma Clothes', quote: '"No se puede marcar conversaciones como no leidas para hacer seguimiento despues"', note: '266 mensajes no leidos sin sincronizacion', source: 'Entrevista' },
    ],

    // Slide 8 - Top Priorities
    topTitle: 'Mejoras Prioritarias',
    topSubtitle: 'Las 6 mayores demandas identificadas en la investigacion',
    topItems: [
      { title: 'Etiquetas/Tags', evidence: '3 de 4 clientes', quote: '"Tengo etiqueta para todo"', who: 'Alice Salazar', priority: 'P0', source: 'Entrevista' },
      { title: 'Sync Leido/No Leido', evidence: 'Problema critico', quote: '"266 mensajes no leidos sin sincronizacion"', who: 'Paloma Clothes', priority: 'P0', source: 'Entrevista' },
      { title: 'Emojis y Stickers', evidence: 'Prioridad #1 usuario', quote: '"Crea vinculo con el cliente"', who: 'Alice + Feedback Bot', priority: 'P1', source: 'Ambos' },
      { title: 'Asignacion de Conversaciones', evidence: 'Esencial p/ equipos', quote: '"Gaston asigna a Agustin"', who: 'Ewol', priority: 'P0', source: 'Entrevista' },
      { title: 'Compartir Archivos', evidence: 'Limitacion operativa', quote: '"No puede enviar Excel"', who: 'Empire + Feedback Bot', priority: 'P1', source: 'Ambos' },
      { title: 'Editar Nombres de Contacto', evidence: 'Organizacion visual', quote: '"Clientes como una pelotita"', who: 'Empire Padel', priority: 'P2', source: 'Entrevista' },
    ],

    // Slide 9 - 3 Fronts
    frontsTitle: '3 Frentes Estrategicos',
    frontsSubtitle: 'Como organizamos la evolucion del panel de chat',
    front1Title: 'Multicanal',
    front1Desc: 'Soporte a multiples canales de comunicacion con consistencia de experiencia y escalabilidad.',
    front1Items: ['Avatar multicanal', 'Conexion Instagram/Messenger', 'Filtros por canal', 'Fondo estandarizado'],
    front1Count: '5 componentes',
    front2Title: 'Mejora del Panel',
    front2Desc: 'Mejoras estructurales, visuales y de usabilidad que aumentan la eficiencia operativa.',
    front2Items: ['Input de mensaje (Nimbus)', 'Message Bubble nuevo', 'Tabs Leido/No Leido', 'Escenario 24h'],
    front2Count: '10 componentes',
    front3Title: 'Voz del Comerciante',
    front3Desc: 'Funcionalidades identificadas en entrevistas que facilitan gestion y atencion.',
    front3Items: ['Etiquetas/Tags', 'Asignacion de conversaciones', 'Emojis y stickers', 'Iniciar conversacion'],
    front3Count: '10 componentes',

    // Slide 10 - Front 1 Detail
    f1Title: 'Frente 1: Multicanal',
    f1Subtitle: 'Base para operacion en multiples canales',
    f1Stage: 'Etapa 1',
    f1Items: [
      { name: 'Avatar Multicanal', desc: 'Avatar con identificacion del canal (Instagram, WhatsApp, Messenger)', origin: 'DS + Figma', priority: 'P0' },
      { name: 'Conexion Multicanal', desc: 'Permitir conectar Instagram y Messenger en onboarding y configuraciones', origin: 'Estrategico', priority: 'P0' },
      { name: 'Cambio de Fondo del Panel', desc: 'Estandarizacion visual con fondo blanco - garantiza consistencia entre canales', origin: 'Figma', priority: 'P0' },
      { name: 'Filtros de Conversaciones', desc: 'Filtros por etiqueta, canal, carrito y pago', origin: 'Figma + Estrategico', priority: 'P0' },
      { name: 'Edicion de Nombres de Contacto', desc: 'Editar nombres de contactos en la lista - soporte multicanal', origin: 'Investigacion', priority: 'P2' },
    ],
    f1Footer: 'Objetivo: Habilitar la operacion multicanal como base para todas las demas funcionalidades',

    // Slide 11 - Front 2 Detail
    f2Title: 'Frente 2: Mejora del Panel',
    f2Subtitle: 'Evolucion estructural y de experiencia',
    f2Stage: 'Etapa 2',
    f2Items: [
      { name: 'Tabs Todos/No Leido', desc: 'Sustitucion por segment control', priority: 'P0', origin: 'Figma + Investigacion' },
      { name: 'Escenario 24h', desc: 'Bloqueo de envio y sugerencia de templates', priority: 'P0', origin: 'Estrategico' },
      { name: 'Input de Mensaje', desc: 'Nueva variante basada en Nimbus', priority: 'P1', origin: 'DS + Figma' },
      { name: 'Message Bubble', desc: 'Nuevo componente de visualizacion de mensajes', priority: 'P1', origin: 'Figma' },
      { name: 'Lista de Mensajes', desc: 'Nuevo componente para exhibicion y estados', priority: 'P1', origin: 'Figma' },
      { name: 'Reubicacion Automatizacion', desc: 'Estado de automatizacion en el header', priority: 'P1', origin: 'Figma' },
      { name: 'Acciones Message Bubble IA', desc: 'Feedback, copiar texto y copiar codigo', priority: 'P2', origin: 'Figma' },
      { name: 'Optimizacion de Busqueda', desc: 'Busqueda por boton (quick win)', priority: 'P2', origin: 'Figma' },
      { name: 'Cambio de Header', desc: 'Simplificacion: Nuvent Chat a Chat', priority: 'P2', origin: 'Figma' },
    ],
    f2Footer: 'Foco en estandarizacion con Design System, eficiencia operativa y conformidad con canales',

    // Slide 12 - Front 3 Detail
    f3Title: 'Frente 3: Voz del Comerciante',
    f3Subtitle: 'Funcionalidades basadas en investigacion con usuarios',
    f3Stage: 'Etapa 3',
    f3Items: [
      { name: 'Etiquetas/Tags Personalizables', desc: 'Creacion y gestion de tags propias', priority: 'P0', evidence: '3 de 4 clientes' },
      { name: 'Sync Leido/No Leido', desc: 'Sincronizacion de estado entre plataformas', priority: 'P0', evidence: 'Critico operativo' },
      { name: 'Control Manual No Leido', desc: 'Marcar conversaciones como no leidas', priority: 'P0', evidence: 'Alta demanda' },
      { name: 'Asignacion de Conversaciones', desc: 'Delegar e identificar responsables', priority: 'P0', evidence: 'Esencial equipos' },
      { name: 'Emojis y Stickers', desc: 'Envio de emojis y figuritas', priority: 'P1', evidence: 'Prioridad #1 usuario' },
      { name: 'Compartir Archivos', desc: 'Documentos, imagenes, Excel', priority: 'P1', evidence: 'Limitacion critica' },
      { name: 'Iniciar Conversacion por Panel', desc: 'Comerciante inicia sin msg del cliente', priority: 'P2', evidence: 'Demanda operativa' },
      { name: 'Atajos Respuestas Rapidas', desc: 'Activacion rapida de respuestas guardadas', priority: 'P2', evidence: 'Productividad' },
      { name: 'Horario de Funcionamiento IA', desc: 'Horarios automaticos para activacion', priority: 'P2', evidence: 'Gestion operativa' },
      { name: 'Estadisticas del Chat', desc: 'Metricas e indicadores de atencion', priority: 'P2', evidence: 'Funcionalidad futura' },
    ],
    f3Footer: 'Todas las funcionalidades sustentadas por evidencias directas de investigacion con usuarios reales',

    // Slide 13 - Feedback Bot
    fbTitle: 'Feedback Directo: Operador del Bot',
    fbSubtitle: 'Insights adicionales de quien opera el chatbot diariamente',
    fbSourceTag: 'Feedback Bot',
    fbValidated: 'Validado por la Investigacion',
    fbNew: 'Insight Nuevo',
    fbValidatedItems: [
      { title: 'Emojis e Imagenes', desc: 'Enviar emojis, screenshots y figuritas para responder desde el panel', who: 'Operador Bot' },
      { title: 'Respuestas Rapidas', desc: 'Atajos para responder consultas de atencion humana sin ir a WhatsApp Web', who: 'Operador Bot' },
      { title: 'Compartir Archivos', desc: 'Adjuntar capturas de pantalla e imagenes directamente en el panel', who: 'Operador Bot' },
    ],
    fbNewItems: [
      { title: 'Estadisticas Mas Ricas', desc: 'Grafico de lo que mas preguntan, ventas cerradas por el bot, productos mas pedidos', icon: 'BarChart3' },
      { title: 'Notificacion de Restock', desc: 'Avisar a clientes cuando el producto vuelve al stock - pedido muy frecuente', icon: 'Bell' },
      { title: 'Difusion de Marketing', desc: 'Enviar promociones a quienes escribieron en el ultimo mes o se suscribieron al newsletter', icon: 'Megaphone' },
      { title: 'Simplificar Busqueda de Pedido', desc: 'Aceptar solo numero de pedido O email (no exigir ambos)', icon: 'Search' },
      { title: 'Token Expira Rapido', desc: 'Renovacion frecuente retrasa la atencion en eventos de alto volumen', icon: 'RefreshCw' },
      { title: 'Informacion Incorrecta', desc: 'El bot a veces da info errada sobre ubicacion de tiendas y conversion de talles', icon: 'AlertCircle' },
    ],
    fbFooter: 'El feedback valida demandas de la investigacion y trae nuevas oportunidades de mejora',

    // Slide 14 - Priority Matrix
    matrixTitle: 'Priorizacion Consolidada',
    matrixSubtitle: 'Vision por nivel de prioridad',
    p0Label: 'Alta',
    p0Desc: 'Esencial / Bloqueante',
    p1Label: 'Media',
    p1Desc: 'Importante / No bloqueante',
    p2Label: 'Baja',
    p2Desc: 'Incremental / Complementario',
    matrixP0: [
      { name: 'Avatar multicanal', cat: 'MC' }, { name: 'Conexion multicanal', cat: 'MC' },
      { name: 'Cambio fondo panel', cat: 'MC' }, { name: 'Filtros de conversaciones', cat: 'MC' },
      { name: 'Tabs Leido/No Leido', cat: 'PA' }, { name: 'Escenario 24h', cat: 'PA' },
      { name: 'Etiquetas/Tags', cat: 'LJ' }, { name: 'Sync leido/no leido', cat: 'LJ' },
      { name: 'Control no leido', cat: 'LJ' }, { name: 'Asignacion conversaciones', cat: 'LJ' },
    ],
    matrixP1: [
      { name: 'Input de mensaje', cat: 'PA' }, { name: 'Message Bubble', cat: 'PA' },
      { name: 'Lista de mensajes', cat: 'PA' }, { name: 'Reubicacion automatizacion', cat: 'LJ' },
      { name: 'Emojis y stickers', cat: 'LJ' }, { name: 'Compartir archivos', cat: 'LJ' },
    ],
    matrixP2: [
      { name: 'Edicion nombre contacto', cat: 'MC' }, { name: 'Acciones Bubble IA', cat: 'PA' },
      { name: 'Optimizacion busqueda', cat: 'PA' }, { name: 'Cambio header', cat: 'PA' },
      { name: 'Iniciar conversacion', cat: 'LJ' }, { name: 'Respuestas rapidas', cat: 'LJ' },
      { name: 'Horario IA', cat: 'LJ' }, { name: 'Estadisticas chat', cat: 'LJ' },
    ],
    legendMC: 'Multicanal',
    legendPA: 'Panel',
    legendLJ: 'Comerciante',
    items: 'items',

    // Slide 15 - Roadmap
    roadmapTitle: 'Roadmap de Entregas',
    roadmapSubtitle: 'Secuencia de etapas para evolucion del panel',
    stage1Title: 'Base Multicanal',
    stage1Tag: 'Fundacion',
    stage1Items: ['Avatar multicanal', 'Conexion multicanal', 'Cambio de fondo del panel', 'Nuevos filtros de conversacion', 'Edicion de nombres de contacto'],
    stage1Footer: 'Prioridad maxima',
    stage2Title: 'Evolucion del Panel',
    stage2Tag: 'Estructura',
    stage2Items: ['Input de envio de mensaje', 'Message Bubble', 'Lista de mensajes', 'Tabs Leido/No Leido', 'Escenario 24h sin envio', 'Reubicacion info automatizacion', 'Optimizacion busqueda + header'],
    stage2Footer: 'Design System',
    stage3Title: 'Voz del Comerciante',
    stage3Tag: 'Diferenciacion',
    stage3Items: ['Sync leido/no leido', 'Control manual no leido', 'Etiquetas/tags', 'Emojis y stickers', 'Asignacion de conversaciones', 'Compartir archivos', 'Iniciar conversacion + atajos'],
    stage3Footer: 'Investigacion con usuarios',

    // Slide 16 - Risks
    risksTitle: 'Riesgos y Dependencias',
    risksSubtitle: 'Puntos de atencion para planificacion',
    risksLabel: 'Riesgos Identificados',
    risksItems: [
      { title: 'Dependencias de backend', desc: 'Sync leido/no leido e integraciones multicanal dependen de trabajo de backend', severity: 'alto' },
      { title: 'Integraciones externas', desc: 'Conexion con Instagram/Messenger depende de APIs y aprobaciones externas', severity: 'medio' },
      { title: 'Alcance amplio', desc: '24 funcionalidades mapeadas que pueden generar presion de entrega', severity: 'medio' },
    ],
    // Slide 17 - Next Steps
    nextTitle: 'Proximos Pasos',
    nextSubtitle: 'Acciones inmediatas para avanzar',
    nextSteps: [
      { title: 'Validacion con Producto e Ingenieria', desc: 'Alinear priorizaciones y viabilidad tecnica' },
      { title: 'Definicion de Milestones', desc: 'Secuencia de entregas por etapa' },
      { title: 'Detalle de Diseno', desc: 'Foco en items P0' },
      { title: 'Planificacion de Roadmap', desc: 'Cronograma y asignacion de recursos' },
    ],
    nextCta: 'El discovery nos dio la direccion. Ahora vamos a construir juntos.',
    nextCtaSub: '24 funcionalidades mapeadas | 3 frentes estrategicos | Evidencias reales de usuarios',
  }
};

// ============================================
// LANGUAGE COMPONENTS
// ============================================
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
          language === 'pt-BR' ? 'bg-tn-blue text-white' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        PT-BR
      </button>
      <button
        onClick={() => setLanguage('es-AR')}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          language === 'es-AR' ? 'bg-tn-blue text-white' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        ES-AR
      </button>
    </div>
  </motion.div>
);

const PresentationWrapper = ({ children }) => {
  const [language, setLanguage] = useState('es-AR');
  return (
    <LanguageContext.Provider value={language}>
      <div className="relative">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

const useTranslations = () => {
  const language = useContext(LanguageContext);
  return translations[language];
};

// Chat icon for title slide
const ChatIcon = ({ className = "w-16 h-16" }) => (
  <MessageSquare className={`${className} text-tn-blue`} strokeWidth={1.5} />
);

// Source badge component
const SourceBadge = ({ source }) => {
  if (source === 'Ambos' || source === 'Both') {
    return (
      <div className="flex gap-1">
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">Entrevista</span>
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-100 text-orange-700">Feedback Bot</span>
      </div>
    );
  }
  const isBot = source === 'Feedback Bot';
  return (
    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${isBot ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
      {source}
    </span>
  );
};

// ============================================
// SLIDE COMPONENTS
// ============================================

// Slide 1: Title
const TitleSlideContent = () => {
  const t = useTranslations();
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="mb-10">
        <div className="w-32 h-32 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/30 opacity-50" />
          <ChatIcon className="w-16 h-16" />
        </div>
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <h1 className="text-6xl font-bold text-tn-blue mb-4 tracking-tight">{t.title}</h1>
        <h2 className="text-3xl font-light text-tn-text mb-2">{t.subtitle}</h2>
        <div className="flex items-center justify-center gap-4 text-lg text-tn-text/60 font-light tracking-wide mt-4">
          {t.breadcrumb.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300" />}
              <span>{item}</span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-14 flex gap-4">
        {[{ label: t.badge1, color: 'blue' }, { label: t.badge2, color: 'purple' }, { label: t.badge3, color: 'green' }].map((b, i) => {
          const dotColor = { blue: 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]', purple: 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]', green: 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' };
          return (
            <div key={i} className="px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-tn-text flex items-center gap-2.5">
              <div className={`w-2 h-2 rounded-full ${dotColor[b.color]}`} />
              {b.label}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

// Slide 2: Agenda
const AgendaSlide = () => {
  const t = useTranslations();
  const icons = [Search, MessageCircle, Sparkles, Target, Layers, Rocket];
  const colors = ['blue', 'purple', 'amber', 'red', 'green', 'indigo'];
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.agendaTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.agendaSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-6">
        {t.agendaItems.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className={`p-5 rounded-2xl border ${colorMap[colors[i]]} flex items-start gap-4`}>
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-white/60"><Icon size={22} /></div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold opacity-50">{item.num}</span>
                  <h3 className="text-base font-bold text-tn-blue">{item.title}</h3>
                </div>
                <p className="text-sm text-tn-text opacity-70">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Slide 3: Discovery Process
const DiscoveryProcessSlide = () => {
  const t = useTranslations();
  const stepIcons = ['Search', 'Eye', 'Lightbulb', 'Filter', 'Rocket'];
  return (
    <SlideContainer footerLabel="Chat Product">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.processTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.processSubtitle}</p>
      </div>

      <div className="flex-1 flex items-center justify-center px-8">
        <div className="relative w-full max-w-4xl">
          <div className="absolute top-10 left-8 right-8 h-1 bg-gradient-to-r from-tn-blue via-tn-lightblue to-tn-blue rounded-full opacity-20" />
          <div className="flex justify-between items-start relative">
            {t.processSteps.map((step, index) => {
              const iconMap = { Search, Eye, Lightbulb: Sparkles, Filter, Rocket };
              const iconKeys = [Search, Eye, Sparkles, Filter, Rocket];
              const Icon = iconKeys[index];
              return (
                <motion.div
                  key={index}
                  className="relative z-10 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ width: '18%' }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-tn-lightblue/30 flex items-center justify-center shadow-lg">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-tn-blue to-tn-lightblue flex items-center justify-center text-white">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border-2 border-tn-lightblue text-tn-blue rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <h4 className="font-bold text-tn-blue text-base mb-1">{step.label}</h4>
                    <p className="text-xs text-tn-text opacity-60">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-center space-y-3">
        <span className="px-4 py-2 bg-gray-50 rounded-full text-xs text-tn-text font-medium border border-gray-100 inline-block">
          {t.processNote}
        </span>
        <div>
          <a
            href={t.processLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-tn-blue/5 hover:bg-tn-blue/10 border border-tn-blue/20 rounded-full text-xs text-tn-blue font-medium transition-colors"
          >
            <FileText size={12} />
            {t.processLinkLabel}
            <ArrowRight size={12} />
          </a>
        </div>
      </motion.div>
    </SlideContainer>
  );
};

// Slide 4: Users
const UsersSlide = () => {
  const t = useTranslations();
  const userColors = ['blue', 'purple', 'pink', 'amber', 'green'];
  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-100', accent: 'bg-blue-500', text: 'text-blue-700', light: 'bg-blue-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-100', accent: 'bg-purple-500', text: 'text-purple-700', light: 'bg-purple-100' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-100', accent: 'bg-pink-500', text: 'text-pink-700', light: 'bg-pink-100' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-100', accent: 'bg-amber-500', text: 'text-amber-700', light: 'bg-amber-100' },
    green: { bg: 'bg-green-50', border: 'border-green-100', accent: 'bg-green-500', text: 'text-green-700', light: 'bg-green-100' },
  };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.usersTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.usersSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-5 gap-4">
        {t.users.map((user, i) => {
          const c = colorMap[userColors[i]];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className={`${c.bg} ${c.border} border rounded-2xl p-5 flex flex-col`}>
              <div className={`w-14 h-14 ${c.accent} rounded-2xl flex items-center justify-center text-white mb-4`}><Users size={24} /></div>
              <h3 className="text-lg font-bold text-tn-blue mb-1">{user.name}</h3>
              <p className="text-xs text-tn-text opacity-60 mb-3">{user.role}</p>
              <p className="text-sm text-tn-text opacity-80 mb-4 flex-1">{user.focus}</p>
              <div className={`${c.light} rounded-lg p-3 mt-auto`}>
                <p className="text-xs font-medium text-tn-text opacity-60 mb-1">{t.highlightLabel}</p>
                <p className={`text-xs font-semibold ${c.text}`}>{user.highlight}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Slide 5: Positives
const PositivesSlide = () => {
  const t = useTranslations();
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.positiveTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.positiveSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-5">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-green-50 border border-green-100 p-6 rounded-2xl flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center"><LayoutGrid size={24} /></div>
            <div>
              <h3 className="text-base font-bold text-tn-blue">{t.layoutTitle}</h3>
              <p className="text-xs text-green-600">{t.layoutTag}</p>
            </div>
          </div>
          <div className="bg-white/60 rounded-xl p-4 mb-3 flex-1">
            <div className="flex items-start gap-2"><Quote size={14} className="text-green-400 flex-shrink-0 mt-1" /><p className="text-xs text-tn-text italic leading-relaxed">{t.layoutQuote}</p></div>
            <p className="text-xs text-tn-text/50 mt-2 text-right">{t.layoutAuthor}</p>
          </div>
          <SourceBadge source={t.sourceInterview} />
          <p className="text-xs text-tn-text opacity-70 leading-relaxed mt-2">{t.layoutDesc}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"><Filter size={24} /></div>
            <div>
              <h3 className="text-base font-bold text-tn-blue">{t.filterTitle}</h3>
              <p className="text-xs text-blue-600">{t.filterTag}</p>
            </div>
          </div>
          <div className="bg-white/60 rounded-xl p-4 mb-3 flex-1">
            <div className="flex items-start gap-2"><Quote size={14} className="text-blue-400 flex-shrink-0 mt-1" /><p className="text-xs text-tn-text italic leading-relaxed">{t.filterQuote}</p></div>
            <p className="text-xs text-tn-text/50 mt-2 text-right">{t.filterAuthor}</p>
          </div>
          <SourceBadge source={t.sourceInterview} />
          <p className="text-xs text-tn-text opacity-70 leading-relaxed mt-2">{t.filterDesc}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-orange-50 border border-orange-100 p-6 rounded-2xl flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center"><Bot size={24} /></div>
            <div>
              <h3 className="text-base font-bold text-tn-blue">{t.botPositiveTitle}</h3>
              <p className="text-xs text-orange-600">{t.botPositiveTag}</p>
            </div>
          </div>
          <div className="bg-white/60 rounded-xl p-4 mb-3 flex-1">
            <div className="flex items-start gap-2"><Quote size={14} className="text-orange-400 flex-shrink-0 mt-1" /><p className="text-xs text-tn-text italic leading-relaxed">{t.botPositiveQuote}</p></div>
            <p className="text-xs text-tn-text/50 mt-2 text-right">{t.botPositiveAuthor}</p>
          </div>
          <SourceBadge source={t.sourceFeedback} />
          <p className="text-xs text-tn-text opacity-70 leading-relaxed mt-2">{t.botPositiveDesc}</p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 bg-green-50 border border-green-200 rounded-xl p-3 text-center">
        <p className="text-sm text-green-700 font-medium">{t.positiveFooter}</p>
      </motion.div>
    </div>
  );
};

// Slide 6: Pain Points
const PainPointsSlide = () => {
  const t = useTranslations();
  const pains = [
    { title: t.pain1Title, tag: t.pain1Tag, q1: t.pain1Quote1, a1: t.pain1Author1, q2: t.pain1Quote2, a2: t.pain1Author2, color: 'red', icon: AlertCircle, sources: ['Entrevista', 'Feedback Bot'] },
    { title: t.pain2Title, tag: t.pain2Tag, q1: t.pain2Quote1, a1: t.pain2Author1, q2: t.pain2Quote2, a2: t.pain2Author2, color: 'amber', icon: Smile, sources: ['Entrevista', 'Feedback Bot'] },
    { title: t.pain3Title, tag: t.pain3Tag, q1: t.pain3Quote1, a1: t.pain3Author1, q2: t.pain3Quote2, a2: t.pain3Author2, color: 'purple', icon: Tag, sources: ['Entrevista'] },
    { title: t.pain4Title, tag: t.pain4Tag, q1: t.pain4Quote1, a1: t.pain4Author1, q2: t.pain4Quote2, a2: t.pain4Author2, color: 'blue', icon: UserCheck, sources: ['Entrevista'] },
  ];
  const colorMap = {
    red: { bg: 'bg-red-50', border: 'border-red-100', iconBg: 'bg-red-100 text-red-600', badge: 'bg-red-200 text-red-700' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-100', iconBg: 'bg-amber-100 text-amber-600', badge: 'bg-amber-200 text-amber-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-100 text-purple-600', badge: 'bg-purple-200 text-purple-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-100 text-blue-600', badge: 'bg-blue-200 text-blue-700' },
  };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.painTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.painSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-5">
        {pains.map((pain, i) => {
          const Icon = pain.icon;
          const c = colorMap[pain.color];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className={`${c.bg} ${c.border} border p-5 rounded-2xl`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 ${c.iconBg} rounded-xl flex items-center justify-center`}><Icon size={18} /></div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-tn-blue">{pain.title}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`text-[10px] px-2 py-0.5 ${c.badge} rounded-full font-bold`}>{pain.tag}</span>
                    {pain.sources.map((s, j) => <SourceBadge key={j} source={s} />)}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white/60 rounded-lg p-2.5">
                  <p className="text-xs text-tn-text italic">{pain.q1}</p>
                  <p className="text-[10px] text-tn-text/50 mt-1">{pain.a1}</p>
                </div>
                <div className="bg-white/60 rounded-lg p-2.5">
                  <p className="text-xs text-tn-text italic">{pain.q2}</p>
                  <p className="text-[10px] text-tn-text/50 mt-1">{pain.a2}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Slide 7: Deep Dive Unread
const DeepDiveSlide = () => {
  const t = useTranslations();
  const reasonIcons = [Layers, Users, Target, Zap];
  const reasonColors = ['blue', 'purple', 'green', 'red'];
  const colorMap = { blue: 'bg-blue-50 border-blue-100 text-blue-600', purple: 'bg-purple-50 border-purple-100 text-purple-600', green: 'bg-green-50 border-green-100 text-green-600', red: 'bg-red-50 border-red-100 text-red-600' };
  const voiceColors = ['blue', 'purple', 'pink'];
  return (
    <div className="h-full flex flex-col">
      <div className="mb-5 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full mb-3">
          <AlertCircle size={14} className="text-red-500" />
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{t.deepDiveTag}</span>
        </div>
        <h2 className="text-4xl font-bold text-tn-blue mb-2 tracking-tight">{t.deepDiveTitle}</h2>
        <p className="text-base text-tn-text font-light">{t.deepDiveSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-5">
        <div className="space-y-3">
          {t.deepDiveReasons.map((item, i) => {
            const Icon = reasonIcons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className={`p-3.5 rounded-xl border ${colorMap[reasonColors[i]]} flex items-start gap-3`}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/60 flex-shrink-0"><Icon size={16} /></div>
                <div>
                  <h4 className="text-xs font-bold text-tn-blue mb-0.5">{item.title}</h4>
                  <p className="text-[11px] text-tn-text opacity-70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="space-y-3">
          {t.deepDiveVoices.map((voice, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-7 h-7 bg-${voiceColors[i]}-500 text-white rounded-lg flex items-center justify-center`}><MessageCircle size={14} /></div>
                <h4 className="text-xs font-bold text-tn-blue">{voice.name}</h4>
                <SourceBadge source={voice.source} />
              </div>
              <p className="text-xs text-tn-text italic leading-relaxed">{voice.quote}</p>
              <p className="text-[10px] text-tn-text/50 mt-1.5">{voice.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Slide 8: Top Priorities
const TopPrioritiesSlide = () => {
  const t = useTranslations();
  const topIcons = [Tag, Eye, Smile, UserCheck, FileText, PenLine];
  const topColors = ['purple', 'red', 'amber', 'blue', 'green', 'indigo'];
  const colorMap = {
    purple: { bg: 'bg-purple-50', border: 'border-purple-100', icon: 'bg-purple-100 text-purple-600', badge: 'bg-purple-200 text-purple-800' },
    red: { bg: 'bg-red-50', border: 'border-red-100', icon: 'bg-red-100 text-red-600', badge: 'bg-red-200 text-red-800' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-100', icon: 'bg-amber-100 text-amber-600', badge: 'bg-amber-200 text-amber-800' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-100', icon: 'bg-blue-100 text-blue-600', badge: 'bg-blue-200 text-blue-800' },
    green: { bg: 'bg-green-50', border: 'border-green-100', icon: 'bg-green-100 text-green-600', badge: 'bg-green-200 text-green-800' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', icon: 'bg-indigo-100 text-indigo-600', badge: 'bg-indigo-200 text-indigo-800' },
  };
  const priorityColor = { 'P0': 'bg-red-500 text-white', 'P1': 'bg-amber-500 text-white', 'P2': 'bg-gray-400 text-white' };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-5 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.topTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.topSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-4">
        {t.topItems.map((item, i) => {
          const Icon = topIcons[i];
          const c = colorMap[topColors[i]];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className={`${c.bg} ${c.border} border rounded-2xl p-4 flex flex-col`}>
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${c.icon} rounded-xl flex items-center justify-center`}><Icon size={18} /></div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${priorityColor[item.priority]}`}>{item.priority}</span>
              </div>
              <h3 className="text-sm font-bold text-tn-blue mb-1">{item.title}</h3>
              <div className="flex items-center gap-1 mb-2">
                <p className={`text-xs font-medium ${c.badge} inline-block px-2 py-0.5 rounded-full w-fit`}>{item.evidence}</p>
                <SourceBadge source={item.source} />
              </div>
              <div className="bg-white/50 rounded-lg p-2.5 mt-auto">
                <p className="text-xs text-tn-text italic">{item.quote}</p>
                <p className="text-[10px] text-tn-text/50 mt-1">— {item.who}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Slide 9: 3 Fronts Overview
const ThreeFrontsSlide = () => {
  const t = useTranslations();
  const fronts = [
    { icon: Globe, title: t.front1Title, desc: t.front1Desc, items: t.front1Items, count: t.front1Count, color: 'blue' },
    { icon: Monitor, title: t.front2Title, desc: t.front2Desc, items: t.front2Items, count: t.front2Count, color: 'purple' },
    { icon: Heart, title: t.front3Title, desc: t.front3Desc, items: t.front3Items, count: t.front3Count, color: 'green' },
  ];
  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', accent: 'bg-blue-500', check: 'text-blue-500', countColor: 'text-blue-600', borderT: 'border-blue-200' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', accent: 'bg-purple-500', check: 'text-purple-500', countColor: 'text-purple-600', borderT: 'border-purple-200' },
    green: { bg: 'bg-green-50', border: 'border-green-200', accent: 'bg-green-500', check: 'text-green-500', countColor: 'text-green-600', borderT: 'border-green-200' },
  };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.frontsTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.frontsSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-6">
        {fronts.map((front, i) => {
          const Icon = front.icon;
          const c = colorMap[front.color];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className={`${c.bg} border-2 ${c.border} rounded-2xl p-6 flex flex-col`}>
              <div className={`w-16 h-16 ${c.accent} text-white rounded-2xl flex items-center justify-center mb-5`}><Icon size={32} /></div>
              <h3 className="text-xl font-bold text-tn-blue mb-2">{front.title}</h3>
              <p className="text-sm text-tn-text opacity-70 mb-5 flex-1">{front.desc}</p>
              <div className="space-y-2">
                {front.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-tn-text">
                    <CheckCircle size={12} className={c.check} /><span>{item}</span>
                  </div>
                ))}
              </div>
              <div className={`mt-4 pt-4 border-t ${c.borderT}`}>
                <span className={`text-xs font-bold ${c.countColor}`}>{front.count}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Slide 10: Front 1 Detail
const Front1Slide = () => {
  const t = useTranslations();
  const priorityColor = { 'P0': 'bg-red-500 text-white', 'P1': 'bg-amber-500 text-white', 'P2': 'bg-gray-400 text-white' };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center"><Globe size={24} /></div>
        <div>
          <h2 className="text-3xl font-bold text-tn-blue tracking-tight">{t.f1Title}</h2>
          <p className="text-base text-tn-text font-light">{t.f1Subtitle}</p>
        </div>
        <div className="ml-auto"><span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">{t.f1Stage}</span></div>
      </div>
      <div className="flex-1 space-y-3">
        {t.f1Items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition-all">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${priorityColor[item.priority]} flex-shrink-0`}>{item.priority}</span>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-tn-blue">{item.name}</h4>
              <p className="text-xs text-tn-text opacity-60 truncate">{item.desc}</p>
            </div>
            <span className="text-xs text-tn-text/50 bg-gray-50 px-2 py-1 rounded flex-shrink-0">{item.origin}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-sm text-blue-700 font-medium">{t.f1Footer}</p>
      </motion.div>
    </div>
  );
};

// Slide 11: Front 2 Detail
const Front2Slide = () => {
  const t = useTranslations();
  const priorityColor = { 'P0': 'bg-red-500 text-white', 'P1': 'bg-amber-500 text-white', 'P2': 'bg-gray-400 text-white' };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 flex items-center gap-4">
        <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center"><Monitor size={24} /></div>
        <div>
          <h2 className="text-3xl font-bold text-tn-blue tracking-tight">{t.f2Title}</h2>
          <p className="text-base text-tn-text font-light">{t.f2Subtitle}</p>
        </div>
        <div className="ml-auto"><span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">{t.f2Stage}</span></div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-3">
        {t.f2Items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-white border border-gray-100 rounded-xl p-3.5 flex items-center gap-3">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${priorityColor[item.priority]} flex-shrink-0`}>{item.priority}</span>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-tn-blue">{item.name}</h4>
              <p className="text-xs text-tn-text opacity-50 truncate">{item.desc}</p>
            </div>
            <span className="text-xs text-tn-text/40 bg-gray-50 px-1.5 py-0.5 rounded flex-shrink-0">{item.origin}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 bg-purple-50 border border-purple-100 rounded-xl p-4">
        <p className="text-sm text-purple-700 font-medium">{t.f2Footer}</p>
      </motion.div>
    </div>
  );
};

// Slide 12: Front 3 Detail
const Front3Slide = () => {
  const t = useTranslations();
  const priorityColor = { 'P0': 'bg-red-500 text-white', 'P1': 'bg-amber-500 text-white', 'P2': 'bg-gray-400 text-white' };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 flex items-center gap-4">
        <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center"><Heart size={24} /></div>
        <div>
          <h2 className="text-3xl font-bold text-tn-blue tracking-tight">{t.f3Title}</h2>
          <p className="text-base text-tn-text font-light">{t.f3Subtitle}</p>
        </div>
        <div className="ml-auto"><span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold">{t.f3Stage}</span></div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-3">
        {t.f3Items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-white border border-gray-100 rounded-xl p-3.5 flex items-center gap-3">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${priorityColor[item.priority]} flex-shrink-0`}>{item.priority}</span>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-tn-blue">{item.name}</h4>
              <p className="text-xs text-tn-text opacity-50 truncate">{item.desc}</p>
            </div>
            <span className="text-xs text-tn-text/40 bg-gray-50 px-1.5 py-0.5 rounded flex-shrink-0">{item.evidence}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 bg-green-50 border border-green-100 rounded-xl p-4">
        <p className="text-sm text-green-700 font-medium">{t.f3Footer}</p>
      </motion.div>
    </div>
  );
};

// Slide 13: Feedback Bot (NEW)
const FeedbackBotSlide = () => {
  const t = useTranslations();
  const iconMap = { BarChart3, Bell, Megaphone, Search, RefreshCw, AlertCircle };
  const newColors = ['purple', 'green', 'blue', 'indigo', 'amber', 'red'];
  const colorClasses = {
    purple: 'bg-purple-50 border-purple-100 text-purple-600',
    green: 'bg-green-50 border-green-100 text-green-600',
    blue: 'bg-blue-50 border-blue-100 text-blue-600',
    indigo: 'bg-indigo-50 border-indigo-100 text-indigo-600',
    amber: 'bg-amber-50 border-amber-100 text-amber-600',
    red: 'bg-red-50 border-red-100 text-red-600',
  };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-5 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full mb-3">
          <Bot size={14} className="text-orange-500" />
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">{t.fbSourceTag}</span>
        </div>
        <h2 className="text-4xl font-bold text-tn-blue mb-2 tracking-tight">{t.fbTitle}</h2>
        <p className="text-base text-tn-text font-light">{t.fbSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-5">
        {/* Validated by research */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle size={16} className="text-green-500" />
            <h3 className="text-sm font-bold text-green-700">{t.fbValidated}</h3>
          </div>
          <div className="space-y-3">
            {t.fbValidatedItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-green-50 border border-green-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-sm font-bold text-tn-blue">{item.title}</h4>
                  <SourceBadge source="Ambos" />
                </div>
                <p className="text-xs text-tn-text opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* New insights */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-orange-500" />
            <h3 className="text-sm font-bold text-orange-700">{t.fbNew}</h3>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {t.fbNewItems.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  className={`${colorClasses[newColors[i]]} border rounded-xl p-3`}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/60 mb-2"><Icon size={16} /></div>
                  <h4 className="text-xs font-bold text-tn-blue mb-1">{item.title}</h4>
                  <p className="text-[10px] text-tn-text opacity-60 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-3 bg-orange-50 border border-orange-100 rounded-xl p-3 text-center">
        <p className="text-sm text-orange-700 font-medium">{t.fbFooter}</p>
      </motion.div>
    </div>
  );
};

// Slide 14: Priority Matrix
const PriorityMatrixSlide = () => {
  const t = useTranslations();
  const catColor = { 'MC': 'bg-blue-100 text-blue-700', 'PA': 'bg-purple-100 text-purple-700', 'LJ': 'bg-green-100 text-green-700' };
  const columns = [
    { items: t.matrixP0, label: t.p0Label, desc: t.p0Desc, color: 'red', count: 10 },
    { items: t.matrixP1, label: t.p1Label, desc: t.p1Desc, color: 'amber', count: 6 },
    { items: t.matrixP2, label: t.p2Label, desc: t.p2Desc, color: 'gray', count: 8 },
  ];
  const bgMap = { red: 'bg-red-50 border-red-200', amber: 'bg-amber-50 border-amber-200', gray: 'bg-gray-50 border-gray-200' };
  const accentMap = { red: 'bg-red-500', amber: 'bg-amber-500', gray: 'bg-gray-400' };
  const textMap = { red: 'text-red-600', amber: 'text-amber-600', gray: 'text-gray-500' };
  const descMap = { red: 'text-red-600', amber: 'text-amber-600', gray: 'text-gray-500' };
  const borderMap = { red: 'border-red-200', amber: 'border-amber-200', gray: 'border-gray-200' };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.matrixTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.matrixSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-6">
        {columns.map((col, ci) => (
          <motion.div key={ci} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.1 }}
            className={`${bgMap[col.color]} border-2 rounded-2xl p-5 flex flex-col`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 ${accentMap[col.color]} text-white rounded-xl flex items-center justify-center text-sm font-black`}>P{ci}</div>
              <div>
                <h3 className="text-lg font-bold text-tn-blue">{col.label}</h3>
                <p className={`text-xs ${descMap[col.color]}`}>{col.desc}</p>
              </div>
            </div>
            <div className="space-y-2 flex-1">
              {col.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${catColor[item.cat]}`}>{item.cat}</span>
                  <span className="text-xs text-tn-text">{item.name}</span>
                </div>
              ))}
            </div>
            <div className={`mt-4 pt-3 border-t ${borderMap[col.color]} text-center`}>
              <span className={`text-2xl font-black ${textMap[col.color]}`}>{col.count}</span>
              <span className={`text-xs ${textMap[col.color]} ml-1`}>{t.items}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2"><span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">MC</span><span className="text-xs text-tn-text">{t.legendMC}</span></div>
        <div className="flex items-center gap-2"><span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700">PA</span><span className="text-xs text-tn-text">{t.legendPA}</span></div>
        <div className="flex items-center gap-2"><span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-100 text-green-700">LJ</span><span className="text-xs text-tn-text">{t.legendLJ}</span></div>
      </motion.div>
    </div>
  );
};

// Slide 15: Roadmap
const RoadmapSlide = () => {
  const t = useTranslations();
  const stages = [
    { title: t.stage1Title, tag: t.stage1Tag, items: t.stage1Items, footer: t.stage1Footer, color: 'blue' },
    { title: t.stage2Title, tag: t.stage2Tag, items: t.stage2Items, footer: t.stage2Footer, color: 'purple' },
    { title: t.stage3Title, tag: t.stage3Tag, items: t.stage3Items, footer: t.stage3Footer, color: 'green' },
  ];
  const colorMap = { blue: { gradient: 'from-blue-500 to-blue-300', accent: 'bg-blue-500', dot: 'bg-blue-500', footer: 'text-blue-600', tag: 'text-blue-500' }, purple: { gradient: 'from-purple-500 to-purple-300', accent: 'bg-purple-500', dot: 'bg-purple-500', footer: 'text-purple-600', tag: 'text-purple-500' }, green: { gradient: 'from-green-500 to-green-300', accent: 'bg-green-500', dot: 'bg-green-500', footer: 'text-green-600', tag: 'text-green-500' } };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.roadmapTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.roadmapSubtitle}</p>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-6">
        {stages.map((stage, i) => {
          const c = colorMap[stage.color];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="relative">
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${c.gradient} rounded-full`} />
              <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-4 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 ${c.accent} text-white rounded-xl flex items-center justify-center text-lg font-black`}>{i + 1}</div>
                  <div>
                    <h3 className="text-lg font-bold text-tn-blue">{stage.title}</h3>
                    <p className={`text-xs ${c.tag} font-medium`}>{stage.tag}</p>
                  </div>
                </div>
                <ul className="space-y-3 flex-1">
                  {stage.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-tn-text">
                      <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-tn-text/50">{stage.items.length} {t.items}</span>
                  <span className={`text-xs font-bold ${c.footer}`}>{stage.footer}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Slide 16: Risks
const RisksSlide = () => {
  const t = useTranslations();
  const severityColor = { alto: 'bg-red-100 text-red-700', medio: 'bg-amber-100 text-amber-700' };
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-tn-blue mb-3 tracking-tight">{t.risksTitle}</h2>
        <p className="text-lg text-tn-text font-light">{t.risksSubtitle}</p>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-tn-blue mb-5 flex items-center gap-2"><AlertCircle size={20} className="text-amber-500" />{t.risksLabel}</h3>
        <div className="grid grid-cols-2 gap-5">
          {t.risksItems.map((risk, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-base font-bold text-tn-blue flex-1">{risk.title}</h4>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase ${severityColor[risk.severity]}`}>{risk.severity}</span>
              </div>
              <p className="text-sm text-tn-text opacity-60 leading-relaxed">{risk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Slide 17: Next Steps
const NextStepsSlide = () => {
  const t = useTranslations();
  const stepIcons = [CheckCircle, Rocket, PenLine, TrendingUp];
  const stepColors = ['blue', 'purple', 'green', 'amber'];
  const colorMap = {
    blue: 'bg-blue-50 border-blue-100 text-blue-600',
    purple: 'bg-purple-50 border-purple-100 text-purple-600',
    green: 'bg-green-50 border-green-100 text-green-600',
    amber: 'bg-amber-50 border-amber-100 text-amber-600',
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h2 className="text-5xl font-bold text-tn-blue mb-4 tracking-tight">{t.nextTitle}</h2>
        <p className="text-xl text-tn-text font-light">{t.nextSubtitle}</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-6 max-w-4xl w-full mb-10">
        {t.nextSteps.map((step, i) => {
          const Icon = stepIcons[i];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
              className={`${colorMap[stepColors[i]]} border rounded-2xl p-6 flex items-start gap-4`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/60 flex-shrink-0"><Icon size={22} /></div>
              <div>
                <h3 className="text-base font-bold text-tn-blue mb-1">{step.title}</h3>
                <p className="text-sm text-tn-text opacity-70">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-tn-blue to-tn-lightblue text-white p-8 rounded-2xl text-center max-w-4xl w-full">
        <h3 className="text-2xl font-bold mb-3">{t.nextCta}</h3>
        <p className="text-blue-100 text-base">{t.nextCtaSub}</p>
      </motion.div>
    </div>
  );
};

// ============================================
// MAIN PRESENTATION
// ============================================
export const discoveryPresentation = {
  id: "discovery-chat-panel",
  slides: [
    <SlideContainer footerLabel="Chat Product" key="title"><PresentationWrapper><TitleSlideContent /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="agenda"><PresentationWrapper><AgendaSlide /></PresentationWrapper></SlideContainer>,
    // Slide 3 (ProcessFlow) needs special handling - wrap it
    <PresentationWrapper key="process"><DiscoveryProcessSlide /></PresentationWrapper>,
    <SlideContainer footerLabel="Chat Product" key="users"><PresentationWrapper><UsersSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="positive"><PresentationWrapper><PositivesSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="pain-points"><PresentationWrapper><PainPointsSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="insight-unread"><PresentationWrapper><DeepDiveSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="top-priorities"><PresentationWrapper><TopPrioritiesSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="three-fronts"><PresentationWrapper><ThreeFrontsSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="front-multichannel"><PresentationWrapper><Front1Slide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="front-panel"><PresentationWrapper><Front2Slide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="front-merchant"><PresentationWrapper><Front3Slide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="feedback-bot"><PresentationWrapper><FeedbackBotSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="priority-matrix"><PresentationWrapper><PriorityMatrixSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="roadmap"><PresentationWrapper><RoadmapSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="risks"><PresentationWrapper><RisksSlide /></PresentationWrapper></SlideContainer>,
    <SlideContainer footerLabel="Chat Product" key="next-steps"><PresentationWrapper><NextStepsSlide /></PresentationWrapper></SlideContainer>,
  ]
};

export const discoveryPrintSlides = discoveryPresentation.slides;
