<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar el grado de apropiación de los conceptos clave sobre fundamentos de la administración, planeación estratégica e indicadores de gestión.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la administración?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas para controlar el presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Técnica para calcular la rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Método exclusivo de gestión de personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Proceso de planear, organizar, dirigir y controlar recursos para alcanzar objetivos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La administración integra planear, organizar, dirigir y controlar; las cuatro funciones clave orientadas al logro de los objetivos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué buscaba la Teoría Científica de Taylor (1903)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Optimizar el trabajo del obrero y eliminar la improvisación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Promover la autorrealización del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Centralizar el poder en una sola jerarquía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantizar la participación democrática del empleado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Taylor buscaba optimizar tiempos y movimientos para aumentar la eficiencia productiva y eliminar la improvisación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál función administrativa verifica que lo ejecutado cumpla lo planeado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Planeación.', esCorrecta: false },
            { id: 'b', texto: 'Organización.', esCorrecta: false },
            { id: 'c', texto: 'Dirección.', esCorrecta: false },
            { id: 'd', texto: 'Control.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! El control evalúa resultados, implementa indicadores y toma decisiones correctivas oportunas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué propuso Max Weber con la Teoría de la Burocracia (1905)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Orientar la empresa hacia las necesidades del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Optimizar tiempos y movimientos en la producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un sistema centralizado en jerarquía, con división de responsabilidades y especialización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Adaptar la estructura organizacional al entorno externo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Weber propuso una jerarquía centralizada con normas claras, división de responsabilidades y especialización del trabajo como base del orden organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'En Colombia, ¿qué tipo de empresa la constituye una sola persona con responsabilidad sobre su patrimonio?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sociedad Anónima (S.A.).', esCorrecta: false },
            {
              id: 'b',
              texto: 'Sociedad por Acciones Simplificada (SAS).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empresario individual o autónomo.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Sociedad Limitada (Ltda.).', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El empresario individual responde con su patrimonio personal; es ideal para actividades de pequeña escala.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Según el Decreto 957 de 2019, ¿cómo se clasifica el tamaño de una empresa en Colombia?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Por capital social registrado en Cámara de Comercio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Por número de empleados únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Por antigüedad y nivel de exportaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Por rangos de UVT según el sector económico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Desde 2019, la clasificación usa rangos de UVT diferenciados para manufactura, servicios y comercio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué elemento de la planeación estratégica define la razón de ser de la organización?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La visión.', esCorrecta: false },
            { id: 'b', texto: 'Los valores corporativos.', esCorrecta: false },
            { id: 'c', texto: 'La misión.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Los objetivos estratégicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La misión responde a ¿quiénes somos? y ¿cuál es nuestro propósito?, siendo el pilar de la planeación estratégica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'En el análisis FODA, ¿qué factores internos se evalúan?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Oportunidades y amenazas del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tendencias del mercado y competidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Políticas gubernamentales y regulaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fortalezas y debilidades propias de la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis interno del FODA identifica las fortalezas que potencian el desempeño y las debilidades que lo limitan.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué objetivos traducen la estrategia en acciones concretas para áreas como finanzas o talento humano?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Objetivos tácticos.', esCorrecta: true },
            { id: 'b', texto: 'Objetivos operativos.', esCorrecta: false },
            { id: 'c', texto: 'Objetivos misionales.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Objetivos estratégicos de largo plazo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los objetivos tácticos convierten la estrategia en acciones concretas de corto y mediano plazo por área.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Según la norma ISO 9001, ¿qué es un proceso?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El organigrama que refleja la jerarquía empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conjunto de recursos y actividades que transforman entradas en salidas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un informe de resultados elaborado por la gerencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El manual de funciones de cada cargo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! ISO 9001 define el proceso como la interacción de recursos y actividades que generan salidas con valor añadido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué es un indicador de gestión?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informe narrativo mensual del área de auditoría.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presupuesto asignado a cada departamento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Instrumento que mide el comportamiento de un proceso frente a una meta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Política que regula el comportamiento de los empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los indicadores miden el comportamiento de un proceso comparándolo con metas definidas, siendo la base del control organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de indicador mide la relación entre resultados obtenidos y recursos utilizados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eficiencia.', esCorrecta: true },
            { id: 'b', texto: 'Eficacia.', esCorrecta: false },
            { id: 'c', texto: 'Calidad.', esCorrecta: false },
            { id: 'd', texto: 'Capacidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La eficiencia evalúa cuántos recursos (tiempo, costo, personal) se usaron para obtener un resultado determinado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál característica exige que un indicador tenga marcos de tiempo definidos para su análisis?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pertinencia.', esCorrecta: false },
            { id: 'b', texto: 'Oportunidad.', esCorrecta: true },
            { id: 'c', texto: 'Confiabilidad.', esCorrecta: false },
            { id: 'd', texto: 'Simplicidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La oportunidad garantiza que el indicador cuente con períodos específicos de análisis para no afectar la calidad de sus resultados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es el propósito principal de implementar indicadores en una organización?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cumplir requisitos legales del Gobierno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar las reuniones de seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar informes para entes de control.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Apoyar la toma de decisiones con datos objetivos y mejorar procesos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los indicadores permiten decisiones basadas en datos reales, detectar desviaciones y alinear el trabajo con los objetivos estratégicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué principio del Ciclo de Deming (PHVA) resalta la importancia de la medición?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No se puede planear lo que no se haya ejecutado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No se puede mejorar sin aprobación de la gerencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No se puede medir lo que ya fue documentado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No se puede controlar lo que no se haya medido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El PHVA establece que sin medición no hay control, y sin control no hay mejora posible.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál es un ejemplo de indicador de recursos humanos?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tiempo promedio de entrega al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tasa de rotación de personal.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Margen de utilidad neta.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Porcentaje de productos defectuosos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La tasa de rotación mide la retención del talento y el clima laboral, clave en la gestión del desempeño.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la estructura correcta para formular un indicador de gestión?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Meta + presupuesto + tiempo de ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Objetivo + cifras + área responsable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sujeto + verbo en participio, con descriptores de contexto y período.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Verbo en infinitivo + cuantificador + nombre del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La estructura invierte el orden del objetivo: sujeto + verbo en participio, más descriptores de contexto y período, sin valores numéricos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'En la ficha técnica del indicador, ¿qué representa el denominador de la fórmula?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El resultado real del período medido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La periodicidad de aplicación del indicador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El parámetro o estándar contra el cual se compara el resultado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El nombre del responsable de calcularlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El denominador es el total planeado o esperado que sirve de referencia para calcular el nivel de cumplimiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuántos indicadores por área recomienda el componente formativo para una medición efectiva?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un único indicador global integrado.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Mínimo veinte por área.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Entre 8 y 10, asegurando al menos uno por resultado esperado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo tres indicadores financieros por área.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Entre 8 y 10 indicadores por área garantizan que cada resultado tenga al menos uno que lo evalúe.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el rol de los indicadores como herramientas de control administrativo?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar los contratos con proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Revelar resultados en tiempo real y orientar acciones correctivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluar el desempeño solo al cierre del año.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Apoyar decisiones basadas solo en experiencia gerencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los indicadores revelan resultados en tiempo real, comparan lo ejecutado con lo planeado y orientan decisiones correctivas oportunas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
