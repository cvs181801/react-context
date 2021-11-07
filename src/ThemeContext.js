import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeContextprovider extends Component {
    render() {
        return(
            <ThemeContextProvider value={"Kiley"}>
                {this.props.children}
            </ThemeContextProvider>
        )
    }
}
export {ThemeContextProvider, Consumer as ThemeContextConsumer}