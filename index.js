// code your solution here

//creates a function that takes in array of objects 
function superbowlWin(record){
//creates a callback function that returns any object key.value that equals 'W', * { year: "2015", result: "W"}*
    function isWinYear(year){
        return year.result === 'W'
    }
//stores function in new variable, record.find(isWinYear) is going to find the FIRST object that meets the conditions of the callback function
    const winningYear = record.find(isWinYear)
//returns the first object.key if winningYear variable is true *2015*
    if (winningYear){
        return winningYear.year
    }
}



/*
function suberbowlWin(record) {
    return record.find(year) => year.result !== 'W')?.year
}
this code uses an arrow function along with the optional chaining operator 
returns the same result 
*/