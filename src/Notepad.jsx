import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import closeButton from './assets/circle-xmark.png';

function Notepad() {
  const [messages, setMessages] = useState([]);
  function AddButton({ setMessages }) {
    const [title, setTitle] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    
    const closeWindowFalse = () => {
      setShowInput(false);
      setInputValue('');
      setTitle('');
    }
    const add = () => {
      setShowInput(true);
    };
  
    const closeWindow = useCallback(() => {
      if (inputValue.trim() !== '') {
        setMessages((prevMessages) => [
          ...prevMessages,
          { title, message: inputValue },
        ]);
      }
      setShowInput(false);
      setTitle('');
      setInputValue('');
    }, [inputValue, title, setMessages]);
  
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          setShowInput(false);
        } else if (event.key === 'Enter') {
          event.preventDefault();
          closeWindow();
        }
      };
  
      if (showInput) {
        window.addEventListener('keydown', handleKeyDown);
      }
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [showInput, closeWindow]);
  
    const setTitleChange = (event) => {
      if (event.target.value.length <= 20) {
        setTitle(event.target.value);
      }
    };
  
    const handleInputChange = (event) => {
      if (event.target.value.length <= 280) {
        setInputValue(event.target.value);
      }
    };
    
    
    return (
      <>
      <div>
        <button
          onClick={add}
          className="px-4 py-2 border-2 border-white text-white rounded cursor-pointer hover:bg-gray-700"
        >
          Add
        </button>
  
        {showInput && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#00000089] flex flex-col md:flex-row gap-7 justify-center items-center">
            <div className="bg-white p-4 rounded-2xl relative shadow-lg shadow-black border-[#0c77c342] border-2">
              <button className="flex justify-end w-full">
                <img onClick={closeWindowFalse} src={closeButton} className="w-5 bg-red-400 rounded-3xl hover:bg-red-300"/>
              </button>
              <input
                type="text"
                value={title}
                onChange={setTitleChange}
                placeholder="Enter title..."
                className="mt-5 border p-2 w-full md:w-[20vw] text-left overflow-hidden truncate"
              ></input>
              <p className="text-[#888484d4]">{title.length}/20</p>
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter something..."
                className="mt-2 border p-2 w-full h-[30vw] md:w-[20vw] md:h-[10vw] text-left"
                style={{
                  resize: 'none',
                  overflow: 'auto',
                  textAlign: 'start',
                  verticalAlign: 'top',
                }}
              />
              <p className="text-[#888484d4]">{inputValue.length}/280</p>
              <button
                onClick={closeWindow}
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-400"
              >
                Save
              </button>
            </div>
            <div className="md:w-[25vw] md:h-[25vw] p-4 rounded-2xl relative shadow-lg md:-mt-7">
              <Stickynote title={title} message={inputValue} />
            </div>
          </div>
        )}
      </div>
      </>
    );
  }

  return (
    <>
      <div className="justify-center items-center flex flex-col bg-[rgba(255,255,255,0.19)] rounded-2xl bg-opacity-20 w-[83vw] h-auto m-10 border-2 border-gray-500 p-4">
        <AddButton setMessages={setMessages} />
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <hr className="hidden "></hr>
          {messages.map((msg, index) => (
            <Stickynote key={index} title={msg.title} message={msg.message} />
          ))}
        </div>
      </div>
    </>
  );
}

function Stickynote({ title, message }) {
  return (
    <div className="p-10 bg-white mb-10 text-black border border-gray-300 w-full rounded-lg shadow-md md:w-[25vw] h-[400px] flex flex-col justify-between overflow-hidden">
  <h3 className="font-bold text-2xl truncate mb-2">{title}</h3>

  <div className="bg-[#ffffff00]flex-grow overflow-hidden">
    <p className="bg-[#ffffff00] mb-5 mt-5 whitespace-normal break-words text-md overflow-hidden text-ellipsis">
      <hr className="hidden mb-2"/>
      {message}
      <hr className="hidden mt-2"/>
    </p>
  </div>

  <p className="text-right italic text-gray-500 text-xs">- Anonymous</p>
</div>
  );
}

export { Notepad, Stickynote };
