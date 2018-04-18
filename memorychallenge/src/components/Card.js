import React from "react";

const Card = (props) => (
    <div className="row">
        {props.dogs.map(dog=> (
            <div className="col-xs-6 col-md-3" key={dog.id}>
                <div className="thumbnail" key={dog.id}>
                    <img src={dog.image} alt={dog.id} key={dog.id}/>
                </div>
            </div>
        ))}
    </div>
)

export default Card;
