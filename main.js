var userObj = {
  firstName: 'Alexandr',
  lastName: 'Pushkin',
  age: 25,
  fullName: function(){
  return fname = this.firstName + ' ' + this.lastName;
    },
};
console.log(userObj);
userObj.fullName();

// задача3

function defUpperStr(mytext) {
  return (mytext || 'default text').toUpperCase();
}
console.log(defUpperStr('My text'));
console.log(defUpperStr()); 

// задача4
function evenFn(n) {
  var arr = [];
  for (var i = 2; i<=n; i+=2) arr.push(i);
  return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

//задача 5
function weekFn(n) {
  switch(n){
    case 1: return 'Понедельник'; break;
    case 2: return 'Вторник'; break;
    case 3: return 'Среда'; break;
    case 4: return 'Четверг'; break;
    case 5: return 'Пятница'; break;
    case 6: return 'Суббота'; break;
    case 7: return 'Воскресенье'; break;
    default: return null;
  } 
}
console.log(weekFn(2));
console.log(weekFn(5));
console.log(weekFn(9));
console.log(weekFn(1/8));

//задача 6
function ageClassification(n) {
  var ageСlass = n < 0 ? null: 
    n >= 0 && n <= 24 ? 'детский возраст' : 
    n > 24 && n <= 44 ? 'молодой возраст' :
    n > 44 && n <= 65 ? 'средний возраст' :
    n > 65 && n <= 75 ? 'пожилой возраст' :
    n > 75 && n <= 90 ? 'старческий возраст' :
    n > 90 && n <= 122 ? 'долгожители' : null;
    
    return ageСlass;
}
console.log(ageClassification(-1));
console.log(ageClassification(2));
console.log(ageClassification(24.1));
console.log(ageClassification(55));

//задача 7

// function oddFn(n) {
//   var arr = [];
//   for (var i = 1; i<=n; i++) {
//     if (i % 2 != 0) arr.push(i)}
//   return arr;
// }

function oddFn(n) {
  var ar = [];
  var j = 1;
  while (j <= n) {
    ar.push(j);
    j += 2;
  }
  return ar;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

//задача 8

function mainFunc(a, b, func) {
  if (typeof func === 'function') return func(a, b);
  return false;
}

function cbRandom(a,b){
  var x = Math.round(Math.random() * (b - a) + a);
  return x;
}

function cbPow(a,b){
  var c = Math.pow(a,b)  
  return c;
}

function cbAdd(a,b) {
  var v = a + b ;
  return v;
}
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd)); 
console.log(mainFunc(2, 5, 'not a func'));