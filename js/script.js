document.getElementById("burget-total").addEventListener("click",function(){
    
    getInput("food","rent","clothes");

    

    
})




function getInput(food,rent,clothes){

    const income =document.getElementById("incomeInput");
    const incomeNumber =parseInt(income.value);

    
    const foodExpanse =document.getElementById(food+"Input");
    const foodExpanseNumber =parseInt(foodExpanse.value);

    const rentExpanse =document.getElementById(rent+"Input");
    const rentExpanseNumber =parseInt(rentExpanse.value);



    const clothesExpanse =document.getElementById(clothes+"Input");
    const clothesExpanseNumber =parseInt(clothesExpanse.value);

    

    handleError(foodExpanseNumber,rentExpanseNumber,clothesExpanseNumber,incomeNumber)
}



function handleError(foodValue,rentvalue,clothesValue,IncomeValue){


     if(isNaN(foodValue) || isNaN(rentvalue) || isNaN(rentvalue) || isNaN(IncomeValue) ){
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

function updateTotal(foodtotal,renttotal,clothestotal){
    const totalExpanse =foodtotal+renttotal+clothestotal;

    document.getElementById("total-Expenses").innerText =totalExpanse;
}



function updateBalance(totalIncome){
      const totalIncomeAmount =totalIncome;
    const remainingExpense =document.getElementById("total-Expenses");
    const remainingExpenseNumber =parseInt(remainingExpense.innerText);
    

    const remainingAmount =totalIncomeAmount-remainingExpenseNumber;
    document.getElementById("balance").innerText =remainingAmount;  
}


document.getElementById("save-btn").addEventListener("click",function(){

    const percentInput =document.getElementById("save-input");
    const percentInputNumber =parseInt(percentInput.value);
    const mainBalance =document.getElementById("balance");
     const mainInputNumber =parseInt(mainBalance.innerText);

     const percent =(mainInputNumber*percentInputNumber)/100;
     if(mainInputNumber<percent){
         document.getElementById("saving-amount").innerText =percent;
         document.getElementById("remain-amount").innerText =mainInputNumber-percent;
     }
     else{
         document.getElementById("err-save").innerText ="Your Balance Low";
         document.getElementById("err-save").style.backgroundColor ="red";
     }
})


// document.getElementById("save-btn"),addEventListener("click",function(){
//     const percentInput =document.getElementById("save-input");
//     const percentInputNumber =parseInt(percentInput.value);
//     saveMoney(percentInputNumber)
// })


// function saveMoney(totalPercentvalue){
//         const mainAmount =totalPercentvalue;
//         const mainBalance =document.getElementById("balance");
//         const totalAmount =parseInt(mainBalance.value);
//         // const percentage =mainAmount/100 *totalAmount;
//         console.log(mainAmount,totalAmount)
//         // if(mainBalanceNumber>percentage){
//         //     document.getElementById("saving-amount").innerText =percentage;
    
//         //     document.getElementById("saving-amount").innerText =mainBalanceNumber-percentage;
    
//         // }else{
//         //     console.log("f")
//         // }
//     }

   

    