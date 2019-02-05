import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import JqxSplitter from './assets/jqwidgets-react/react_jqxsplitter.js';
import Menu_c from './containers/menu_c.js';
import Pages_c from './containers/pages_c.js';
import reducer from "./reducers/index_r.js";

const store = createStore(reducer);

// // store.subscribe(render);

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
            // page: ''
        // };
    }
    // handleMenuChange(p) {
    //     this.setState({
    //         page: p
    //     });
    // }
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
                    {/* <Menu onMenuChange={this.handleMenuChange.bind(this)}></Menu> */}
                    <Menu_c></Menu_c>
                </div>
                <div className="splitter-panel">
                    {/* <Pages page={this.state.page}></Pages> */}
                    <Pages_c></Pages_c>
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