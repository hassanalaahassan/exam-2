export class Ui {


     home(meal) {
    const cartoona = `<div class="col-md-3" myId =${meal.idMeal}>
        <div class="inner home-meal position-relative overflow-hidden">
            <img src="${meal.strMealThumb}" alt="meal" class="w-100 rounded-2">
            <div class="layer position-absolute w-100 h-100 rounded-2 d-flex align-items-center ">
                <h4 class="text-black">${meal.strMeal} </h4>
            </div>
        </div>
    </div>
    `
    return cartoona        
    }
     category(cat) {
    const cartoona = `<div class="col-md-3" catName=${cat.strCategory}>
        <div class="inner home-meal position-relative overflow-hidden">
            <img src="${cat.strCategoryThumb}" alt="meal" class="w-100 rounded-2">
            <div class="layer position-absolute w-100 h-100 rounded-2 text-center ">
                <h4 class="text-black">${cat.strCategory} </h4>
                <p class="w-100">${cat.strCategoryDescription.split(80)}}</p>
            </div>
        </div>
    </div>
    `
    return cartoona        
    }
    
    detailes(meal){
        const cartoona = `
        <div class="col-md-4">
                    <div class="inner">
                        <img src="${meal.meals[0].strMealThumb}" class="w-100 rounded-2" alt="recipe">
                        <h4>${meal.meals[0].strMeal}</h4>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="inner">
                        <h2>Instructions</h2>
                        <p>${meal.meals[0].strInstructions}</p>
                        <h2>Area : <span>${meal.meals[0].strArea}</span></h2>
                        <h2>Category : <span>${meal.meals[0].strCategory}</span></h2>
                        <h2>Recipes :</h2>
                        <ul class="d-flex flex-wrap p-0">
                            ${ingredint(meal)}
                        </ul>
                        <h2>Tags : </h2>
                        <ul class="d-flex flex-wrap p-0">
                            <li>Soup</li>
                        </ul>
                        <a href="${meal.meals[0].strYoutube}" class="btn btn-success">Source</a>
                        <a href="${meal.meals[0].strYoutube}" class=" btn btn-danger">Youtube</a>
                    </div>
                </div>
                `
                return cartoona
    }
    area(list){
        let cartoona = `` , i = 0
        for (const area of list.meals) {
            cartoona+=`<div class="col-md-3">
            <div class="inner home-meal text-center">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h4 class="text-white">${area.strArea} </h4>
                </div>
            </div>
        </div>
        `
          i++  
        }
        return cartoona
    }
    
}
function ingredint(meal){

    const myMeal = new Map(Object.entries(meal.meals[0]))
    let cartoona=`` , create=[] , i = 0
    for (const key of myMeal.entries()) {
        if (key[0].includes('strIngredient')&&key[1]!=null && key[1]!='') {
            create.push(key[1])
        }  
    } 
    for (const key of myMeal.entries()) {
        
        if (key[0].includes('strMeasure') && key[1]!=null && key[1]!='') {
            create[i]=key[1]+' ' +create[i]
            cartoona+=`<li>${create[i]}</li>`
            i++;
        } 

    } 
    return cartoona

}