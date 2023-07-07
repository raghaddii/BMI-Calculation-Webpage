var genderM;

var genderF;

var age;

var hieght;

var weight;


function start(){

    document.getElementById("calc").addEventListener("click",calcuate,false);

    genderM=document.getElementById("male");

    genderF=document.getElementById("female");

    age=document.getElementById("age").value;

    hieght=document.getElementById("height");

}

function calcuate(){

    if(genderM.checked){

        weight = 48 + 1.1*(parseInt(hieght.value) -150);

        document.getElementById("res").setAttribute("class","green");

        document.getElementById("res").innerHTML="calculate "+genderM.value+" perfect whight"+

        "<p class=\"under\">The given hietht is:<p>"+"<ul;><li>your hieght: "+hieght.value+"</li></ul>"+

        "<p class=\"perfect\">The perfect wight is :"+weight.toFixed(2);




    }

       

    if(genderF.checked){

        weight = 45 + 0.9*(parseInt(hieght.value) -150);

        document.getElementById("res").setAttribute("class","green");

        document.getElementById("res").innerHTML="calculate "+genderF.value+" perfect whight"+

        "<p class=\"under\">The given hietht is:<p>"+"<ul;><li>your hieght: "+hieght.value+"</li></ul>"+

        "<p class=\"perfect\">The perfect wight is :"+weight.toFixed(2);

    }


}

window.addEventListener("load",start,false);