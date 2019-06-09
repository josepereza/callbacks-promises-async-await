// callback hell - part
function addData(callback){
    var a = 1;
    var b = 5;
    var c = a+b;
    callback(null, c);
  }
  
  function decVar(callback){
    var d = 7;
    callback(null, d);
  }
  
  function multiplyData(callback){
    addData(function(err, data){
      if(err){
        callback(err, null);
      }
      else {
        decVar(function(err, result){
          if(err){
            callback(err, null)
          }
          else {
            var newData = data * result;
            callback(null, newData);
          }
        });
      }
    });
  }
  
  multiplyData(function(error, resultSet){
    if(error){
      console.log(err);
    }
    else {
      console.log('ejemplo callback ' +resultSet);
    }
  });
  
  //Promise part
  function promise1(){
    return new Promise(function(resolve, reject){
       var a = 1;
       var b = 5;
       var c = a + b;
   resolve(c);
   });
  }
  
  function promise2(resData){
    return new Promise(function(resolve, reject){
       var d = 7 * resData;
   resolve(d);
   });
  }
  
  function promise3(){
   return promise1().then(function(data){
     return promise2(data);
   }).then(function(result){
     return result;
   });
  }
  
  promise3().then(function (dataSet) {
      console.log('ejemplo promesa ' + dataSet);
  });
  
  //Aysnc/Await part
  function addRecord(){
    // return new Promise(function(resolve, reject){
      var a = 1;
      var b = 5;
      var c = a + b;
      return c;
    // });
  }
  
  function multiplyRecord(data){
    // return new Promise(function(resolve, reject){
    var d = 7 * data;
    return d;
   // });
  }
  
  (async function() {
      var func1 = await addRecord();
      var func2 = await multiplyRecord(func1);
      console.log('ejemplo  async ' + func2);
  }) ();