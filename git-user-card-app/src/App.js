import React from 'react';

class App extends React.Component {
  state = {
    user: [],
    error: "",
  }
  // CDM() {
  //   fetch("https://api.github.com/users/JOliver23")
  //     .then(response => response.json())
  //     .then(user => {
  //       console.log("jo: App.js: App: CDM: response github api", user.message);
  //     })
  //     .catch(err => {
  //       console.error("jo: App.js: App: CDM: fetch failed")
  //     })
  // }

  // handleChange = e => {
  //   this.setState({
  //     open/close maybe???
  //   })
  // }

  render() {
    return(
      <div className="App">
        <UserCard 
          //user={this.state.user}
          //any other props i may pass
        />
      </div>
    )
  }

}

export default App;
