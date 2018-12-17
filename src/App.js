import React from 'react';
import Wrapper from "./components/wrapper"
import './App.css';
import animals from "./stuff.json";
import Card from './components/card';
import Container from "./components/container";
import Navbar from "./components/navbar"

const clicked = [];
const score = 0;
const topScore = 0;

class App extends React.Component {
  state = {
    animals,
    clicked,
    score,
    topScore
  }

  shuffle = (array) => {
    //fisher-yates shuffle copy pastaed from the internet
    let i = 0
    let j = 0
    let temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    this.setState({ animals: array });
  };



  onClick = id => {
    let localScore = this.state.score;
    let localClicked = this.state.clicked;
    let counter = 0;
    let localTopScore = this.state.topScore;
    this.state.clicked.forEach(function (clickId) {
      if (clickId === id) {
        counter++
      }
    })
    if (counter > 0) {
      localScore = 0
      localClicked = [];
      alert("Game Over!")
    } else {
      localScore += 1;
      localClicked.push(id);
      if(localScore > localTopScore){
        localTopScore = localScore;
        if (localScore === 12){
          alert("Congratulations! You clicked all the animals.");
          localScore = 0;
          localClicked = [];
        }
      }
    };
    this.setState({ clicked: localClicked });
    this.setState({ score: localScore });
    this.setState({topScore: localTopScore});
    this.shuffle(this.state.animals);
  }




  render() {
    return (
      <Container>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        >
        </Navbar>
        <Wrapper>
          {
            this.state.animals.map((animal, index) =>
              <Card
                key={index}
                id={animal.id}
                name={animal.name}
                photo={animal.photo}
                onClick={this.onClick}
              />
            )
          }
        </Wrapper>
      </Container>
    )
  }

}

export default App;
