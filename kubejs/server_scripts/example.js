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

//Git test


//Recipe Remover
    ServerEvents.recipes(event => {
        //Remove by recipe ID
        [
        //coal
        'minecraft:coal_from_blasting_cola_ore',
        'minecraft:coal_from_smelting_cola_ore',
        'minecraft:coal_from_blasting_deepslate_cola_ore',
        'minecraft:coal_from_smelting_deepslate_cola_ore',
        //iron
        'minecraft:iron_ingot_from_blasting_raw_iron',
        'minecraft:iron_ingot_from_smelting_raw_iron',
        'minecraft:iron_ingot_from_blasting_iron_ore',
        'minecraft:iron_ingot_from_smelting_iron_ore',
        'minecraft:iron_ingot_from_blasting_deepslate_iron_ore',
        'minecraft:iron_ingot_from_smelting_deepslate_iron_ore',
        'create:blasting/iron_ingot_from_crushed',
        'create:smelting/iron_ingot_from_crushed',
        'create:splashing/crushed_raw_iron',
        'create_dd:seething/crushed_raw_iron',
        'quark:tweaks/blasting/raw_iron_block_blast',
        'quark:tweaks/smelting/raw_iron_block_smelt',
        //copper
        'minecraft:copper_ingot_from_blasting_raw_copper',
        'minecraft:copper_ingot_from_smelting_raw_copper',
        'minecraft:copper_ingot_from_blasting_copper_ore',
        'minecraft:copper_ingot_from_smelting_copper_ore',
        'minecraft:copper_ingot_from_blasting_deepslate_copper_ore',
        'minecraft:copper_ingot_from_smelting_deepslate_copper_ore',
        'create:blasting/copper_ingot_from_crushed',
        'create:smelting/copper_ingot_from_crushed',
        'create:splashing/crushed_raw_copper',
        'create_dd:seething/crushed_raw_copper',
        'quark:tweaks/blasting/raw_copper_block_blast',
        'quark:tweaks/smelting/raw_copper_block_smelt',
        //gold
        'minecraft:gold_ingot_from_blasting_raw_gold',
        'minecraft:gold_ingot_from_smelting_raw_gold',
        'minecraft:gold_ingot_from_blasting_gold_ore',
        'minecraft:gold_ingot_from_smelting_gold_ore',
        'minecraft:gold_ingot_from_blasting_deepslate_gold_ore',
        'minecraft:gold_ingot_from_smelting_deepslate_gold_ore',
        'minecraft:gold_ingot_from_blasting_nether_gold_ore',
        'minecraft:gold_ingot_from_smelting_nether_gold_ore',
        'create:blasting/gold_ingot_from_crushed',
        'create:smelting/gold_ingot_from_crushed',
        'create:splashing/crushed_raw_gold',
        'create_dd:seething/crushed_raw_gold',
        'quark:tweaks/blasting/raw_gold_block_blast',
        'quark:tweaks/smelting/raw_gold_block_smelt',
        //uranium
        'immersiveengineering:smelting/ingot_uranium_from_blasting',
        'immersiveengineering:smelting/ingot_uranium_from_blasting2',
        'immersiveengineering:smelting/ingot_uranium_from_blasting3',
        'immersiveengineering:smelting/ingot_uranium',
        'immersiveengineering:smelting/ingot_uranium2',
        'immersiveengineering:smelting/ingot_uranium3',
        'create:blasting/ingot_uranium_compat_immersiveengineering',
        'create:smelring/ingot_uranium_compat_immersiveengineering',
        //zinc
        'create:zinc_ingot_from_blasting_raw_zinc',
        'create:zinc_ingot_from_smelting_raw_zinc',
        'create:zinc_ingot_from_blasting_deepslate_zinc_ore',
        'create:zinc_ingot_from_smelting_deepslate_zinc_ore',
        'create:blasting/zinc_ingot_from_crushed',
        'create:smelting/zinc_ingot_from_crushed',
        'create:blasting/zinc_ingot_from_ore',
        'create:smelting/zinc_ingot_from_ore',
        'create:blasting/zinc_ingot_from_raw_ore',
        'create:smelting/zinc_ingot_from_raw_ore',
        'create:splashing/crushed_raw_zinc',
        'create_dd:seething/crushed_raw_zinc',
        //cobald
        'tconstruct:common/materials/cobalt_ingot_smelting',
        //nickel
        'immersiveengineering:smelting/ingot_nickel_from_blasting',
        'immersiveengineering:smelting/ingot_nickel_from_blasting2',
        'immersiveengineering:smelting/ingot_nickel_from_blasting3',
        'immersiveengineering:smelting/ingot_nickel',
        'immersiveengineering:smelting/ingot_nickel2',
        'immersiveengineering:smelting/ingot_nickel3',
        'create:blasting/ingot_nickel_compat_immersiveengineering',
        'create:smelting/ingot_nickel_compat_immersiveengineering',
        'tfmg:smelting/blasting/nickel_ingot_from_crushed',
        'tfmg:smelting/nickel_ingot_from_crushed',
        'tfmg:smelting/blasting/nickel_ingot',
        'tfmg:smelting/nickel_ingot',
        //silver
        'immersiveengineering:smelting/ingot_silver_from_blasting',
        'immersiveengineering:smelting/ingot_silver_from_blasting2',
        'immersiveengineering:smelting/ingot_silver_from_blasting3',
        'immersiveengineering:smelting/ingot_silver',
        'immersiveengineering:smelting/ingot_silver2',
        'immersiveengineering:smelting/ingot_silver3',
        'create:blasting/ingot_silver_compat_immersiveengineering',
        'create:smelting/ingot_silver_compat_immersiveengineering',
        //aluminum
        'immersiveengineering:smelting/ingot_aluminum_from_blasting',
        'immersiveengineering:smelting/ingot_aluminum_from_blasting2',
        'immersiveengineering:smelting/ingot_aluminum_from_blasting3',
        'immersiveengineering:smelting/ingot_aluminum',
        'immersiveengineering:smelting/ingot_aluminum2',
        'immersiveengineering:smelting/ingot_aluminum3',
        'create:blasting/ingot_aluminum_compat_immersiveengineering',
        'create:smelting/ingot_aluminum_compat_immersiveengineering',
        'tfmg:smelting/blasting/aluminum_ingot',
        'tfmg:smelting/aluminum_ingot',
        //lead
        'create:blasting/ingot_lead_compat_immersiveengineering',
        'create:smelting/ingot_lead_compat_immersiveengineering',
        'immersiveengineering:smelting/ingot_lead',
        'immersiveengineering:smelting/ingot_lead2',
        'immersiveengineering:smelting/ingot_lead3',
        'immersiveengineering:smelting/ingot_lead_from_blasting',
        'immersiveengineering:smelting/ingot_lead_from_blasting2',
        'immersiveengineering:smelting/ingot_lead_from_blasting3',
        'tfmg:smelting/blasting/lead_ingot_from_crushed',
        'tfmg:smelting/lead_ingot_from_crushed',
        'tfmg:smelting/blasting/lead_ingot',
        'tfmg:smelting/lead_ingot',
        //Engineer's Hammer crushing
        'immersiveengineering:crafting/hammercrushing_nickel',
        'immersiveengineering:crafting/hammercrushing_lead',
        'immersiveengineering:crafting/hammercrushing_iron',
        'immersiveengineering:crafting/hammercrushing_silver',
        'immersiveengineering:crafting/hammercrushing_gold',
        'immersiveengineering:crafting/hammercrushing_uranium',
        'immersiveengineering:crafting/hammercrushing_aluminum',
        'immersiveengineering:crafting/hammercrushing_zinc',
        'immersiveengineering:crafting/hammercrushing_copper',



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