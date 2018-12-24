import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RecipeData from "./Recipe";
import {v4 as uuid} from 'uuid';

function getID(){
    let id = window.location.search;
    if (id === "" || id === "?" ){
        id = uuid();
        let url = window.location.pathname + "?" + id;
        window.history.replaceState({}, "recipe", url);
    } else {
        id = id.substring(1);
    }
    return id;
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipeID: uuid()
        };
    }

    render() {
        return (
            <div>
            <div className="recipe">
               <Recipe recipeID={this.state.recipeID} /> 
            </div>
            <div id="next-button" className="button" onClick={() => this.newID()} >Next Recipe <span className="fa fa-chevron-right"></span></div>  
            </div>
        );
    }

    newID() {
        this.setState({recipeID: uuid()});
    }
}

class Recipe extends Component {
    render(){
        let r = new RecipeData(this.props.recipeID);

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
