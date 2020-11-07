import React from 'react';
import Axios from 'axios';

// all the functions you need are here, you just need to write them

// the page should show the "add restaurants to get started" section if there are no restaurants

// you should be able to add a restaurant

// you should be able to render all restaraunts that have been added

// you should be able to delete all restaurants

// you should be able to remove an individual restaurant from the list

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        // add state here
    }
  }

  componentDidMount() {
    // do something
  }

  getDataFromDatabase(){

  }

  handleChange(e){
    // be sure to prevent page from refreshing on form submission
  }

  handleAddClick(){
    // at some point you should set state back to blank to force re-render
  }

  handleClearClick(){
    // at some point you should set state back to blank to force re-render
  }

  handleShowRandomChoice(e){
    // be sure to prevent page from refreshing on form submission
  }

  handleDeleteOne(id){

  }

  // you will need to change conditinonal rendering to use state
    render(){

         if (true){
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurant" className="inputBar"></input>
                        <button id="addButton">Add</button>
                        <button id="clearButton">Clear</button>
                        <h3 style={{"padding":"25px 0"}}>Add restaurants to get started!</h3>
                        <button  id="randomButton">Go!</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurant" className="inputBar"></input>
                        <button id="addButton">Add</button>
                        <button id="clearButton">Clear</button>
                        <div id="listDiv">
                            <div className="individual_container">
                            <div id="restaurantItems">Tatsu</div>
                                <div className="cross_button" >x</div>
                            </div>
                            <div className="individual_container">
                            <div id="restaurantItems">Guelaguetza</div>
                                <div className="cross_button" >x</div>
                            </div>
                            <div className="individual_container">
                            <div id="restaurantItems">Canter's</div>
                                <div className="cross_button" >x</div>
                            </div>
                         </div>
                        <button id="randomButton">Go!</button>
                    </form>
                </div>
            )
        }
    }
}

export default App;