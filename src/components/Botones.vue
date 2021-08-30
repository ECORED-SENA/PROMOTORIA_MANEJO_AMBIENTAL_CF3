<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-center
    .col-md-5.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/botones-fondo.svg', alt='Texto que describa la imagen')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-7.col-lg-5
      .tarjeta.tarjeta-verde.p-3(v-if="selected === 0")
        h3 Paraverbal
        p.mb-0 Los elementos lingüísticos y no verbales adicionales para formar y comunicar el mensaje. La voz, el ritmo, la pronunciación y la postura son parte de esta línea de declaración.

      .tarjeta.tarjeta-verde.p-3(v-else-if="selected === 1")
        h3 Verbal
        p.mb-0 Este tipo de comunicación implica elegir la palabra adecuada y los individuos necesitan pensar y componer oraciones correctamente. Para ello, se deben tener en cuenta los principios de claridad y espontaneidad sin caer en la agresión.

      .tarjeta.tarjeta-verde.p-3(v-else-if="selected === 2")
        h3 No verbal
        p.mb-0 El cuerpo juega un papel importante en la autoafirmación en la comunicación. Los factores no verbales incluyen la postura corporal, esto no afecta el acto de hablar pero puede mostrar interés en el acto de comunicarse.

</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,
    size: '41%',
    botones: [
      {
        img: require('@/assets/curso/botones-ico-01-a.svg'),
        img_h: require('@/assets/curso/botones-ico-01-b.svg'),
        pos_x: '3.9%',
        pos_y: '6.2%',
      },
      {
        img: require('@/assets/curso/botones-ico-02-a.svg'),
        img_h: require('@/assets/curso/botones-ico-02-b.svg'),
        pos_x: '54.5%',
        pos_y: '27.3%',
      },
      {
        img: require('@/assets/curso/botones-ico-03-a.svg'),
        img_h: require('@/assets/curso/botones-ico-03-b.svg'),
        pos_x: '9.7%',
        pos_y: '57.8%',
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
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
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
.botones
  position: relative
.botones__btn
  background-size: cover
  position: absolute
  cursor: pointer
  border-radius: 50%
  transition: background-image 0.2s ease-in-out
</style>
