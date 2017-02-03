var dataSource1 = [
    {
      id: '0',
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: '1',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: '2',
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: '3',
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

var dataSource2 = [
    {
      id: '0',
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '1',
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '2',
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '3',
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];


/*

#1 DOESNT WORK

var results = {};

for ( var key in dataSource1){ results[key] = dataSource1 [key]};
for ( var key in dataSource2){ results[key] = dataSource2 [key]};




#2 DOESNT WORK
function merge(dataSource1,dataSource2){
     var results = {}
     for(var source in dataSource1){results[id] = dataSource1[id]};
     for(var source in dataSource2){results[id] = dataSource2[id]};
}


#4 WORKS


var results = {};

//loops through object 1

for (var i=0; i < dataSource1.length; i++) {
      results[dataSource1[i].id] = dataSource1[i];
}


//loops to find similarities

//for...in statement
//===>for (variable in object) {...}

//find() method that returns value of first object element
//===> arr.find(callback[, thisArg])


for (var key in results) {
      var addition = dataSource2.find(
        function(item) { return item === key; });
}


//combines each dataSource


for (var merge in addition) {
      results[key] = addition[key];
}


  console.log (results);

#5 WORKS

var objMerge;

objMerge = JSON.stringify(dataSource1) + JSON.stringify(dataSource2);


console.log(objMerge);




#6
*/

var results = [];
for (var i = 0; i < dataSource1.length; i++) {
     for (var j = 0; j < dataSource2.length; i++) {
          if ( dataSource1[i]== dataSource2[j]){
          results.push(dataSource2[i]);
     };
     };
};

console.log (results);
