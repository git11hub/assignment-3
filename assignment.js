// https://github.com/git11hub/assignment-3

// Kilometer to meter function 

function kilometerToMeter(n) {
    var meter = n * 1000;
    if(n >= 0){
        return meter;
    }
    else{
        return "Invalid number";
    }    
}

var meter = kilometerToMeter(1.5);
console.log(meter)


// Budget Calculator

// watchPrice = $50
// phonePrice = $100
// laptopPrice = $500

function budgetCalculator(amountOfWatch, amountOfPhone, amountOfLaptop) {

    var watch = amountOfWatch * 50;
    var phone = amountOfPhone * 100;
    var laptop = amountOfLaptop * 500;
    var totalPrice = watch + phone + laptop;

    if (totalPrice >= 0) {
        return totalPrice;
    }
    else {
        return "Invalid number";
    }
}

var totalPrice = budgetCalculator(1, 2, 1);
console.log(totalPrice);


//   Hotel Cost

function hotelCost(day) {

    var tenDaysCost = 10 * 100;
    var twentyDaysCost = tenDaysCost + ((20 - 10) * 80);

    if (day >= 0 && day <= 10) {
        upToTen = day * 100;
        return upToTen;
    }
    else if (day > 10 && day <= 20) {
        upToTwenty = tenDaysCost + ((day - 10) * 80);
        return upToTwenty;
    }
    else if (day > 20) {
        aboveTwenty = twentyDaysCost + ((day - 20) * 50);
        return aboveTwenty;
    }
    else {
        return "Invalid number";
    }
}

var result = hotelCost(71);
console.log(result);


//   Mega friend testing 

function megaFriend(friends) {
    var initial = 0;
    var bigName;

    for (var i = 0; i < friends.length; i++) {
        var countLetter = friends[i].length;
        if (countLetter > initial) {
            var initial = countLetter;
            bigName = friends[i];
        }
    }
    return bigName;
}

var result = megaFriend(["Titu", "Habibul", "Musa Iqbal", "Habibur Rahman", "Kobir"]);
console.log(result);

