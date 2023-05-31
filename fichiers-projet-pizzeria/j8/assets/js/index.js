import{ Ingredient } from "./ingredient.js";


window.addEventListener("DOMContentLoaded", function(){
    
    let availableIngredients = [];
    
    
 const bacon = new Ingredient("Bacon","assets/img/bacon.png");
 const carotte = new Ingredient("Carotte","assets/img/carrots.png");
 const fromage = new Ingredient("Fromage","assets/img/cheese.png");
 const oeuf = new Ingredient("oeuf","assets/img/egg.png");
 const aubergine = new Ingredient("aubergine","assets/img/eggplant.png");
 const Fromage-de-chevre = new Ingredient("Fromage-de-chevre","assets/img/goat-cheese.png");
 const miel = new Ingredient("miel","assets/img/honey.png");
 const champignon = new Ingredient("champignon","assets/img/mushroom.png");
 const olive = new Ingredient("olive","assets/img/olive.png");
 const piment = new Ingredient("piment","assets/img/pepper.png");
 const pomme-de-terre = new Ingredient("pomme-de-terre","assets/img/potato.png");
 const tomate = new Ingredient("tomate","assets/img/tomato.png");
 
 
    
    availableIngredients = availableIngredients.push('bacon');
    availableIngredients = availableIngredients.push('carotte');
    availableIngredients = availableIngredients.push('fromage');
    availableIngredients = availableIngredients.push('oeuf');
    availableIngredients = availableIngredients.push('aubergine');
    availableIngredients = availableIngredients.push('Fromage-de-chevre');
    availableIngredients = availableIngredients.push('miel');
    availableIngredients = availableIngredients.push('champignon');
    availableIngredients = availableIngredients.push('olive');
    availableIngredients = availableIngredients.push('piment');
    availableIngredients = availableIngredients.push('pomme-de-terre');
    availableIngredients = availableIngredients.push('tomate');

   
})


// let newLength = fruits.push('Orange');
