import React, {Component} from "react"
import ThemeContext from "../ThemeContext"

class Header extends Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.context}!</p>
            </header>
        )    
    }
}

Header.contextType = ThemeContext

export default Header