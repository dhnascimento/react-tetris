import logo from './logo.svg';
import _ from 'lodash';
import './App.css';

function App() {

  const rows = _.range(0, 10);
  const columns = _.range(0, 10);

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
                      <div key={`row-${row}-column-${column}`}>
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
