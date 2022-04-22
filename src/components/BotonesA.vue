<template lang="pug">
.btns
  .row.justify-content-center
    .col-md-12
      img(src='@/assets/curso/botones/img01.svg')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    :class="[`btns_item--${index}`]"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-4(v-if="index === hover")  
      h4 {{boton.titulo}}
        italic {{boton.italic}}
      p {{boton.texto1}}

</template>

<script>
export default {
  name: 'BotonesA',
  data: () => ({
    indicador: true,
    hover: null,
    size: '12%',
    botones: [
      {
        img: require('@/assets/curso/botones/img02.svg'),
        img_h: require('@/assets/curso/botones/img03.svg'),
        pos_x: '12.9%',
        pos_y: '56%',
        titulo: 'Ciberterrorismo',
        texto1:
          'Se denomina así a toda actividad que utilice cualquier medio tecnológico para generar problemas de orden público o social, teniendo en cuenta que la difusión de esta información debe utilizar medios tecnológicos, ya sea redes sociales, correos "spam", entre otros. Estos eventos pueden estar relacionados con intimidación, secuestro de información o divulgación de información sensible o privada.',
      },
      {
        img: require('@/assets/curso/botones/img04.svg'),
        img_h: require('@/assets/curso/botones/img05.svg'),
        pos_x: '20.5%',
        pos_y: '23.5%',
        titulo: 'Ciberinfiltración',
        texto1:
          'Consiste en utilizar mecanismos tales como algoritmos para desencriptar claves de seguridad o utilizar ataques de fuerza bruta para ingresar a un sistema de información, con la finalidad de robar información que se encuentre allí almacenada.',
      },
      {
        img: require('@/assets/curso/botones/img06.svg'),
        img_h: require('@/assets/curso/botones/img07.svg'),
        pos_x: '43.7%',
        pos_y: '16%',
        titulo: 'Disuasión',
        texto1:
          'Utilizar mecanismos para evitar que los usuarios realicen cambios en el sistema que coloque en riesgo la información que estos tengan; pero sin que el usuario se dé cuenta que está proporcionando dicha información. Estos son los inicios de los caminos de la ingeniería social, que se encarga de sacar información al usuario sin que se dé cuenta que la está proporcionando.',
      },
      {
        img: require('@/assets/curso/botones/img08.svg'),
        img_h: require('@/assets/curso/botones/img09.svg'),
        pos_x: '67%',
        pos_y: '23%',
        titulo: 'Ciberasalto',
        texto1:
          'Consiste en secuestrar información, por ejemplo, financiera y datos de una corporación para difundir información falsa que puede colocar en riesgo la información de los clientes de esa corporación y adicional cometer fraudes electrónicos como usar malware a través de correos electrónicos para persuadir y captar información, por ejemplo, tarjetas de crédito, cuentas bancarias, entre otros.',
      },
      {
        img: require('@/assets/curso/botones/img10.svg'),
        img_h: require('@/assets/curso/botones/img11.svg'),
        pos_x: '75%',
        pos_y: '56%',
        titulo: 'Ciberofensiva',
        texto1:
          'Comprende la manera en cómo se puede perpetrar un ataque para demostrar el poder que se posee con un arma cibernética para evitar que otros posibles atacantes se atrevan a realizar algún ataque, ya que pueden medir las fuerzas que estos poseen.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>


.btns
  position: relative
  height: 450px
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    border-radius: 15px
    position: absolute
    top: 110%
    left: 50%
    background-color:  #D6DCFF
    width: 500px
    z-index: 100
    line-height: 1.2em
    border-radius: 20px
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 8% !important
    padding: 10%

  .btns_item--0
    top: 0.5% !important
    left: 2.1% !important
  .btns_item--1
    top: 0.5% !important
    left: 21.3% !important
  .btns_item--2
    top: 0.5% !important
    left: 40.3% !important
  .btns_item--3
    top: 0.5% !important
    left: 58.5% !important
  .btns_item--4
    top: 0.5% !important
    left: 78% !important



  .btns__text
    width: 330px
  .btns_item--0 .btns__text
    left: 180% !important
  .btns_item--1 .btns__text
    left: 90%
  .btns_item--2 .btns__text
    left: 10%
  .btns_item--3 .btns__text
    left: -50%
  .btns_item--4 .btns__text
    left: -60%
</style>
