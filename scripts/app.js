let NameGenerator = document.getElementById("NameGenerator");
let names = document.getElementById("names");
let namesPulled = document.getElementById("namesPulled");
let Generate = document.getElementById("Generate");
let pull1 = document.getElementById("pull1");
let pull2 = document.getElementById("pull2");
let pull3 = document.getElementById("pull3");
let pull4 = document.getElementById("pull4");
let pull5 = document.getElementById("pull5");
let array = ["Name","Name","Name","Name","Name",]



//

Generate.addEventListener("click", function (){
    //first thing to do get array of studentStaffnames
    AsyncGetData();
    //randomly generate a number so i can pull a random name
    // function randomNumber 
    //use number to display name from stafflist
});

//eventListeners

//gene

NameGenerator.addEventListener('click', NameGenerator)
names.addEventListener('click', names);
namesPulled.addEventListener('click', namesPulled);
// Generate.addEventListener('click', Generate);

//async Function

async function AsyncGetData(){
const promise = await fetch('../data/data.json')
const data = await promise.json();
studentStaffNames = data
console.log(studentStaffNames.studentStaffNames);
console.log(studentStaffNames.studentStaffNames.length);
// console.log(studentStaffNames.studentStaffNames[0].names);
names.innerHTML = studentStaffNames.studentStaffNames[rndmNum(29)].Names;

namesPulled1(studentStaffNames.studentStaffNames[rndmNum(29)].Names);
console.log(studentStaffNames.studentStaffNames[rndmNum(29)].Names);


}
//if / else statement to randomize names up to 6 times, and log them back in. method pop use to take out last item on stack
function RandomGenerate () {
    let random = Math.floor(Math.random() * studentStaffNames.length);
    // names.innerHTML = studentStaffNames.studentStaffNames[random].Names;
    console.log(random);
}
function namesPulled1(Names){
    if (array.length >= 6)
    {
        array.pop()
        array.unshift(Names)
    }else {
        array.unshift(Names)
    }
    //last five
// selected.innerHTML = arr[0]
names.innerHTML = array[0]
pull1.innerHTML = array[1]
pull2.innerHTML = array[2]
pull3.innerHTML = array[3]
pull4.innerHTML = array[4]
pull5.innerHTML = array[5]

}

// AsyncGetData();

//suppose to have name inside the json file for them to work as instructed in assignment
// let nombres = ["Chris Martinez", "Dan DeCoito",  "Danny Tran", "Ken Martinez", "Scott Morenzone", "Harrison Ford", "Pablo Paredes", "Johny Canales", "Tony Mannor" ] 
// let object = [" ",]
// let list;

// function generator() {
//  document.getElementById("name").innerHTML = nombres[Math.floor(Math.random() * nombres.length)] + " " + object[Math.floor(Math.random() * object.length)];;;
// }

function rndmNum(max) {
    return Math.floor(Math.random()* max);
}

