// code your solution here
function saturdayFun(activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`

}
mondayWork();

function wrapAdjective(highlight) {
    return function(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`
    };
}

const wrappedAdjective = wrapAdjective("*");
const result = wrappedAdjective("a hard worker");
console.log(result);

const wrappedAdjective1 = wrapAdjective("||");
const result1 = wrappedAdjective1("a dedicated programmer");
console.log(result1);
