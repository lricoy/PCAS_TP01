"use strict";angular.module("pcTp01App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("pcTp01App").controller("MainCtrl",["$scope",function(a){a.data=[{cliente:1,intervalo:2,momento:3,duracao:1,tempo_de_espera:0},{cliente:2,intervalo:3,momento:6,duracao:2,tempo_de_espera:0},{cliente:3,intervalo:3,momento:9,duracao:1,tempo_de_espera:0},{cliente:4,intervalo:3,momento:12,duracao:1,tempo_de_espera:0},{cliente:5,intervalo:5,momento:17,duracao:3,tempo_de_espera:0},{cliente:6,intervalo:0,momento:17,duracao:2,tempo_de_espera:3},{cliente:7,intervalo:1,momento:18,duracao:1,tempo_de_espera:4},{cliente:8,intervalo:5,momento:23,duracao:4,tempo_de_espera:0},{cliente:9,intervalo:1,momento:24,duracao:2,tempo_de_espera:3},{cliente:10,intervalo:4,momento:28,duracao:3,tempo_de_espera:1},{cliente:11,intervalo:1,momento:29,duracao:1,tempo_de_espera:3},{cliente:12,intervalo:2,momento:31,duracao:3,tempo_de_espera:2}];var b,c,d,e,f=0,g=function(){b=a.data.length,c=a.data[b-1].momento+a.data[b-1].duracao+a.data[b-1].tempo_de_espera,console.log("T:"+c),d=a.data.reduce(function(a,b){return{duracao:a.duracao+b.duracao}}).duracao,console.log("B:"+d),e=a.data.filter(function(a){return a.tempo_de_espera>0}),f=e.reduce(function(a,b){return{tempo_de_espera:a.tempo_de_espera+b.tempo_de_espera}}).tempo_de_espera,console.log("tempoTotalNaFila:"+f)};g(),a.$watch("data",function(){g(),h()},!0);var h=function(){a.totalDeClientesAtendidos=b,a.tempoMedioDeEspera=f/b,a.numeroMedioDeClientesNaFila=f/c,a.taxaMediaDeChegada=b/c,a.tempoMedioDeChegadas=1/a.taxaMediaDeChegada,a.taxaMediaDeAtendimento=b/d,a.tempoMedioDeAtendimento=1/d};a.tempoMedioDeResposta=function(){},a.tamanhoMedioDaFila=function(){}}]);