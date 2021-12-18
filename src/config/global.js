export default {
  global: {
    componenteFormativo: 'Campaña ambiental',
    descripcionCurso:
      'Una campaña ambiental abarca diferentes conceptos y herramientas que sirven de guía para su desarrollo. Se requiere de una serie de conocimientos, técnicas y elementos que faciliten su implementación; así como la importancia de comprender las dinámicas y los derechos del ser humano, el cuidado del medio ambiente, el bienestar social y económico para lograr un adecuado equilibrio.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Método de observación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cuestionarios o encuestas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Grupos focales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Entrevistas',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura de proyectos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Instrumentos de diagnóstico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Criterios de comunicación asertiva',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Principios de enfoque diferencial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Anguita. J., Repullo. J. y Donado. J. (2003). La encuesta como técnica de investigación, elaboración de cuestionarios y tratamiento estadístico de datos. ',
      link:
        'https://www.elsevier.es/es-revista-atencion-primaria-27-articulo-la-encuesta-como-tecnica-investigacion--13047738',
    },
    {
      referencia: 'Bautista. L. (2013). La observación. ',
      link:
        'http://data-collection-and-reports.blogspot.com/2009/05/la-observacion.html',
    },
    {
      referencia: 'Gerencie. (s.f.). Matriz DOFA - Qué es y para qué sirve. ',
      link:
        'https://www.gerencie.com/para-que-sirve-la-matriz-dofa.html#:~:text=Para%20qu%C3%A9%20sirve%20la%20matriz%20DOFA.,-La%20importancia%20de&text=La%20matriz%20DOFA%20nos%20muestra,integral%20de%20nuestra%20verdadera%20situaci%C3%B3n',
    },
    {
      referencia:
        'Jordán. J. (2016). La técnica de construcción y análisis de escenarios en los estudios de Seguridad y Defensa. ',
      link:
        'https://global-strategy.org/la-tecnica-de-construccion-y-analisis-de-escenarios-en-los-estudios-de-seguridad-y-defensa/',
    },
    {
      referencia:
        'Universidad de Antioquia. (2009). La técnica de recolección de información mediante grupos focales.',
      link: 'https://revistas.udea.edu.co/index.php/ceo/article/view/1611',
    },
    {
      referencia:
        'Universidad Nacional de San Juan. (s.f.). Matriz Análisis de Partes Involucradas en el Problema. (causas-efectos). ',
      link:
        'https://studylib.es/doc/5271569/matriz-an%C3%A1lisis-de-partes-involucradas-en-el-problema',
    },
    {
      referencia:
        'UP. (s.f.). DAFO análisis, cómo hacer un DAFO para tu negocio + ejemplos. ',
      link: 'https://www.up-spain.com/blog/analisis-dafo-foda/',
    },
    {
      referencia:
        'Villanueva. M. (2016). La observación como técnica de recolección de datos. ',
      link:
        'https://es.slideshare.net/MarluVillanueva/la-observacion-como-tecnica-de-recoleccion-de-datos-69215191',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'capacidad de responder con flexibilidad a los cambios que ocurren en el entorno y adaptarse a nuevas realidades con facilidad.',
    },
    {
      termino: 'Diversidad',
      significado:
        'diferencias entre personas, animales o cosas. Dentro de los seres humanos existe la diversidad cultural, étnica, sexual, lingüística, ideológica, religiosa, entre otras.',
    },
    {
      termino: 'Encuestas',
      significado:
        'recopilación de información que es proporcionada directamente por los sujetos de estudio, con el fin de obtener actitudes, opiniones o sugerencias de ellos mismos. Así mismo, esta técnica permite aplicaciones masivas.',
    },
    {
      termino: 'Entrevistas',
      significado:
        'técnica de recolección de información muy efectiva en la investigación cualitativa. Se define como una conversación que ofrece un propósito específico además de hablar. Es una herramienta técnica que toma la forma de un diálogo conversacional.',
    },
    {
      termino: 'Grupos focales',
      significado:
        'consiste en que las personas llevan a cabo una reunión donde pueden opinar y solucionar un problema en específico. ',
    },
    {
      termino: 'Igualdad',
      significado:
        'principio básico de los derechos humanos. Más allá de las diferencias de entre las personas sea por rasgos físicos, capacidad intelectual, clase social, nivel educativo, color de piel, diversidad de costumbres, creencias, lenguas, prácticas, diferentes culturas, etc.',
    },
    {
      termino: 'Integralidad',
      significado:
        'se conforma desde varios puntos de vista y apunta hacia el desarrollo completo del ser humano, teniendo en cuenta que todas las partes que lo conforman son valiosas, tanto la parte afectiva, física, fisiológica, intelectual, social, etc.',
    },
    {
      termino: 'Interculturalidad',
      significado:
        'interacción entre dos o más culturas de una manera respetuosa, donde se percibe que ningún grupo cultural está por encima de otro, propiciando la horizontalidad, integración y convivencia entre culturas, pero hay quienes emplean el término para seguir discriminando.',
    },
    {
      termino: 'Participación',
      significado:
        'intervención en cualquier tipo de actividad de forma cognitiva o intuitiva. ',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de satisfacer las necesidades presentes sin comprometer las necesidades de las futuras generaciones, garantizando el equilibrio entre el crecimiento económico, cuidado del ambiente y el bienestar social. ',
    },
  ],
  complementario: [
    {
      texto:
        'Anguita. J., Repullo. J. y Donado. J. (2003). La encuesta como técnica de investigación, elaboración de cuestionarios y tratamiento estadístico de dato.',
      tipo: 'Artículo',
      link:
        'https://www.elsevier.es/es-revista-atencion-primaria-27-pdf-13047738',
    },
    {
      texto:
        'CEO. (s.f.). La técnica de recolección de información mediante grupos focales.',
      tipo: 'Artículo',
      link: 'https://revistas.udea.edu.co/index.php/ceo/article/view/1611/1264',
    },
    {
      texto:
        'Díaz. L., Turroco, I., Martínez, M. y Varela, M. (2013). La entrevista, recurso flexible y dinámico',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-50572013000300009',
    },
    {
      texto:
        'Ministerio del Interior - Secretaría de Desarrollo Regional y Administrativo, Chile. (s.f.). Postulación de proyectos. ',
      tipo: 'Documento de sitio web',
      link:
        'http://agesplataforma.subdere.gov.cl/documentacion/Postulaci%C3%B3n%20de%20proyectos%20-%20Formulaci%C3%B3n%20de%20indicadores.pdf',
    },
    {
      texto: 'Pérez. F. (s.f.). Planificación y elaboración de proyectos.',
      tipo: 'Sitio Web',
      link:
        'http://agora.ceem.org.es/wp-content/uploads/documentos/proyectos/manualproyectos.pdf',
    },
    {
      texto: 'Universidad Nacional de Colombia. (2012). Análisis DOFA. ',
      tipo: 'Artículo',
      link:
        'http://www.odontologia.unal.edu.co/docs/claustros-colegiaturas_2013-2015/Guia_Analisis_DOFA.pdf',
    },
    {
      texto:
        'Villanueva. M. (2016). La observación como técnica de recolección de datos.',
      tipo: 'Presentación ',
      link:
        'https://es.slideshare.net/MarluVillanueva/la-observacion-como-tecnica-de-recoleccion-de-datos-69215191',
    },
    {
      texto:
        'Lorete. A. (2011). Análisis de escenarios en entornos de negocio. ',
      tipo: 'Artículo',
      link:
        'https://www.legaltoday.com/legaltech/nuevas-tecnologias/analisis-de-escenarios-en-entornos-de-negocio-una-poderosa-herramienta-para-las-empresas-de-servicios-profesionales-1-2011-08-01/',
    },
    {
      texto: 'Sedigital, (2021). Características de la comunicación asertiva.',
      tipo: 'Sitio web',
      link:
        'https://centropsicologiamurcia.com/blog/caracteristicas-de-la-comunicacion-asertiva/',
    },
    {
      texto:
        'Ministerio del Interior. (s.f.). El enfoque diferencial y étnico en la política pública de víctimas del conflicto armado.',
      tipo: 'Documento',
      link:
        'https://gapv.mininterior.gov.co/sites/default/files/cartilla_enfoque_diferencial_fin_1.pdf',
    },
    {
      texto:
        'Unesco. (s.f.). Artículo 4.1 de la Convención sobre la Protección y la Promoción de la Diversidad de las Expresiones Culturales.',
      tipo: 'Sitio web',
      link: 'https://es.unesco.org/creativity/diversidad-cultural',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Ana María Buitrago Toro',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro de para la Comunicación de la Industria Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
