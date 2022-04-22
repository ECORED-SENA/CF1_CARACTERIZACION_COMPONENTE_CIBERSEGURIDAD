<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 3
      h1 Navegación segura

    p.mb-5 Internet es un mar de conocimiento e información que millones de personas usan a diario para sus actividades personales o empresariales, pero más allá de la búsqueda y procesamiento de esta información se encuentran con diferentes tipos de técnicas de hacking que colocan en riesgo los datos que utilizan en los diferentes portales y sitios que visitan. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La mayoría de personas realizan transacciones bancarias, consultan redes sociales, compras online, entre otras actividades; pero poco saben del tratamiento que se le puede dar a la información que allí se suministra y cómo se almacena.

    p.mb-5 Es importante tener en cuenta que cuando se ingresa a un portal web o sitio en Internet los datos de navegación y la información que se suministra en el mismo se ve comprometida en todos los sentidos; por ello, es necesario abordar desde las características técnicas hasta las funcionales, como manejar y proteger de estos problemas de seguridad.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 La navegación en los diferentes entornos virtuales

    p.mb-5 Los entornos virtuales comprenden las diferentes plataformas y medios que se utilizan a diario para realizar los procesos de negocio u ocio en particular. Un ejemplo de ello son las redes sociales, plataformas de comercio electrónico, sitios de banca financiera, las computadoras o dispositivos, para poder acceder a estos sitios o entornos virtuales. En la mayoría de ocasiones se debe suministrar información, que como se describió en temas anteriores, puede ser pública, privada o sensible, dependiendo del entorno y situación que se presente. Frente a este aspecto se debe tener en cuenta los siguientes aspectos:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 5.
      span Aspectos importantes al suministrar información

    .row.BGIMG05.mb-5.p-4
      .col-lg-5.mb-4
        p.text-white Es importante tener en cuenta que se debe verificar que el sitio o espacio virtual que se esté accediendo no solo cumpla con protocolos de seguridad sino que adicional a ello, sea verídico y comprobable, es decir, que ese sitio o portal sea legítimo y de la entidad o persona que tiene los derechos legítimos de poseerlo.
      .col-lg-7
      .col-lg-5.mb-5
        .cajon.color-acento-botones.p-4.mb-4
          p.text-white Es una costumbre utilizar enlaces encontrados en correos electrónicos en los cuales no se verifica si el correo electrónico o enlace enviado es el correcto proporcionado por la compañía o persona al que le pertenece, esto se conoce como <em>phishing</em>, que tiene como objetivo capturar información importante de la víctima.

    p.mb-5 


</template>

<script>
export default {
  name: 'Tema3',
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
