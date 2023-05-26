let names = document.querySelector('#name1');
let names2 = document.querySelector('#name2');
let count1 = document.querySelector('#count1');
let countum = document.querySelector('#countum');
let more = document.querySelector('#more');
let createe = document.getElementById('create');
let searchbyname = document.querySelector('#searchbyname');
let searchby = document.querySelector('#searchby');
let tbody = document.querySelector('#tbody');


let dataarr;
if(localStorage.coust != null){
    dataarr = JSON.parse(localStorage.coust);
}else{
    dataarr =[];
}
// create data 
createe.onclick= function(){
    let content= {
        names: names.value ,
        names2: names2.value,
        count1: count1.value,
        countum: countum.value,
        more: more.value,
    }
    // for(i=0 ; i<dataarr.length ; i++){
        dataarr.push(content);
    // }
    localStorage.setItem('coust' ,JSON.stringify(dataarr));
    cleardata();
};
cleardata = function(){
    names.value = '';
    names2.value = '';
    count1.value = '';
    countum.value = '';
    more.value = '';
};
