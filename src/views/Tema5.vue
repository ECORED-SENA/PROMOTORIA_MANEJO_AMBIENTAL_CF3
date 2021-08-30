<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Principios de enfoque diferencial

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema5.jpg", alt="Principios de enfoque diferencial")  

    p.mb-4(data-aos="fade") El enfoque diferencial lo componen el principio de igualdad y no discriminación. De esta manera, todas las personas son iguales ante la ley sin importar su condición social, de clase, edad, salud, grupo étnico y orientación sexual. Es decir, que las acciones establecidas por el Estado deben garantizar los derechos fundamentales de las personas, como el respeto, la protección y el trato y deben estar ligadas con las características propias de cada uno. A continuación, se podrán conocer los principios de igualdad, diversidad, participación, interculturalidad, integralidad, sostenibilidad y adaptabilidad: 
    
    .row.justify-content-center.tarjeta.tarjeta-verde.mb-4(data-aos="fade-down")
      .col-lg-10
        SlyderE.py-5
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Igualdad
              p Es un principio básico y establece que más allá de las diferencias entre las personas sea por rasgos físicos, capacidad intelectual, clase social, nivel educativo, color de piel, diversidad de costumbres, creencias, lenguas, prácticas, diferentes culturas, etc.; la característica de disfrutar de los derechos los iguala como personas. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema5-slider1.jpg', alt='Igualdad')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Diversidad
              p Hace referencia a las diferencias entre personas, animales o cosas. Dentro de los seres humanos existe la diversidad cultural, étnica, sexual, lingüística, ideológica, religiosa, entre otras. Es decir, la diversidad son todas las formas en que son manifestadas las culturas de cualquier grupo o sociedad en general.
            .col-md-6
              figure
                img(src='@/assets/curso/tema5-slider2.jpg', alt='Diversidad')  
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Participación 
              p Es la intervención en cualquier tipo de actividad de forma cognitiva o intuitiva. La participación puede presentarse de manera inmediata, es decir que es emocional, de otro lado, la participación cognitiva es premeditada y procede de un conocimiento. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema5-slider3.jpg', alt='Participación')         
          .row
            h4 Clasificación de la participación en espacios públicos
            ul.lista-ul--color.lista-circulo.lista-azul
              li.mb-1
                i.fas.fa-circle
                p.mb-0
                  strong Participación ciudadana: 
                  | Es el derecho legal de todos los ciudadanos de interferir con el Gobierno y la toma de decisiones del mismo y, de ese modo, promover el desarrollo regional y la democracia.
              li.mb-1
                i.fas.fa-circle
                p.mb-0
                  strong Participación política: 
                  | Considera todo tipo de actividades cívicas destinadas a interferir en el nombramiento de líderes y/o políticos e influir en ellos en términos de orden público.  
              li.mb-1
                i.fas.fa-circle
                p.mb-0
                  strong Participación comunitaria: 
                  | Incluye todo tipo de actividades sociales, tanto dentro como fuera de la comunidad de ciudadanos y tiene como objetivo principal, proteger y defender los intereses sociales y crear conciencia social.
              li.mb-1
                i.fas.fa-circle
                p.mb-0
                  strong Participación social:      
                  | Es una acción colectiva para el desarrollo comunitario, la identificación de las necesidades de la comunidad y la educación social. La forma más común de participación comunitaria es la caridad o el voluntariado.
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Interculturalidad 
              p Hace referencia a la interacción entre dos o más culturas, de una manera respetuosa, donde se percibe que ningún grupo cultural está por encima de otro, propiciando la horizontalidad, integración y convivencia entre culturas, pero hay quienes emplean el término para seguir discriminando.   
            .col-md-6
              figure
                img(src='@/assets/curso/tema5-slider5.jpg', alt='Interculturalidad')  
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Integralidad  
              p Se conforma desde varios puntos de vista y apunta hacia el desarrollo completo del ser humano, teniendo en cuenta que todas las partes que lo conforman son valiosas, tanto la parte afectiva, física, fisiológica, intelectual, social, etc.
            .col-md-6
              figure
                img(src='@/assets/curso/tema5-slider6.jpg', alt='Integralidad')  
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Sostenibilidad    
              p La sostenibilidad en lo ambiental hace referencia a la conservación de la biodiversidad sin sacrificar el progreso económico y social. La sostenibilidad económica asegura la rentabilidad de las actividades que persiguen la sostenibilidad ambiental y social, y la sostenibilidad social persigue la cohesión de la población y su estabilidad.
            .col-md-6
              figure
                img(src='@/assets/curso/tema5-slider7.jpg', alt='Sostenibilidad')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Adaptabilidad 
              p La adaptabilidad es la capacidad de responder con flexibilidad a los cambios que ocurren en el entorno y adaptarse a nuevas realidades con facilidad.  
            .col-md-6
              figure
                img(src='@/assets/curso/tema5-slider8.jpg', alt='Adaptabilidad')                 


    p.mb-4(data-aos="fade") La importancia del enfoque diferencial es que permite comprender y visualizar las dinámicas de discriminación y exclusión social, de manera que se establezcan acciones que disminuyan las inequidades y el desarrollo humano. 
    

</template>

<script>
export default {
  name: 'Tema5',
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
