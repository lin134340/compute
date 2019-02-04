import React from 'react';
import Pinput from './pinput.js';
import Preport from './preport.js';

export default class Pages extends React.Component {
    render () {
        let page = null;
        if (this.props.page === "导入") {
            page = <Pinput />;
        } else if (this.props.page === "报表") {
            page = <Preport />;
        }
        return (
            page
        );
    }
}