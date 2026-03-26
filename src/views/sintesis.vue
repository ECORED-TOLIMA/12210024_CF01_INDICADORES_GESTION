<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo ofrece una comprensión amplia de los fundamentos necesarios para implementar la medición en las empresas colombianas, integrando aspectos administrativos, estratégicos y técnicos que permiten estructurar una gestión orientada a resultados. Su enfoque permite reconocer cómo las organizaciones, independientemente de su tamaño o sector económico, definen su estructura, establecen procesos y diseñan instrumentos de medición para validar el cumplimiento de sus objetivos.
    p.mb-4 Además, profundiza en la importancia de los indicadores de gestión como herramientas de control administrativo, considerando su clasificación, características y metodología de construcción. Con ello se promueve una gestión basada en datos objetivos que fortalece la competitividad organizacional, mejora la toma de decisiones estratégicas y contribuye al cumplimiento de las metas definidas en cada área de la empresa colombiana.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del componente formativo 1: fundamentos para implementar la medición en las organizaciones. Presenta cuatro ejes: administración organizacional, planeación estratégica, indicadores de gestión y diseño de indicadores, con sus subtemas conectados jerárquicamente para explicar cómo las organizaciones clasifican y usan los indicadores según el desempeño, el nivel de gestión y la naturaleza de la medición, apoyando la toma de decisiones estratégicas en las empresas colombianas. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
