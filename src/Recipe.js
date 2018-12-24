import seedrandom from 'seedrandom';
import RenderData from './Data.js';

var numIngredients = 4;

class RecipeData {
    Id;
    Relation;
    Name;
    Modifier;
    MainIngredient;
    SecondaryIngredients;
    Instructions;
    Thing;

    Ingredients;
    Steps;

    constructor(id){
        this.Id = id;
        let rng = new Rng(id)
        let male = rng.chooseBool();

        let relations = male ? RenderData.Relations.male : RenderData.Relations.female;
        this.Relation = rng.chooseList(relations);

        let names = male ? RenderData.Names.male : RenderData.Names.female;
        this.Name = rng.chooseList(names);


        this.Modifier = rng.chooseList(RenderData.Modifiers);
        this.MainIngredient = rng.chooseList(RenderData.MainIngredients);
        this.SecondaryIngredients = rng.chooseN(RenderData.SecondaryIngredients, numIngredients);
        this.Instructions = rng.chooseN(RenderData.Instructions, numIngredients);
        
        this.Thing = rng.chooseList(RenderData.Things);
        


        this.Ingredients = [
            this.MainIngredient.i
        ];
        for (var j=0; j < this.SecondaryIngredients.length; j++) {
	        this.Ingredients.push(this.SecondaryIngredients[j].i);
        }
        if(this.Thing.extraIngredient != null){
	        this.Ingredients.unshift(this.Thing.extraIngredient);
        } 

		this.Steps = [];
		
		// if there is a first step...
		if(this.Thing.firstStep != null){
			this.Steps.unshift(this.Thing.firstStep);
		}
		this.Steps.push(this.MainIngredient.s + this.SecondaryIngredients[0].n + ".");
		for(var k = 0; k < this.SecondaryIngredients.length; k++){
			this.Steps.push(this.Instructions[k] + " " + this.SecondaryIngredients[k].i + ".")
		}
		this.Steps.push(this.Thing.lastStep);        
    }
}

class Rng{
    constructor(seed){
        this.rng = seedrandom(seed);
    };

    chooseBool(){
        return (this.rng() > 0.5);
    };

    chooseList(list){
        return list[Math.floor(this.rng() * list.length)];
    };

    chooseN(list, n){
        var l = list.slice(0);
        var out = [];
        for ( var i = 0; i < n; i++ ) {
            let idx = [Math.floor(this.rng() * l.length)];
            out.push(l[idx]);
            l.splice(idx, 1);
        }
        return out;
    };
}

export default RecipeData;
