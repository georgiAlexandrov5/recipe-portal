import { Component } from 'react';


class  Recipes extends Component{

    constructor(props) {
        super(props);

        
    }

    render() {
        return (
            <div className="dashboard">
                <h1>All Recipes</h1>

                

                <ul className="RecipesList">
                   
                </ul>
            </div>
        );
    }
    
}

export default Recipes;