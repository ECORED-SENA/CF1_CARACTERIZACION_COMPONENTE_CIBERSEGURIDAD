<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 3
      h1 Navegación segura

    p.mb-5 Internet es un mar de conocimiento e información que millones de personas usan a diario para sus actividades personales o empresariales, pero más allá de la búsqueda y procesamiento de esta información se encuentran con diferentes tipos de técnicas de hacking que colocan en riesgo los datos que utilizan en los diferentes portales y sitios que visitan. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
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

    .row.BGIMG05.mb-5.p-4(data-aos="fade-left")
      .col-lg-5.mb-4(data-aos="fade-right")
        p.text-white Es importante tener en cuenta que se debe verificar que el sitio o espacio virtual que se esté accediendo no solo cumpla con protocolos de seguridad sino que adicional a ello, sea verídico y comprobable, es decir, que ese sitio o portal sea legítimo y de la entidad o persona que tiene los derechos legítimos de poseerlo.
      .col-lg-7
      .col-lg-5.mb-5(data-aos="fade-right")
        .cajon.color-acento-botones.p-4.mb-4
          p.text-white Es una costumbre utilizar enlaces encontrados en correos electrónicos en los cuales no se verifica si el correo electrónico o enlace enviado es el correcto proporcionado por la compañía o persona al que le pertenece, esto se conoce como <em>phishing</em>, que tiene como objetivo capturar información importante de la víctima.

    p.mb-5 Se comprende como entorno virtual a todo aquel proceso que utiliza medios tecnológicos para el procesamiento y manejo de la información, los cuales son utilizados en los procesos de negocio y público en general. Estos sistemas, en la mayoría de ocasiones, se encuentran instalados en servidores y equipos que centralizan la información, es decir, se encuentran con acceso a nivel mundial, para ser precisos Internet. <span style="color:#6D05F7 !important; font-weight: bold;">Al estar expuestos al acceso mundial se convierten en una ventaja para las personas que los utilizan, pero también en una amenaza para los más descuidados</span>. En el siguiente video se explica la técnica de fraude más conocida como <em>phishing</em>:

    figure.mb-5
      .video(data-aos="fade-right")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
     
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Protocolos aplicados para una navegación segura

    p.mb-5 Los entornos virtuales comprenden las diferentes plataformas y medios que se utilizan a diario para realizar los procesos de negocio u ocio en particular. Un ejemplo de ello son las redes sociales, plataformas de comercio electrónico, sitios de banca financiera, las computadoras o dispositivos, para poder acceder a estos sitios o entornos virtuales. En la mayoría de ocasiones se debe suministrar información, que como se describió en temas anteriores, puede ser pública, privada o sensible, dependiendo del entorno y situación que se presente. Frente a este aspecto se debe tener en cuenta los siguientes aspectos:

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Los protocolos de navegación segura aplicados van desde configuraciones del sistema, hasta la aplicación de modelos informáticos que garanticen el acceso de los diferentes sitios y portales de Internet, sin necesidad de comprometer la información de los usuarios de los mismos; dichos protocolos permiten minimizar los riesgos de ser víctimas de ataques informáticos, pero siempre se debe tener en cuenta el factor humano, quien es el usuario que utiliza el sistema.

    p.mb-5 Por otra parte, los protocolos de navegación segura incluyen una verificación por parte del usuario donde incluye tanto software como <em>hardware</em>, es decir, uno de los puntos importantes para que esto se convierta en una política de uso de la información es verificando los siguientes componentes:
  
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-2.mb-4.mb-md-0(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img04.svg')
            .col-md-1
            .col-md-8.mb-4.mb-md-0(data-aos="fade-left")
              p Se debe verificar que la conexión establecida para realizar la navegación venga de una fuente fiable, es decir, auténtica, no es recomendable realizar conexión a conexiones de dudosa procedencia o que carezcan de los lineamientos de seguridad como clave de acceso y autenticación, abstenerse de conectarse a redes de libre acceso.
          .row.justify-content-center.align-items-center
            .col-md-8.mb-4.mb-md-0(data-aos="fade-right")
              p Luego se debe revisar que en la barra de navegación aparezca la sigla https, esto indica que la conexión está protegida por medio de un protocolo de seguridad como se ilustra en la imagen 16, esto permite cifrar la conexión y evitar problemas de seguridad al usuario de la página.
            .col-md-1
            .col-md-2.mb-4.mb-md-0(data-aos="fade-left")
              img(src='@/assets/curso/tema3/img05.svg')
          .row.justify-content-center.align-items-center
            .col-md-2.mb-4.mb-md-0(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img06.svg')
            .col-md-1
            .col-md-8.mb-4.mb-md-0(data-aos="fade-left")
              p Este protocolo de seguridad permite que la información esté protegida y adicional a ello, garantiza un nivel de confianza en el sitio que está ingresando.

    separador

     #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Buenas prácticas al momento de navegar en la Internet

    p.mb-5 De la navegación segura existen muchas técnicas, procedimientos y software que permiten garantizar que esta se dé dentro de los procesos de navegación en la Internet, pero se debe también tener en cuenta que la navegación segura involucra como actor del proceso al usuario que utiliza el sistema, ya que es quien da las órdenes a la aplicación para que realice las funciones requeridas. Siendo así, vea cómo se presentan algunos métodos comunes: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Modo incógnito o modo seguro")
        .col-md-11.mb-4.mb-md-0(data-aos="fade-right")
          p Uno método más común es utilizar el modo incógnito o modo seguro en el navegador, el cual evita que los rastros llamados cookies, que son el rastro que van dejando las páginas navegadas en Internet, los cuales permite que las páginas o sitios puedan ser visitados con mayor rapidez; sin embargo, este rastro puede ser utilizado, ya que por ejemplo muchas veces las personas guardan contraseñas y datos registrados en formularios que dejan almacenados. Esto puede ser utilizado luego para cometer algún delito informático. 
          p.mb-4 <b>Una protocolo a aplicar para la navegación segura es no guardar contraseñas o información dentro de las cookies del navegador y navegar mediante el modo seguro o incógnito</b>. En la siguiente imagen se observa dicho proceso
          .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
            h5 Figura 6.
            span Ingreso a modo seguro o incógnito
        .col-md-11.mb-4.mb-md-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img07.png')
        .col-md-11.mb-4.mb-md-0(data-aos="fade-right")
          p Como se puede apreciar en la imagen esta es una de las maneras en las cuales se puede evitar el uso de cookies en el historial de navegación a los sitios web visitados, evitar el almacenamiento en el navegador de información de formularios o sitios que soliciten información de cualquier tipo.
      .row.justify-content-center(titulo="Informe de transparencia")
        .col-md-11.mb-4.mb-md-0(data-aos="fade-right")
          p.mb-4 Otro protocolo que se puede utilizar para verificar el estado de un sitio web y que entrega un pequeño reporte de la seguridad del sitio, mostrando si es confiable o no, se realiza por medio de una base de datos de URL, las cuales se clasifican como seguras o no seguras. Esta herramienta es muy funcional al momento de sospechar un ataque de <em>phishing</em> y verificar la autenticidad de la información que envían; en la siguiente imagen se observa dicho proceso.
          .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
            h5 Figura 7.
            span Informe de transparencia de Google
        .col-md-11.mb-4.mb-md-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img08.png')

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.subir-25.p-4.mb-4
          p Es importante destacar que estos son algunos protocolos y herramientas a utilizar para realizar la navegación segura en Internet; pero actualmente se puede encontrar muchos mecanismos que serán abordados en este curso y que serán de gran ayuda para mejorar los niveles de seguridad en las organizaciones y la ciudadanía en general.

</template>

<script>
export default {
  name: 'Tema3',
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
