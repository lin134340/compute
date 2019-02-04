import React from 'react';
import JqxGrid from './assets/jqwidgets-react/react_jqxgrid.js';
import JqxButton from './assets/jqwidgets-react/react_jqxbuttons.js';

export default class Preport extends React.Component {
    componentDidMount() {
        this.refs.myButton.on('click', () => {
            this.refs.myGrid.exportdata('xls', 'jqxGrid', false);
        });
    }
    render() {
        // renderer for grid cells.
        let numberrenderer = (row, column, value) => {
            return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
        }
        // create Grid datafields and columns arrays.
        let datafields = [];
        let columns = [];
        for (let i = 0; i < 26; i++) {
            let text = String.fromCharCode(65 + i);
            if (i == 0) {
                let cssclass = 'jqx-widget-header';
                columns[columns.length] = { pinned: true, exportable: false, text: '', columntype: 'number', cellclassname: cssclass, cellsrenderer: numberrenderer };
            }
            datafields[datafields.length] = { name: text };
            columns[columns.length] = { text: text, datafield: text, width: 60, align: 'center' };
        }

        let source =
            {
                unboundmode: true,
                totalrecords: 100,
                datafields: datafields,
                updaterow: function (rowid, rowdata) {
                    // synchronize with the server - send update command   
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);
        

        return (
            <div style={{width:'100%', height:'100%'}}>
                <JqxGrid ref='myGrid'
                    width={'100%'} height={'90%'} source={dataAdapter} columnsresize={true}
                    editable={true} columns={columns} selectionmode={'multiplecellsadvanced'}
                />
                <div style={{ float:'left', marginTop:20 }}>
                    <JqxButton value='Export to Excel' ref='myButton' />
                </div>
            </div>
        )
    }
}
