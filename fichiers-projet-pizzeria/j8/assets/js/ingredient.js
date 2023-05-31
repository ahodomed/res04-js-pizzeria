class Ingredient{
    #name;
    #file;
    
    constructor( name, file){
        
        this.#name = name;
        this.#file = file;
    }
    
    set name(name){
        this.#name = name;
    }
    
    get name(){
        
        return this.#name;
    }
    
    
    set file(file){
        
        this.#file = file;
    }
    
    get file(){
        return this.#file
    }
}



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

 
  

 
    

export{ Ingredient }