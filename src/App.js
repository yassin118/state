import './App.css';
import React from 'react';
import me from './me.jpg';


class App extends React.Component {
  state = {
    Person: {
      fullName : "Yassin Hafi ",
      bio : "lds,vks,flksrflkrnsnsfkrlf ",
      imgSrc : me,
      profession : "Etudiant"
    },
    show : false,
    counter : 0
  };
  handleShowPortfolio = () => {
    this.setState({
      show: !this.state.show
    });
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <button className="btn" onClick={this.handleShowPortfolio}>Mon Profil</button><br/>
        {this.state.show ? (
          <div className="content">
            <img src={this.state.Person.imgSrc} ></img>
            <h1><span>Full Name : </span>{this.state.Person.fullName}</h1>
            <h4><span>Bio :</span> {this.state.Person.bio}</h4>
            <h4><span>Profession :</span> {this.state.Person.profession}</h4>
            <br></br>
          </div>
        ) : ('')}
        <p className="counter">{this.state.counter}</p>
      </div>
    );
  }
}

export default App;

