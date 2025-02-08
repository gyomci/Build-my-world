// priority: 0

// Visit the wiki for more info - https://kubejs.com/wiki/tutorials/recipes#modifying-and-replacing-recipes

console.info('Hello, World! (Loaded server scripts)')

/* //recept le cserelese
event.replaceInput(
    { input: 'minecraft:stick' }, // Arg 1: the filter
    'minecraft:stick',            // Arg 2: the item to replace
    '#minecraft:saplings'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )
*/




//Recipe Remover
    ServerEvents.recipes(event => {
        //Remove by recipe ID
        [
        //recept: 'minecraft:iron_ingot_from_smelting_iron_ore'
        'alexscaves:uranium_shard_from_uranium'
            

        ].forEach((recipeID) => event.remove({id: recipeID}));
    
        //Remove all recipes an item is related to. For example putting 'minecraft:bonemeal' here would remove the recipe for bone blocks as well.
        [
        //alapanyag:    'minecraft:diamond'
        
    
        ].forEach((ingredientID) => event.remove({input: ingredientID}));
        
        //Remove by item ID
        [
        //ID:    'minecraft:gold_ingot'
        
    
        ].forEach((itemID) => event.remove({output: itemID}));
    
    })