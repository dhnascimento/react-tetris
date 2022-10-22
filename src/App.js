import { useState, useEffect } from 'react';
import _, { last } from 'lodash';
import './App.css';

function App() {

  const [brickPosition, setBrickPosition] = useState({ row: 0, column: 0 });
  const [usedPositions, setUsedPositions] = useState([]);
  const [startingColumn, setStartingColumn] = useState(0);

  const rows = _.range(0, 10);
  const columns = _.range(0, 10);
  const lastRow = rows[rows.length - 1];
  const lastColumn = columns[columns.length - 1];

  const isPositionUsed = (row, column) => {
    return !!usedPositions.filter((coord) => _.isEqual(coord, [row, column])).length;
  }

  useEffect(() => {
    setTimeout(() => {
      if (brickPosition.row < lastRow) {
        setBrickPosition({ ...brickPosition, row: brickPosition.row + 1 });
      }
      if (brickPosition.row === lastRow) {
        setUsedPositions([...usedPositions, [brickPosition.row, brickPosition.column]]);
        setBrickPosition({ ...brickPosition, row: 0, column: startingColumn + 1 });
        setStartingColumn(startingColumn + 1);
        if (startingColumn > lastColumn) setStartingColumn(0);
      }
    }, 1000);
  });

  return (
    <main id="tetris_frame" style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2rem'
    }}>
      <h1>Tetris Game!</h1>
      <div style={{
        border: '2px solid #DDD',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FF0000',
        padding: '3rem',
        gap: '0.5rem'
      }}>
        {
          rows.map(row => {
            return (
              <div key={`row-${row}`} style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                {
                  columns.map(column => {
                    return (
                      <div key={`row-${row}-column-${column}`}
                        style={{
                          backgroundColor: brickPosition.row === row && brickPosition.column === column ? 'blue' : isPositionUsed(row, column) ? 'yellow' : ''
                        }}
                      >
                        {row}{column}
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default App;
