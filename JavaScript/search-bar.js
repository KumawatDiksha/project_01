
// getting all required elements
 const searchWrapper = document.querySelector(".search-input");
 const inputBox =  document.getElementById('search-bar');
 const suggBox = document.querySelector(".autocom-box");
 
 // if user press any key and release
 inputBox.onkeyup = (e)=>{
     let search_Data = e.target.value; //user enetered data
     let emptyArray = [];
     if(search_Data){
         emptyArray = propertyData.filter((data)=>{
             
             return data.Locality.toLocaleLowerCase().includes(search_Data.toLocaleLowerCase());
                 });

                 
                 emptyArray = emptyArray.map((data)=>{
                     // passing return data inside li tag
                     return data = `<li>${data.Locality}</li>`;
                    });


                //  this is for removies duplicate element from the list
                emptyArray = [...new Set(emptyArray)];
         searchWrapper.classList.add("select"); //show autocomplete box
         showSuggestions(emptyArray);
         let allList = suggBox.querySelectorAll("li");
         for (let i = 0; i < allList.length; i++) {
             //adding onclick attribute in all li tag
             allList[i].setAttribute("onclick", "select(this)");
         } 
     }else{
         searchWrapper.classList.remove("select"); //hide autocomplete box
     }
 }
 
 function select(element){
     let selectData = element.textContent;
     inputBox.value = selectData;
     searchWrapper.classList.remove("select");
 }
 
 function showSuggestions(list){
     let listData;
     if(!list.length){
         userValue = inputBox.value;
         listData = `<li>${userValue}</li>`;
     }else{
       listData = list.join('');
     }
     suggBox.innerHTML = listData;
 }

// this is for send data from one page to another page

 let search_box = document.getElementById('search');
 var search_btn = search_box.firstElementChild.lastElementChild;
 let search_input = search_box.firstElementChild.getElementsByTagName('input')[0];
 var search_select_btn = search_box.firstElementChild.getElementsByTagName('select')[0];
 var search_select_btn2 = search_box.firstElementChild.getElementsByTagName('select')[1];

 search_btn.addEventListener("click",
     function search() {
         localStorage.setItem('search_values_input' , search_input.value)
         localStorage.setItem('search_values_select_btn' , search_select_btn.value)
         localStorage.setItem('search_values_select_btn2' , search_select_btn2.value)
     })

     


 