<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 El componente formativo “Introducción a la ciberseguridad y delitos informáticos” pretende brindar los conocimientos iniciales para realizar una adecuada comprensión sobre la caracterización de los componentes de la ciberseguridad en un ambiente empresarial y productivo. A continuación, se explicarán las temáticas a desarrollar y la importancia de las mismas:
    
    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8P9qsE9F3kY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
     
    .bloque-texto-g.color-acento-contenido.item-left.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-5(data-aos="fade-left")
        p.my-5.mb-5 Se espera que al finalizar este componente tenga la habilidad para identificar y aplicar los pilares de la seguridad informática, manejar la normatividad de la ciberseguridad y aplicar prácticas de navegación segura.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
