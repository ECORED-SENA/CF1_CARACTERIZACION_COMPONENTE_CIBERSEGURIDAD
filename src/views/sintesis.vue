<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 En este componente se abordaron distintas temáticas que iniciaron desde la introducción a la ciberseguridad, pasando por sus componentes, normatividad y pilares de la seguridad de la información, hasta los diferentes entornos virtuales y buenas prácticas en la navegación, tal como lo presenta el siguiente esquema:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 8.
      span Síntesis
    figure(data-aos="fade-right")
      img(src='@/assets/curso/sintesis.svg')

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
