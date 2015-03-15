
'use strict';

/**
 * @ngdoc function
 * @name pcTp01App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pcTp01App
 */
angular.module('pcTp01App')
  .controller('MainCtrl', function ($scope) {

  	// Os dados passados no enunciado
  	$scope.data = [
	  	{'cliente':1,'intervalo':2,'momento':3,'duracao':1,'tempo_de_espera':0},
		{'cliente':2,'intervalo':3,'momento':6,'duracao':2,'tempo_de_espera':0},
		{'cliente':3,'intervalo':3,'momento':9,'duracao':1,'tempo_de_espera':0},
		{'cliente':4,'intervalo':3,'momento':12,'duracao':1,'tempo_de_espera':0},
		{'cliente':5,'intervalo':5,'momento':17,'duracao':3,'tempo_de_espera':0},
		{'cliente':6,'intervalo':0,'momento':17,'duracao':2,'tempo_de_espera':3},
		{'cliente':7,'intervalo':1,'momento':18,'duracao':1,'tempo_de_espera':4},
		{'cliente':8,'intervalo':5,'momento':23,'duracao':4,'tempo_de_espera':0},
		{'cliente':9,'intervalo':1,'momento':24,'duracao':2,'tempo_de_espera':3},
		{'cliente':10,'intervalo':4,'momento':28,'duracao':3,'tempo_de_espera':1},
		{'cliente':11,'intervalo':1,'momento':29,'duracao':1,'tempo_de_espera':3},
		{'cliente':12,'intervalo':2,'momento':31,'duracao':3,'tempo_de_espera':2},
	];
	var Cn, T, B, clientesComFila, tempoTotalNaFila = 0;

	var calcularValores = function() {
		// n-esimo cliente a entrar no sistema
		Cn = $scope.data.length;

		// O tempo de observacao de Chegadas
		// Utiliza-se o termino do ultimo momento observado
		T = $scope.data[Cn-1].momento + $scope.data[Cn-1].duracao + $scope.data[Cn-1].tempo_de_espera;
		console.log('T:' + T);

		// O tempo de atendimento do sistema
		// Utiliza-se a soma da duracao de antedimento do sistema.
		B = $scope.data.reduce(function(a, b) {
		  return { 'duracao': a.duracao + b.duracao };
		}).duracao;
		console.log('B:' + B);

		// Os clientes que enfrentaram fila
		clientesComFila = $scope.data.filter(function(elem){
			return elem.tempo_de_espera > 0;
		});

		// O tempo total Da Fila
		// Utiliza-se o tempo total gasto dentro da fila pelos clientes com tempo_de_espera > 0
		tempoTotalNaFila = clientesComFila.reduce(function(a, b) {
		  return { 'tempo_de_espera': a.tempo_de_espera + b.tempo_de_espera };
		}).tempo_de_espera;
		console.log('tempoTotalNaFila:' + tempoTotalNaFila);
	};
	calcularValores();// Chamada inicial

	// Faz com que sempre que o vetor com os dados seja alterado,
	// recalcule os resultados
	$scope.$watch('data', function(newValue, oldValue) {
		calcularValores();
		assginValues();
	}, true);

	// BINDINGS PARA MOSTRAR NO HTML

	var assginValues = function () {
		// *** TOTAL DE CLIENTES ATENDIDOS ***
		$scope.totalDeClientesAtendidos = Cn;

		// *** Número Médio de Clientes na Fila ***
		// Tempo médio de espera na fila
		// Tempo Total Na Fila / Número de Clientes
		// var Wi = tempoTotalNaFila / Cn;
		$scope.tempoMedioDeEspera = tempoTotalNaFila / Cn;

		// *** Tempo médio de espera na fila ***
		// Número médio de clientes na fila
		// Tempo Total na Fila / Duracao
		// var Nw = tempoTotalNaFila / T;
		$scope.numeroMedioDeClientesNaFila = tempoTotalNaFila / T;

		// *** Taxa média de Chegada ***
		// taxa média de chegada (λ) = Cn / T
		// var taxaMediaDeChegada = Cn/T;
		$scope.taxaMediaDeChegada = Cn/T;

		// *** Tempo Médio de Chegada ***
		// tempo médio entre as chegadas (Ii) = 1 / λ
		// var tempoMedioDeChegada = 1/taxaMedia;
		$scope.tempoMedioDeChegadas = 1/$scope.taxaMediaDeChegada;

		// *** Taxa Médio de Atendimento ***
		// taxa média de atendimento (µ) = Cn / B
		// var taxaMediaDeAtendimento = Cn/B;
		$scope.taxaMediaDeAtendimento = Cn/B;

		// *** Tempo Médio de Atendimento ***
		// tempo médio de atendimento (S) = 1 / µ
		// var tempoMedioDeAtendimento = 1/B;
	    $scope.tempoMedioDeAtendimento = 1/B;

	    // *** Tempo de Resposta ***
	    // tempo médio gasto na fila (Wi)
	    // tempo médio que demorou em atendimento (Si)
	    $scope.tempoMedioDeResposta = $scope.tempoMedioDeAtendimento + $scope.tempoMedioDeEspera

	};

  });
