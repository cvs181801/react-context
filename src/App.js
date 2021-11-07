import './App.css';
import React from "react"
import Header from "./components/Header"
import ThemeContext from './ThemeContext';

class App extends React.Component {
  render() {
    console.log(this.context)
      return (
          <div>
              <Header />
              <main>
                  <p className="main">No new notifications, {this.context}! 🎉</p>
                
              </main>
          </div>
      )
  }
}

App.contextType = ThemeContext

export default App