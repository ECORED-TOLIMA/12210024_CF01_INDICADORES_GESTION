export default {
  global: {
    Name: 'Fundamentos para implementar la medición en las organizaciones',
    Description:
      'Este componente aborda los fundamentos para la apropiación de los indicadores de gestión desde la administración como pilar estratégico. Al estructurar la organización se diseñan objetivos, procesos y procedimientos que facilitan la asignación de funciones y responsabilidades alineadas con metas por áreas y departamentos, monitoreadas y validadas mediante indicadores de gestión para aportar a la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y evolución de administración',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la administración en las organizaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Funciones administrativas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de organizaciones',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Relación entre administración y gestión por resultados',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'La medición en las organizaciones',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Misión, visión y valores',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis del entorno FODA',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Objetivos estratégicos, tácticos y operativos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Gestión por procesos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores de gestión y su clasificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de indicador',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación de indicadores',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Indicadores versus métricas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Beneficios de la implementación de indicadores',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Importancia de los indicadores en la toma de decisiones',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Indicadores como herramientas de control administrativo',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Indicadores de gestión',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Diseño de indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Relación indicador – objetivo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Metodología para la construcción de indicadores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ficha técnica del indicador',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_12210024_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Administración',
      significado:
        'es una ciencia fundamental para coordinar esfuerzos, estructurar actividades y maximizar la productividad con una eficiente gestión de recursos en cualquier ámbito, actividad y organización.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'proceso estructurado de análisis que evalúa el desempeño, la cultura y la estructura de una organización para identificar debilidades, fortalezas, amenazas y oportunidades, así como las áreas de mejora.',
    },
    {
      termino: 'Enfoque sistémico',
      significado:
        'perspectiva holística que concibe a la empresa como un sistema vivo y abierto, compuesto por partes interrelacionadas o subsistemas que operan de forma integral en busca del bien común.',
    },
    {
      termino: 'Estándares',
      significado:
        'especificaciones técnicas, normas, reglas y acuerdos documentados utilizados de forma consistente para orientar procesos, productos y servicios.',
    },
    {
      termino: 'Estrategia',
      significado:
        'es el plan integral a largo plazo que define cómo una empresa alcanzará sus objetivos, alineando sus recursos, procesos y personas para generar una ventaja competitiva.',
    },
    {
      termino: 'Indicador',
      significado:
        'es una herramienta o unidad de medida cuantitativa o cualitativa, que permite evaluar el desempeño, medir el logro de las metas y monitorear los cambios en procesos, proyectos o políticas.',
    },
    {
      termino: 'Medición',
      significado:
        'es el proceso básico de comparar una magnitud con una unidad de medida patrón establecida mediante el uso de instrumentos apropiados para esta actividad.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'es un enfoque de gestión y una filosofía empresarial que busca optimizar constantemente procesos, productos y servicios a través de pequeños cambios incrementales y progresivos.',
    },
    {
      termino: 'Métricas',
      significado:
        'es una medida cuantitativa y objetiva utilizada para rastrear, monitorear y evaluar el rendimiento, la eficiencia y el progreso de áreas específicas o procesos de la empresa en general.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bancoldex (s.f.). Quienes somos – Clasificación de las empresas en Colombia.',
      link: 'https://www.bancoldex.com/',
    },
    {
      referencia:
        'Función Pública. (2018). Guía para la construcción y análisis de indicadores de gestión (Versión 4).',
      link: '',
    },
    {
      referencia:
        'Núñez, D. Froilan, E. Zevallos, L. Chávez, J. Castañeda, M. & Engracio, J. (2025). Procesos administrativos y la gestión por resultados en educación superior. Revista InveCom, 5(4), e504085.',
      link: 'https://doi.org/10.5281/zenodo.14920699',
    },
    {
      referencia:
        'República de Colombia (2019). Decreto 957 de 2019. Por medio del cual se establecen rangos en UVT que permiten determinar el tamaño de la empresa. Función Pública, Gestor Normativo.',
      link: '',
    },
    {
      referencia:
        'Tantalean, I. (2022). Título del artículo. Revista de la Facultad de Derecho y Ciencias Políticas, 52(136).',
      link: '',
    },
    {
      referencia:
        'Universidad Europea (2025). Tipos de empresa según tamaño, actividad y forma jurídica.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
