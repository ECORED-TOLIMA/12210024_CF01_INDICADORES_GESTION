<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
  
    p Este componente presenta los aspectos esenciales para la gestión organizacional a partir del conocimiento de la administración como ciencia que direcciona y estructura las empresas, aportando permanentemente en su consolidación y expansión, lo que implica realizar acciones a partir de los objetivos establecidos, evaluar los resultados y validar su efectividad. Esto es posible, gracias a los indicadores de gestión, los cuales son instrumentos que permiten medir los resultados obtenidos como consecuencia de las diferentes decisiones implementadas. Está orientado al reconocimiento de la empresa, la administración como fundamento cohesionador, la organización por procesos y procedimientos permitiendo así establecer con claridad los objetivos a alcanzar por áreas de trabajo y definir los instrumentos de medición que permitirán validar si la gestión implementada es correcta, o si se requiere ajustes para alcanzar lo propuesto, conduciendo de esta manera a la toma de decisiones.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure
          img(src="@/assets/curso/Temas/tema1/img1.png", alt="Imagen decorativa")

      .col-lg-9
        .tarjeta.cajon.color-acento-botones.p-4.col
          .row.justify-content-center.align-items-center
            .col-lg-1
              figure
                img(src="@/assets/curso/Temas/tema1/img2.svg" alt="Icono rendimiento")
            .col-lg-11
              p.mb-0 El propósito de este componente es fortalecer las competencias en la gestión administrativa a través de la implementación de los indicadores de gestión, lo cual inicia con un proceso de fundamentación administrativa hasta llegar al reconocimiento del proceso de su creación o diseño, aspecto crítico en la implementación y comprensión de los indicadores.
        .py-3
          p.mb-3 El desarrollo de estas temáticas se aborda mediante un enfoque teórico-práctico que permite comprender los fundamentos, aplicar metodologías de análisis e implementar estrategias para el diseño, validación y uso de los indicadores de acuerdo con el tipo de actividad y de la organización empresarial.
          p.mb-0 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1346" height="757" src="https://www.youtube.com/embed/BPEm300HKyk" title="#[i Frontend] con #[i HTML]5, #[i CSS] y #[i JSS]: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
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
