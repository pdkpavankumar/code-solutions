/**
  You are the manager of a number of employees who all sit in a row. The CEO would like to give bonuses to all of your employees, but since the company did not perform so well this year the CEO would like to keep the bonuses to a minimum.

  The rules of giving bonuses is that:
  - Each employee begins with a bonus factor of 1x.
  - For each employee, if they perform better than the person sitting next to them, the employee is given +1 higher bonus (and up to +2 if they perform better than both people to their sides).

  Given a list of employee's performance, find the bonuses each employee should get.

  Example:
  Input: [1, 2, 3, 2, 3, 5, 1]
  Output: [1, 2, 3, 1, 2, 3, 1]
**/
(function main(input=[1, 2, 3, 2, 3, 5, 1]) {
    var bonuses = []
    for(var i=0; i<input.length; i++) {
        if (i===0) {
            bonuses.push(input[i] > input[i+1] ? 2 : 1);
        } else if(i===input.length -1) {
            bonuses.push(input[i] > input[i-1] ? 2 : 1);
        } else {
            var count = 1;
            if(input[i] > input[i+1]) count++;
            if(input[i] > input[i-1]) count++;
            bonuses.push(count);
        }
    }
    console.log(bonuses);
    return bonuses;
}());
