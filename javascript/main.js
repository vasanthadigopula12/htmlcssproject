function loadjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.profile)
})
function display(cse){
    //cards area
var rdata=document.querySelector(".row")
console.log(rdata)
for (var k=1;k<cse.length;k++){
    console.log(cse)
    // card
var cad=document.createElement("div")
cad.classList.add("card")
rdata.appendChild(cad)
// img
var pic=document.createElement("img")
// var pic=document.createElement("img")
 pic.src=cse[k].img
// var sname=document.createElement("h1")
pic.appendChild(pic)
}
}






// //cards area
// var rdata=document.querySelector(".row")
// console.log(rdata)
// // card
// var cad=document.createElement("div")
// cad.classList.add("add")
// console.log(cad)
// // img
//  var pic=document.createElement("img")
//  pic.src=cse[k].img
// var sname=document.createElement("h1")
// console.log(sname)










