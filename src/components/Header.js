import React from "react"
import ThemeContext from "../ThemeContext"

function Header() {
        return (
            <ThemeContext.Consumer>
                    {theme => (<header>
                    <p>Welcome, {theme}!</p>
                </header>) }
            </ThemeContext.Consumer>
        )    
    }



export default Header