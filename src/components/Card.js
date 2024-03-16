import React from 'react'; 
// these are basically our cards the return returns 
//an image of a robo with its name and other things which is fetched dynamically using props 
//we first used this.props.email but badme we used a function and not a object so this is not required.
//

const Card =(props) => {
   // const {name, email} = props;
    return(  
        <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 '> 
        <img alt='robots' src={`https://robohash.org/dgnpm${props.id}?200x200`}/> 
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    </div>
    );
}
export default Card;