import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullname: "John Base",
      bio: "I'm a junior frontend developer",
      imgSrc: "https://wallpapers.com/images/high/cool-profile-pictures-neon-masked-man-4eqatw6nyulbbtex.webp",
      profession: "Frontend developer",
    },
    show: true,
  };

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div style={{display: "grid", alignItems: "center", width:"50%", margin: "0px auto"}}>
        <div className={this.state.show ? "show" : "notShow"}>
          <img src={this.state.person.imgSrc} style={{width: "200px", height:"200px", borderRadius:"100%", objectFit:"cover"}} alt="profile picture" />
          <h1>{this.state.person.fullname}</h1>
          <h5>{this.state.person.profession}</h5>
          <p>{this.state.person.bio}</p>
        </div>
        <button onClick={this.handleToggle}>Toggle Profile</button>
      </div>
    );
  }
}

export default App;
