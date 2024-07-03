fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let tblCountries=document.getElementById("tbl");

    let tblBody=`<tr>
            <th>Name</th>
            <th>Flag</th>
    </tr>`;

    data.forEach(element => {
        tblBody+=`<tr>
            <td>${element.name.common}</td>
            <td>${element.flag}</td>
        </tr> `

        console.log(element.name.common);
    });

    tblCountries.innerHTML=tblBody;
})
function serchCuntrie(){
    let searchValue=document.getElementById("txtSearchValue").value;

    let offitalName = document.getElementById("offitalName");
   let name = document.getElementById("name")
   let img =  document.getElementById("img")
    let capital=document.getElementById("capital")   

    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            offitalName.innerText = obj.name.official;
            name.innerText = obj.name.common;
             capital.innerText=  obj.capital; 
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })
        console.log(data);



    
    })
}