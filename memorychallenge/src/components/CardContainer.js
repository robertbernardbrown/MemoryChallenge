import React from "react";
import Card from "./Card"

const CardContainer = (props) => (
    <main className="container">
        <Card dogs={props}/>
    </main>
)

export default CardContainer;