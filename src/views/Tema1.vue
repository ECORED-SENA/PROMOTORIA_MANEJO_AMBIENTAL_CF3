<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Técnicas de recolección de información

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.jpg", alt="Técnicas de recolección de información")  

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-secundario.bloque-color.p-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p.mb-0 Al momento de hacer un trabajo es importante considerar las diferentes técnicas de recolección, las cuales se definen como procedimientos para la realización de actividades requeridas por el investigador y que sirven como herramientas propicias para la obtención de información relevante en una campaña ambiental. Entre las técnicas de recolección de información más utilizadas se encuentran:
            .col-lg-4
              ul.lista-ul--color.lista-circulo.lista-azul
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Método de observación.
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Cuestionarios o encuestas.  
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Grupos focales.
                li.mb-1
                  i.fas.fa-circle
                  p.mb-0
                    strong Entrevistas.
    
    Separador


    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1.  Método de observación

    p.mb-5(data-aos="fade") El método de observación es el registro visual de una situación real, dichas observaciones se pueden recopilar en notas de campo o plataformas de recolección de datos y sus principales características son:         

    .row(data-aos="fade-down")
      .col-lg-4.mb-4
        .content  
          .content-overlay
          .btn-numero
            h3 1
          img(src="@/assets/curso/tema1-1-hover1.jpg", alt="Técnica de investigación básica") 
          .tarjeta-details.fadeIn-top.text-center.p-1
            h5 Técnica de investigación básica.
      .col-lg-4.mb-4
        .content(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          .content-overlay
          img(src="@/assets/curso/tema1-1-hover2.jpg", alt="Establece relación básica entre el observador y el objeto a observar") 
          .btn-numero
            h3 2
          .tarjeta-details.fadeIn-top.text-center.p-2
            h5 Establece relación básica entre el observador y el objeto a observar.
      .col-lg-4.mb-4
        .content
          .content-overlay
          img(src="@/assets/curso/tema1-1-hover3.jpg", alt="Es el comienzo de la comprensión de la realidad") 
          .btn-numero
            h3 3 
          .tarjeta-details.fadeIn-top.p-2.text-center
            h5 Es el comienzo de la comprensión de la realidad
    
    p.mb-4(data-aos="fade") Al interior de los métodos de observación se incluyen diferentes tipos:

    PasosA.color-acento-contenido.mb-4(tipo="n")(data-aos="fade-down")
      .row
        .col-md-1
        .col-md-2.mb-4.mb-md-0
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono1.svg', alt='Observación casual')
        .col-md-9
          h4 Observación casual
          p Incluye observaciones de rutina y no planificadas que se pueden realizar en cualquier momento del día.
      .row
        .col-md-9.mb-4.mb-md-0
          h4 Observación deliberada naturalista
          p Comprende observaciones planificadas y organizadas que tienen lugar en momentos específicos.   
        .col-md-2
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono2.svg', alt='Observación deliberada naturalista')
        .col-md-1
      .row
        .col-md-1
        .col-md-2.mb-4.mb-md-0
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono3.svg', alt='Observación focalizada')
        .col-md-9
          h4 Observación focalizada
          p Consiste en la observación de un aspecto determinado.
      .row
        .col-md-9.mb-4.mb-md-0
          h4 Observación participativa
          p Es aquella en la que no solo se observa pasivamente, sino que hay una interacción que ayuda a comprender otros aspectos.
        .col-md-2
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono4.svg', alt='Observación participativa')
        .col-md-1  
      .row
        .col-md-1
        .col-md-2.mb-4.mb-md-0
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono5.svg', alt='Observación no participativa')
        .col-md-9
          h4 Observación no participativa
          p Es aquella que recoge información del exterior sobre los hechos y fenómenos que se estudian sin la intervención de grupos sociales.
      .row
        .col-md-9.mb-4.mb-md-0
          h4 Observación directa
          p Es cuando el observador individual se expone a la realidad o fenómeno que intenta estudiar.
        .col-md-2
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono6.svg', alt='Observación directa')
        .col-md-1
      .row
        .col-md-1
        .col-md-2.mb-4.mb-md-0
          figure
            img.px-4(src='@/assets/curso/tema1-1-icono7.svg', alt='Observación indirecta ')
        .col-md-9
          h4 Observación indirecta 
          p Es cuando el observador se da cuenta de un evento o fenómeno al observar a través de observaciones que han sido realizadas anteriormente por otros.
      .row
        .col-md-9.mb-4.mb-md-0
          h4 Observación individual 
          p Se realiza de forma individual, por lo que debe hacerse sola.
        .col-md-2
          figure
            img.px-4(src='@/assets/curso/tema1-1-icono8.svg', alt='Observación')
        .col-md-1
      .row
        .col-md-1
        .col-md-2.mb-4.mb-md-0
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono9.svg', alt='Observación en equipo o grupo ')
        .col-md-9
          h4 Observación en equipo o grupo 
          p Está hecho por un grupo o varias personas que forman un grupo.
      .row
        .col-md-9.mb-4.mb-md-0
          h4 Observación estructurada
          p Se logra construyendo un sistema de guía de observación paso a paso y colocándolo en relación con todo el proceso de investigación en curso.
        .col-md-2
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono10.svg', alt='Observación estructurada')
        .col-md-1
      .row
        .col-md-1
        .col-md-2.mb-4.mb-md-0
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono11.svg', alt='Observación abierta ')
        .col-md-9
          h4 Observación abierta 
          p Se realiza libremente y no tiene una estructura organizada. Se usa cuando se quiere captar un movimiento espontáneo.
      .row
        .col-md-9.mb-4.mb-md-0
          h4 Observación semiestructurada 
          p Este tipo de observación comienza con instrucciones estructuradas, pero se aplica de manera flexible según el formato de la observación.
        .col-md-2
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono12.svg', alt='Observación semiestructurada ')
        .col-md-1
      .row
        .col-md-1
        .col-md-2.mb-4.mb-md-0
          figure
            img.px-3(src='@/assets/curso/tema1-1-icono13.svg', alt='Observación participante')
        .col-md-9
          h4 Observación participante
          p El sujeto que es observado se considera miembro del grupo que observa.
             
    p.mb-4(data-aos="fade") Como las observaciones tienen propósitos claros y bien definidos, están sujetas a comprobación por lo que deben tener un plan definido específico y un plan de trabajo claro para lograr los objetivos, también tiene el control sobre los datos tomados sistemáticamente, lo cual permite cumplir los requisitos de confiabilidad y validez, cuyos resultados se establecen por escrito.
  
    Separador


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2. Cuestionarios o encuestas

    p.mb-4(data-aos="fade") Este método implica recopilar información que es proporcionada directamente por los sujetos de estudio, con el fin de conocer actitudes, opiniones o sugerencias de ellos mismos, así como tener en cuenta que esta técnica permite aplicaciones masivas. Algunos de los tipos de cuestionarios son los que se observan en la siguiente tabla.

    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0
        strong Tabla 1.  
        | Tipos de cuestionarios, ventajas y desventajas

    .tabla-a.color-primario.mb-5(data-aos="fade-down")
      table
        thead
          tr
            th 
              h4.text-white.mb-0 Tipos
            th 
              h4.text-white.mb-0 Descripción
            th 
              h4.text-white.mb-0 Ventajas
            th 
              h4.text-white.mb-0 Desventajas
        tbody
          tr
            td.columna-gris.text-center Cuestionario abierto
            td.text-center Se aplica para obtener una comprensión más profunda de las opiniones de las personas sobre un tema en particular.
            td.text-center Analiza las opiniones de manera más detallada.
            td.text-center Requiere de más tiempo para responder y es más difícil de recopilar la información.
          tr
            td.columna-gris.text-center Cuestionario cerrado
            td.text-center Está formulado de manera que al informante se le proporciona solo algunas alternativas de respuesta. 
            td.text-center Más fácil de contestar.
            td.text-center 
              p Es posible que las categorías que se ofrecen no sean relevantes o la persona no haya pensado en sus respuestas.
              p Al proporcionar categorías al informante se está sugiriendo la respuesta.   

    .row
      .col-lg-7(data-aos="fade-right")
        p Anguita, Repullo y Donado (2003), afirman, a través de un estudio de encuesta y elaboración de cuestionario, que en la planificación de una investigación que esta primera se puede establecer a partir de las siguientes etapas:
        ul.lista-ul--color.lista-atom.px-lg-4
          li.mb-0
            i.fas.fa-atom
            | Identificación del problema.
          li.mb-0
            i.fas.fa-atom
            | Determinación del diseño de investigación.
          li.mb-0
            i.fas.fa-atom
            | Especificación de las hipótesis.
          li.mb-0
            i.fas.fa-atom
            | Definición de las variables.
          li.mb-0
            i.fas.fa-atom
            | Selección de la muestra.
          li.mb-0
            i.fas.fa-atom
            | Diseño del cuestionario. 
          li.mb-0
            i.fas.fa-atom
            | Organización del trabajo de campo.
          li.mb-0
            i.fas.fa-atom
            | Obtención y tratamiento de los datos.   
          li.mb-0
            i.fas.fa-atom
            | Análisis de los datos e interpretación de los resultados.          
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-2-imagen.jpg', alt='imagen decorativa')
    
    Separador


    // 1.3
    #t_1_3.titulo-segundo(data-aos="fade-right")
      .h2 1.3.  Grupos focales

    p.mb-4(data-aos="fade") Esta técnica consiste en que las personas llevan a cabo una reunión donde pueden opinar y solucionar un problema en específico; una de las cualidades de esta herramienta es que permite tomar diferentes perspectivas sobre un mismo tema y llegar a la mejor solución.  

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8.back-gris.px-lg-5.py-lg-4
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0
            strong Figura 1.  
            |  Grupos focales
        figure
          img.mb-2(src='@/assets/curso/tema1-3-imagen.jpg', alt='Grupos focales')
          figcaption Nota. Tomada de https://conceptodefinicion.de/grupos-focales/     

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .row.cajon.color-acento-contenido.align-items-center.p-4.px-lg-5.py-lg-4.mb-4
          .col-lg-4
            .h5 Los grupos focales tienen grandes ventajas, dentro de las cuales se encuentran: 
          .col-lg-8  
            ul.lista-ul--color.lista-atom.lista-azul.mb-0
              li
                i.fas.fa-atom
                | Recopilar información de lanzamiento relevante, mejorar los productos existentes y obtener ideas para el desarrollo de nuevos productos.
              li
                i.fas.fa-atom
                | Verificar que la selección del respectivo público objetivo y segmentos de mercado sea correcta.
              li
                i.fas.fa-atom
                | Identificar por qué el producto está perdiendo popularidad y qué se debe cambiar para recuperar a sus espectadores.
    
    p.mb-4(data-aos="fade") Dentro de los grupos focales es importante considerar la forma en que se puede organizar y para ello, podrá conocerlo a través del siguiente recurso: 
    
    .row.justify-content-center.tarjeta.tarjeta--gris.py-5
      .col-lg-11
          h3.text-center ¿Cómo se organiza un grupo focal? 
          LineaTiempoC.color-secundario(:datos="datosLineaTiempoC")


    Separador


    // 1.4
    #t_1_4.titulo-segundo(data-aos="fade-right")
      .h2 1.4.  Entrevistas

    p.mb-4(data-aos="fade") La entrevista es una técnica de recolección de información muy efectiva en la investigación cualitativa. Se define como una conversación que ofrece un propósito específico, además de hablar es una herramienta técnica que toma la forma de un diálogo conversacional.  

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-4-imagen.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.py-lg-5
            h5.mb-0 La entrevista puede realizarse de manera presencial o por teléfono, se necesita de un encuestador y un informante; es necesario conocer la información del informante para poder orientar la conversación a los temas a tratar.

    p.mb-4(data-aos="fade") A continuación, se relacionan los tipos de entrevista:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema1-4-icono1.svg', alt='Entrevistas estructuradas o enfocadas') 
        h4.text-center Entrevistas estructuradas o enfocadas
        p.text-center El entrevistador parte de una lista de preguntas la cual se encuentra en orden.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-11
            figure
              img(src='@/assets/curso/tema1-4-icono2.svg', alt='Entrevistas semiestructuradas')       
        h4.text-center Entrevistas semiestructuradas
        p.text-center El entrevistador es libre de hacer preguntas adicionales a las establecidas.

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/tema1-4-icono3.svg', alt='Entrevistas no estructuradas') 
        h4.text-center Entrevistas no estructuradas
        p.text-center El entrevistador está en la libertad de realizar preguntas relacionadas a una guía con temas en específico. Se tratan varios tipos de preguntas que son generales, ejemplares, estructuradas, estructurales y contrastadas. 


    .row
      .col-lg-7(data-aos="fade-right")
        p Las entrevistas tienen diversas ventajas que posibilitan se trabaje en beneficio de los objetivos propuestos, entre ellas que se pueden utilizar en un amplio campo de aplicación donde se determinen hechos no observables como los fundamentos, puntos de vista, significados, sugerencias, opiniones, valoraciones y sensaciones; así mismo, que no hay límite de espacio y tiempo, por lo que es posible por situaciones del pasado o futuro; que tiene un tema central donde se puede orientar hacia un objetivo determinado o centrarse en un tema específico; y tiene un punto de vista propio y ajeno en el cual se obtiene información tanto propia (opiniones, motivos, etc.), como de observaciones realizadas que se refieren a una persona o suceso.
        .cajon.color-primario.p-4
          p.mb-0 En conclusión, las diferentes técnicas de recolección de información descritas anteriormente son las estrategias que se tienen para recolectar la información y su aplicación va a depender del tipo de estudio que se desarrolle. 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-4-imagen2.jpg', alt='imagen decorativa')



</template>

<script>
import LineaTiempoC from '../components/LineaTiempoC'
export default {
  name: 'Tema1',
  components: {
    LineaTiempoC,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    datosLineaTiempoC: [
      {
        icono: require('@/assets/curso/tema1-linea1.svg'),
        titulo: 'Define el problema',
        texto: 'Establecer el problema para el cual se busca la respuesta.',
      },
      {
        icono: require('@/assets/curso/tema1-linea2.svg'),
        titulo: 'Elige los participantes',
        texto:
          'Esta dependerá del objetivo planteado y no deben conocerse entre sí. ',
      },
      {
        icono: require('@/assets/curso/tema1-linea3.svg'),
        titulo: 'Selecciona moderadores',
        texto:
          'El moderador del grupo focal debe despertar y  enfocar a los miembros del equipo, así como también continuar el hilo de discusión para asegurar que todos los que participan estén involucrados activamente.',
      },
      {
        icono: require('@/assets/curso/tema1-linea4.svg'),
        titulo: 'Planea el diálogo y plantea las reglas',
        texto:
          'Se debe explicar a los participantes cómo se desarrollará el grupo focal, poner pausas, tiempo entre discusiones, y anotaciones, para que todos puedan participar.',
      },
      {
        icono: require('@/assets/curso/tema1-linea5.svg'),
        titulo: 'Modera de forma adecuada',
        texto:
          'Crear un clima agradable para que las personas aporten y se sientan cómodas, además de aclararles el objetivo de la investigación, ya que de esta manera podrán saber qué tipo de aporte brindan.',
      },
      {
        icono: require('@/assets/curso/tema1-linea6.svg'),
        titulo: 'Analiza los resultados',
        texto:
          'Esta es una técnica cualitativa, de manera que los resultados se extrapolan a la población total con similitudes a los participantes.',
      },
    ],
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
