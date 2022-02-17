document.getElementById("burget-total").addEventListener("click",function(){
    
    getInput("food","rent","clothes");

    // document.getElementById("incomeInput").value =''
    // document.getElementById("foodInput").value= ""
    // document.getElementById("rentInput").value =''
    // document.getElementById("clothesInput").value =""

    

    
})




function getInput(food,rent,clothes){

    const income =document.getElementById("incomeInput");
    let incomeNumber =parseInt(income.value);

    
    const foodExpanse =document.getElementById(food+"Input");
    let foodExpanseNumber =parseInt(foodExpanse.value);

    const rentExpanse =document.getElementById(rent+"Input");
    let rentExpanseNumber =parseInt(rentExpanse.value);



    const clothesExpanse =document.getElementById(clothes+"Input");
    let clothesExpanseNumber =parseInt(clothesExpanse.value);


    

    handleError(foodExpanseNumber,rentExpanseNumber,clothesExpanseNumber,incomeNumber)
}



function handleError(foodValue,rentvalue,clothesValue,IncomeValue){


     if(isNaN(foodValue) || isNaN(rentvalue) || isNaN(clothesValue) || isNaN(IncomeValue) ){
       document.getElementById("err").innerText ="Please Enter Only Number";
       document.getElementById("err").style.backgroundColor ="red";
    }

    else if(foodValue<0 ||rentvalue<0 ||clothesValue<0 ||IncomeValue<0){
        document.getElementById("err").innerText ="Please Enter Positive Number";
       document.getElementById("err").style.backgroundColor ="red";
    }

    else{
    updateTotal(foodValue,rentvalue,clothesValue)

    updateBalance(IncomeValue)
    // saveMoney(percentValue);
    // console.log(percentValue)
    }
}
// function checkerBurget(exp){
//     const incomeAmount =document.getElementById("incomeInput");
//     const valueIncome =parseInt(incomeAmount.value);
//     if(exp>valueIncome){

//     }
// }

function updateTotal(foodtotal,renttotal,clothestotal){
    const totalExpanse =foodtotal+renttotal+clothestotal;
    const incomeAmount =document.getElementById("incomeInput");
    const valueIncome =parseInt(incomeAmount.value);
    if(totalExpanse>valueIncome){
        document.getElementById("err").innerText ="Your Expense is Higher Than Income";
        document.getElementById("err").style.backgroundColor ="red";
        document.getElementById("balance").innerText =''
    }
    else{
        document.getElementById("total-Expenses").innerText =totalExpanse;
    }
   

}



function updateBalance(totalIncome){
      const totalIncomeAmount =totalIncome;
    const remainingExpense =document.getElementById("total-Expenses");
    const remainingExpenseNumber =parseInt(remainingExpense.innerText);
    

    const remainingAmount =totalIncomeAmount-remainingExpenseNumber;
    document.getElementById("balance").innerText =remainingAmount;  
}


document.getElementById("save-btn").addEventListener("click",function(){
console.log("p")
const mainIncome =document.getElementById("incomeInput");
const mainIncomeNumber =parseInt(mainIncome.value);
const saveInput =document.getElementById("save-input");
const saveInputNumber =parseInt(saveInput.value)

const percent =(mainIncomeNumber*saveInputNumber)/100;
console.log(percent)
document.getElementById("saving-amount").innerText =percent;


const savingAmount =document.getElementById("saving-amount");
const savingAmountNumber =parseInt(savingAmount.innerText)
const balanceAmount =document.getElementById("balance");
const balanceAmountNumber =parseInt(balanceAmount.innerText)
if(savingAmountNumber>balanceAmountNumber){
    document.getElementById("err-save").innerText ="Your Expense Is Higher Than Income";
    document.getElementById("err-save").style.backgroundColor ="red";
}
else{
    document.getElementById("remain-amount").innerText =balanceAmountNumber-savingAmountNumber;
}

})
   

    