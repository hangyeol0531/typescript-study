//! 전개 연산자

let part1 = {name : 'jane'}, part2 = {age : 22}, part3 = {city : 'Seoul', country : 'kr'};
let merged = {...part1, ...part2, ...part3}
console.log(merged)