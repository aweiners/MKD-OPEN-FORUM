import { useState } from 'react';

function AddButton({ setMessage }) {
  //Title Input
  const [title, setTitle] = useState('');

  // Message Input
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const add = () => {
    setShowInput(true);
  };

  const closeWindow = () => {
    setShowInput(false);
    setMessage(inputValue);
    setInputValue('');
  };

  //Title Value
  const setTitleChange = (event) => {
    if (event.target.value.length <= 20) {
      setTitle(event.target.value);
    }
  };

  //Message Value
  const handleInputChange = (event) => {
    if (event.target.value.length <= 160) {
      setInputValue(event.target.value);
    }
  };

  return (
    <div>
      <button
        onClick={add}
        className="px-4 py-2 border-2 border-white text-white rounded cursor-pointer hover:bg-gray-700"
      >
        Add
      </button>

      {showInput && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000089] flex justify-center items-center">
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <input
              type="text"
              value={title}
              onChange={setTitleChange}
              placeholder="Enter title..."
              className="mt-5 border p-2 w-full text-left overflow-hidden truncate"
            ></input>
            <p className="text-[#888484d4]">{title.length}/20</p>
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter something..."
              className="mt-2 border p-2 w-[20vw] h-[10vw] text-left"
              style={{
                resize: 'none',
                overflow: 'auto',
                textAlign: 'start',
                verticalAlign: 'top',
              }}
            />
            <p className="text-[#888484d4]">{inputValue.length}/160</p>
            <button
              onClick={closeWindow}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Notepad() {
  const [message, setMessage] = useState(''); // Store the message

  return (
    <>
      <div>
        {/* <AddButton setMessage={setMessage} /> */}
      </div>
      <div className="flex flex-col bg-[rgba(255,255,255,0.19)] rounded-2xl bg-opacity-20 w-[83vw] h-auto m-10 border-2 border-gray-500 p-4">
        <AddButton setMessage={setMessage} />
        {message && <Stickynote message={message} />}{' '}
        {/* Display sticky note only if there's a message */}
      </div>
    </>
  );
}

function Stickynote({ message }) {
  return (
    <div className="mt-4 p-4 bg-white text-black border border-gray-300 rounded-lg shadow-md">
      <p>{message}</p>
    </div>
  );
}

export { Notepad, Stickynote, AddButton };
