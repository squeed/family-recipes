import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RecipeData from "./Recipe";
import {v4 as uuid} from 'uuid';

class App extends Component {
    render() {
        //let recipe = this.props.recipe;
        let recipeID = uuid();
        let recipe = new RecipeData(recipeID);
        return (
            <div className="recipe">
               <Recipe recipe={recipe} /> 
            </div>
        );
    }
}

class Recipe extends Component {
    render(){
        let r=this.props.recipe;

        let ingredients = r.Ingredients.map((ing, idx) => 
            <li className='ingredient' key={idx}>{ing}</li>
        );

        let steps = r.Steps.map((s, i) =>
            <li className='step' key={i}>{s}</li>
        );
        return (
            <div className='recipe-wrapper'>
                
                <div className='recipe-title'>{r.Relation} {r.Name} {r.Modifier} {r.MainIngredient.n} {r.Thing.n}</div>
                <div className='ingredients-wrapper'>
                    <ul>
                                        {ingredients}  

                    </ul>
                </div>
                <div className='recipe'>
                <ol className = 'steps'>
                    {steps}
                </ol>
                </div>
            </div>
        );
    }
}

export default App;
