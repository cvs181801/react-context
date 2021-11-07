import React from "react"
import {ThemeContextConsumer} from "../ThemeContext"
import PropTypes from 'prop-types'

function Header() {
        return (
            <ThemeContextConsumer>
                    {theme => (<header>
                    <p>Welcome, {theme}!</p>
                </header>) }
            </ThemeContextConsumer>
        )    
    }

Header.propTypes = {
    theme: PropTypes.string
}


export default Header