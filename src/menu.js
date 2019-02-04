import React from 'react';
import JqxTree  from './assets/jqwidgets-react/react_jqxtree.js';

export default class Menu extends React.Component {
    componentDidMount() {
        this.refs.myTree.on('itemClick', (event) => {
            // alert(this.refs.myTree.getSelectedItem().label);
            this.props.onMenuChange(this.refs.myTree.getSelectedItem().label);
        });
    }
    render () {
        let source = [
            { label: '文件', items:
                [
                    { label: '导入' }
                ]
            },
            { label: '配置', items:
                [
                    { label: '参数' }
                ]
            },
            { label: '报表' },
            { label: '其他' }
        ];
        return (
            <JqxTree ref='myTree'
                style={{border:'none', float:'left'}}
                width={'100%'} height={'100%'} source={source}
            >
            </JqxTree>
        );
    }
}