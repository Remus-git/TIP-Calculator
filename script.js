let billValue;
let tip;
let totalValue;
let tipPerPerson;
let totalPerPerson;
let tipPerCent;
let numberOfPeople;
let resetButton = $("button");

$("#billValue").on("input", function () {
    billValue =parseFloat( $("#billValue").val())
    $(".tipValue").text(tipPerCent)
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        totalPerPerson = totalValue/numberOfPeople;
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
        totalPerPerson = totalValue/numberOfPeople;
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
    if(tipPerCent == 0.05){
        fiveCent.addClass("tipBlockActive")
        tenCent.removeClass("tipBlockActive")
        fifteenCent.removeClass("tipBlockActive")
        twentyFiveCent.removeClass("tipBlockActive")
        fiftyCent.removeClass("tipBlockActive")
    }
});
tenCent.click(function () { 
    tipPerCent = 10/100;
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        totalPerPerson = totalValue/numberOfPeople;
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
    if(tipPerCent == 0.1){
        tenCent.addClass("tipBlockActive")
        fiveCent.removeClass("tipBlockActive")
        fifteenCent.removeClass("tipBlockActive")
        twentyFiveCent.removeClass("tipBlockActive")
        fiftyCent.removeClass("tipBlockActive")
    }
});
fifteenCent.click(function () { 
    tipPerCent = 15/100;
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        totalPerPerson = totalValue/numberOfPeople;
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
    if(tipPerCent == 0.15){
        fifteenCent.addClass("tipBlockActive")
        fiveCent.removeClass("tipBlockActive")
        tenCent.removeClass("tipBlockActive")
        twentyFiveCent.removeClass("tipBlockActive")
        fiftyCent.removeClass("tipBlockActive")
    }
});
twentyFiveCent.click(function () { 
    tipPerCent = 25/100;
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        totalPerPerson = totalValue/numberOfPeople;
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
    if(tipPerCent == 0.25){
        twentyFiveCent.addClass("tipBlockActive")
        fiveCent.removeClass("tipBlockActive")
        fifteenCent.removeClass("tipBlockActive")
        tenCent.removeClass("tipBlockActive")
        fiftyCent.removeClass("tipBlockActive")
    }
});
fiftyCent.click(function () { 
    tipPerCent = 50/100;
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
    if(tipPerCent == 0.5){
        fiftyCent.addClass("tipBlockActive")
        fiveCent.removeClass("tipBlockActive")
        fifteenCent.removeClass("tipBlockActive")
        twentyFiveCent.removeClass("tipBlockActive")
        tenCent.removeClass("tipBlockActive")
    }  
});
$("#customTip").on("input",function(){
    tipPerCent = parseFloat($("#customTip").val())/100;
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        totalPerPerson = totalValue/numberOfPeople;
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
        fiftyCent.removeClass("tipBlockActive")
        fiveCent.removeClass("tipBlockActive")
        fifteenCent.removeClass("tipBlockActive")
        twentyFiveCent.removeClass("tipBlockActive")
        tenCent.removeClass("tipBlockActive")
})
$("#customTip").focus(function(){
    
})
$("#numberOfPeople").on("input",function(){
    numberOfPeople = $("#numberOfPeople").val();
    if(billValue > 0){
        tip = billValue * tipPerCent;
        totalValue = billValue + tip;
        totalPerPerson = totalValue/numberOfPeople;
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
    else{
        $(".tipValue").text("0.00")
            $(".totalValue").text("0.00")
    }
    
})
resetButton.click(function () { 
    billValue=tip=numberOfPeople=tipPerCent=totalPerPerson=tipPerPerson=totalValue=0;
    $(".tipValue").text("0.00")
    $(".totalValue").text("0.00")
    
});

