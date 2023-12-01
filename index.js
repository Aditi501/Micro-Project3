const food=require('./food.json')

//List all the food items
food.forEach((array)=>{
    console.log(array)
}
)

//list all the food items with category vegetables
console.log("list all the food items with category vegetables")
var categoryVegetable=food.filter((food)=>{
    return food.category==="Vegetable"
})
console.log(categoryVegetable);

//list all the food items with category fruit
console.log("list all the food items with category fruit")
var categoryFruit=food.filter((food)=>{
    return food.category==="Fruit"
})
console.log(categoryFruit);

//list all the food items with category protein
console.log("list all the food items with category protein")
var categoryProtein=food.filter((food)=>{
    return food.category==="Protein"
})
console.log(categoryProtein);


//list all the food items with category nuts
console.log("list all the food items with category nuts")
var categoryNuts=food.filter((food)=>{
    return food.category==="Nuts"
})
console.log(categoryNuts);

//list all the food items with category grain
console.log("list all the food items with category grain")
var categoryGrain=food.filter((food)=>{
    return food.category==="Grain"
})
console.log(categoryGrain);

//list all the food items with category dairy
console.log("list all the food items with category dairy")
var categoryDairy=food.filter((food)=>{
    return food.category==="Dairy"
})
console.log(categoryDairy);


//list all the food items with calorie above 100
console.log("list all the food items with calorie above 100")
var calorieAbove=food.filter((food)=>{
    return food.calorie>100
})
console.log(calorieAbove);

//list all the food items with calorie below 100
console.log("list all the food items with calorie above 100")
var calorieBelow=food.filter((food)=>{
    return food.calorie<100
})
console.log(calorieBelow);

//list all the food items with highest protien content to lowest
console.log("list all the food items with highest protien content to lowest")
var sortedProtien=food.sort((a, b) => {
    return b.protiens - a.protiens;
});

sortedProtien.forEach((sortedProtien) => {
    console.log(sortedProtien);
});

//list all the food items with lowest cab content to highest
console.log("list all the food items with lowest cab content to highest")
var sortedCab=food.sort((a, b) => {
    return a.cab - b.cab;
});

sortedCab.forEach((sortedCab) => {
    console.log(sortedCab);
});
