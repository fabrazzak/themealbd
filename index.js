 function searchFood(){

    const inputSearch= document.getElementById('input-search');
    searchText=inputSearch.value ;
    inputSearch.value='';
      const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      console.log(url);
     fetch(url)
     .then(res => res.json())
     .then(data => displayMeals(data))
     inputSearch.value='';
 }
 

 function displayMeals(data){
     const iteams= data.meals;
     const cardGroupe= document.getElementById('card-groupe');
         cardGroupe.innerHTML=``;

     for (const iteam of iteams){
     
        console.log( iteam);
         
         const div= document.createElement('div');
         div.classList.add('col');
         div.innerHTML=
         `
            <div  class="btn  card" type="button" onclick="loadIteam(${iteam.idMeal})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">


                <img src="${iteam.strMealThumb}" class="card-img-top" alt="iteam">
                <div class="card-body">
                     <h3 class="card-title"> ${iteam.strMeal}</h3>
                     <p class="card-text">${iteam.strInstructions.slice(0,250)}</p>
                </div>
            </div>
            
        `
        cardGroupe.appendChild(div);
     }

 }

 function loadIteam(mealId) {
    const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayIteam(data))
 }
 

  function displayIteam(data){
    console.log(data.meals[0].strYoutube);

   
   const cardItam=document.getElementById('offcanvasTop');
    cardItam.innerHTML=``;
   
    
        const  div= document.createElement('div');
     
        div.innerHTML=`
        <div class="offcanvas-header container">
          <h5 id="offcanvasTopLabel" >${data.meals[0].strCategory} / ${data.meals[0].strArea} / ${data.meals[0].idMeal}</h5>
          <button type="button" class="btn-close text-reset close-btn btn-lg" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body container m-auto text-center ">
        
        <div  class=" card"">
        <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="iteam">
        <div class="card-body">
        <a class="btn btn-outline-primary bg-primary text-light fs-4 fw-bold mx-auto text-center " type="button" id="watch-button" href="${data.meals[0].strYoutube} " target='_blank'>Watch Video</a>
        
             <h3 class="card-title"> ${data.meals[0].strMeal}</h3>
             <p class="card-text">${data.meals[0].strInstructions}</p>
        </div>
    </div>
        </div>
                        
      `                
        cardItam.appendChild(div);
 }
 




