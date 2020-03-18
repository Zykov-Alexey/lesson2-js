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




