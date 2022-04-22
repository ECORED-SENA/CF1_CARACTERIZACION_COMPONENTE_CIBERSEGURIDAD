export default {
  global: {
    componenteFormativo:
      'Introducción a la ciberseguridad y delitos informáticos',
    descripcionCurso:
      'En este componente formativo se tratarán los temas de normatividad en la ciberseguridad, pilares de la seguridad informática y buenas prácticas en la navegación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
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
        titulo: 'Componentes y normatividad asociados a la ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normatividad aplicada a la ciberseguridad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Componentes de la ciberseguridad',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pilares de la seguridad informática',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Navegación segura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'La navegación en los diferentes entornos virtuales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Protocolos aplicados para una navegación segura',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Buenas prácticas al momento de navegar en la Internet',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  complementario: [
    {
      texto: 'Componentes y normatividad asociados a la ciberseguridad',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_elibro_books_ELB40458',
    },
    {
      texto: 'Normatividad aplicada a la ciberseguridad',
      tipo: 'Presentación',
      descarga: 'https://www.oas.org/juridico/spanish/cyber/cyb8_col.pdf',
    },
    {
      texto: 'Pilares de la seguridad informática',
      tipo: 'Artículo',
      descarga:
        'http://repository.unipiloto.edu.co/bitstream/handle/20.500.12277/2821/Trabajo%20de%20grado.pdf?sequence=1&isAllowed=y',
    },
    {
      texto: 'Buenas prácticas al momento de navegar en la Internet',
      tipo: 'Página web',
      descarga: 'https://transparencyreport.google.com/safe-browsinzzg/search',
    },
  ],
  glosario: [
    {
      termino: 'Ciberseguridad',
      significado:
        'Son todos los protocolos y políticas que se implementan para realizar un uso adecuado de la tecnología, lo cual pretende evitar que la información y los sistemas informáticos sean vulnerados.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Proveer mecanismos de autenticación para garantizar que la información solo será accedida por quien tenga el legítimo derecho a accederla.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'Establecer los tiempos en los cuales la información estará disponible, por ejemplo, 24/7, 5/24, entre otros.',
    },
    {
      termino: 'Entornos virtuales',
      significado:
        'Es un espacio cibernético en el cual se ejecuta una aplicación o conjunto de aplicaciones informáticas, que debe proporcionar los mecanismos necesarios para su acceso y manejo adecuado.',
    },
    {
      termino: 'Información privada',
      significado:
        'Conjunto de datos que puede contener componentes específicos sobre la información personal de un ciudadano, y por encontrarse en un ámbito privado, solo puede ser obtenida y ofrecida por orden de autoridad judicial en el cumplimiento de sus funciones.',
    },
    {
      termino: 'Información pública',
      significado:
        'Es aquella que puede ser almacenada y tratada con poca restricción en un sistema informático.',
    },
    {
      termino: 'Información sensible o confidencial',
      significado:
        'Es una clasificación específica de la información privada de un individuo, la cual puede generar momentos de peligro o de ausencia de seguridad para su integridad física o financiera.',
    },
    {
      termino: 'Integridad',
      significado:
        'Método o manera en la cual será accedida la información y qué procesos internos debe llevar a cabo.',
    },
    {
      termino: '<em>Phishing</em>',
      significado:
        'Técnica utilizada para hacerse pasar por una entidad de confianza y solicitar información a los usuarios de estos servicios, y así engañar a la víctima para que acceda a sitios o portales para suministrar información de cuentas bancarias, usuarios, contraseñas, entre otro tipo de información.',
    },
    {
      termino: 'Políticas de seguridad',
      significado:
        'Una política de seguridad es la manera en la que se establecen las reglas y mecanismos para la protección y manejo de la información en una organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Conpes 3701. (2011). Lineamientos de política para ciberseguridad y ciberdefensa.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      referencia:
        'Ortiz, A. (2020). ¿Cuáles son los tres pilares de la seguridad informática? HostDimeBlog.',
      link:
        'https://www.hostdime.com.pe/blog/cuales-son-los-tres-pilares-de-la-seguridad-informatica/',
    },
    {
      referencia:
        'Policía Nacional. (2014). Ciberseguridad entorno colombiano.',
      link: 'https://www.oas.org/juridico/spanish/cyber/cyb8_col.pdf',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
