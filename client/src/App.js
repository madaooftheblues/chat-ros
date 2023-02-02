
import './App.css';

import React,{ useState } from'react'
import axios from 'axios';
function App() {

  const [inputValue, setInputValue] = useState('');
  const [req, setReq] = useState('');
  const [response, setResponse] = useState('');
  const res="HiHi"
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  

  
  async function getResponse() {
    setReq(`You: ${inputValue}`);
    setInputValue('');
    
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
      });
      const data = response.data;
      setResponse(`ChittiRobot:  ${data.id}`);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div style={styles.container}>
      <div class="shadow-none p-3 w-100  bg-light rounded">
      <div style={styles.chatHistory}>
        <p>{req}</p>
      </div></div>
      <div class="shadow-lg p-3 w-100  bg-white rounded">
      <div style={styles.chatHistory}>
        <p>{response}</p>
      </div></div>
      <div className="shadow p-30 mb-5 w-100 bg-white rounded">
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button style={styles.button} onClick={getResponse}>
          Send
        </button>
      </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  chatHistory: {
    width: '80%',
    height: '80%',
    
  },
  chatHistory1: {
    width: '80%',
    height: '80%',
  
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid gray',
  },
  button: {
    padding: '10px 20px',
    color:'white',
    borderRadius: '5px',
    backgroundColor: 'black',
  },
};

export default App;
