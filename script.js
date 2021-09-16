let billValue;
let tip;
let totalValue;
let tipPerPerson;
let totalPerPerson;
let tipPerCent;
let numberOfPeople;

$("#billValue").on("input", function () {
    billValue =parseFloat( $("#billValue").val())
    if(billValue > 0){
        
        $(".totalValue").text(totalPerPerson);
    }
});
const fiveCent = $("#fiveCent");
const tenCent = $("#tenCent");
const fifteenCent = $("#fifteenCent");
const twentyFiveCent = $("#twentyFiveCent");
const fiftyCent = $("#fiftyCent");
fiveCent.click(function () { 
    tipPerCent = 5/100;
     if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        tipPerPerson=tip/numberOfPeople;
        if(isNaN(tipPerPerson)){
            $(".tipValue").text("0.00")    
        }
        else{
            $(".tipValue").text(tipPerPerson.toFixed(2))
        }    
        if(totalPerPerson > 0){
            $(".totalValue").text(totalPerPerson.toFixed(2))
        }
        else{
            $(".totalValue").text("0.00")
        }
    }
});
tenCent.click(function () { 
    tipPerCent = 10/100;
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        tipPerPerson = tip/numberOfPeople;
        if(isNaN(tipPerPerson)){
            $(".tipValue").text("0.00")    
        }
        else{
            $(".tipValue").text(tipPerPerson.toFixed(2))
        }    
        if(totalPerPerson > 0){
            $(".totalValue").text(totalPerPerson.toFixed(2))
        }
        else{
            $(".totalValue").text("0.00")
        }
    }
});
fifteenCent.click(function () { 
    tipPerCent = 15/100;
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        tipPerPerson = tip/numberOfPeople;
        if(isNaN(tipPerPerson)){
            $(".tipValue").text("0.00")    
        }
        else{
            $(".tipValue").text(tipPerPerson.toFixed(2))
        }    
        if(totalPerPerson > 0){
            $(".totalValue").text(totalPerPerson.toFixed(2))
        }
        else{
            $(".totalValue").text("0.00")
        }
    }
});
twentyFiveCent.click(function () { 
    tipPerCent = 25/100;
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        tipPerPerson = tip/numberOfPeople;
        if(isNaN(tipPerPerson)){
            $(".tipValue").text("0.00")    
        }
        else{
            $(".tipValue").text(tipPerPerson.toFixed(2))
        }    
        if(totalPerPerson > 0){
            $(".totalValue").text(totalPerPerson.toFixed(2))
        }
        else{
            $(".totalValue").text("0.00")
        }
    }
});
fiftyCent.click(function () { 
    tipPerCent = 50/100;
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        tipPerPerson = tip/numberOfPeople;
        if(isNaN(tipPerPerson)){
            $(".tipValue").text("0.00")    
        }
        else{
            $(".tipValue").text(tipPerPerson.toFixed(2))
        }    
        if(totalPerPerson > 0){
            $(".totalValue").text(totalPerPerson.toFixed(2))
        }
        else{
            $(".totalValue").text("0.00")
        }
       }
});
$("#customTip").on("input",function(){
    tipPerCent = parseFloat($("#customTip").val())/100;
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        tipPerPerson = tip/numberOfPeople;
        if(isNaN(tipPerPerson)||isNaN(totalPerPerson)){
            $(".tipValue").text("0.00")    
            $(".totalValue").text("0.00")
        }
        else{
            $(".tipValue").text(tipPerPerson.toFixed(2))
            $(".totalValue").text(totalPerPerson.toFixed(2))
        }    
    }
})
$("#numberOfPeople").on("input",function(){
    numberOfPeople = $("#numberOfPeople").val();
    tipPerPerson = tip/numberOfPeople;
    if(isNaN(tipPerPerson)){
        $(".tipValue").text("0.00")    
    }
    else{
        $(".tipValue").text(tipPerPerson.toFixed(2))
    }    
    totalPerPerson = totalValue/numberOfPeople;
    if(isNaN(totalPerPerson)){
        $(".totalValue").text("0.00")
    }
    else{
        $(".totalValue").text(totalPerPerson.toFixed(2))
    }
})

