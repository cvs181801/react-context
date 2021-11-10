import './App.css';
import React from "react"
import Header from "./components/Header"
import {ThemeContextConsumer, ThemeContextProvider} from './ThemeContext';


class App extends React.Component {
  
      state = {
        newUsername: ""
      }  

handleChange = (event)=> {
  const {name, value} = event.target
  this.setState({[name]: value})
}


render() {
      return (
          <div>
            <Header />
            <ThemeContextConsumer>
              {context => (
                <main>
                    <p className="main">No new notifications, {context}! 🎉</p>   
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
                value={this.state.newUsername}
                onChange={this.handleChange}
            />
            <button
                type="submit"
            >Change Username</button>
            </form> 
            <p>{this.state.newUsername}</p>
            
          </div>
      )
    }
}

export default App