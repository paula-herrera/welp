import React from 'react';
import Axios from 'axios';
import List from './List.jsx'

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        displayChoice: false,
        // choices: ["Howling Rays", "Halal Guys", "Wendys"],
        choices: [],
        restaurant: ''
    }
    this.getDataFromDatabase =   this.getDataFromDatabase.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleRandom = this.handleRandom.bind(this)
  }

  componentDidMount(){
      this.getDataFromDatabase();
  }

  getDataFromDatabase(){
      Axios.get('/api/all')
      .then((results) => {
          this.setState({
              choices: results.data
          }, () => console.log(this.state))
      })
      .catch((err) => { console.error(err)})
  }

  handleChange(e){
    e.preventDefault() // preventing page from refreshing on form submission

    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleAddClick(){
      if (this.state.restaurant.length < 1){
          window.alert('Please enter at least one character.')
      } else {
        let { restaurant } = this.state;
        Axios.post("/api/add", {
          restaurant: restaurant,
        })
          .then(() => this.setState({ restaurant: "" })) // sets state back to blank to force re-render
          .catch((err) => console.err(err));
      }
  }

  handleClearClick(){
    let {restaurant} = this.state
      Axios.delete('/api/all')
      .then(() => this.setState({restaurant: ''})) // sets state back to blank to force re-render
      .catch(err => console.err(err))
  }

  handleRandom(e){
    e.preventDefault();
    this.setState({
        displayChoice: !this.state.displayChoice
    })
  }

  handleDeleteOne(id){
    Axios.delete(`/api/deleteOne/${id}`) // utilizing req.params
    .then(() => this.setState({restaurant: ''}))
    .catch(err => console.error(err))
  }

    render(){
        if (this.state.displayChoice){
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurant" onChange={this.handleChange.bind(this)} className="inputBar"></input>
                        <button onClick={this.handleAddClick.bind(this)} id="addButton">Add</button>
                        <button onClick={this.handleClearClick.bind(this)} id="clearButton">Clear</button>
                        <h3>Your choice is: </h3>
                        <h1>{this.state.choices[Math.floor(Math.random() * this.state.choices.length)].restaurant}</h1>
                        <button onClick={(e) => this.handleRandom(e)} id="randomButton">Go!</button>
                    </form>
                </div>
            )
        } else if (!this.state.choices.length){
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurant" onChange={this.handleChange.bind(this)} className="inputBar"></input>
                        <button onClick={this.handleAddClick.bind(this)} id="addButton">Add</button>
                        <button onClick={this.handleClearClick.bind(this)} id="clearButton">Clear</button>
                        <h3>Add restaurants to get started!</h3>
                        <button onClick={(e) => this.handleRandom(e)} id="randomButton">Go!</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurant" onChange={this.handleChange.bind(this)} className="inputBar"></input>
                        <button onClick={this.handleAddClick.bind(this)} id="addButton">Add</button>
                        <button onClick={this.handleClearClick.bind(this)} id="clearButton">Clear</button>
                         <List choices={this.state.choices} handleDeleteOne={this.handleDeleteOne.bind(this)} />
                        <button onClick={(e) => this.handleRandom(e) } id="randomButton">Go!</button>
                    </form>
                </div>
            )
        }
    }
}

export default App;