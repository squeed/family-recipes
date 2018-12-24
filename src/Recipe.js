import seedrandom from 'seedrandom';
import RenderData from './Data.js';
import sprintf from 'sprintf-js';

var numIngredients = 5;

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
        this.Instructions = rng.chooseN(RenderData.Instructions, (numIngredients / 2) - 1);
        
        this.Thing = rng.chooseList(RenderData.Things);

        this.Ingredients = [
            this.MainIngredient.i
        ];
        for (let i=0; i < this.SecondaryIngredients.length; i++) {
            this.Ingredients.push(this.SecondaryIngredients[i].i);
        }

        this.Steps = [];
        
        // if there is a first step...
        if(this.Thing.firstStep != null){
            this.Steps.unshift(this.Thing.firstStep);
        }

        this.Steps.push(this.MainIngredient.s + this.SecondaryIngredients[0].n + ".");
        for(let i = 0; i < this.Instructions.length; i++){
            this.Steps.push(sprintf.sprintf(
                this.Instructions[i],
                this.SecondaryIngredients[(i*2)+1].n,
                this.SecondaryIngredients[(i*2)+2].n));
        }

        this.Steps.push(this.Thing.lastStep);

        // Don't want to choose this as part of the step rendering
        if(this.Thing.extraIngredient != null){
            this.Ingredients.unshift(this.Thing.extraIngredient);
        } 
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
