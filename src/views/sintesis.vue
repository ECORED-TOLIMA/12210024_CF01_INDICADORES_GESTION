<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Indicadores de gestión.
      span Síntesis: Fndamentos para implementar la medición en las organizaciones.
    p.mb-4 Este componente formativo ofrece una comprensión amplia de los fundamentos necesarios para implementar la medición en las empresas colombianas, integrando aspectos administrativos, estratégicos y técnicos que permiten estructurar una gestión orientada a resultados. Su enfoque permite reconocer cómo las organizaciones, independientemente de su tamaño o sector económico, definen su estructura, establecen procesos y diseñan instrumentos de medición para validar el cumplimiento de sus objetivos.
    p.mb-4 Además, profundiza en la importancia de los indicadores de gestión como herramientas de control administrativo, considerando su clasificación, características y metodología de construcción. Con ello se promueve una gestión basada en datos objetivos que fortalece la competitividad organizacional, mejora la toma de decisiones estratégicas y contribuye al cumplimiento de las metas definidas en cada área de la empresa colombiana.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
