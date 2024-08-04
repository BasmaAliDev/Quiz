export class Quiz{
    constructor(results){
        this.inCorrectBtn=document.getElementById("inCorrect");
        this.CorrectBtn=document.getElementById("Correct");
        this.current=document.getElementById("current");
        this.totalAmount=document.getElementById("totalAmount");
        this.question=document.getElementById("question");
        this.rowAnswer=document.getElementById("rowAnswer");
        this.nextBtn=document.getElementById("next");
        this.scoreQuize=document.getElementById("score")
        this.quesArr = results;
        this.index=0;
        this.score=0;
        this.nextBtn.addEventListener("click",this.onSubmit.bind(this))

        
        this.showQues();
    }
    showQues(){
        this.current.innerText=this.index+1;
        this.totalAmount.innerText=this.quesArr.length;
        this.question.innerHTML=this.quesArr[this.index].question;
        this.rowAnswer.innerHTML=this.getAnswers();
    }
    getAnswers() {
        let answers = this.quesArr[this.index].incorrect_answers
         .concat(this.quesArr[this.index].correct_answer)
          .sort();
    
        let cartona = "";
        for (let i = 0; i < answers.length; i++) {
          cartona += `
          <div class="form-check">
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name="answer"
              id="q${i + 1}"
              value='${answers[i]}'
            />
            ${answers[i]}
          </label>
        </div>
          
          `;
        }
    
        return cartona;
      }
      onSubmit() {
        if (!this.checkUserAnswer()) {
          return;
        }
    
        this.index += 1;
        console.log(this.index, "index", this.quesArr.length);
        if (this.index >= this.quesArr.length) {
            this.finsh()
          return;
        }
    
        this.showQues();
      }
      checkUserAnswer(){
        let userAnswerValue=Array.from(document.getElementsByName("answer")).find((input)=>input.checked).value;
        if(userAnswerValue===this.quesArr[this.index].correct_answer){
            this.score+=1;
            this.CorrectBtn.classList.remove("d-none");
            this.inCorrectBtn.classList.add("d-none");
        }
        else{
            this.inCorrectBtn.classList.remove("d-none");
            this.CorrectBtn.classList.add("d-none");
        }
        console.log(userAnswerValue);
        return true;

        console.log(userAnswerValue);
      }

      finsh(){
        document.getElementById("finish").classList.remove("d-none");
        document.getElementById("quiz").classList.add("d-none");
        this.scoreQuize.innerText=this.score;
      }

}