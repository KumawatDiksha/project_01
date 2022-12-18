// const { from } = require("formidable/src/parsers/Dummy");





 
// var propertyData = {{{ list }}};
// console.log(propertyData);
// var myarr = propertyData;





// function chack(type) {
//     return type.propertyType == document.getElementById('property_type').value;
// }

// function filterproperty() {
// propertyData.filter(chack).forEach((result, idx) => {
  
//          // Construct card content
//          var content = `
//          <!-- property images container start hare -->
//          <div class="propertyimages">
//              <!-- Slideshow container -->
//              <div class="slideshow-container">
//                  <a href="/viewpropertypage/viewpropertypage.html">
//                      <!-- Full-width images with number and caption text -->
//                      <div class="mySlides fade">
//                          <div class="numbertext">1 / 3</div>
//                          <img src="/media/flat.jpg" class="slideshow-container">
//                      </div>
//                      {{!-- <div class="mySlides fade">
//                          <div class="numbertext">2 / 3</div>
//                          <img src="/media/home.jpg" class="slideshow-container">
//                      </div>
//                      <div class="mySlides fade">
//                          <div class="numbertext">3 / 3</div>
//                          <img src="/media/office.jpg" class="slideshow-container">
//                      </div> --}}
//                      <!-- The dots/circles -->
//                      {{!-- <div class="dotposition">
//                          <span class="dot" onclick="currentSlide(1)"></span>
//                          <span class="dot" onclick="currentSlide(2)"></span>
//                          <span class="dot" onclick="currentSlide(3)"></span>
//                      </div>
//                      <!-- Next and previous buttons -->
//                      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
//                      <a class="next" onclick="plusSlides(1)">&#10095;</a> --}}
//                  </a>
//              </div>
//              <!-- property inforamation part start hare -->
//              <div class="propertydetail">
//                  <div class="property_location" id="property_location-${idx}">${result.propertyType} available in
//                      ${result.city}
//                  </div>
//                  <address class="address" id="address"> ${result.address} | near ${result.landmark}</address>
//                  <div class="deatiles" id="deatiles"> ${result.Furnished} | ${result.parking} </div>
//                  <div class="available_from" id="available_from">Available from : ${result.AvilabeFrom}</div>
//                  <div class="price" id="price">${result.expectedPrice} ₹</div>
//                  <button class="contect_owner" id="contect_owner">Contect owner</button>
//              </div>
//          </div>

// `

// // Append newyly created card element to the container
// document.getElementById('property_list').innerHTML += content;
//      })
// }



//     var chack = (function scheduleA(event) {
//      return (this.options[this.selectedIndex].text);
//  });


//  console.log('chack')
// function scheduleA() {
//     let propertyType = this.options[this.selectedIndex].text;
//     console.log(propertyType);


// };
//     var Arr = propertyData.filter((el)=> {
    //          return el.propertyType == 'Flat';
    //      });
// const findTodo = function(myTodos, title){
    //     const titleReturned = myTodos.find(function(todo, index){
        //         return todo.title.toLowerCase() === title.toLowerCase()
        //     })
        //     return titleReturned
        // }
        
        // // 
        // console.log(Arr(myarr, 'Other'));

        
        // Arr = (myarr, propertyType) => {
        //     const propertyTypeReturned = myarr.filter(function (propertyData, index) {
        //         return propertyData.propertyType == propertyType;
        //     })
        //     return propertyTypeReturned;
        // };
        
        // let print = Arr(myarr, 'Flat');

