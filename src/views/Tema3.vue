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
        a.boton.color-acento-botones.indicador__container.bton-modal.text-center(@click="modal1 = true")
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
        a.boton.color-acento-botones.bton-modal.text-center(@click="modal2 = true")
          span.text-white Abrir modal

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-3
              img(src='@/assets/curso/tema3-icono3.svg', alt='árbol de problemas') 
        h4.text-center.mb-4 Matriz causa-efecto 
          br 
          | (árbol de problemas)
        a.boton.color-acento-botones.bton-modal.text-center(@click="modal3 = true")
          span.text-white Abrir modal
          

    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-lg-8 
          figure
            img(src='@/assets/curso/tema3-modal1.svg', alt='Método DOFA') 

    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center
        .col-lg-8 
          figure
            img(src='@/assets/curso/tema3-modal2.svg', alt='Análisis de escenarios') 

    ModalA(:abrir-modal.sync="modal3")
      .row.justify-content-center
        .col-lg-8 
          figure
            img(src='@/assets/curso/tema3-modal3.svg', alt='árbol de problemas')  

    p.mb-5(data-aos="fade") A continuación, se podrá conocer las definiciones de los instrumentos mencionados y los factores que lo relacionan: 

    h3(data-aos="fade-right") Método DOFA
    .row
      .col-lg-7.mb-3(data-aos="fade-right")
        p Es una herramienta para el diagnóstico y análisis en la situación actual de una organización que sirve para generar estrategias desde de la identificación de factores, estos pueden ser internos y externos.
        p De esta manera, se identifican los aspectos que hacen fuerte a la empresa, las que son una amenaza, una debilidad y  las que se presentan como una oportunidad, permitiendo tener una realidad clara de la situación de la empresa. 
        p En primer lugar se identifican los cuatro componentes de la matriz, además, se debe tener en cuenta que estos se dividen en factores internos y externos.
      .col-lg-5.mb-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-imagen2.jpg', alt='Método DOFA')

    h3.mb-4(data-aos="fade-right") Identificación de la matriz DOFA      
    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-1
      .col-lg-9.back-primario.dofa-1
        .row.align-items-center.p-3
          .col-lg-2
            h3.text-center Factores internos
          .col-lg-5
            .tarjeta-container
              .tarjetaContent
                .tarjetaImg
                  figure
                    img(src="@/assets/curso/tema3-D.svg", alt="D")
                .tarjetaTxt.p-2
                  h1.text-white.mb-1 D
                  h5.mb-0 Debilidades
                  p.mb-0 Debilidades y desventajas en la organización.
          .col-lg-5  
            .tarjeta-container(@mouseover="mostrarIndicador = false", onclick="")
              .indicador--click(v-if="mostrarIndicador")
              .tarjetaContent
                .tarjetaImg
                  figure
                    img(src="@/assets/curso/tema3-F.svg", alt="F")
                .tarjetaTxt.p-2
                  h1.text-white.mb-1 F
                  h5.mb-0 Fortalezas
                  p.mb-0 Fortalezas y ventajas de la organización.
      .col-lg-2
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-2
      .col-lg-9.back-color-acento-contenido.dofa-2
        .row.align-items-center.p-3
          .col-lg-5
            .tarjeta-container
              .tarjetaContent
                .tarjetaImg
                  figure
                    img(src="@/assets/curso/tema3-A.svg", alt="A")
                .tarjetaTxt.p-2
                  h1.text-white.mb-1 A
                  h5.mb-0 Amenazas
                  p.mb-0 Amenazas y obstáculos que pueden afectar negativamente la tendencia de la organización.
          .col-lg-5  
            .tarjeta-container
              .tarjetaContent
                .tarjetaImg
                  figure
                    img(src="@/assets/curso/tema3-O.svg", alt="O")
                .tarjetaTxt.p-2
                  h1.text-white.mb-1 O
                  h5.mb-0 Oportunidades
                  p.mb-0 Oportunidades que la organización quiere explorar.
          .col-lg-2
            h3.text-center Factores externos        
      .col-lg-1

    h3(data-aos="fade-right") Análisis de escenarios
    .row
      .col-lg-7.mb-3(data-aos="fade-right")
        p El análisis de escenarios es una metodología para investigar situaciones de riesgo e inciertas. El uso de escenarios incluye identificar diferentes situaciones y explicar las acciones que se deben tomar. De esta manera, los escenarios son circunstancias futuras que resultan en caso de que las tendencias continúen o si se repiten ciertas condiciones. 
      .col-lg-5.mb-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-imagen3.jpg', alt='Análisis de escenarios')

    h4.mb-4(data-aos="fade-right") Pasos en el proceso de análisis de escenarios
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Definir el problema")
            .col-md-9.mb-4.mb-md-0
              p Se define qué se espera conseguir y en cuanto tiempo se llevará a cabo.          
            .col-md-2.col-3
              img.px-lg-3(src='@/assets/curso/tema3-linea1.svg', alt='Definir el problema')
          .row(numero="2" titulo="Recopilar datos")
            .col-md-9.mb-4.mb-md-0
              p Se identifican todos los factores principales y tendencias que pueden interferir en el plan.          
            .col-md-2.col-3
              img.px-lg-4(src='@/assets/curso/tema3-linea2.svg', alt='Recopilar datos')
          .row(numero="3" titulo="Separar certezas de incertidumbres")
            .col-md-9.mb-4.mb-md-0
              p Se toman las tendencias mejor respaldadas y contrastadas como “certezas”, separándolas de las “incertidumbres”, mediante un listado.          
            .col-md-2.col-3
              img.px-lg-3(src='@/assets/curso/tema3-linea3.svg', alt='Separar certezas de incertidumbres')     
          .row(numero="4" titulo="Desarrollar escenarios")
            .col-md-9.mb-4.mb-md-0
              p Se toman las tendencias mejor respaldadas y contrastadas como “certezas”, separándolas de las “incertidumbres”, mediante un listado.           
            .col-md-2.col-3
              img.px-lg-3(src='@/assets/curso/tema3-linea4.svg', alt='Desarrollar escenarios')    
          .row(numero="5" titulo="Incluir los escenarios")
            .col-md-9.mb-4.mb-md-0
              p En la planificación estratégica de la empresa.          
            .col-md-2.col-3
              img.px-lg-4(src='@/assets/curso/tema3-linea5.svg', alt='Incluir los escenarios')    
          .row(numero="6" titulo="Involucrar a los líderes y directivos")
            .col-md-9.mb-4.mb-md-0
              p El proceso de definición de escenarios ha de ser cooperativo.          
            .col-md-2
              img.px-lg-3(src='@/assets/curso/tema3-linea6.svg', alt='Involucrar a los líderes y directivos')                   

    h3(data-aos="fade-right") Matriz causa-efecto
    .row
      .col-lg-7.mb-3(data-aos="fade-right")
        p Estas matrices consisten en una tabla de dos partes, la primera columna muestra la actividad del proyecto o acciones, y las otras los factores ambientales que pueden verse afectados por las correspondientes acciones reportadas. Así, la intersección de la fila de la primera columna (acción) con una de las otras columnas (factores ambientales) puede mostrar algunas de las siguientes características cualitativas de impacto ambiental. 
      .col-lg-5.mb-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-imagen4.jpg', alt='Matriz causa-efecto')

    h4.mb-4(data-aos="fade-right") Factores ambientales para la matriz causa – efecto
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-6.col-lg-4.mb-4.mb-md-0
        .img-hover(@mouseover='mostrarIndicador = false')
          img(src='@/assets/curso/tema3-hover1.jpg',alt='Texto que describa la imagen')
          .indicador--hover(v-if='mostrarIndicador')
          .img-hover__content.p-4
             p.mb-0.text-center
              strong Factores físicos
              br 
              br 
              | Aire (calidad), suelo (uso y calidad), agua (cantidad y calidad). 
      .col-md-6.col-lg-4.mb-4.mb-md-0
        .img-hover
          img(src='@/assets/curso/tema3-hover2.jpg',alt='Texto que describa la imagen')
          .img-hover__content.p-4
             p.mb-0.text-center
              strong Factores biológicos
              br 
              br 
              | Flora y fauna (número de especies diferentes, de cada especie y en algún estado de peligro).  
      .col-md-6.col-lg-4.mb-4.mb-md-0
        .img-hover
          img(src='@/assets/curso/tema3-hover3.jpg',alt='Texto que describa la imagen')
          .img-hover__content.p-4
            p.mb-0.text-center
              strong Factores perceptuales
              br 
              br 
              | Paisaje (calidad, visibilidad, fragilidad), Socioeconómicos (nivel), histórico-culturales (existencia de monumentos nacionales, zonas protegidas, característica cultural específica). 


    h4.mb-4(data-aos="fade-right") Nomenclatura matriz causa – efecto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tabla-b.color-acento-botones
          table  
            thead.tabla-b__header
              tr
                th.col1-tabla1 
                  h3.mb-0 Tipo
                th 
                  h3.mb-0 Nomenclatura para utilizar
            tbody
              tr
                td.col-gris
                  strong Importancia
                td.col-cuadro 
                  ul.lista-ul--color.lista-circulo.lista-azul
                    li.mb-1.cuadro1
                      i.fas.fa-circle
                      | Impacto negativo importante.
                      span
                    li.mb-1.cuadro2
                      i.fas.fa-circle
                      | Impacto positivo.
                      span
                    li.mb-1.cuadro3
                      i.fas.fa-circle
                      | Impacto negativo medio o alerta de posible impacto importante.  
                      span
              tr
                td.col-gris
                  strong Magnitud
                td.col-blanca
                  ul.lista-ul--color.lista-circulo.lista-azul
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0
                        strong 1 a 2: 
                        | no se aprecia.
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0
                        strong 3 a 4: 
                        | se aprecia pero es baja.
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0
                        strong 5 a 6: 
                        | requiere analizar y considerar medidas de mitigación.
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0
                        strong Mayor a 7: 
                        | puede significar conflictos en el desarrollo del proyecto y requiere de análisis o estudios más detallados.    
              tr
                td.col-gris 
                  strong Tiempo
                td
                  ul.lista-ul--color.lista-circulo.lista-azul
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0
                        strong Temporal (T)  
                        | si la duración está dentro del período de construcción.
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0
                        strong Permanente (P) 
                        | si el impacto es durante la operación. 

    
    h4.mb-4(data-aos="fade-right") Reuso del agua ejemplo práctico: fábrica de conservas

    .tabla-b.color-acento-botones.mb-4
      table  
        thead.tabla-b__header
          tr
            th.col1-tabla2(rowspan='2')
              h3.mb-0 Actividades 
            th(colspan='3') 
              h3.mb-0 Factores físicos
            th(colspan='2')  
              h3.mb-0 Factores biológicos
            th(colspan='2')  
              h3.mb-0 Factores preceptuales 
          tr
            td.col-gris2
              strong.mb-0 Agua 
            td.col-gris2 
              strong.mb-0 Aire
            td.col-gris2 
              strong.mb-0 Suelo
            td.col-gris2 
              strong.mb-0 Flora   
            td.col-gris2 
              strong.mb-0 Fauna 
            td.col-gris2 
              strong.mb-0 Paisaje 
            td.col-gris2 
              strong.mb-0 Socio-económico       
        tbody
          tr
            td.col-gris Evacuación de efluentes en cursos de agua (sin tratamiento previo).
            td.color-azul
              strong 7.P
            td.color-amarillo
              strong 1.T
            td.color-azul
              strong 4.P
            td.color-amarillo
              strong 5.P  
            td.color-azul
              strong 7.9  
            td.color-amarillo
              strong 3.P 
            td.color-amarillo
              strong 7.P   
          tr
            td.col-gris Utilización de aguas (sin tratamiento previo) en regadío de arboleda interna del predio.
            td.color-amarillo
              strong 3.P
            td.col-verde
              strong 1.T
            td.color-amarillo
              strong 6.P
            td.color-amarillo
              strong 3.P  
            td.color-amarillo
              strong 3.P  
            td.col-verde
              strong 2.P 
            td.col-verde
              strong 1.P 
          tr
            td.col-gris Fosa de sedimentación de las aguas residuales (tratamiento primario).
            td.col-verde2
              strong 8.P
            td.col-verde2
              strong 3.P
            td.color-amarillo
              strong 6.P
            td.color-amarillo
              strong 3.P  
            td.color-amarillo
              strong 3.P  
            td.col-verde2
              strong 2.P 
            td.col-verde2
              strong 1.P
          tr
            td.col-gris Captación y conducción del agua hacia la zona de riego interna del predio.
            td.col-verde2
              strong 4.P
            td.col-verde2
              strong 1.T
            td.col-verde2
              strong 6.P
            td.color-amarillo
              strong 3.P  
            td.color-amarillo
              strong 3.P  
            td.col-verde2
              strong 2.P 
            td.col-verde2
              strong 1.P
          tr
            td.col-gris Impermeabilización de canales de conducción del agua de riego.
            td.col-verde2
              strong 3.P
            td.col-verde2
              strong 1.T
            td.col-verde2
              strong 8.P
            td.color-amarillo
              strong 3.P  
            td.color-amarillo
              strong 3.P  
            td.col-verde2
              strong 2.P 
            td.col-verde2
              strong 1.P                 


    p(data-aos="fade") Para concluir este apartado, los diferentes instrumentos de diagnóstico descritos van a permitir conocer la organización en todos sus niveles y su aplicación va a depender de las necesidades, deseos y objetivos.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    modal1: false,
    modal2: false,
    modal3: false,
    mostrarIndicador: true,
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
