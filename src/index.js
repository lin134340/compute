import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import JqxSplitter from './assets/jqwidgets-react/react_jqxsplitter.js';
import Menu from './menu.js';
import Pages from './pages.js';
import reducer from "./reducers";

const store = createStore(reducer);

// // store.subscribe(render);

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     page: ''
        // };
    }
    handleMenuChange(p) {
        this.setState({
            page: p
        });
    }
    render() {
        return (
            <JqxSplitter ref='mainSplitter'
            width={'100%'} height={'100%'}
            panels={[
                {size:'5%', min:150},
                {size:'95%', min:1000}
            ]}
            >
                <div className="splitter-panel">
                    <Menu onMenuChange={this.handleMenuChange.bind(this)}></Menu>
                </div>
                <div className="splitter-panel">
                    <Pages page={store.getState()}/*{this.state.page}*/></Pages>
                </div>
            </JqxSplitter>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);