
var titulo=document.querSelector(".titulo");
titulo.textContent="Aparecida Nutricionistas";

var pacientes= document.querSelectorrAll(".paciente");

for(var i=0;< pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente. querySeletor(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector("info- altura");
	var altura = tdAltura.textContent;

	var tdAltura = paciente.querySelector(".info-imc");

 	var pesoEhValido = true;
 	var alturaehValido = true;

 	if(peso <= 0 ||>=1000){
 		console.log("Peso inválido!");
 		pesoEhValido = false;
 		td
 	}
}
