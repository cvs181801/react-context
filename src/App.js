import './App.css';
import React from "react"
import Header from "./components/Header"
import {ThemeContextConsumer} from './ThemeContext';


function App() {

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
          </div>
      )
}

export default App