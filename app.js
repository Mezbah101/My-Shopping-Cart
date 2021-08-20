function updateProductNumber(variable,increase, price)
{
    var 
     productNumber = document.getElementById( variable + "-number").value;
    if (increase==true) {

        document.getElementById ( variable + "-number").value = parseInt(productNumber)+1;
    }

 else if (increase==false && productNumber > 0 ) {
    document.getElementById( variable +"-number").value = parseInt(productNumber) -1;
     
 }


 productNumber = document.getElementById( variable + "-number").value;

//Update Price 

document.getElementById(variable+"Price").innerText = productNumber * price;

calculateTotal() ;
} 

function getInput(product) {
    var productNumber =  parseInt(document.getElementById(product+"-number").value);
    return productNumber;
    
}

function calculateTotal() {

    var phoneTotal = getInput("phone") * 1100;
    var caseTotal = getInput("case") * 60;
    var subTotal = phoneTotal + caseTotal;
   document.getElementById("sub-total").innerText = subTotal;
   var tax = subTotal/10;
   document.getElementById("tax-amount").innerText = tax;
   document.getElementById("total-amount").innerText = subTotal + tax;
    
}

// For Upadating Toatal Cost


// For Case 

document.getElementById("case-plus").addEventListener("click", function(){
    updateProductNumber("case",true, 60)
})

document.getElementById("case-minus").addEventListener("click", function (){

    updateProductNumber("case", false , 60 )

})

 
//For Phone 


document.getElementById ("phone-plus").addEventListener ("click", function(){

    updateProductNumber("phone", true, 1100);


})

document.getElementById ("phone-minus").addEventListener ("click", function(){

    updateProductNumber("phone", false,1100);
})
