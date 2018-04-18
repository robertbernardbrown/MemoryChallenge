import React, {Component} from "react";
import FixedHeader from "./FixedHeader";
import Header from "./Header";
import Footer from "./Footer";
import Dogs from "../dogs.json";
import Card from "./Card";

class MemoryGame extends Component {

    state= {
        score: 0,
        topScore: 0,
        chosen: [],
        response: ""
    }

    componentDidMount(){
        this.setState({
            response: "Click an image to begin!"
        })
    }

    render(){
        return (
            <div>
                <FixedHeader score={this.state.score} topScore={this.state.topScore} response={this.state.response}/>
                <Header/>
                <Card dogs={Dogs}/>
                <Footer/>
            </div>
        )
    }

}

export default MemoryGame;