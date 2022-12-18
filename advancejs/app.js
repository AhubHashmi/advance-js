function dfg(a, b, c) {
  return a + b + c;
}

function cvb(a) {
  console.log(a);
}

cvb(dfg(1, 2, 3));

function dfg (){
    function cvb(){

    }
}
cvb()

var aa = ["", 1, 0, -1, undefined, true, false, null, " "];

if ([]) {
  console.log("if Works");
}

// var
// reinitializable (y)
// redeclaration (y)
// hoisting (y)
// block scope (n)

// let
// reinitializable (n)
// redeclaration (y)
// hoisting (n)
// block scope (y)

// const
// reinitializable (n)
// redeclaration (n)
// hoisting (n)
// block scope (y)

var a1 = "ABC";
var a1 = "XYZ";

console.log(a1);

// let a2 = "ABC";
// let a2 = "XYZ";
// console.log(a2);

// const a3 = "a3BC";
// const a3 = "XYZ";
// console.log(a3);

var dd = "abc";
dd = 123;
console.log(dd);

// let a = "abc";
// a = 123;
// console.log(a);

// const a = "abc";
// a = 123;
// console.log(a);

if (true) {
  var dd = "ABC";
}
console.log(dd);

// abc22();
// function abc22() {
//   var az = "ABC";
// }
// console.log(az);

if (true) {
  var b1 = "XYZ";
}
console.log(b1);

// if (true) {
//   let b3 = "abc";
// }
// console.log(b3);

//=================== template literals ====================

//=================== Ternary Operators ====================

if (true) {
  if (true) {
    console.log("true");
  } else {
    console.log("false");
  }
} else {
  console.log("parent false");
}
true
  ? true
    ? console.log("true")
    : console.log("false")
  : console.log("parent false");

let bool2 = true;
let num1 = undefined;
let num2 = 20;
let h = bool2 ? "abc" : "xyz";
console.log(h);

let v = bool2 && "ABC";
let u = num1 + num2 || 0;

console.log(v);
console.log(u);
console.log(typeof u);

//=================== Pass by Value ====================
//=================== Pass by Refrence ====================

let g = "abc";
g = 123;

console.log(g);

// const zx = "abc";
// zx = "xyz";

const xz = ["xyz"];

xz[0] = "abc";

console.log(xz);

let k = [1, 2, 3];

let l = k;
l.splice(1, 1);

// b[0] = 123;

console.log(l);

const fg = {
  id: 1,
  name: "ABC",
  abc : function(){}
};

const sa = fg;

sa.name = "XYZ";

console.log(fg);

//=================== Spread Operators ====================

const a2 = [1, 2, 3];
const c3 = { name: "abc" };
const b4 = [...a2];
// const b = new Array(...a);
b4.splice(1, 1);
console.log(b4);
console.log(a2);

//e.g

let a3 = [{ id: 1 }, { id: 2 }, { id: 3 }];

// let b = [...a3];
let b5 = JSON.parse(JSON.stringify(a3));
b5[0].name = "ABC";

console.log(b5[1]);
//=================== Rest Operators ====================
let b6 =[...a3]
function abc2(a, ...rest) {
  console.log(a);
  console.log(rest);
}
abc2(1, 2, 3, 4, 5, 6, 3, 5);

function abc3(a, ...abc3) {
  console.log(abc3);
}
abc3(123, 456, 789, 123, 456, 789);

//=================== Array functions ====================
//=================== map ====================
let a = [
  {
    id: 1,
    name: "ABC",
    category: "A",
    isApproved: false,
  },
  {
    id: 2,
    name: "MNO",
    category: "A",
    isApproved: false,
  },
  {
    id: 3,
    name: "POI",
    category: "A",
    isApproved: true,
  },
  {
    id: 4,
    name: "XYZ",
    category: "A",
    isApproved: false,
  },
];

let numArr = [10, 20, 30, 40, 50, 60];
a.map(function (x, i, lst) {
  console.log(x);
  console.log(i);
});

//=================== filter ====================

let s = a.filter(function (x, i) {
  if (x.category == "A") {
    console.log(i);
    x.in = i;
    return x;
  }
});
console.log(s);

//=================== forEach ====================

a.forEach(function (x, i) {
  x.inst = "SAIMS";
});
console.log(a);

//=================== some ====================

let q = a.some(function (x, i) {
  if (x.isApproved) {
    return x;
  }
});

console.log(q);

//=================== find ====================

let z = a.find(function (x, i) {
  if (x.id == 3) {
    return x;
  }
});

console.log(z);

let mobiles = [
  {
    id: 1,
    companyName: "Iphone",
    Model: "Iphone X",
    Ram: "3 GB",
    Rom: "64 GB",
    Price: "$218",
  },
  {
    id: 2,
    companyName: "Iphone",
    Model: "Iphone 12",
    Ram: "4 GB",
    Rom: "128 GB",
    Price: "$799",
  },
  {
    id: 3,
    companyName: "Iphone",
    Model: "Iphone 13",
    Ram: "4 GB",
    Rom: "128 GB",
    Price: "$1699",
  },
  {
    id: 4,
    companyName: "Samsung",
    Model: "Galaxy Note 5",
    Ram: "4 GB",
    Rom: "32 GB",
    Price: "$101",
  },
  {
    id: 5,
    companyName: "Samsung",
    Model: "Galaxy Note 8",
    Ram: "6 GB",
    Rom: "64 GB",
    Price: "$419",
  },
  {
    id: 6,
    companyName: "Samsung",
    Model: "Galaxy S22",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$799",
  },
  {
    id: 7,
    companyName: "Oppo",
    Model: "Reno 8",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$399",
  },
  {
    id: 8,
    companyName: "Oppo",
    Model: "A36",
    Ram: "8 GB",
    Rom: "256 GB",
    Price: "$353",
  },
  {
    id: 9,
    companyName: "Oppo",
    Model: "K10",
    Ram: "6 GB",
    Rom: "128 GB",
    Price: "$220",
  },
  {
    id: 10,
    companyName: "Google",
    Model: "Pixel 6",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$599",
  },
  {
    id: 11,
    companyName: "Google",
    Model: "Pixel 7",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$400",
  },
  {
    id: 12,
    companyName: "Google",
    Model: "Pixel 8",
    Ram: "8 GB",
    Rom: "256 GB",
    Price: "$600",
  },
  {
    id: 14,
    companyName: "Infinix",
    Model: "Hot 11",
    Ram: "4 GB",
    Rom: "64 GB",
    Price: "$128",
  },
  {
    id: 15,
    companyName: "Infinix",
    Model: "Note 11",
    Ram: "6 GB",
    Rom: "128 GB",
    Price: "$229",
  },
  {
    id: 16,
    companyName: "Xiaomi",
    Model: "Redmi 10",
    Ram: "4 GB",
    Rom: "64 GB",
    Price: "$173",
  },
  {
    id: 17,
    companyName: "Xiaomi",
    Model: "Redmi Note 10",
    Ram: "4 GB",
    Rom: "128 GB",
    Price: "$182",
  },
  {
    id: 18,
    companyName: "Xiaomi",
    Model: "Redmi K50",
    Ram: "8 GB",
    Rom: "128 GB",
    Price: "$368",
  },
];

let filteredArray = [];
function init() {
  let a = mobiles.map(function (x) {
    return x.companyName;
  });
  let b = [...new Set(a)];
  console.log(b);
}
function searchMob(a) {
  filteredArray = mobiles
    .map(function (x) {
      if (x.companyName == a) {
        return x["Model"];
      }
    })
    .filter(Boolean);
  console.log(filteredArray);
}

init();
searchMob("Oppo");

//=================== findIndex ====================

let i = mobiles.findIndex(function (x) {
  return x.id == 16 ? x : null;
});
console.log(i);

//=================== functions ====================

// 1: Arrow
// 2: Callback
// 3: higher order
// 4: Closures

//=================== arrow functions ====================
function asd(a) {
  console.log(a);
}
asd("Message");

let fgh = (a) => {
  console.log(a);
};
fgh(a);

let qwe = a => {
  console.log(a);
};
qwe(a);

let rty = a => {
  return a
}
console.log(rty('Message'))

let bnm = (_) => _
console.log(bnm('Message'))

let bool = false

let f = bool && ""

let arr1 = mobiles.filter(x=>x.companyName == "Xiaomi")
console.log(arr1)

//=================== higher order & callback function ====================
let ght = (a)=>{
  return a
}

let jkl = (a)=>{
  return a*2
}

console.log(jkl(ght(10)))

let ghi = ()=>{
  console.log('abc')
  return ()=>{
    console.log("xyz")
  }
}

ghi()()

//=================== De Structuring ====================

let cd = ['a','b','c','d']
let [,,suv,vam] = cd
console.log(suv);
console.log(vam);
let obj1 = {
  id:1,
  names:'ABC',
  category:"A"
}
// let {id, name, category} = obj;
// console.log(id);
// console.log(name);
// console.log(category);

let {id,names,category}=obj1
console.log(names)
console.log(id)
console.log(category)
async function test(){
  console.log("Message")
  console.log("Message1")
 await console.log("Message2")
  console.log("Message3")

}
test()

function def(){
  setTimeout(()=>{
    console.log('function1')
  },2000)
}

function xyz(){
  setTimeout(()=>{
    console.log('function1')
    ab[4]=5;
  },3000)
}

// let []

//=================== Promise ====================
//=================== async await ====================
// var e=undefined
let e;
console.log(e);
e = "sad";
// e = "sad";
// console.log(e);
//let
//const
// var
// function
// class
const arr = [1, 23, 3, [2, 3], [3, 2, 3]]; //
const c = [...arr];
console.log(c);

let array = ["abc","xyz"];
let [o,p] = array;
console.log(o);
console.log(p);

let arr2 = ['Basit','Ahmed','03071231','4212','House No: ABC/9 Karachi,Pakistan','basit@gmail.com'];

let obj = {
  name : "Owais",
  roll : 10,
}

let {name,roll} = obj

const array2 = ["Affan", "Hamza", "Leo", "Hello"];

const [,,d] = array2;

let promise = new Promise((resolve,reject)=>{
resolve('succes');
reject('error')

})
promise.then(
  (value)=>{console.log(value) }
).catch(
  (error)=>{console.log(error) }

)

let ab = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

let userInp= "Leanne Graham"
let searchData = (data) =>{
  ab.filter((val) =>{
    if(val.name.includes(data)){
      return val;
    }

  })

}

console.log(searchData("Lear"))

let filtered = ab.filter(x=>x.name.includes("rah"))
console.log(filtered)

let rishteWaliAunty = () =>
  new Promise((qubool, inkar) => {
    if (false) {
      qubool("Zaid Qubool hai");
    } else {
      inkar("Zaid Qubool Nai hai");
    }
  });

rishteWaliAunty()
  .then((succes) => {
    console.log(succes);
  })
  .catch((err) => {
    console.log(err);
  });

let checkPassword = (password) =>
  new Promise((resolve, reject) => {
    if (password.length > 6) {
      resolve("Password is Correct");
    } else {
      reject("Password is week, Must be at least 6 characters");
    }
  });

checkPassword("12345")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

let xy
let abc = async ()=>{
  setTimeout(()=>{
    xy = "ABC"
  },1000)
  let mn = await xy
  console.log(mn)
}
abc()
async function test(){
  console.log("message1")
  await  console.log("message2")
  console.log("message1")
  }
  test()
  console.log("Message5")

let b = (a = "value is not givin") => {
  console.log(a);
};

b("Hamza");
b();
