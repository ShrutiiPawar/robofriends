import React from 'react';
import Card from './Card';
//here we are destructuring the robots props then and there only, we could've wrote Cardlist=({props}).
//again here doing the same task again and again is loop so 
//map() is used as an interator to iterate through array and giving it unique key is important okay really important
//also cardlist will accept a robots props bcoz it gets its values from robots.js warna it'll throw an error
//then each time map is used we get new user so we pass 'user' then i is the iterator ig
const CardList= ({robots}) =>{
    return(
        <div>
            {
          robots.map((user, i) =>{
        return(
        <Card 
        key={i} 
        id={robots[i].id} 
        name= {robots[i].name} 
        email= {robots[i].email}
        />
        ); 
          })
        }
        </div>

     ) ; 

}

export default CardList ;