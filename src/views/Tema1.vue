<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 1
      h1 Componentes y normatividad asociados a la ciberseguridad
      
    p.mb-5 La seguridad de la información está dirigida por una normatividad que permite establecer los límites de uso y manipulación de la información. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-5(data-aos="fade-left")
        p.my-5.mb-5 La información se ha convertido en el activo más importante para las organizaciones del Siglo XXI, pues permiten desarrollar la competitividad de las empresas y realizar sus procesos misionales de manera óptima.

    .row.BG01.p-4.justify-content-center
      .col-lg-10(data-aos="fade-right")
        p La ciberseguridad, entonces, se encarga de que esa normatividad se aplique de manera correcta. La información se encuentra caracterizada en privada, pública y sensible; para cada una se debe realizar un manejo específico, tal como se aprecia en el siguiente recurso:

    .row.BG01.mb-4 
      .col-lg-1
      .col-lg-7(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img02.svg')
          .tarjeta.BG02.p-3(x="97.8%" y="20.6%")
            p Es aquella que puede ser almacenada y tratada con poca restricción en un sistema informático y la cual no genera ninguna preocupación en su manejo y distribución, compréndase información pública como por  ejemplo, nombre, número de contacto o género de una persona, la cual es de dominio público y puede ser utilizada para efectos de contratación o de contacto.
          .tarjeta.BG02.p-3(x="97.8%" y="52%")
            p Puede contener componentes específicos sobre la información personal de un ciudadano, y por encontrarse en un ámbito privado, solo puede ser obtenida y ofrecida por orden de autoridad judicial en el cumplimiento de sus funciones, dicha información puede en ocasiones colocar en riesgo la vida o el buen nombre de cualquier persona.
          .tarjeta.BG02.p-3(x="97.8%" y="83.8%")
            p Es una clasificación específica de la información privada de un individuo, la cual puede generar momentos de peligro o de ausencia de seguridad para su integridad física o financiera, por ejemplo, ciertos datos personales: datos bancarios, contraseñas de correo electrónico e incluso el domicilio o gustos religiosos en algunos casos pueden ser causantes, dependiendo de las actividades desarrolladas por el individuo.

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1. Normatividad aplicada a la ciberseguridad

    p En Colombia se han realizado grandes esfuerzos por implementar normas y procedimientos que garanticen el acceso de la información y la protección de los datos de quienes utilizan la misma. Las políticas de seguridad de la información deben estar sujetas al tratamiento y distribución de los datos a través de los diferentes mecanismos de distribución, ya sea en redes de dominio local o internacional.
    p.mb-5 Existe un marco legal en Colombia que rige los diferentes riesgos y sanciones que se pueden presentar al momento de violar la soberanía de quien posee la legítima autoría de la información y los datos. Un ejemplo de ello, es la Ley 1273 de 2009, la cual hace parte de la estrategia de articulación de la Policía Nacional de Colombia para el manejo de los delitos informáticos. La siguiente figura presenta brevemente en qué consiste esta ley: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario.mb-5(data-aos="fade-right")
          h5 Figura 1.
          span Ley 1273 de 2009, delitos informáticos
        figure
          img(src='@/assets/curso/tema1/img03.svg')
          figcaption Nota. Adaptado de Policía Nacional (2014).
        .cajon.color-secundario.p-4.mb-4
          p La Ley 1273 crea un bien jurídico llamado “De la protección de la información y de los datos”, el cual está contemplado en el Código Penal colombiano donde la información y los datos se convierten en un activo propio de cada individuo. Por lo tanto, se debe cumplir con las características para ser determinante con las sanciones y multas establecidas.
    
    .BG04.p-4.mb-4(data-aos="fade-right")
      p.mb-5 El documento Conpes 3701, por su parte, comprende los diversos grupos que conforman la Policía Nacional de Colombia para el manejo de las diferentes normatividades que se aplican en el país. En la figura que podrán apreciar a continuación, se ilustran las diferentes asistencias y apoyo que se brinda en caso de existir un delito que viole la privacidad de los datos o información de una persona o ciudadano:

      .titulo-sexto.color-secundario.mb-5(data-aos="fade-right")
        h5 Figura 2.
        span Comisión intersectorial

      .row.justify-content-center.mb-5
        .col-lg-10.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img04.svg')
        .col-lg-6.BG03.p-1(data-aos="fade-right")
          p.mb-0.ms-5 Nota. Adaptado de Conpes 3701 (2011).

    p.mb-5 Ahora bien, existe un modelo de investigación criminal para la ciberseguridad en el cual se puede comprender el alcance y magnitud que pueden tener los delitos a la ciberseguridad. A continuación, se puede observar los diferentes tipos de fraudes cometidos en las organizaciones, que también atentan contra los ciudadanos: 
    .titulo-sexto.color-secundario.mb-5(data-aos="fade-right")
      h5 Figura 3.
      span Modelo de investigación criminal
    
    .row.justify-content-center.mb-5
      .col-lg-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img05.svg')
      .col-lg-6.BG03.p-1(data-aos="fade-right")
        p.mb-0.ms-5 Nota. Tomado de Policía Nacional (2014).

    p.mb-5 Sabiendo lo anterior, es preciso conocer que existen diferentes modalidades de fraude como se puede evidenciar; sin embargo, se abordaran los más comunes, encontrando: 

    .row.mb-5(data-aos="fade-right")
      BotonesA.h-100
      
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Componentes de la ciberseguridad

    p.mb-5 Dentro de los componentes de la ciberseguridad se encuentra que para realizar un proceso correcto de gestión de la información se debe involucrar tres agentes importantes que son las personas, la tecnología y los servicios tecnológicos soportados. En la siguiente figura se expone en qué consiste cada uno:

    .titulo-sexto.color-secundario.mb-0(data-aos="fade-right")
      h5 Figura 4.
      span Componentes de la ciberseguridad
    
    figure(data-aos="fade-right")
      img(src='@/assets/curso/tema1/img06.svg')
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.subir-25.p-4.mb-4
          p Estos componentes deben estar debidamente alineados con la política de seguridad establecida por la empresa, es decir, se deben establecer protocolos, planes y procesos que permitan tomar decisiones en un momento determinado.
    
    p.mb-5 Los componentes de la ciberseguridad juegan un papel importante dentro de las organizaciones, debido al impacto que pueden ocasionar en un ataque informático o incidente de seguridad.

    .bloque-texto-g.color-acento-contenido.item-left.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-5(data-aos="fade-left")
        p.mb-4 En este caso, se debe tener en cuenta que la capacitación del personal y los recursos tecnológicos para prevenir estas acciones, las cuales no se pueden percibir como un gasto sino como una inversión que permite asegurar la continuidad del negocio.


</template>

<script>
import BotonesA from '../components/BotonesA.vue'
export default {
  name: 'Tema1',
  components: {
    BotonesA,
  },
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
