

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
 		pesImc.textContent ="Peso inválido!";
Paciente.classList.add("paciente-inválido!");

}

If(altura <= 0 || altura >= 3.00){
Console.log(" Altura inválida!");
alturaEhValids = false;
tdImc.textContent = "Altura inválida!";
Paciente.classList.add("paciente-invalido");
}
If( alturaEhValids && pesoEhValido){
Var imc = peso/ (altura * altura);
tdImc.textContent = imc.toFixed(2);
}

Var bataoAdicionar = documento.querySelector("#adicionar-paciente");
bataoAdicionar. addEventListener("click, function(event"){
event.preventDefault();
Var form = documento.querySelector("#form- adiciona");
Var nome = form.nome.value;
Var peso = form.peso.value;
Var altura = form.altura.value
Var gordura = form.gordura.value;

Var pacienteTr = documento.creatElement("tr")                                             

Var nomeTd = documento.createElement("td")
Var pesoTd = documento.createElement("td")
Var alturaTd = documento.createElement("td")
Var gorduraTd = documento.createElement("td")
Var imcTd = documento.createElement("td")

PacienteTr.appendChild(nomeTd);
PacienteTr.appendChild(pesoTd);
PacienteTr.appendChild(alturaTd);
PacienteTr.appendChild(gorduraTd);

Var tabela = documento.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);

}

}

Título.addEventListerner("click", function () {                                          
console.log( "fui clicado");
}
)
