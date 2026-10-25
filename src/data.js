// Todo o conteúdo abaixo vem do portfólio (PDF) — não adicionar informações que não estejam nele.

export const EMPRESA = "ANL Engenharia & Soluções Técnicas";
export const RESPONSAVEL = "Eng. Anderson Gonçalves Silvério";
export const CREA = "CREA/MG 382575MG";
export const EMAIL = "engenheiroandersongoncalves@gmail.com";
export const TELEFONE = "(31) 9 9804-9626";
export const WHATSAPP = "https://wa.me/5531998049626";

export const NAV_LINKS = [
  ["Início", "#inicio"],
  ["O Desafio", "#desafio"],
  ["Quem Somos", "#quem-somos"],
  ["Proposta de Valor", "#proposta"],
  ["Serviços", "#servicos"],
  ["Diferenciais", "#diferenciais"],
  ["Fale Conosco", "#contato"],
];

// Slide 1
export const SUBTITULO = "Engenharia aplicada à manutenção, inspeção e suporte técnico especializado";
export const CITACAO =
  "Reduzimos custos e aumentamos a confiabilidade dos seus equipamentos através de engenharia aplicada à manutenção, inspeção e suporte técnico especializado.";

// Slide 2
export const DESAFIO = {
  titulo: "O Desafio das Empresas Industriais",
  subtitulo: "Manutenção ineficiente custa caro — e compromete a operação",
  intro:
    "Empresas industriais enfrentam diariamente desafios críticos que impactam diretamente sua competitividade e lucratividade:",
  itens: [
    { icon: "alert", forte: "Paradas não planejadas", resto: "que interrompem a produção e geram prejuízos imediatos" },
    { icon: "dollar", forte: "Custos de manutenção elevados", resto: "sem visibilidade sobre onde estão os desperdícios" },
    { icon: "file", forte: "Falta de conformidade", resto: "com normas técnicas (NR-12, NR-13), expondo a empresa a riscos legais e acidentes" },
    { icon: "chart", forte: "Ausência de indicadores", resto: "confiáveis para embasar decisões estratégicas" },
    { icon: "users", forte: "Equipes sem capacitação", resto: "adequada para operar e manter equipamentos com segurança" },
  ],
  destaque: {
    antes: "A manutenção mal gerida pode representar até",
    forte: "5% a 15% do faturamento",
    depois: "em custos evitáveis. A solução está em transformar a manutenção em área estratégica.",
  },
};

// Slide 3
export const QUEM_SOMOS = {
  titulo: "Quem Somos",
  subtitulo: "ANL Engenharia: especialistas em confiabilidade e performance industrial",
  texto:
    "A ANL Engenharia & Soluções Técnicas é uma empresa especializada em manutenção, confiabilidade e suporte técnico em engenharia mecânica, com atuação estratégica voltada para a geração de valor real nas operações industriais.",
  tabela: [
    ["Responsabilidade Técnica", "Eng. Anderson Gonçalves Silvério — CREA/MG 382575MG"],
    ["Foco Estratégico", "Transformar manutenção em vantagem competitiva"],
    ["Abrangência", "Do diagnóstico à conformidade legal e projetos mecânicos"],
    ["Resultado", "Redução de custos + aumento de disponibilidade + segurança"],
  ],
  foco: "Nosso foco é transformar a manutenção e a engenharia em áreas estratégicas de geração de valor para nossos clientes.",
};

// Slide 4
export const PROPOSTA = {
  titulo: "Nossa Proposta de Valor",
  subtitulo: "5 resultados concretos que entregamos aos nossos clientes",
  intro: "A ANL Engenharia atua de forma integrada para gerar impacto mensurável na operação industrial:",
  itens: [
    ["Redução de Custos de Manutenção", "identificação e eliminação de desperdícios operacionais"],
    ["Aumento da Disponibilidade de Equipamentos", "menos paradas, mais produção"],
    ["Melhoria da Eficiência Operacional", "processos padronizados e indicadores de desempenho"],
    ["Segurança e Conformidade Normativa", "atendimento às NR-12, NR-13 e demais exigências legais"],
    ["Suporte Técnico Especializado", "respaldo de engenheiro habilitado para decisões críticas"],
  ],
  citacao:
    "Cada serviço da ANL é desenhado para entregar um resultado claro, mensurável e sustentável para a operação do cliente.",
};

// Slides 5 a 8
export const SERVICOS = {
  titulo: "Portfólio de Serviços",
  categorias: [
    {
      slide: "05",
      nome: "Diagnóstico e Gestão",
      subtitulo: "Da avaliação ao controle total da manutenção",
      itens: [
        {
          icon: "search",
          titulo: "Diagnóstico e Redução de Custos",
          texto:
            "Levantamento técnico em campo, análise de indicadores (MTBF, MTTR, disponibilidade), identificação de falhas recorrentes e plano de ação para redução de custos.",
          resultado: "redução de custos e aumento de eficiência.",
        },
        {
          icon: "settings",
          titulo: "Estruturação e Gestão (PCM)",
          texto:
            "Implantação de PCM, criação de planos preventivos, estruturação de indicadores, padronização de processos e organização do histórico de manutenção.",
          resultado: "maior controle, previsibilidade e confiabilidade.",
        },
        {
          icon: "bars",
          titulo: "Auditoria Técnica e Performance",
          texto:
            "Avaliação da eficiência dos ativos, identificação de gargalos operacionais e benchmark de desempenho.",
          resultado: "melhoria da performance operacional.",
        },
      ],
    },
    {
      slide: "06",
      nome: "Inspeção e Conformidade",
      subtitulo: "Segurança técnica e conformidade legal como prioridade",
      itens: [
        {
          icon: "sign",
          titulo: "Laudos e Inspeções Técnicas",
          texto:
            "Laudos mecânicos, inspeção de máquinas e equipamentos, avaliação de condições operacionais e vistorias técnicas.",
          resultado: "segurança e respaldo técnico.",
        },
        {
          icon: "shield",
          titulo: "Adequação à NR-12 — Segurança em Máquinas",
          texto:
            "Análise de risco, inventário de máquinas, laudos de conformidade e recomendações de adequação.",
          resultado: "redução de riscos e conformidade legal.",
        },
        {
          icon: "gauge",
          titulo: "Inspeções e Laudos NR-13 — Equipamentos Pressurizados",
          texto:
            "Inspeção de vasos de pressão, aferição de válvulas de segurança e manômetros, emissão de laudos técnicos.",
          resultado: "segurança operacional e atendimento à legislação.",
        },
      ],
    },
    {
      slide: "07",
      nome: "Capacitação e Projetos",
      subtitulo: "Capacitação de equipes e soluções técnicas de engenharia",
      itens: [
        {
          icon: "cap",
          titulo: "Treinamento NR-12",
          texto:
            "Capacitação teórica e prática para operação segura de máquinas, procedimentos LOTO (bloqueio e etiquetagem) e emissão de certificado de participação.",
          resultado: "Equipe capacitada, redução de acidentes e conformidade legal.",
        },
        {
          icon: "snow",
          titulo: "PMOC — Plano de Manutenção, Operação e Controle",
          texto:
            "Elaboração e implantação de PMOC para sistemas de climatização, auditoria e gestão de contratos de manutenção.",
          resultado: "Qualidade do ar e conformidade com normas.",
        },
        {
          icon: "compass",
          titulo: "Projetos Mecânicos",
          texto:
            "Desenvolvimento de componentes, adequações em equipamentos existentes, detalhamento técnico para fabricação e especificação de materiais.",
          resultado: "Soluções técnicas seguras, eficientes e aplicáveis à operação.",
        },
      ],
    },
    {
      slide: "08",
      nome: "Serviços Jurídicos e Consultoria Estratégica",
      subtitulo: "Respaldo técnico completo: da perícia à consultoria contínua",
      itens: [
        {
          icon: "scale",
          titulo: "Perícia e Assistência Técnica Judicial",
          texto:
            "Elaboração de laudos periciais, pareceres técnicos e assistência em processos judiciais e extrajudiciais, com análise de falhas e responsabilidades técnicas.",
          resultado: "suporte técnico confiável para decisões judiciais.",
        },
        {
          icon: "sign",
          titulo: "Responsabilidade Técnica e ART",
          texto:
            "Emissão de ART, responsabilidade técnica por contratos de manutenção, regularização junto a órgãos competentes e suporte em auditorias.",
          resultado: "segurança jurídica, conformidade legal e respaldo técnico.",
        },
        {
          icon: "trend",
          titulo: "Consultoria Contínua em Manutenção",
          texto:
            "Suporte técnico mensal, acompanhamento de indicadores, revisão de estratégias e implementação de melhorias contínuas.",
          resultado: "evolução constante e ganho sustentável.",
        },
      ],
    },
  ],
};

// Slide 9
export const DIFERENCIAIS = {
  titulo: "Por Que Escolher a ANL Engenharia?",
  subtitulo: "Diferenciais que fazem a diferença na sua operação",
  tabela: [
    ["Responsabilidade Técnica", "Engenheiro habilitado CREA/MG — respaldo legal garantido"],
    ["Visão Estratégica", "Manutenção como geração de valor, não apenas custo"],
    ["Portfólio Completo", "Do diagnóstico à perícia judicial — tudo em um só parceiro"],
    ["Foco em Resultado", "Cada serviço entrega um resultado claro e mensurável"],
    ["Conformidade Legal", "Atendimento às NR-12, NR-13 e demais normas técnicas"],
    ["Flexibilidade", "Projetos pontuais ou consultoria contínua mensal"],
  ],
  citacao:
    "A ANL Engenharia é o parceiro técnico que sua empresa precisa para operar com segurança, eficiência e confiabilidade.",
};

// Slide 10
export const CONTATO = {
  titulo: "Fale Conosco",
  subtitulo: "Dê o próximo passo rumo à excelência operacional",
};
