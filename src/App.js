import './App.css';
import React from "react"
import Header from "./components/Header"
import ThemeContext from './ThemeContext';


function App() {

      return (
          <div>
            <Header />
            <ThemeContext.Consumer>
              {theme => (
                <main>
                    <p className="main">No new notifications, {theme}! 🎉</p>   
                </main>
              )}  
            </ThemeContext.Consumer>  
          </div>
      )
}

export default App