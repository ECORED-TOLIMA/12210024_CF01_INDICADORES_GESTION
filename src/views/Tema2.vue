<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planeación estratégica
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La planeación estratégica es un proceso sistémico mediante el cual la organización es proyectada a los niveles superiores que desea alcanzar, uno de esos niveles puede ser para una empresa comercializadora una mayor participación en el mercado, para una institución dedicada a producir tecnología, este nivel superior o visión puede tener una mayor cobertura a nivel mundial, en una organización social ese nivel puede ser generar la exitosa implementación de emprendimientos comunitarios, entre otros.
    .tarjeta--fondo2.px-5
      .row.justify-content-center.mb-3
            .col-lg-12
              .cajon
                .row.justify-content-center.align-items-center
                  .col-1.col-md-1.mb-1.mb-md-0
                    figure
                      img(src="@/assets/curso/Temas/tema2/img2.png" alt="Icono rendimiento")
                  .col-12.col-md-11
                    p.mb-0 En este proceso se establecen los objetivos a mediano y largo plazo de una organización, se definen las acciones concretas para alcanzarlos y se evalúa el impacto en relación con las metas definidas. Esta proyección organizacional en el tiempo corresponde a los objetivos estratégicos que son desglosados en diferentes niveles con el fin de que sean monitoreados, medidos y alcanzados. 
      p.mb-4 A continuación, se presenta el proceso de planeación estratégica desagregado en los pasos secuenciales a llevar a cabo con el din de realizar una proyección organizacional pertinente.
      .row.justify-content-center.mb-5
        .col-lg-7
          LineaTiempoD.color-secundario
            p(numero="A" titulo="Análisis del Entorno") El análisis del entorno comprende el estudio interno y externo de la organización, donde se evalúan factores como la competencia, la economía, la tecnología y las políticas, mediante herramientas como el FODA o el PESTEL, con el fin de identificar oportunidades y amenazas.
            p(numero="B" titulo="Definir la dirección estratégica") Corresponde a dar dirección a la organización, definiendo con claridad la proyección que se espera alcanzar en un período de tiempo determinado, condensada en la visión, la misión y los objetivos organizacionales.
            p(numero="C" titulo="Establecer objetivos estratégicos y metas") Con base en el direccionamiento estratégico, la organización establece responsables, estrategias, tiempos y recursos para hacer posible la gestión orientada a la proyección estratégica.
            p(numero="D" titulo="Determinar los objetivos por área o departamento") Con base en la planeación estratégica, la organización desagrega los objetivos, los cuales son delegados por áreas o departamentos hasta llegar a la definición de actividades.
            p(numero="E" titulo="Gestionar y monitorear el desempeño organizacional") Corresponde a implementar acciones, operaciones e indicadores para supervisar la ejecución de la estrategia, apoyándose en un cuadro de mando integral.
            p(numero="F" titulo="Seguimiento al plan estratégico") Comprende reuniones y revisiones periódicas para evaluar resultados, identificar obstáculos o desviaciones y ajustar la planeación según los cambios del entorno.
        .col-7.col-lg-3
          figure
            img(src="@/assets/curso/Temas/tema2/img3.png", alt="Imagen decorativa")
    p.mb-4 Estos seis pasos conforman un ciclo dinámico y continuo que vincula la visión organizacional con la acción cotidiana. Su implementación garantiza que cada área, proceso y colaborador trabaje en la misma dirección, aportando al cumplimiento de los objetivos estratégicos. En consecuencia, la planeación estratégica no es un ejercicio puntual sino una práctica permanente que orienta la toma de decisiones y constituye el punto de partida para el diseño e implementación de los indicadores de gestión.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Misión, visión y valores
    .row.justify-content-center.mb-3
      .col-lg-9
        p.mb-4 En la organización, la misión, la visión y los valores son esenciales para construir la filosofía organizacional, ya que definen su identidad propia y orientan el desarrollo organizacional. Asimismo, establecen las reglas, normas y políticas que marcan el comportamiento del equipo de trabajo, constituyendo el marco de acción para todos los miembros de la organización.
        .tarjeta.BG02.br-0.p-4
          .row.justify-content-center.align-items-center.mb-6
            .col-lg-2
              img(src="@/assets/curso/Temas/tema2/img4.png" alt="Icono modelo SECI")
            .col-lg-10
              p.mb-0 Definir estos tres elementos es el punto de partida de la planeación estratégica, puesto que sin una identidad clara es difícil establecer objetivos coherentes, asignar responsabilidades o medir resultados. En consecuencia, la misión, la visión y los valores no son simples declaraciones institucionales, sino el fundamento sobre el cual se construye toda la gestión organizacional y se orientan las decisiones estratégicas, tácticas y operativas.
      
      .col-lg-3.d-none.d-lg-block
        figure
          img(src="@/assets/curso/Temas/tema2/img5.png" alt="Imagen de equipo de trabajo")
    p.mb-4 Los componentes clave de la planeación estratégica son la visión, la misión y los valores, los cuales se presentan a continuación:
    .row.mb-3
      .col-sm-7.col-lg-4.mb-5.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/Temas/tema2/img6.png', alt='Texto que describa la imagen')

          h5.text-center Misión
          p Responde a la razón de ser de la organización, es decir, ¿quiénes son?, ¿qué hace?, ¿cuál es su propósito? y ¿cuál es su compromiso?

      .col-sm-7.col-lg-4.mb-5.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/Temas/tema2/img7.png', alt='Texto que describa la imagen')

          h5.text-center Visión
          p Es la proyección que la organización desea alcanzar en un futuro determinado, teniendo en cuenta el entorno en el que se encuentra y los objetivos que pretende alcanzar.

      .col-sm-7.col-lg-4.mb-5.mb-sm-0
        .tarjeta--boton.color-acento-botones.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/Temas/tema2/img8.png', alt='Texto que describa la imagen')

          h5.text-center Valores
          p Son todas las afirmaciones que identifican y caracterizan la organización, definiendo el marco de acción o políticas dentro de la organización y fuera de ella.
    .row.justify-content-center.mb-3
          .col-lg-12
            .cajon
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0
                  figure
                    img(src="@/assets/curso/Temas/tema2/img9.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 Al establecer la misión, la visión y los valores, la organización define los objetivos organizacionales, los cuales se dividen en objetivos por departamento, proceso y área. A partir de esta desagregación, se identifican acciones específicas que, al ejecutarse de manera eficiente y oportuna, contribuyen al logro de los objetivos de cada área y departamento. En consecuencia, el cumplimiento de estos objetivos aporta al logro de los propósitos organizacionales y a alcanzar la proyección estratégica definida.
    .tarjeta--fondo3.px-5
      p.mb-4 Por esta razón, se presentan a continuación los elementos que integran la planeación estratégica, los cuales definen con claridad el direccionamiento de la organización y crean una identidad propia orientada al logro de sus objetivos:
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.tarjeta--azul-suave.p-4.p-lg-4
            .row.mb-4
              .col-auto
                img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
              .col
                p.mb-0 #[b Misión] 
                | Define la razón de ser de la organización: quiénes son, qué hacen y cuál es su propósito fundamental dentro del entorno económico y social en el que opera.
          
            .row.mb-4
              .col-auto
                img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
              .col
                p.mb-0 #[b Visión:] 
                | Representa la proyección que la organización desea alcanzar en un futuro determinado, orientando sus esfuerzos y decisiones hacia el logro de sus metas estratégicas.
            
            .row.mb-4
              .col-auto
                img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
              .col
                p.mb-0 #[b Análisis FODA] 
                | Herramienta estratégica que permite identificar las fortalezas y debilidades internas de la organización, así como las oportunidades y amenazas del entorno externo.
            
            .row.mb-4
              .col-auto
                img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
              .col
                p.mb-0 #[b Objetivos] 
                | Logros específicos y medibles que la organización se propone alcanzar en un período determinado, alineados con la misión y la visión organizacional.
            
            .row.mb-4
              .col-auto
                img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
              .col
                p.mb-0 #[b Estrategias] 
                | Caminos de acción definidos para alcanzar los objetivos organizacionales, optimizando los recursos disponibles y generando ventajas competitivas sostenibles.
            
            .row.mb-4
              .col-auto
                img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
              .col
                p.mb-0 #[b Tácticas, recursos y capacitación] 
                | Acciones concretas, recursos asignados y procesos de formación que hacen posible la ejecución eficiente de las estrategias definidas en la planeación.
            
            .row
              .col-auto
                img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
              .col
                p.mb-0 #[b Plan de acción] 
                | Documento que consolida las actividades, responsables, tiempos y recursos necesarios para ejecutar las estrategias y alcanzar los objetivos organizacionales.
    .row.justify-content-center.align-items-center.mb-4

      .col-lg-3
        figure
          img(src="@/assets/curso/Temas/tema2/img10.png", alt="Imagen decorativa")
      .col-lg-9
        p.mb-3 Para llevar a cabo el proceso de planeación estratégica es necesario desarrollar las competencias del personal mediante capacitaciones pertinentes. Este proceso conlleva elaborar un plan de acción que estructure de manera clara las actividades, los responsables, los tiempos y los recursos necesarios para su ejecución.
        .row.justify-content-center
          .col-lg-12
            .cajon.color.p-4.col
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0
                  figure
                    img(src="@/assets/curso/Temas/tema2/img11.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 En consecuencia, la participación activa de todos los colaboradores es fundamental, puesto que son ellos quienes, de manera conjunta, determinan los objetivos, las estrategias, las tácticas y los recursos requeridos para alcanzar la proyección estratégica definida por la organización.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Análisis del entorno FODA
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema2/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis FODA es una técnica participativa y herramienta estratégica para diagnosticar la situación real de la organización a partir del análisis interno y externo. El análisis interno permite identificar las fortalezas, es decir, los factores positivos que caracterizan a la organización, así como las debilidades, que corresponden a los aspectos por mejorar. El análisis externo, por su parte, identifica las oportunidades del entorno que pueden aprovecharse y las amenazas, que son los factores potenciales de riesgo que pueden afectar su desempeño.
    p.mb-4 Este método de diagnóstico integral permite definir estrategias que contrarresten las debilidades internas y anticipen las amenazas del entorno. De este modo, la organización se prepara con anticipación para enfrentar los retos que se presenten y tomar decisiones oportunas frente a cualquier imprevisto. A continuación, se ilustra cómo estos cuatro factores interactúan dentro del diagnóstico estratégico:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5
            h5 Figura 2.
            span Componentes del diagnóstico estratégico FODA
        .d-none.d-lg-block
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/Temas/tema2/img13.png', alt='Infografía de matriz RACI')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/Temas/tema2/img13_1.png', alt='Matriz RACI para dispositivos móviles')
    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-4.mb-4.mb-lg-0
        figure
          img.mx-auto.d-block(src="@/assets/curso/Temas/tema2/img14.png" alt="Imagen modelo SECI")
      .col-lg-8
        .cajon
          p.mb-0 La Matriz FODA, también conocida como DAFO o DOFA, es un esquema estructurado en cuatro cuadrantes donde se identifican los factores internos y externos que inciden en la organización. Su propósito es consolidar en un solo instrumento el diagnóstico completo de la empresa, facilitando la definición de estrategias pertinentes para cada situación.
    .titulo.mb-4
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Implementación del FODA
    p.mb-4 La implementación de este diagnóstico estratégico comienza con la participación de los integrantes de la organización, mediante técnicas que permitan recopilar información objetiva y pertinente sobre su situación real. De este modo, se elabora un diagnóstico integral de la empresa desde los aspectos internos y externos, positivos y negativos, que tienen incidencia directa en su desempeño.
    p.mb-3 Con la información recopilada, estructurada y validada en equipo, se procede a clasificarla en la Matriz FODA implementada, como se presenta a continuación:
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 2.
      span Matriz FODA implementada
    .row.mb-4
      .col-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg-naranja.text-white.text-center.h3 Matriz FODA
                th.bg-crema-oscuro
                  p.mb-0 #[b Factores internos:] fortalezas. Capacidades especiales, ventajas
                th.bg-crema-oscuro
                  p.mb-0 #[b Factores internos:] debilidades. Factores que limitan el desempeño y las
            tbody
              tr
                th.bg-crema-claro.text-start
                  p.mb-0 #[b Factores externos:] oportunidades. Factores del entorno que pueden
                td.bg-white
                  b Estrategia FO (Ofensiva): 
                  | usar fortalezas para aprovechar oportunidades.
                td.bg-white
                  b Estrategia DO (Adaptativa): 
                  | superar debilidades aprovechando
              tr
                th.bg-crema-claro.text-start
                  p.mb-0 #[b Factores externos:] amenazas. Factores del entorno que pueden perjudicar el
                td.bg-white
                  b Estrategia FA (Defensiva): 
                  | usar fortalezas para mitigar amenazas.
                td.bg-white
                  b Estrategia DA (Supervivencia): 
                  | reducir debilidades y evitar amenazas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p.mb-3 Como se muestra en la Tabla 2, a partir del análisis objetivo de los factores internos y externos se definen las estrategias FO, DO, FA y DA, determinando los caminos de acción para superar debilidades, contrarrestar amenazas, potenciar fortalezas y aprovechar oportunidades, lo que genera mayor valor organizacional en la evaluación de los resultados obtenidos.
        .row.justify-content-center
          .col-lg-12
            .cajon.color-acento-botones.p-4.col(style="background-color: #91B9D1;")
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0
                  figure
                    img(src="@/assets/curso/Temas/tema2/img15.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 En conclusión, el diagnóstico FODA es la herramienta más apropiada para la planeación estratégica, ya que permite realizar un diagnóstico preciso, prevenir riesgos y tomar decisiones fundamentadas. Con este diagnóstico como base, la organización está en condiciones de definir sus objetivos estratégicos, tácticos y operativos con mayor coherencia y precisión.
      .col-lg-3
        figure
          img(src="@/assets/curso/Temas/tema2/img16.png", alt="Imagen decorativa")
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Objetivos estratégicos, tácticos y operativos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure
          img(src="@/assets/curso/Temas/tema2/img17.png", alt="Imagen decorativa")
      .col-lg-9
        p.mb-3 Los objetivos estratégicos son logros definidos en el nivel estratégico que una organización se propone alcanzar en un período específico. Están diseñados para materializar la visión, la misión y los valores de la empresa, y sirven como guía para la definición de recursos y su implementación.
        .row.justify-content-center
          .col-lg-12
            .cajon
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0
                  figure
                    img(src="@/assets/curso/Temas/tema2/img18.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 Al establecer los objetivos estratégicos, se alinea a toda la organización hacia un futuro deseado, determinando prioridades claras y asegurando que todos los equipos trabajen en conjunto para alcanzar metas comunes. En consecuencia, estos objetivos contribuyen al crecimiento organizacional, ya que permiten medir el éxito de la estrategia mediante indicadores clave de desempeño.
    p.mb-4 Para que los objetivos cumplan su propósito dentro de la organización, es necesario que estén bien formulados y respondan a criterios técnicos que garanticen su validez, pertinencia y seguimiento. Un objetivo mal definido puede generar confusión, dispersar esfuerzos y dificultar la medición de resultados. En consecuencia, los objetivos se clasifican en tres niveles según su alcance y horizonte de tiempo: estratégicos, tácticos y operativos. A continuación, se describe cada uno con sus características:
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Objetivos estratégicos")
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/Temas/tema2/img19.png', alt='Imagen representativa de estrategia')
          .col-md-6.mb-4.mb-md-0
            p Las características clave son los criterios que determinan si un objetivo estratégico está bien formulado y puede ser gestionado, medido y alcanzado de manera efectiva dentro de la organización. A continuación, se presenta cada uno de ellos:
            ul.lista-ul
              li #[b • Claridad:] el objetivo debe ser específico y comprensible para todos los niveles de la organización.
              li #[b • Coherencia:] el objetivo debe estar alineado con la visión y la misión de la organización.
              li #[b • Medible:] es necesario establecer indicadores que permitan evaluar su progreso y nivel de cumplimiento. 
              li #[b • Alcanzable:] el objetivo debe ser realista según las capacidades y los recursos disponibles en la organización. 
              li #[b • Temporalidad:] el objetivo debe estar definido dentro de un marco de tiempo claro y determinado.
            p.mb-0 Los objetivos estratégicos son esenciales en cualquier industria o sector donde se busque crecimiento sostenible y alineación organizacional. En general, son herramientas universales que guían a las organizaciones hacia el cumplimiento de sus metas a largo plazo.

      .py-3.py-md-4(titulo="Objetivos tácticos")
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/Temas/tema2/img20.png', alt='Imagen representativa de táctica')
          .col-md-6
            p Son metas específicas de corto plazo, establecidas por las gerencias medias o de áreas y departamentos de la organización, para ejecutar los planes estratégicos generales de una organización. Algunas de sus características son:
            ul.lista-ul
              li #[b • A corto/mediano plazo:] generalmente se enfocan en acciones inmediatas o trimestrales.
              li #[b • Alineados con la estrategia:] contribuyen directamente al cumplimiento de los objetivos estratégicos de la empresa.
              li #[b • Operativos y enfocados en la acción:] definen el qué, cómo, cuándo y quién realizará las tareas.
              li #[b • Departamentales o funcionales:] suelen estar dirigidos a áreas específicas finanzas, mercadeo, recursos humanos, entre otras.
              li #[b • Alcanzables y realistas:] se diseñan de acuerdo con los recursos y capacidades actuales de la organización.
            p.mb-0 Los objetivos tácticos permiten adaptar el plan general a las circunstancias cambiantes del entorno, convirtiendo la estrategia a largo plazo en acciones tangibles en un tiempo menor a 1 año.

      .py-3.py-md-4(titulo="Objetivos operativos")
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/Temas/tema2/img21.png', alt='Imagen representativa de operación')
          .col-md-6.mb-4.mb-md-0
            p Son metas específicas, medibles y de corto plazo establecidas como inmediatas que pueden ser diarias, semanales, mensuales, establecidas por la gerencia media para mejorar la eficiencia, productividad y rendimiento constante de una organización. Sus características son:
            ul.lista-ul
              li #[b • Medibles:] utilizan métricas claras para determinar el nivel de logro, cuantificando resultados como porcentaje, tiempo o cantidad.
              li #[b • Corto plazo:] se enfocan en alcanzar metas dentro de un periodo inmediato.
              li #[b • Orientados a la acción:] desglosan las metas estratégicas en tareas factibles y delegables a equipos o departamentos.
              li #[b • Viables y realistas:] deben ser alcanzables considerando los recursos humanos, técnicos y presupuesto disponibles.
              li #[b • Alineados estratégicamente:] apoyan directamente la ejecución de los objetivos tácticos y estratégicos más amplios de la empresa.
              li #[b • Observables:] describen conductas o resultados directos que pueden verificarse.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Gestión por procesos
    .row.justify-content-center
      .col-lg-9
        p.mb-4 Antes de definir la gestión de procesos, es indispensable conocer el concepto de proceso. Según la norma ISO 9000:2005, un proceso se define como el conjunto de actividades mutuamente relacionadas o que interactúan, las cuales transforman elementos de entrada en elementos de salida y resultados.
        .row.justify-content-center.align-items-center.mb-5.color
          .col-4.col-lg-3.mb-3.mb-lg-0
            figure
              img.mx-auto.d-block(src="@/assets/curso/Temas/tema2/img22.png" alt="Imagen modelo SECI")
          .col-lg-9
            .cajon
              p.mb-0 Asimismo, el proceso puede entenderse como una serie ordenada y secuencial de actividades que se realizan para obtener un resultado con valor agregado que cubra las necesidades de los clientes y de los grupos de interés, de acuerdo con la misión de la organización. Los elementos fundamentales del proceso son las entradas, las actividades, las interacciones y las salidas.
      
      .col-lg-3.d-none.d-lg-block
        figure
          img(src="@/assets/curso/Temas/tema2/img23.png" alt="Imagen de equipo de trabajo")
    .row.justify-content-center.align-items-center.mb-5.p-4

      .col-lg-4
        figure
          img(src="@/assets/curso/Temas/tema2/img24.png", alt="Imagen decorativa")
      .col-lg-8
        p.mb-3 La gestión por procesos, conocida como BPM (por sus siglas en inglés, #[i Business Process Management]), es un enfoque administrativo que organiza a la empresa a través de actividades interrelacionadas, orientadas a crear valor para el cliente final y lograr objetivos estratégicos. Este enfoque busca la eficiencia operativa, la mejora continua y la eliminación de barreras funcionales, tratando la organización como un flujo horizontal de trabajo.
        .row.justify-content-center
          .col-lg-12
            .cajon
              .row.justify-content-center.align-items-center
                .col-1.col-md-1.mb-1.mb-md-0
                  figure
                    img(src="@/assets/curso/Temas/tema2/img25.png" alt="Icono rendimiento")
                .col-12.col-md-11
                  p.mb-0 Una organización estructura su gestión a través de diferentes tipos de procesos, cada uno con un rol específico dentro del sistema. A continuación, se presenta la red de procesos del SENA como ejemplo que ilustra cómo se organizan los procesos estratégicos, de soporte y misionales dentro de una institución:
    .row.justify-content-center.mb-5
      .col-lg-7
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Procesos estratégicos")
            .col-md-12
              p.mb-3 Son los procesos responsables de definir el rumbo de la organización y garantizar su sostenibilidad a largo plazo. Entre ellos se encuentran:
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Direccionamiento estratégico.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión del talento humano.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de las tecnologías de la información.]

          .row(numero="2" titulo="Procesos de soporte")
            .col-md-12
              p.mb-3 Son los procesos que brindan apoyo a la operación de la organización, garantizando las condiciones necesarias para su funcionamiento. Entre ellos se encuentran:
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de infraestructura y logística.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión contractual.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de comunicaciones.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión documental]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de evaluación y control.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión jurídica.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de recursos financieros.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Relacionamiento empresarial y gestión del cliente.]

          .row(numero="3" titulo="Procesos misionales")
            .col-md-12
              p.mb-3 Son los procesos que materializan el objeto social de la organización y generan valor directo para sus grupos de interés. Entre ellos se encuentran:
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de emprendimiento y empresariado.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de Formación Profesional Integral.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de Certificación de Competencias Laborales.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de la Innovación y la Competitividad.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de Empleo, Análisis Organizacional y Empleabilidad.]
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col 
                  p #[b Gestión de Instancias de Concertación y Competencias Laborales.]
      
      .col-lg-3.d-none.d-lg-block
        figure
          img(src="@/assets/curso/Temas/tema2/img26.png", alt="Imagen decorativa procesos")
    .row.justify-content-center.align-items-center.mb-5.p-4
      p.mb-0 La gestión por procesos se compone de elementos interrelacionados que hacen posible su funcionamiento y orientan la organización hacia la mejora continua. Cada elemento cumple una función específica dentro del proceso y contribuye a que las actividades se ejecuten de manera ordenada, eficiente y alineada con los objetivos organizacionales. Comprender estos elementos permite identificar con claridad las entradas que se requieren, las actividades que se deben ejecutar, los recursos necesarios y los resultados esperados en cada etapa del proceso. De este modo, la organización cuenta con una base estructurada para medir, controlar y optimizar su desempeño de forma continua.
    .row.mb-5
      .col-1.col-lg-1.mb-1.mb-lg-0
        figure
          img.mx-auto.d-block(src="@/assets/curso/Temas/tema2/img27.png" alt="Imagen modelo SECI")
      .col-lg-11
        .cajon
          p.mb-0 Asimismo, este enfoque se distingue por un conjunto de características que evidencian su integralidad y su orientación estratégica. Dichas características determinan cómo opera la gestión por procesos en la práctica y por qué se convierte en un modelo eficaz para administrar, mejorar y alinear el desempeño organizacional con los objetivos definidos. A continuación, se presentan los elementos y las características fundamentales de la gestión por procesos:
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Elementos de la gestión por procesos")
        .row.align-items-center.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/Temas/tema2/img28.png', alt='Imagen representativa de estrategia')
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Son los componentes esenciales que estructuran y hacen posible la ejecución de cada proceso. Su correcta articulación garantiza actividades ordenadas, eficientes y orientadas a la mejora continua. Entre los principales elementos se encuentran:
            ul.lista-ul
              li #[b • Entradas (#[i Inputs]):] materias primas, información o recursos necesarios para iniciar el proceso.
              li #[b • Actividades:] tareas secuenciales que transforman las entradas en resultados esperados.
              li #[b • Salidas (#[i Outputs]):] producto o servicio final entregado al cliente interno o externo.
              li #[b • Recursos:] personas, tecnología y materiales utilizados durante el proceso.
              li #[b • Indicadores de rendimiento (#[i KPIs]):] métricas para medir eficiencia, calidad y cumplimiento de objetivos.
              li #[b • #[i Process Owner] (responsable del proceso):] persona encargada de la gestión, diseño y mejora.

      .py-3.py-md-4(titulo="Características de la gestión por procesos")
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/Temas/tema2/img29.png', alt='Imagen representativa de táctica')
          .col-md-6
            p Las características del BPM (#[i Business Process Management]) reflejan la integralidad de su interacción y su orientación permanente hacia el logro de los objetivos estratégicos. Reconocerlas permite comprender por qué este enfoque optimiza el funcionamiento organizacional. Entre las principales características se encuentran:
            ul.lista-ul
              li #[b • Orientación al cliente:] todos los esfuerzos se enfocan en satisfacer sus necesidades.
              li #[b • Transversalidad:] cruza funcionalmente los departamentos, mejorando la colaboración.
              li #[b • Mejora continua:] se basa en el ciclo PHVA para optimizar resultados constantemente.
              li #[b • Medible:] se enfoca en resultados cuantitativos, calidad y cumplimiento de metas.
              li #[b • Alineación estratégica:] conecta la operación diaria con las metas a largo plazo.
              li #[b • Visibilidad:] facilita la identificación de ineficiencias en el funcionamiento organizacional.
    p.mb-5 Además de los elementos y características de la gestión por procesos sustituye la jerarquía tradicional por una estructura más ágil, facilitando el cambio y aumentando la productividad. Para ello, se utilizan herramientas y técnicas de modelado de procesos, automatización y monitoreo de los mismos donde se encuentran diferentes tipos de procesos de gestión como:
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--azul-suave.p-4.p-lg-4
          .row.align-items-center.justify-content-center
            .col-lg-7.mb-4.mb-lg-0
              //- Lista de gestiones con icono
              .row.mb-3.align-items-center
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col
                  p.mb-0 #[b Gestión de #[i marketing.]]
              
              .row.mb-3.align-items-center
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col
                  p.mb-0 #[b Gestión financiera.]
              
              .row.mb-3.align-items-center
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col
                  p.mb-0 #[b Gestión de producción.]
              
              .row.mb-3.align-items-center
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col
                  p.mb-0 #[b Gestión de inventarios.]
              
              .row.mb-3.align-items-center
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col
                  p.mb-0 #[b Gestión de talento humano.]
              
              .row.mb-3.align-items-center
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col
                  p.mb-0 #[b Gestión de la información.]
              
              .row.mb-3.align-items-center
                .col-auto
                  img(src='@/assets/curso/Temas/tema1/img18.png', style="width: 20px")
                .col
                  p.mb-0 #[b Gestión presupuestal, entre otros.]

            .col-lg-5.col-10
              figure
                img(src='@/assets/curso/Temas/tema2/img30.png', alt='Imagen de personas trabajando en un almacén')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
