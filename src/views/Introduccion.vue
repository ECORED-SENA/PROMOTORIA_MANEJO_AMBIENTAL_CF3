<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-intro.jpg", alt="Introducción")  

    p.mb-4(data-aos="fade") Este componente de formación permitirá recorrer los conceptos básicos de las técnicas de recolección de información y la estructura de proyectos. Para conocer más sobre este, se debe ingresar al siguiente recurso: 

    .row.justify-content-center.mb-4
      .col-lg-10.mb-3(data-aos="fade-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/atT3FaFztkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
