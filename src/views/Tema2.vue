<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Pilares de la seguridad informática

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Son elementos que comprenden los dominios del sistema y las reglas que se deben seguir para asegurar la información. Estos pilares son el fundamento esencial de cualquier sistema informático, que en sus funciones está la preservación de los datos y la información.

    p.mb-5 El uso de la información pasa a ser uno de los procesos críticos dentro de una organización, ya que salvaguardar la misma es esencial en la mayoría de ocasiones con la continuidad del negocio. Estos pilares no solo garantizan una política de seguridad de la información, sino que abren un espectro mucho más grande que son los planes de recuperación de desastres, que buscan evitar que esto suceda, pero en caso de que llegase a darse esta situación se pueda tener un punto de partida de protocolos a activar para empezar la recuperación del mismo. Vea la descripción de cada uno de estos pilares:

    .row.BGIMG03.p-5
      .col-lg-5
      .col-lg-7(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Disponibilidad") Se refiere a los tiempos en los cuales se establece el acceso al sistema, por ejemplo, 24/7, 5/24, 8/24 etc.<br><br>El acceso a la información está enmarcado en la negociación establecida de uso del sistema. Es decir, se deben establecer los tiempos, horarios y escenarios en los cuales se abre el acceso a la información.<br><br>Un ejemplo de ello es el acceso a Internet o de un aplicativo en particular en una organización. Si los empleados tienen horario de oficina de 08:00 a.m. a 12:00m y 02:00 p.m. a 6:00 p.m., quiere decir que se puede configurar el sistema para que solo sea operable en esa franja horaria y evitar el uso del mismo en horarios no establecidos como laborales, esto garantiza, por ejemplo, realizar copias de seguridad de una manera eficiente y con una integridad de los datos de una manera adecuada ya que se estaría realizando la copia en frío y no en caliente.
          p.text-small(numero="2" titulo="Confidencialidad") Se refiere al acceso que se tendrá a la información y qué medidas de seguridad la manejará, por ejemplo,  usuario y contraseña o medidas biométricas, etc.
          p.text-small(numero="3" titulo="Integridad") Se refiere al método implementado para asegurar que el sistema cumpla con las funciones especificas que debe realizar de manera correcta, por ejemplo, sumar, restar y operaciones en general.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.subir-25.p-4.mb-4
          p Los pilares de la seguridad de la información son una base inicial para entender los niveles de acceso y tratamiento que puede sufrir la información al momento de ser ingresada a un sistema de tratamiento de datos; es importante resaltar que estos pilares aplican para cualquier sistema de información y garantizan que la información sea manejada de una manera adecuada.

    p.mb-5 Los pilares de la información son un eje principal para garantizar la protección no solo de los activos de la organización, sino también se convierten en un instrumento de valoración a los servicios prestados por un sistema a una organización donde la información es protagonista de este proceso. Existen muchos factores que pueden evitar el correcto desempeño de estos pilares, los cuales se pueden ver inmersos en intereses externos o internos que no favorecen la calidad y procesos de negocio que realiza la organización. 

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          h4.mb-2 “Tenemos más de diez mil riesgos diferentes cada año, eso equivale a miles de amenazas supuestamente de alto riesgo a las que debemos responder” 
          span (Ortiz, 2020).


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
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
