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
            <div className='ingredient' key={idx}>{ing}</div>
        );

        let steps = r.Steps.map((s, i) =>
            <li className='step' key={i}>{s}</li>
        );
        return (
            <div>
                <div>Recipe ID {r.Id}</div>
                <div className='recipeTitle'>{r.Relation} {r.Name} {r.Modifier} {r.MainIngredient.n} {r.Thing.n}!</div>
                <div className='ingredients'>
                    Ingredients: <br/>
                    {ingredients}  
                </div>
                <ol className = 'steps'>
                    {steps}
                </ol>
            </div>
        );
    }
}

export default App;
