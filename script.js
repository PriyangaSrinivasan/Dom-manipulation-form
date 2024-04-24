document.addEventListener("DOMform",function(){
    const form =document.getElementById("form");
    const tablebody = document.getElementById("#mytable tbody");
     
    form.addEventListener("submit",function(event){
        event.preventDefault();

 const firstname = document.getElementById("first-name").value;
 const lastname = document.getElementById("last-name").value;
 const address =document.getElementById("address").value;
 const pincode =document.getElementById("pincode").value;
 const gender =document.querySelector("input[name='gender']:checked").value
 const foodchoice =document.querySelectorAll("input[name^='food']:checked");
 const food =Array.form(foodchoice).map(input=>input.value);
 const state =document.getElementById("state").value;
 const country =document.getElementById("country").value;
 const table =document.getElementById("table").value;

const row = document.createElement("tr");
row.innerHTML = `<td>${firstname}</td>
<td>${lastname}</td>
<td>${address}</td>
<td>${pincode}</td>
<td>${gender}</td>
<td>${food.join(",")}</td>
<td>${state}</td>
<td>${country}</td>`;

tablebody.appendChild(row);
form.reset();

    });
});

 