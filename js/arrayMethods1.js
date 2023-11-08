let fruits=['apple','guava', 'pinapple','banana','orange']
fruitsLength= fruits.length;
console.log(fruitsLength);
console.log(fruits.toString());
fruitsPop= fruits.pop()
console.log(fruitsPop);
console.log(fruits);

fruitsPush= fruits.push('mango');
console.log(fruitsPush); //return length
console.log(fruits);

fruitsShift= fruits.shift();
console.log(fruitsShift); //return first item
console.log(fruits);

fruitsUnshift= fruits.unshift('chery');
console.log(fruitsUnshift);
console.log(fruits);

newFruits=fruits.join('; ')
console.log(newFruits);
delete fruits[3];
console.log(fruits);

fruitsSlice= fruits.slice(2,4);
