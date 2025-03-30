import React, { useState } from 'react';
import Header from './Header';
import { Notepad, Stickynote } from './Notepad';

function App() {
  const [message, setMessage] = useState('');

  return (
    <>
      <div className="m-10">
        <Header></Header>
      </div>

      {/* <div className="text-white">
        <p1>dsad</p1>
      </div> */}

      <div className="flex flex-col justify-center items-center mt-10">
        {/* <AddButton setMessage={setMessage}></AddButton> */}
        <Notepad message={message}></Notepad>
      </div>

      <div></div>
    </>
  );
}

export default App;
