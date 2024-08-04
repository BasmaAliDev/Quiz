import { Quiz } from "./Quiz.js";
export class Setting{
    constructor(){
        this.category=document.getElementById("category");  
        this.startBtn=document.getElementById("startBtn");
        this.difficulty=document.getElementsByName("Difficulty");
        this.Number=document.getElementById("Number");
        
        this.startBtn.addEventListener("click", this.getValue.bind(this));
       
    }

    async getValue(){
        let categoryValue = this.category.value;
        let difficultyValue = Array.from(this.difficulty).find( (input) => input.checked).value;
        let NumberValue = this.Number.value;
        let url=await fetch(`https://opentdb.com/api.php?amount=${NumberValue}&category=${categoryValue}&difficulty=${difficultyValue}`)
        let respons=await url.json();
        new Quiz(respons.results);
        document.getElementById("setting").classList.add("d-none");
        document.getElementById("quiz").classList.remove("d-none");
       // return respons.results;
       console.log(respons.results)
    }
    
   
}