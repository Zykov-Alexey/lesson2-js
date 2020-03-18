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