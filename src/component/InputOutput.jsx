import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const InputOutput = () => {
  const [text, setText] = useState('');
  const [lastText, setLastText] = useState('');
  const [cnt, setCnt] = useState(0);
 // const [wordCount, setWordCount] = useState(0);
 // const [charCount, setCharCount] = useState(0);
  //const [lineCount, setLineCount] = useState(1);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const upperCaseClicked = () => {
    const newText = text.toUpperCase();
    setText(newText);
    setLastText(newText);
  };

  const lowerCaseClicked = () => {
    const newText = text.toLowerCase();
    setText(newText);
    setLastText(newText);
  };

  const countBtnClicked = () => {
    setCnt(cnt + 1);
    console.log('Count button clicked');
  };

  let countStyle = {};
  if (cnt >= 11) {
    countStyle = { color: 'red' };
  };

  const boldCaseClicked = () => {
    setBold(!bold);
  };

  const italicCaseClicked = () => {
    setItalic(!italic);
  };

  const copyCaseClicked = () => {
    navigator.clipboard.writeText(text);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus(''), 2000);
  };

  const clearbtnClicked = () => {
    setText('');
  };

  // Calculate reading time in seconds (assuming 200 words per minute)
  const calculateReadingTime = () => {
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0).length;
    return Math.ceil((words / 200) * 60); // Convert minutes to seconds
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <textarea
          style={{
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
            fontSize: '20px',
            fontWeight: bold ? 'bold' : 'normal',
            fontStyle: italic ? 'italic' : 'normal',
          }}
          rows="8"
          cols="100"
          placeholder="Enter Your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={upperCaseClicked} className="btn btn-success my-2 mx-3">UpperCase</button>
        <button onClick={lowerCaseClicked} className="btn btn-danger my-2 mx-3">LowerCase</button>
        <button onClick={countBtnClicked} className="btn btn-dark my-2 mx-3">Count</button>
        <button onClick={boldCaseClicked} className="btn btn-warning my-2 mx-3">Bold</button>
        <button onClick={italicCaseClicked} className="btn btn-info my-2 mx-3">Italic</button>
        <button onClick={copyCaseClicked} className="btn btn-secondary my-2 mx-3">
          {copyStatus ? 'Copied!' : <FontAwesomeIcon icon={faCopy} />}
        </button>
        <button onClick={clearbtnClicked} className="btn btn-primary my-2 mx-3">Clear</button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2>Text Summary: </h2>
        <p>{lastText}</p>
        <h3 style={{ textAlign: 'left', marginLeft:'300px' , marginBottom:'0px'}}>Count: <span style={countStyle}>{cnt}</span> </h3>
    
        {/* <p><span style={{ fontSize: '20px', color: 'blue' }}>Number of words: </span> {wordCount}</p>
        <p><span style={{ fontSize: '20px', color: 'blue' }}>Number of characters: </span> {charCount}</p>
        <p><span style={{ fontSize: '20px', color: 'blue' }}>Number of lines: </span> {lineCount}</p> */}
        <p style={{marginBottom:'5px'}}> Number of characters: {text.length}</p>
        <p style={{marginBottom:'5px'}}>Number of words: {text.trim().split(/\s+/).filter((word) => word.length > 0).length}</p>
        <p style={{marginBottom:'5px'}}>Number of Lines: {text.split('\n').length} </p>
        <p style={{marginBottom:'5px'}}>Estimated reading time: {calculateReadingTime()} seconds</p>
        
      </div>
      
    </>
  );
};

export default InputOutput;
