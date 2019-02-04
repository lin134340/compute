import React from 'react';
import Dropzone from 'react-dropzone'
import JqxListBox  from './assets/jqwidgets-react/react_jqxlistbox.js';

export default class Pinput extends React.Component {
    constructor() {
        super()
        this.state = {
            files: []
        }
    }

    onDrop(acceptfiles) {
        this.setState({
            files: acceptfiles
        });
        let lb = this.refs.myListBox;
        lb.clear();
        acceptfiles.forEach(function(e){
            lb.addItem(e.name);
        });
    }

    render() {
        const baseStyle = {
            width: 300,
            height: 100,
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
        };
        const activeStyle = {
            borderStyle: 'solid',
            borderColor: '#6c6',
            backgroundColor: '#eee'
        };
        return (
            <div style={{marginLeft: 50, marginTop: 10}}>
                <Dropzone accept=".txt"
                    onDrop={this.onDrop.bind(this)}
                >
                    {({ getRootProps, getInputProps, isDragActive}) => {
                        let styles = {...baseStyle}
                        styles = isDragActive ? {...styles, ...activeStyle} : styles
                        return (
                            <div {...getRootProps()} style={styles}>
                                <input {...getInputProps()} />
                                <div style={{textAlign:"center", lineHeight:8}}>拖拽txt文件到这里...</div>
                            </div>
                        )
                    }}
                </Dropzone>
                <aside>
                    <h4>文件列表</h4>
                    <JqxListBox ref='myListBox'
                        width={300} height={600}
                    />
                </aside>
            </div>
        );
    }
}
<Pinput />


  
