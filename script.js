// function submitBudget() {
//     var shoppingValue = Number(Shopping.value);
//     var foodValue = Number(food.value);
//     var transportationValue = Number(Transportation.value);
//     var subscriptionValue = Number(Subscriction.value);
//     var othersValue = Number(Others.value);

//     var sum = shoppingValue + foodValue + transportationValue + subscriptionValue + othersValue;

    
//     var amountSpending = Number(10000);
//     if(Shopping.value ===  '' && food.value === ''){
//         alert('field cannot be empty')
//         console.log('error');
//     }
//     else if (sum > 10000) {
//         alert('Total budget cannot be greater than 10000');
//         console.log('Total budget cannot be greater than 10000');
//         var displ = document.getElementById('displ').innerHTML = 'Total budget cannot be greater than 10000';
//     } else if (sum > amountSpending) {
//         alert('Remaining budget cannot be greater than the total budget');
//         console.log('error');
//     } else {
//         var remainingBudget = amountSpending - sum;

//         console.log(remainingBudget);

//         var display = document.getElementById('display').innerHTML = remainingBudget;
//         alert('Budget submitted successfully!');
//     }
// }

function submitBudget() {

    var limit = 10000
    var sum = Number(Shopping.value) + Number(food.value) + Number(Transportation.value) + Number(Subscription.value) + Number(Others.value)
    console.log(sum);
    if(Shopping.value === '' && food.value === '' && Transportation.value === '' && Subscription.value === '' &&Others.value === ''){
        console.log('input the required field');
    }
    else if(sum > limit){
        console.log('Total budget cannot be greater than daily limit');
        var displ = document.getElementById('displ').innerHTML = 'Total budget cannot be greater than daily limit';
    } else{
        var amountSpending = limit - sum
        console.log(amountSpending);
        
        var display = document.getElementById('display').innerHTML = amountSpending;
    }
    
    
}
