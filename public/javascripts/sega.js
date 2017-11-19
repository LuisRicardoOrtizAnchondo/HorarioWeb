var idInscripcion = $('#tbCarreras1').attr('idInscripcion'); 
var idCicloEscolar =  $('#tbCarreras1').attr('idCicloEscolar'); 
$('sega_area').html('<iframe id="sega_iframe" src="https://sega.uach.mx"></iframe>');

//Saves sega info into user Document (table)
$('#sega').on('click', function(e){
    e.preventDefault();
    let matricula = 0;
    let nombre = '';
    let idInscripcion = 0;
    let idCicloEscolar = 0;
    $.ajax({
		type: 'POST',
        url: '/subscribe',
        data: {idInscripcion: idInscripcion, idCicloEscolar: idCicloEscolar, nombre: nombre, matricula: matricula}
    })
	.success(function(response){
    	console.log("Everything went just fine!");
	})
	.error(function (error){
		console.log("Error: " + e);
	})
});

