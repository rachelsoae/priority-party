import './App.css';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  
  return (
    <div className='App'>
      <nav>
        <h1>Priority Party</h1>
      </nav>
      <div className='App__content'>
        <main>
          <table>
            <tr>
              <td></td>
              <th>
                Time Sensitive
              </th>
              <th>
                Not Time Sensitive
              </th>
            </tr>
            <tr>
              <th>
                Urgent
              </th>
              <td className='cell'>
                <div className='zone'>
                  <div className='card'>card1</div>
                </div>
              </td>
              <td className='cell'>
                <div className='zone'>
                  <div className='card'>card2</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                Not Urgent
              </th>
              <td className='cell'>
                <div className='zone'>
                  <div className='card'>card3</div>
                </div>
              </td>
              <td className='cell'>
                <div className='zone'>
                  <div className='card'>card4</div>
                </div>
              </td>
            </tr>
          </table>
        </main>
        <aside>
          <form>
            <h2>Add a New Task</h2>
            <input type='text'></input>
            <button>Add New</button>
          </form>
          <ul>
            <h2>My Tasks</h2>
            {tasks.length ? tasks.map(task => <li>task.description</li>) : 'new tasks will show up here!'}
          </ul>
        </aside>
        {/* SIDEBAR COMPONENT HERE */}
      </div>
    </div>
  )
}

export default App;
