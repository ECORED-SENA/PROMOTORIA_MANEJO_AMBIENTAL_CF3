<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Estructura de proyectos

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema2.jpg", alt="Estructura de proyectos")  

    p.mb-4(data-aos="fade") La estructura es la forma en la que se planifica, gestiona y desarrolla un proyecto; es decir, define su jerarquía la cual es crucial para su desarrollo. De acuerdo con esto, la estructura se debe centrar en:   

    AcordeonB.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-verde")
      .row.px-lg-5(titulo="Título")
        .col-lg-7
          p El título es el nombre con el que se identifica dicho proyecto. Es clave que el título de un proyecto sea corto, conciso y exponer de manera clara los objetivos y las variables principales del proyecto.
        .col-lg-5
          img(src="@/assets/curso/tema2-tab1.jpg", alt="Título")  
      .row.px-lg-5(titulo="Objetivos")
        .col-lg-7
          p Los objetivos son los resultados esperados que se esperan alcanzar con el desarrollo de las actividades que componen el proyecto, estos pueden ser medibles o cuantificables, realistas y medibles en el tiempo.
        .col-lg-5
          img(src="@/assets/curso/tema2-tab2.svg", alt="Objetivos")
      .row.px-lg-5(titulo="Temas")
        .col-lg-7
          p El tema es el asunto de la investigación, es decir sobre lo que se va tratar, relacionado con el área del conocimiento que se estudia. 
        .col-lg-5
          img(src="@/assets/curso/tema2-tab3.jpg", alt="Temas")    
      .row.px-lg-5(titulo="Actividades")
        .col-lg-7
          p Las actividades son las acciones que formarán parte del proyecto y cómo se realizarán. A partir de estas se obtienen los resultados del proyecto y productos, que cumplan los objetivos marcados.  Estas deberían ir en orden lógico y deben ser indicadas de manera clara y concisa, así como se deben definir las diferentes tareas en que se dividen las actividades. Se pueden añadir por número, denominación, fecha, lugar, número de participantes, sus características, costos de la actividad, entre otras; además, se puede establecer un resumen con dichas actividades.
        .col-lg-5
          img(src="@/assets/curso/tema2-tab4.jpg", alt="Actividades")   
      .row.px-lg-5(titulo="Metodología")
        .col-lg-7
          p La metodología es la organización y la forma en que se van a desarrollar las actividades y de qué forma se implicarán los diferentes participantes o herramientas. 
        .col-lg-5
          img(src="@/assets/curso/tema2-tab5.jpg", alt="Metodología")
      .row.px-lg-5(titulo="Indicadores de resultados")
        .col-lg-7
          p Permite comparar los resultados entre dos o más tipos de datos, sirven para elaborar una medida cuantitativa o una observación cualitativa, al hacer esta comparación se obtiene un número, una medida, u hecho u opción que apuntan hacia una situación en específico, de igual forma, es capaz de medir los cambios en dicha situación con el tiempo. Por ejemplo, el grado de cumplimiento de un objetivo. 
        .col-lg-5
          img(src="@/assets/curso/tema2-tab6.jpg", alt="Indicadores de resultados")    
      .row.px-lg-5(titulo="Indicadores económicos")
        .col-lg-4
          .back-primario.p-4.mb-0
            h4.text-white.text-center.mb-0 Indicadores de eficacia
          .back-verde-suave.p-4
            p.mb-0 Establecen la relación entre los objetivos planteados en un proyecto y los resultados obtenidos.
        .col-lg-4
          .back-primario.p-4.mb-0
            h4.text-white.text-center.mb-0 Indicadores de eficiencia 
          .back-verde-suave.p-4
            p.mb-0 Incorpora el concepto de eficacia en el aspecto económico, es decir, relacionada el resultado con los costes derivados de la ejecución.
        .col-lg-4
          .back-primario.p-4.mb-0
            h4.text-white.text-center.mb-0 Indicadores de efectividad o impacto
          .back-verde-suave.p-4
            p.mb-0 Se valora los beneficios directos con los del resto de la población, es decir los beneficios estimados del proyecto.
      .row.px-lg-5(titulo="Indicadores según la naturaleza del objeto")
        .col-lg-4
          .back-primario.p-4.mb-0
            h4.text-white.text-center.mb-0 Indicadores de realización 
          .back-verde-suave.p-4
            p.mb-0 Indicadores referidos a los recursos propuestos a disposición del proyecto y al uso que se les da.
        .col-lg-4
          .back-primario.p-4.mb-0
            h4.text-white.text-center.mb-0 Indicadores de resultado 
          .back-verde-suave.p-4
            p.mb-0 Indicadores que comparan cuantitativa o cualitativamente los objetivos planificados y resultados logrados, por ende, son indicadores que muestran el beneficio inmediato de la implementación del proyecto.
        .col-lg-4
          .back-primario.p-4.mb-0
            h4.text-white.text-center.mb-0 Indicadores de Impacto
          .back-verde-suave.p-4
            p.mb-0 Indicadores de efectividad del proyecto, miden los éxitos adquiridos.
      .row.px-lg-5(titulo="Indicadores adicionales")
        .col-lg-6
          .back-primario.p-4.mb-0
            h4.text-white.text-center.mb-0 Indicadores cuantitativos
          .back-verde-suave.p-4
            p.mb-0 Proporcionan información concreta para demostrar los resultados alcanzados.
        .col-lg-6
          .back-primario.p-4.mb-0
            h4.text-white.text-center.mb-0 Indicadores cualitativos
          .back-verde-suave.p-4
            p.mb-0 Facilitan la comprensión de los cambios en los procesos, motivos, comportamientos, entre otros.
        
    p(data-aos="fade") Por lo expuesto, la estructura de un proyecto abarca los ítems descritos anteriormente y su aplicación va a depender del tipo de estudio que se desarrolle, lo importante al momento de realizarlo es ser claro y conciso con lo que se requiere.

</template>

<script>
import AcordeonB from '../components/AcordeonB'
export default {
  name: 'Tema2',
  components: {
    AcordeonB,
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
