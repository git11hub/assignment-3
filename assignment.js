// https://github.com/git11hub/assignment-3

// kilometer to meter function 

function kilometerToMeter(n){
    var meter = n * 1000;
    return meter;
}
var meter = kilometerToMeter(-5);
console.log(meter)


// Budget Calculator

// watchPrice = $50
// phonePrice = $100
// laptopPrice = $500

function budgetCalculator(amountOfWatch, amountOfPhone, amountOfLaptop){

    var watch = amountOfWatch * 50;
    var phone = amountOfPhone * 100;
    var laptop = amountOfLaptop * 500;
    var totalPrice = watch + phone + laptop;

    return totalPrice;
}

var totalPrice = budgetCalculator(0, -3, 0);
console.log(totalPrice);

//   Hotel Cost

function hotelCost(day){

    var tenDaysCost = 10 * 100;
    var twentyDaysCost = tenDaysCost+((20 - 10) * 80);

    if(day >= 0 && day <= 10){
        first = day * 100;
        return first;
    }
    else if(day > 10 && day <= 20){
        second = tenDaysCost + ((day - 10) * 80);
        return second;
    }
    else if(day > 20){
        third = twentyDaysCost + ((day - 20) * 50);
        return third;
    }
    else{
        return "Invalid number";
    }
}

var result = hotelCost(-5);
console.log(result);

//   Mega friend testing 

function megaFriend(friends) {
    var initial = 0;
    var bigName;

    for (var i = 0; i < friends.length; i++) {
        var something = friends[i].length;
        if (something > initial) {
            var initial = something;
            bigName = friends[i];
        }
    }
    return bigName;
}
var result = megaFriend(["Titu", "Habibul", "Musa Iqbal", "Habibur Rahman", "Kobir"]);
console.log(result);

