const {ipcRenderer}=require('electron')
ipcRenderer.on('reparte', (event, acta) => {
    var datos=JSON.parse(acta)
    console.log("Compromisos: "+datos.compromisos);
    var fecha=document.getElementById("fecha")
    var nivel=document.getElementById("nivel")
    var dires=document.getElementById("dires")

    var horaInicio=document.getElementById("horaInicio")
    var horaFinal=document.getElementById("horaFinal")
    var cuadroAsuntos=document.getElementById("asuntos");

    fecha.innerHTML="<b>Acta de la reunión de tutores celebrada el día:</b> "+datos.fecha
    nivel.innerHTML="<b>Nivel educativo:</b> "+datos.nivel
    var textoDires="Coordinadores presentes en la reunión: <br>";
    if (datos.orientadora){
      textoDires+="- Responsable del Departamento de Orientación<br>";
    }
    if (datos.jefeESO){
      textoDires+="- Responsable de Jefatura de Estudios Adjunta de ESO<br>";
    }
    if (datos.jefeBACH){
      textoDires+="- Responsable de Jefatura de Estudios Adjunta de Bachillerato<br>";
    }
    if (datos.jefa){
      textoDires+="- Responsable de Jefatura de Estudios<br>";
    }
    if (datos.directora){
      textoDires+="- Responsable de Dirección del centro<br>";
    }
    dires.innerHTML=textoDires;
    //dires.innerHTML="<b>Miembros del equipo directivo: </b>"+datos.dires
    horaInicio.innerHTML="Siendo las "+datos.horaInicio+" horas del día indicado, "+
    "se celebra una reunión entre los tutores de "+datos.nivel+ " y los miembros del equipo directivo arriba mencionados y en la que se trataron "+
    "los siguientes aspectos: ";
    let textoAsuntos="";
    if (datos.planificacion){
textoAsuntos+="- Planificación y previsión de actividades del Plan de Acción Tutorial<br>"    }

    if (datos.revision){
textoAsuntos+="Revisión y seguimiento de actividades del Plan de Acción Tutorial.<br>"    }
    if (datos.climaConv){
textoAsuntos+="- Seguimiento del clima de convivencia.<br>"    }
    if (datos.rendimiento){
      textoAsuntos+="- Rendimiento académico general.<br>"    
    }
    if (datos.ACNEAE){
textoAsuntos+="- Atención a la diversidad. Medidas con alumnos ACNEE/ACNEAE.<br>"    }
    if (datos.puntuales){
textoAsuntos+="- Discusión de problemas o necesidades puntuales de algún alumno/-a o grupo.<br>"    }
    if (datos.generales){
textoAsuntos+="- Aspectos generales concernientes a la organización del centro. <br>"    }
    if (datos.absentismo){
textoAsuntos+="- Seguimiento de uno o varios casos de absentismo. <br>"    }    
    if (datos.mediacion){
textoAsuntos+="- Asuntos relacionados con el Plan de Mediación del centro. <br>"    }
if (datos.otros==""){

}else{
  textoAsuntos=textoAsuntos+"Otros asuntos: <br>"+datos.otros.replace(/\n/g,'<br>');

}
if (datos.compromisos==""){
  textoAsuntos+="Durante la discusión no se han tomado compromisos educativos relevantes.<br>"
}else{
  textoAsuntos=textoAsuntos+"<h2>Compromisos educativos: </h2> "+datos.compromisos.replace(/\n/g,'<br>');

}
if (datos.otrasIncidencias==""){
  textoAsuntos+="<h2>Otras incidencias: </h2> no hay incidencias reseñables.<br>";
}else{
  textoAsuntos+="<h2>Otras incidencias: </h2>"+datos.otrasIncidencias.replace(/\n/g,'<br>');
}
cuadroAsuntos.innerHTML=textoAsuntos;


    horaFinal.innerHTML="Finaliza la sesión a las "+datos.horaFinal+" en Ciudad Real, a "+datos.fecha
  })
