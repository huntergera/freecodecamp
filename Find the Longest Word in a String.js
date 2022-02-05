/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
    let newArray = str.split(' ');
    let largestItem = 0;

    for (let item of newArray) {
        if (item.length > largestItem) largestItem = item.length
    }
    return largestItem;
}