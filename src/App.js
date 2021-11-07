import './App.css';
import React from "react"
import Header from "./components/Header"
import {ThemeContextConsumer} from './ThemeContext';


class App extends React.Component {
  constructor() {
    super()
      this.state = {
        username: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


handleChange(event) {
  this.setState({ username: event.target.value }) 
}

handleSubmit(event) {
  event.preventDefault();
  console.log("submitted")
}

render() {
      return (
          <div>
            <Header />
            <ThemeContextConsumer>
              {theme => (
                <main>
                    <p className="main">No new notifications, {theme}! 🎉</p>   
                </main>
              )}  
            </ThemeContextConsumer>  
             <form
                  name="form"
                 onSubmit={this.handleSubmit}
                 >
             <input
                 type="text"
                 name="username"
                 placeholder="New username"
                 value={this.state.value}
                 onChange={this.handleChange}
             />
             <button
                type="submit"
             >Change Username</button>
             </form> 
             <p> {this.state.username}</p>
          </div>
      )
    }
}

export default App