import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import '../containers/App.css';

//npm install react-scripts@latest    upgrade your tools using this command
//then run npm run and npm start

class App extends Component {
   constructor() {
      super()
      this.state={
         robots : [],
   searchfield : ''
      }
   }
   componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=> this.setState({robots:users}));
   }
   render(){ 
      const filteredRobots = this.state.robots.filter(robot=>{
         return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })

      if(this.state.robots.length=== 0){
         return <h1 className="tc">LOADING</h1>
      }

      else{
      return(
         <div className="tc">
         <h1 className="f1">RoboFriends</h1> 
         <SearchBox searchChange={this.onSearchChange}/>  
         <Scroll>
         <CardList robots = {filteredRobots}/>
         </Scroll>
         </div>
      );}
   }

   onSearchChange=(event)=>{
      this.setState({searchfield: event.target.value})
   }
}
export default App;


//props are just some inputs we get and render them we never modify them
//but when we need two neighbouring component to communicate w each other we use something called state