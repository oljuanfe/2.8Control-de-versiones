'use strict';

<<<<<<< HEAD
// var numbers = [
//   1,
//   2,
//   3,
//   4,
//   5
// ];
//
// function calculateMedia(){
//   var acumulador = 0;
//   for (var i = 0 ; i < numbers.length ; i++){
//     acumulador +=  numbers[i];
// }
//   var media = acumulador / numbers.length;
//   return media;
// }
//
// console.log(calculateMedia());
//
// var newLength = numbers.push(10);
//
// console.log(calculateMedia());


var adalabers = [
  {
    nombre: 'Maria',
    age: 29,
    job: 'diseñadora'
  },
  {
    nombre: 'Lucia',
    age: 31,
    job: 'ingeniera'
  },
  {
    nombre: 'Susana',
    age: 34,
    job: 'periodista'
  },
  {
    nombre: 'Rocio',
    age: 25,
    job: 'diseñadora'
  },
  {
    nombre: 'Inma',
    age: 37,
    job: 'chef'
  }
];

function countAdalabers (){
  return adalabers.length;
}

console.log(countAdalabers());

function averageAge() {
  var acumulador = 0;
  for (var i =0; i < adalabers.length; i++){
    acumulador+= adalabers[i].age;
  }
  var average = acumulador/  adalabers.length;
  return average;
}

console.log(averageAge());

// function theYoungest(){
//   var ageCurrentAdalaber = adalaber[0].age;
//   for (var i =1; i < adalabers.length; i++){
//     if (ageCurrentAdalaber< adalaber[i].age){
//       ageCurrentAdalaber;
//   }
//   }

function theYoungest(){
  var ageCurrentAdalaber = adalabers[0].age;
  for (var i =1; i < adalabers.length; i++){
    if (ageCurrentAdalaber< adalabers[i].age){
      ageCurrentAdalaber= ageCurrentAdalaber;
    } else{
      ageCurrentAdalaber = adalabers[i].age;
    }
    return ageCurrentAdalaber;
  }
}

console.log(theYoungest());
=======
console.log('>> Ready :)');
>>>>>>> ca599412a11114baedfe4b340763533ef1e72fbb
