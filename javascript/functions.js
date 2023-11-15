var ageDropdown = document.getElementById("age");
    var initialOption = document.createElement("option");
    initialOption.text = "Ålder";
    ageDropdown.add(initialOption);

        for (let i = 0; i <= 18; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            ageDropdown.add(option);
        }


function saveData(){
    let title = document.getElementById("title").value;
    let beskrivning = document.getElementById("beskrivning").value;
    let age = document.getElementById("age").value;
    
    let existingData = localStorage.getItem("tvShows");
    existingData = existingData ? JSON.parse(existingData) : [];
    let olle = {0: title, 1: beskrivning, 2: age};
    existingData.push(olle);
    localStorage.setItem("tvShows", JSON.stringify(existingData));
    
    document.getElementById("title").value ='';
    document.getElementById("beskrivning").value='';
    document.getElementById("age").value= 'Ålder';

    alert("Film sparad!");      

}
function showData(){
    let existingData = JSON.parse(localStorage.getItem("tvShows"));
    let data = document.getElementById("output");
   
    data.innerHTML +="Titel: Beskrivning: Ålder:" 
    for (let i = 0; i < existingData.length; i++){
        data.innerHTML += "<br>";
        for (let k = 0; k < 3; k++){
            data.innerHTML += existingData[i][k] + " ";
            
        }
    }  
}
function clearData(){
    localStorage.clear();
    location.reload();
}
function searchData(){
   const searchs = document.getElementById("searchColumn").value;
   const item = JSON.parse(localStorage.getItem("tvShows"));
    const save = document.getElementById("searchoutput");
    
save.innerHTML = "";
    save.innerHTML += "Titel: Beskrivning: Ålder:"
   for (let i = 0; i < item.length; i++){
    save.innerHTML += "<br>";
    if (item[i][0] === searchs){
        for(let k = 0; k < 3; k++){
            save.innerHTML += item[i][k] + " ";
        }
    }
   }
   document.getElementById("searchColumn").value='';
}

