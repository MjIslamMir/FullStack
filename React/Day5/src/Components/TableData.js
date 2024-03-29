import React from 'react'

class TableData extends React.Component {
    
    render() {
        console.log('Child Component Called')
        let {data, selectedRow} = this.props; 
        return (
            <div>
                <tr className={`data-row ${selectedRow === data.id ? 'active':''}`} onClick={()=>this.props.handleSelectedRow(data.id)}>
                    <td className="column1">{data.id}</td>
                    <td className="column2">{data.firstName}</td>
                    <td className="column3">{data.lastName}</td>
                    <td className="column4">{data.email}</td>
                    <td className="column5">{data.phone}</td>
                </tr>
            </div>
        );
    }
}
 
export default TableData;