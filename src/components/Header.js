import React from "react"
import ThemeContext from "../ThemeContext"
import PropTypes from 'prop-types'

function Header() {
        return (
            <ThemeContext.Consumer>
                    {theme => (<header>
                    <p>Welcome, {theme}!</p>
                </header>) }
            </ThemeContext.Consumer>
        )    
    }

Header.propTypes = {
    theme: PropTypes.string
}


export default Header