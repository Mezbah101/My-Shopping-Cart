function updateCaseNumber(increase)
{
    var caseNumber = document.getElementById("case-number").value;
    if (increase==true) {

        document.getElementById("case-number").value = parseInt(caseNumber)+1;
    }

 else if (increase==false && caseNumber > 0 ) {
    document.getElementById("case-number").value = caseNumber -1;
     
 }


caseNumber = document.getElementById("case-number").value;

//Update Price 

document.getElementById("casePrice").innerText = caseNumber *60;

}



document.getElementById("case-plus").addEventListener("click", function(){
    updateCaseNumber(true)

})

document.getElementById("case-minus").addEventListener("click", function (){

    updateCaseNumber(false)



})