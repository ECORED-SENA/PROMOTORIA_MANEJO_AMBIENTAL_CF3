(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"4dff2bef","chunk-0206bfa0":"4d34bff0","chunk-04b93936":"7e1d8717","chunk-13a6037e":"aecd9d72","chunk-16015154":"49ce4832","chunk-17977988":"ba53ec10","chunk-2c06842c":"3e32d9ab","chunk-2d208d90":"a8e8d9b0","chunk-2d21d0e2":"1bd19836","chunk-2d22c123":"1bea3445","chunk-2e80bb9a":"cfc5ce1d","chunk-3145fe0f":"48bc8990","chunk-328f70dd":"f32eeee7","chunk-3807499c":"fbabfc2f","chunk-3dc647fd":"86327865","chunk-4cdd78c0":"18eacfa2","chunk-4fde0a08":"2569ad60","chunk-515a8379":"01382b23","chunk-53ccb27e":"f34c5235","chunk-59974754":"f3fb4212","chunk-766a929b":"1a7dde6e","chunk-839300a6":"b5996397","chunk-c796899c":"049769b7","chunk-dbb9869e":"4eb5f732",comple:"950291bc",creditos:"129457a9",glosario:"82fc5f85",intro:"01135250",referencias:"641c3ec4",tema1:"e5f58236",tema2:"61c7de59",tema3:"1b428f55",tema4:"e721f7f4",tema5:"8683126b"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema2:1,tema4:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"1cd216af","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"a2e53937","chunk-766a929b":"c5c27b88","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"0fc690bd",creditos:"b1b8712f",glosario:"1fb7ccc1",intro:"0e433876",referencias:"d4a3a517",tema1:"31d6cfe0",tema2:"e8c60d88",tema3:"31d6cfe0",tema4:"939dc61f",tema5:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,i,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Campaña ambiental",descripcionCurso:"Una campaña ambiental abarca diferentes conceptos y herramientas que sirven de guía para su desarrollo. Se requiere de una serie de conocimientos, técnicas y elementos que faciliten su implementación; así como la importancia de comprender las dinámicas y los derechos del ser humano, el cuidado del medio ambiente, el bienestar social y económico para lograr un adecuado equilibrio.",imagenBannerPrincipal:n("bce2"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Técnicas de recolección de información",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Método de observación",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Cuestionarios o encuestas",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Grupos focales",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Entrevistas",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Estructura de proyectos",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Instrumentos de diagnóstico",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Criterios de comunicación asertiva",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Principios de enfoque diferencial",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Anguita. J., Repullo. J. y Donado. J. (2003). La encuesta como técnica de investigación, elaboración de cuestionarios y tratamiento estadístico de datos. ",link:"https://www.elsevier.es/es-revista-atencion-primaria-27-articulo-la-encuesta-como-tecnica-investigacion--13047738"},{referencia:"Bautista. L. (2013). La observación. ",link:"http://data-collection-and-reports.blogspot.com/2009/05/la-observacion.html"},{referencia:"Gerencie. (s.f.). Matriz DOFA - Qué es y para qué sirve. ",link:"https://www.gerencie.com/para-que-sirve-la-matriz-dofa.html#:~:text=Para%20qu%C3%A9%20sirve%20la%20matriz%20DOFA.,-La%20importancia%20de&text=La%20matriz%20DOFA%20nos%20muestra,integral%20de%20nuestra%20verdadera%20situaci%C3%B3n"},{referencia:"Jordán. J. (2016). La técnica de construcción y análisis de escenarios en los estudios de Seguridad y Defensa. ",link:"https://global-strategy.org/la-tecnica-de-construccion-y-analisis-de-escenarios-en-los-estudios-de-seguridad-y-defensa/"},{referencia:"Universidad de Antioquia. (2009). La técnica de recolección de información mediante grupos focales.",link:"https://revistas.udea.edu.co/index.php/ceo/article/view/1611"},{referencia:"Universidad Nacional de San Juan. (s.f.). Matriz Análisis de Partes Involucradas en el Problema. (causas-efectos). ",link:"https://studylib.es/doc/5271569/matriz-an%C3%A1lisis-de-partes-involucradas-en-el-problema"},{referencia:"UP. (s.f.). DAFO análisis, cómo hacer un DAFO para tu negocio + ejemplos. ",link:"https://www.up-spain.com/blog/analisis-dafo-foda/"},{referencia:"Villanueva. M. (2016). La observación como técnica de recolección de datos. ",link:"https://es.slideshare.net/MarluVillanueva/la-observacion-como-tecnica-de-recoleccion-de-datos-69215191"}],glosario:[{termino:"Adaptabilidad",significado:"capacidad de responder con flexibilidad a los cambios que ocurren en el entorno y adaptarse a nuevas realidades con facilidad."},{termino:"Diversidad",significado:"diferencias entre personas, animales o cosas. Dentro de los seres humanos existe la diversidad cultural, étnica, sexual, lingüística, ideológica, religiosa, entre otras."},{termino:"Encuestas",significado:"recopilación de información que es proporcionada directamente por los sujetos de estudio, con el fin de obtener actitudes, opiniones o sugerencias de ellos mismos. Así mismo, esta técnica permite aplicaciones masivas."},{termino:"Entrevistas",significado:"técnica de recolección de información muy efectiva en la investigación cualitativa. Se define como una conversación que ofrece un propósito específico además de hablar. Es una herramienta técnica que toma la forma de un diálogo conversacional."},{termino:"Grupos focales",significado:"consiste en que las personas llevan a cabo una reunión donde pueden opinar y solucionar un problema en específico. "},{termino:"Igualdad",significado:"principio básico de los derechos humanos. Más allá de las diferencias de entre las personas sea por rasgos físicos, capacidad intelectual, clase social, nivel educativo, color de piel, diversidad de costumbres, creencias, lenguas, prácticas, diferentes culturas, etc."},{termino:"Integralidad",significado:"se conforma desde varios puntos de vista y apunta hacia el desarrollo completo del ser humano, teniendo en cuenta que todas las partes que lo conforman son valiosas, tanto la parte afectiva, física, fisiológica, intelectual, social, etc."},{termino:"Interculturalidad",significado:"interacción entre dos o más culturas de una manera respetuosa, donde se percibe que ningún grupo cultural está por encima de otro, propiciando la horizontalidad, integración y convivencia entre culturas, pero hay quienes emplean el término para seguir discriminando."},{termino:"Participación",significado:"intervención en cualquier tipo de actividad de forma cognitiva o intuitiva. "},{termino:"Sostenibilidad",significado:"capacidad de satisfacer las necesidades presentes sin comprometer las necesidades de las futuras generaciones, garantizando el equilibrio entre el crecimiento económico, cuidado del ambiente y el bienestar social. "}],complementario:[{texto:"Anguita. J., Repullo. J. y Donado. J. (2003). La encuesta como técnica de investigación, elaboración de cuestionarios y tratamiento estadístico de dato.",tipo:"Artículo",link:"https://www.elsevier.es/es-revista-atencion-primaria-27-pdf-13047738"},{texto:"CEO. (s.f.). La técnica de recolección de información mediante grupos focales.",tipo:"Artículo",link:"https://revistas.udea.edu.co/index.php/ceo/article/view/1611/1264"},{texto:"Díaz. L., Turroco, I., Martínez, M. y Varela, M. (2013). La entrevista, recurso flexible y dinámico",tipo:"Artículo",link:"http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-50572013000300009"},{texto:"Ministerio del Interior - Secretaría de Desarrollo Regional y Administrativo, Chile. (s.f.). Postulación de proyectos. ",tipo:"Documento de sitio web",link:"http://agesplataforma.subdere.gov.cl/documentacion/Postulaci%C3%B3n%20de%20proyectos%20-%20Formulaci%C3%B3n%20de%20indicadores.pdf"},{texto:"Pérez. F. (s.f.). Planificación y elaboración de proyectos.",tipo:"Sitio Web",link:"http://agora.ceem.org.es/wp-content/uploads/documentos/proyectos/manualproyectos.pdf"},{texto:"Universidad Nacional de Colombia. (2012). Análisis DOFA. ",tipo:"Artículo",link:"http://www.odontologia.unal.edu.co/docs/claustros-colegiaturas_2013-2015/Guia_Analisis_DOFA.pdf"},{texto:"Villanueva. M. (2016). La observación como técnica de recolección de datos.",tipo:"Presentación ",link:"https://es.slideshare.net/MarluVillanueva/la-observacion-como-tecnica-de-recoleccion-de-datos-69215191"},{texto:"Lorete. A. (2011). Análisis de escenarios en entornos de negocio. ",tipo:"Artículo",link:"https://www.legaltoday.com/legaltech/nuevas-tecnologias/analisis-de-escenarios-en-entornos-de-negocio-una-poderosa-herramienta-para-las-empresas-de-servicios-profesionales-1-2011-08-01/"},{texto:"Sedigital, (2021). Características de la comunicación asertiva.",tipo:"Sitio web",link:"https://centropsicologiamurcia.com/blog/caracteristicas-de-la-comunicacion-asertiva/"},{texto:"Ministerio del Interior. (s.f.). El enfoque diferencial y étnico en la política pública de víctimas del conflicto armado.",tipo:"Documento",link:"https://gapv.mininterior.gov.co/sites/default/files/cartilla_enfoque_diferencial_fin_1.pdf"},{texto:"Unesco. (s.f.). Artículo 4.1 de la Convención sobre la Protección y la Promoción de la Diversidad de las Expresiones Culturales.",tipo:"Sitio web",link:"https://es.unesco.org/creativity/diversidad-cultural"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Ana María Buitrago Toro",cargo:"Experta temática",centro:"Centro Agropecuario La Granja <br>Regional Tolima"},{nombre:"Paula Andrea Taborda Ortiz",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología <br>Regional Distrito Capital"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Revisor metodológico y pedagógico",centro:"Centro de Diseño y Metrología <br>Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro de para la Comunicación de la Industria Gráfica <br>Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Juan Carlos Tapias Rueda",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Lady Adriana Ariza Luque",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Jessica Moreno Realpe",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Arnulfo Beltrán Mojica",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Adriana Marcela Suárez Eljure",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andres Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Veimar Celis Melendez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var y=n("9224");o["a"].prototype.$package=y,new o["a"]({router:g,store:h["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},bce2:function(e,a,n){e.exports=n.p+"img/banner-principal.68d67c31.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.55e1d76e.png"}});
//# sourceMappingURL=app.46ddd8d4.js.map