import {Ui} from './js/main.js'
const myURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
const elment = {
    perant : document.querySelector('.home .row'),
    myHome : $('.home'),
    mySearch : $('.search-page'),
    myRecipe : $('.recipe'),
    myForm : $('.my-form'),
    myArea : $('.area')

 }
let data = []
async function getData() {
     data = await(await fetch(myURL)).json()     
    let cartoona =``
    for (const meal of data.meals) {
        let myMeal = new Ui();
        cartoona+= myMeal.home(meal)
    }
    elment.perant.innerHTML = cartoona
    if ($(this).attr('catName')==undefined) {
        $('.row .col-md-3').click(function () {
  
  
            async function myRecip(id){
                let meal = await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json()
                elment.mySearch.addClass('d-none')
                elment.myHome.addClass('d-none')
                elment.myForm.addClass('d-none')
                elment.myRecipe.removeClass('d-none') 
                let myMeal = new Ui();
                $('.recipe .row').html(myMeal.detailes(meal))
                
          }
            myRecip($(this).attr('myId'))
            
        })
    }
        
    }

getData()
$('.side .side-nav .inner').click(function () {
    
    $('.side .buttons').toggleClass('d-none')
    $('.side .inner .fs-2').toggleClass('d-none')
    if($('.side .buttons').css('display') == 'none'){
        $('.my-width').animate({left : '0%'} ,600,function(){
            $('.side ul').slideDown(600)
        })
    }
    else{
        $('.side ul').slideUp(300,function(){
            $('.my-width').animate({left : '-17%'} ,500)
        })   
        }
    
})
$('ul .search').click(function () {
    elment.mySearch.removeClass('d-none')
    elment.myHome.addClass('d-none')
    elment.myForm.addClass('d-none')
    elment.myRecipe.addClass('d-none')  
})
$('.search-page .letter').keyup(function () {
    let myData = []
    async function firstLett(lett){
        myData = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${lett}`)).json()
        let cartoona =``
        for (const meal of myData.meals) {
        let myMeal = new Ui();
        cartoona+= myMeal.home(meal)
    }
    
    $('.search-page .second').html(cartoona)
    $('.col-md-3').click(function () {
  
  
        async function myRecip(id){
            let meal = await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json()
            elment.mySearch.addClass('d-none')
            elment.myHome.addClass('d-none')
            elment.myForm.addClass('d-none')
            elment.myRecipe.removeClass('d-none') 
            let myMeal = new Ui();
            $('.recipe .row').html(myMeal.detailes(meal))
            
      }
        myRecip($(this).attr('myId'))
        
    })

    }
    firstLett(this.value) 
    
    
})
$('.search-page .name').keyup(function () {
    let myData = []
    async function firstLett(lett){
        myData = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${lett}`)).json()
        let cartoona =``
        for (const meal of myData.meals) {
        let myMeal = new Ui();
        cartoona+= myMeal.home(meal)
    }

    $('.search-page .second').html(cartoona)
    $('.row .col-md-3').click(function () {
  
  
        async function myRecip(id){
            let meal = await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json()
            elment.mySearch.addClass('d-none')
            elment.myHome.addClass('d-none')
            elment.myForm.addClass('d-none')
            elment.myRecipe.removeClass('d-none') 
            let myMeal = new Ui();
            $('.recipe .row').html(myMeal.detailes(meal))
            
      }
        myRecip($(this).attr('myId'))
        
    })
    }
    firstLett(this.value)
})














$('ul .categories').click(function () {
    if($('.reload').css('display')=='none'){
    $('.reload').fadeIn(1)
    $(document).ready(function(){
        $('.reload').fadeOut(1000,function () {
            $('body,html').css('overflow','auto')
        })
    elment.mySearch.addClass('d-none')
    elment.myHome.removeClass('d-none')
    elment.myForm.addClass('d-none')
    elment.myRecipe.addClass('d-none')  
    let allCat = []
    async function catData(){
        allCat = await(await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')).json()
        
        let cartoona =``
    for (const categ of allCat.categories) {
        let myMeal = new Ui();
        cartoona+= myMeal.category(categ)
    }
   
    
    elment.perant.innerHTML = cartoona
   
    $('.row .col-md-3').click(function () {
        
        if ($(this).attr('catName') != undefined) {
            async function myCat(name){
                let meal = await(await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)).json()
                elment.mySearch.addClass('d-none')
                elment.myHome.removeClass('d-none')
                elment.myArea.addClass('d-none')
                elment.myForm.addClass('d-none')
                elment.myRecipe.addClass('d-none') 
                let cartoona =``
                for (const mealOfCat of meal.meals) {
                let myMeal = new Ui();
                cartoona+= myMeal.home(mealOfCat)
                
            
                }
                elment.perant.innerHTML= cartoona
                $('.col-md-3').click(function () {
                    
                    async function myRecip(id){
                               let meal = await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json()
                               elment.mySearch.addClass('d-none')
                               elment.myHome.addClass('d-none')
                               elment.myForm.addClass('d-none')
                               elment.myRecipe.removeClass('d-none') 
                               let myMeal = new Ui();
                               $('.recipe .row').html(myMeal.detailes(meal))
                               
                               
                         }
                         myRecip($(this).attr('myId'))
                         
               })
                
          }
            myCat($(this).attr('catName'))
        }
    })
    }
    catData()
    })
    }
 
})


























$('ul .area').click(function () {
    
    if($('.reload').css('display')=='none'){
        $('.reload').fadeIn(1)
        $(document).ready(function(){
        $('.reload').fadeOut(1000,function () {
            $('body,html').css('overflow','auto')
        })
        elment.mySearch.addClass('d-none')
        elment.myHome.addClass('d-none')
        elment.myForm.addClass('d-none')
        elment.myRecipe.addClass('d-none')  
        elment.myArea.removeClass('d-none')
    let list = []
    async function areas() {
        list = await(await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')).json()
        
        let newArea = new Ui()
        $('.area .row').html(newArea.area(list))
        $('.col-md-3').click(function (e) {
            let allFood = []
     
            async function areaFood(balad) {
               allFood = await( await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${balad}`)).json()
               console.log(allFood.meals);
               let cartoona = ``
               for (const meal of allFood.meals) {
                let areaMeal = new Ui()
                cartoona+= areaMeal.home(meal)            
               }
               elment.perant.innerHTML = cartoona
               elment.mySearch.addClass('d-none')
                 elment.myHome.removeClass('d-none')
                 elment.myForm.addClass('d-none')
                 elment.myRecipe.addClass('d-none')  
                elment.myArea.addClass('d-none')
                $('.row .col-md-3').click(function () {
  
  
                    async function myRecip(id){
                        let meal = await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json()
                        elment.mySearch.addClass('d-none')
                        elment.myHome.addClass('d-none')
                        elment.myForm.addClass('d-none')
                        elment.myRecipe.removeClass('d-none') 
                        let myMeal = new Ui();
                        $('.recipe .row').html(myMeal.detailes(meal))
                        
                  }
                    myRecip($(this).attr('myId'))
                    
                })
            }
            areaFood(e.currentTarget.children[0].children[1].innerText)
            
            
        })
    }  
    areas()
    
    
    
    })}
    



    
})





$(document).ready(function(){
    $('.reload').fadeOut(1000,function () {
        $('body,html').css('overflow','auto')
    })
    




})




$('ul .contact-us').click(function(){
        elment.mySearch.addClass('d-none')
        elment.myHome.addClass('d-none')
        elment.myForm.removeClass('d-none')
        elment.myRecipe.addClass('d-none')
})









$('.my-form input').change(function(){
    let valid = myReg($('.my-form input')[0].value,$('.my-form input')[1].value,$('.my-form input')[2].value,$('.my-form input')[3].value,$('.my-form input')[4].value,$('.my-form input')[5].value)
    console.log(valid);
})



function myReg(fName,mail,phone,password,repassword) {
    let name = /^([a-z]|[A-Z]){2,}$/
    
    let mymail =/^(.){2,}(@gmail\.com|@yahoo\.com)$/
    
    let phoneNum = /^(015|011|012|010)[0-9]{8}/
    
    let myPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
    if(name.test(fName) && mymail.test(mail) && phoneNum.test(phone) && myPassword.test(password) && myPassword.test(repassword)){
        return true
    }
    // minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.
}
