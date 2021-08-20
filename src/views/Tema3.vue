<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Instrumentos de diagnóstico

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema3.jpg", alt="Instrumentos de diagnóstico")  

    p.mb-4(data-aos="fade") Los instrumentos para definir un diagnóstico se utilizan con el fin de obtener información pertinente y que posibilite hacer un análisis de las situaciones de estudio y con ello, hacer una formulación de las actividades y programas necesarios, así como determinar las áreas en las cuales es necesario actuar y mejorar la información. Algunos de los métodos de diagnóstico son: 
    
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.text-center.mb-4
          .col-6
            figure.mb-3
              img(src='@/assets/curso/tema3-icono1.svg', alt='Método DOFA') 
        h4.text-center.mb-4 Método 
          br
          | DOFA
        a.boton.color-acento-botones.indicador__container.text-center(@click="modal1 = true")
          span.text-white Abrir modal
          .indicador--click(v-if="mostrarIndicador")

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-3
              img(src='@/assets/curso/tema3-icono2.svg', alt='Análisis de escenarios')       
        h4.text-center.mb-4 Análisis 
          br
          | de escenarios
        a.boton.color-acento-botones.text-center(@click="modal2 = false")
          span.text-white Abrir modal

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-3
              img(src='@/assets/curso/tema3-icono3.svg', alt='árbol de problemas') 
        h4.text-center.mb-4 Matriz causa-efecto 
          br 
          | (árbol de problemas)
        a.boton.color-acento-botones.text-center(@click="modal3 = false")
          span.text-white Abrir modal
          

    //- ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-lg-8 
          figure
            img(src='@/assets/curso/tema3-modal1.svg', alt='Método DOFA') 

    //- ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center
        .col-lg-8 
          figure
            img(src='@/assets/curso/tema3-modal2.svg', alt='Análisis de escenarios') 

    //- ModalA(:abrir-modal.sync="modal3")
      .row.justify-content-center
        .col-lg-8 
          figure
            img(src='@/assets/curso/tema3-modal3.svg', alt='árbol de problemas')  

    p.mb-5(data-aos="fade") A continuación, se podrá conocer las definiciones de los instrumentos mencionados y los factores que lo relacionan: 

    h3(data-aos="fade-right") Método DOFA
    .row
      .col-lg-7(data-aos="fade-right")
        p Es una herramienta para el diagnóstico y análisis en la situación actual de una organización que sirve para generar estrategias desde de la identificación de factores, estos pueden ser internos y externos.
        p De esta manera, se identifican los aspectos que hacen fuerte a la empresa, las que son una amenaza, una debilidad y  las que se presentan como una oportunidad, permitiendo tener una realidad clara de la situación de la empresa. 
        p En primer lugar se identifican los cuatro componentes de la matriz, además, se debe tener en cuenta que estos se dividen en factores internos y externos.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-imagen2.jpg', alt='Método DOFA')

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

<style lang="sass" scoped></style>
