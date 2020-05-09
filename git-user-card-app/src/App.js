import React from 'react';

class App extends React.Component {
  state = {
    user: [],
    error: "",
  }
  componentDidMount() {
      console.log("jo: App.js: App: CDM: CDM run")
  //   fetch("https://api.github.com/users/JOliver23")
  //     .then(response => response.json())
  //     .then(user => {
  //       console.log("jo: App.js: App: CDM: response github api", user.message);
  //     })
  //     .catch(err => {
  //       console.error("jo: App.js: App: CDM: fetch failed")
  //     })
  }

  // handleChange = e => {
  //   this.setState({
  //     open/close maybe???
  //   })
  // }

  render() {
    console.log("jo: App.js: App: render run");
    return(
      <div className="App">
        <h1>GitHub User Card APP!!!</h1>
        <UserCard 
          //user={this.state.user}
          //any other props i may pass
        />
      </div>
    )
  }

}

export default App;
