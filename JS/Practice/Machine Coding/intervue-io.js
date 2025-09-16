const logs = ` mark     Johansson waffle                      80 2
 mark   Johansson blender    200                         1
    mark                Johansson knife    10 4
 Nikita    Smith                       waffle    80    2
      Nikita    Smith    blender    200 1
 Nikita    Smith knife 10 4 `


 // firstName lastName itemName price qty


// write a func that takes these logs string, and converts it into the obj. structured like obj below
// const obj = {
//     "mark Johansson": [  
//         {  "name": "waffle",  "price": "80",  "quantity": "2"  },  
//         {  "name": "blender",  "price": "200",  "quantity": "1"  }, 
//         {  "name": "knife",  "price": "10",  "quantity": "4"  }
    
//     ],  
//     "Nikita Smith": [ 
//         {  "name": "waffle",  "price": "80",  "quantity": "2"  },
//         {  "name": "blender",  "price": "200",  "quantity": "1"  },
//         {  "name": "knife",  "price": "10",  "quantity": "4"  }
//     ]
// }


let arr = logs.split("\n");
let obj = {};

for(let i = 0; i < arr.length; i++){
    let line = arr[i].split(" ").filter((val) => val != "");
    
    let key = line[0] + " " + line[1];
    
    let values = {
        "name" : line[2],
        "price" : Number(line[3]),
        "quantity": Number(line[4])
    };
    
    if(key in obj){
        obj[key].push(values);
    } else {
        obj[key] = [];
        obj[key].push(values);
    }
}

console.log(obj);
