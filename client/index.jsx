import React, { Component, Fragment } from "react";
import { render } from "react-dom";
class Sudoku extends Component {
  constructor(props){
    super(props);
    this.state = {
      board:props.board
    }
  }
  render(){
    return (
      <div>
      {this.state.board.map(box => (
        <table>
          <tbody>
        {box.map(newB => (
          <td>
            <input type='text' className='sudoku-cell'/>
          </td>
        ))}
        </tbody>
        </table>
      ))}
      </div>
    )
  }
}

render(<Sudoku board ={[[1,3,2,5,6,7,9,4,8],[5,4,6,3,8,9,2,1,7],[9,7,8,2,4,1,6,3,5],[2,6,4,9,1,8,7,5,3],[7,1,5,6,3,2,8,9,4],[3,8,9,4,7,5,1,2,6],[8,5,7,1,2,3,4,6,9],[6,9,1,7,5,4,3,8,2],[4,2,3,8,9,6,5,7,1],
]}/>, document.getElementById('root'));
