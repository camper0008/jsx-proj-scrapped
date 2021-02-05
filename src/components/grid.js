import React from 'react';

import Cell from './cell.js'

let mergeGrid = (grid, columnSize, rowSize) => {
    grid.forEach()
}

class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columnSize: 5,
            rowSize: 5,
            grid: []
        }
    }
    render() {
        return <div className='wrapper'><table>{
            <tbody>{
                grid.map((t, x) => {
                return (<tr key={x}>{t.map((state, y) => {
                    return <Cell key={y} position={x+'|'+y}><div></div></Cell>
                })}</tr>)
            })}</tbody>}
        </table></div>
    }
}

export default Grid