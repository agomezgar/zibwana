const botNuevaVentana=document.getElementById("nuevaVentana")
const botGuardar=document.getElementById("grabar");
const botCargar=document.getElementById("cargar");
let acta,datos
botGuardar.addEventListener('click',()=>{
	var fecha=document.getElementById("fecha")
	//var alumno=document.getElementById("alumno")
	var nivel=document.getElementById("nivel")
	var orientadora=document.getElementById("orientadora");
	var jefeESO=document.getElementById("jefeESO");
	var jefeBach=document.getElementById("jefeBACH");
	var jefa=document.getElementById("jefa");
	var directora=document.getElementById("directora");

	//var profesor=document.getElementById("profesor")
	var planificacion=document.getElementById("planificacion")
	var revision=document.getElementById("revision")
	var climaConv=document.getElementById("climaConv")
	var rendimiento=document.getElementById("rendimiento")
	var ACNEAE=document.getElementById("ACNEAE")
	var puntuales=document.getElementById("puntuales")
	var generales=document.getElementById("generales")
	var absentismo=document.getElementById("absentismo")
	var mediacion=document.getElementById("mediacion")
	var compromisos=document.getElementById("compromisos")
var otros=document.getElementById("otros");
	var otrasIncidencias=document.getElementById("otrasIncidencias")
	var horaInicio=document.getElementById("horaInicio")
	var horaFinal=document.getElementById("horaFinal")

	acta={
fecha:fecha.value,
horaInicio:horaInicio.value,
nivel:nivel.value,
orientadora:orientadora.checked,
jefeESO:jefeESO.checked,
jefeBach:jefeBach.checked,
jefa:jefa.checked,
directora:directora.checked,
planificacion:planificacion.checked,
revision:revision.checked,
climaConv:climaConv.checked,
rendimiento:rendimiento.checked,
ACNEAE:ACNEAE.checked,
puntuales:puntuales.checked,
generales:generales.checked,
absentismo:absentismo.checked,
mediacion:mediacion.checked,
compromisos:compromisos.value,
otrasIncidencias:otrasIncidencias.value,
otros:otros.value,
horaFinal:horaFinal.value}
	window.api.enviar("guardar",JSON.stringify(acta));	
})
botNuevaVentana.addEventListener('click',()=>{
	var fecha=document.getElementById("fecha")
	//var alumno=document.getElementById("alumno")
	var nivel=document.getElementById("nivel")
	var orientadora=document.getElementById("orientadora");
	var jefeESO=document.getElementById("jefeESO");
	var jefeBach=document.getElementById("jefeBACH");
	var jefa=document.getElementById("jefa");
	var directora=document.getElementById("directora");
		//var profesor=document.getElementById("profesor")
	var planificacion=document.getElementById("planificacion")
	var revision=document.getElementById("revision")
	var climaConv=document.getElementById("climaConv")
	var rendimiento=document.getElementById("rendimiento")
	var ACNEAE=document.getElementById("ACNEAE")
	var puntuales=document.getElementById("puntuales")
	var generales=document.getElementById("generales")
	var absentismo=document.getElementById("absentismo")
	var mediacion=document.getElementById("mediacion")
	var compromisos=document.getElementById("compromisos")
var otros=document.getElementById("otros");
	var otrasIncidencias=document.getElementById("otrasIncidencias")
	var horaInicio=document.getElementById("horaInicio")
	var horaFinal=document.getElementById("horaFinal")

	acta={
fecha:fecha.value,
horaInicio:horaInicio.value,
nivel:nivel.value,
orientadora:orientadora.checked,
jefeESO:jefeESO.checked,
jefeBach:jefeBach.checked,
jefa:jefa.checked,
directora:directora.checked,
planificacion:planificacion.checked,
revision:revision.checked,
climaConv:climaConv.checked,
rendimiento:rendimiento.checked,
ACNEAE:ACNEAE.checked,
puntuales:puntuales.checked,
generales:generales.checked,
absentismo:absentismo.checked,
mediacion:mediacion.checked,
compromisos:compromisos.value,
otros:otros.value,
otrasIncidencias:otrasIncidencias.value,
horaFinal:horaFinal.value}
	window.api.enviar("openChildWindow",JSON.stringify(acta));	
})
botCargar.addEventListener('click',()=>{
	window.api.enviar("cargarArchivo");
})

window.api.recibir('carga', (acta) => {
  datos=JSON.parse(acta)
  var fecha=document.getElementById("fecha")
  //var alumno=document.getElementById("alumno")
  var nivel=document.getElementById("nivel")
  var orientadora=document.getElementById("orientadora");
  var jefeESO=document.getElementById("jefeESO");
  var jefeBach=document.getElementById("jefeBACH");
  var jefa=document.getElementById("jefa");
  var directora=document.getElementById("directora");
//var profesor=document.getElementById("profesor")
  var planificacion=document.getElementById("planificacion")
  var revision=document.getElementById("revision")
  var climaConv=document.getElementById("climaConv")
  var rendimiento=document.getElementById("rendimiento")
  var ACNEAE=document.getElementById("ACNEAE")
  var puntuales=document.getElementById("puntuales")
  var generales=document.getElementById("generales")
  var absentismo=document.getElementById("absentismo")
  var mediacion=document.getElementById("mediacion")
  var compromisos=document.getElementById("compromisos")

  var otrasIncidencias=document.getElementById("otrasIncidencias")
  var horaInicio=document.getElementById("horaInicio")
  var horaFinal=document.getElementById("horaFinal")
var otros=document.getElementById("otros");
  fecha.value=datos.fecha
  nivel.value=datos.nivel
orientadora.checked=datos.orientadora
jefeESO.checked=datos.jefeESO
jefeBach.checked=datos.jefeBach
jefa.checked=datos.jefa
directora.checked=datos.directora
  planificacion.checked=datos.planificacion
  revision.checked=datos.revision
  climaConv.checked=datos.climaConv
  rendimiento.checked=datos.rendimiento
  ACNEAE.checked=datos.ACNEAE
  puntuales.checked=datos.puntuales
  generales.checked=datos.generales
  absentismo.checked=datos.absentismo
  mediacion.checked=datos.mediacion
  compromisos.value=datos.compromisos
  otros.value=datos.otros
  otrasIncidencias.value=datos.otrasIncidencias
  horaInicio.value=datos.horaInicio
  horaFinal.value=datos.horaFinal

  })
