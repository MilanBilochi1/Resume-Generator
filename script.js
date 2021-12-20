function addNewWEField()
{
    //console.log("working");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add('mt-2');
    //newNode.setAttribute("placeholder", 'Enter here');
    //newNode.setAttribute("rows" , 3);

    let weOb = document.getElementById('we');
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewSkill()
{
    //console.log("working");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add('mt-2');
    //newNode.setAttribute("placeholder", 'Enter here');
    newNode.setAttribute("rows" , 1);

    let weOb = document.getElementById('sk');
    let weAddButtonOb = document.getElementById("skillAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function aqAddButton()
{
    //console.log("working");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add('mt-2');
    //newNode.setAttribute("placeholder", 'Enter here');
    //newNode.setAttribute("rows" , 3);

    let weOb = document.getElementById('aq');
    let weAddButtonOb = document.getElementById("aqAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

//generating resume

function GenerateRes(){
   // console.log("Working button 1");
    let nameField = document.getElementById('nameField').value;

    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML = nameField;
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
    document.getElementById('liT').innerHTML = document.getElementById('linkedinField').value;
    document.getElementById('ghT').innerHTML = document.getElementById('githubField').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    //loop for WE

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    //for skills

    let sks = document.getElementsByClassName("skField");
    let str2 = "";
    for(let e of sks)
    {
        str2 = str2 + `<li>${e.value}</li>`;
    }
    document.getElementById('skT').innerHTML = str2;

    //for aq

    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for(let e of aqs)
    {
        str1 = str1 + `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    //picture code

    let file = document.getElementById('imgField').files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    //setting img in template

    reader.onloadend = function()
    {
        document.getElementById('imgTemplate').src = reader.result;
    }



    document.getElementById('res-form').style.display = 'none';
    document.getElementById('res-template').style.display = 'block';
}

//print res

function PrintRes()
{
    window.print();
}