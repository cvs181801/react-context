import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeContextprovider extends Component {
    render() {
        return(
            <Provider value={"Kiley"}>
                {this.props.children}
            </Provider>
        )
    }
}
export {Provider as ThemeContextProvider, Consumer as ThemeContextConsumer}