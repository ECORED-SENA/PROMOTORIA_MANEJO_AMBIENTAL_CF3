<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Criterios de comunicación asertiva

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema4.jpg", alt="Criterios de comunicación asertiva")  

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p 
          strong La comunicación asertiva 
          | es una técnica que les permite a las personas expresar sus ideas por medio del lenguaje verbal, además de utilizar el lenguaje corporal y los gestos dentro de un marco que respeta al interlocutor. Así mismo, esta herramienta se basa en tener una actitud personal positiva al interactuar con los demás, lo cual incluye evitar el rechazo, la crítica, el conflicto y expresar opiniones y calificaciones. Esto significa que la comunicación asertiva es la forma adecuada de interactuar con las personas. 
        p Este tipo de comunicación debe guardar respeto por los demás, pues ser asertivo es expresar con claridad y de forma apropiada los pensamientos, sentimientos y percepciones sin la intención de herir o perjudicar a las personas. Así mismo, se debe demostrar respeto y procurar no discriminar teniendo en cuenta que todos tienen igualdad de derechos sin distinción de ningún tipo, como raza, color, sexo, idioma, religión, opinión política u otra, origen nacional o social, propiedad, nacimiento u otro estado.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4-imagen.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-9
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4-imagen2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.py-lg-4
            p Dentro de las características de la comunicación asertiva, se encuentra: 
            ul.lista-ul--color.lista-circulo.lista-azul
              li.mb-0
                i.fas.fa-circle
                | Opiniones.
              li.mb-0
                i.fas.fa-circle
                | Sentimientos. 
              li.mb-0
                i.fas.fa-circle
                | Decisiones. 
              li.mb-0
                i.fas.fa-circle
                | Conductas. 
              li.mb-0
                i.fas.fa-circle
                | Pensamientos.       

    p.mb-4(data-aos="fade") Existen tres maneras de comunicarse asertivamente, a saber:

    .row.justify-content-center.tarjeta.tarjeta--gris.mb-5(data-aos="fade-down")
      .col-lg-11
        Botones(data-aos="fade-down")

    p.mb-4(data-aos="fade") A continuación, de describen algunas de las claves para desarrollar una comunicación asertiva:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4-imagen-infografica.svg', alt='Texto que describa la imagen')

          .tarjeta.color-primario.text-center.p-3(x="50.3%" y="30.35%")
            .h4.mb-2 Clara
            p Sin generar imprecisiones. 

          .tarjeta.color-primario.text-center.p-3(x="66.67%" y="38.15%")
            .h4.mb-2 Conciso
            p No extenderse  más de lo necesario.  

          .tarjeta.color-primario.text-center.p-3(x="71.7%" y="56.15%")
            .h4.mb-2 Concreto
            p El mensaje debe ser definido para que no queden dudas.

          .tarjeta.color-primario.text-center.p-3(x="60.3%" y="71.8%")
            .h4.mb-2 Correcto
            p Un mensaje sin equivocaciones. 

          .tarjeta.color-primario.text-center.p-3(x="40.7%" y="71.8%")
            .h4.mb-2 Coherente
            p Un mensaje natural y razonable. 

          .tarjeta.color-primario.text-center.p-3(x="29.1%" y="56.2%")
            .h4.mb-2 Completo
            p Que permita la toma de decisiones. 

          .tarjeta.color-primario.text-center.p-3(x="34%" y="38.15%")
            .h4.mb-2 Cortés
            p El mensaje debe demostrar respeto y agradecimiento para reforzar las relaciones.        


</template>

<script>
import Botones from '../components/Botones.vue'
export default {
  name: 'Tema4',
  components: {
    Botones,
  },
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

<style lang="sass" scoped></style>
