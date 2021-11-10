import React from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
        state = {
            username: "bob"
        }
     
        changeUsername =(username) => {
            this.setState({username: username})
        }
    
    render() {
        return(
            <div>
            <Provider value={this.state.username}>
                {this.props.children}
            </Provider>
       </div>
        )
    }
}
export {Provider as ThemeContextProvider, Consumer as ThemeContextConsumer}