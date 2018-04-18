import React from "react";

const Card = (props) => (
    <div className="row">
        {props.dogs.dogs.map(dog=> (
            <div className="col-xs-6 col-md-3">
                <div className="thumbnail">
                    <img src={dog.image} alt={dog.id} key={dog.id}/>
                </div>
            </div>
        ))}
    </div>
)

export default Card;
