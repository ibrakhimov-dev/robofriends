import React from "react";

class Card extends React.Component{
    render () {
        const {robotName} = this.props;
        return (
            <div className="bg-light-green grow g2 w-22 tc ma2 br3 shadow-5 bw2 mt3 pa3">
                <img src={`https://robohash.org/${robotName}`} alt={`Robot ${robotName}`} />
                <div>
                    <h1 style={{fontFamily: "'Press Start 2P', cursive"}}>{robotName}</h1>
                    <p>{`${(robotName + Math.round(Math.random()*1000)).toLowerCase()}@gmail.com`}</p>
                </div>
            </div>
        );
    }
}

export default Card;