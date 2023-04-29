import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleIncressFontSize = () => {
        setSize(size + 2);
        props.showAlert("text size is increased", "success");
    };
    const handleDecressFontSize = () => {
        setSize(size - 2);
        props.showAlert("text size is increased", "success");
    }
    const handleDisableViewOnly = () => {
        setView(false);
        props.showAlert("View mode is disabled", "success");
    };
    const handleViewOnly = () => {
        setView(true);
        props.showAlert("View mode is enabled", "success");
    };
    const handleSpecialCharecter = () => {
        let newText = text.replace(/[^a-zA-Z0-9 ]/g, '');
        setText(newText);
        props.showAlert("View mode is enabled", "success");
    };
    const [text, setText] = useState('');
    const [size, setSize] = useState(20);
    const [view, setView] = useState(false);
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? '#2bdfd7' : 'rgb(45 207 34)' }}>
                <h3 className='mb-4'>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? (view ===false ? '#13466e':'#727272') : (view ===false ? 'white':'rgb(220 228 235)'), color: props.mode === 'dark' ? 'white' : '#042743', fontSize: `${size}px`, height: '200px' }} id="myBox" rows="8" disabled={view}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>LowerCase</button>
                <button disabled={text.length === 0 || view === true} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>ClearText</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>CopyText</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleIncressFontSize}>IncreaseSize</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleViewOnly}>ViewOnly</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleDecressFontSize}>DecreseSize</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleDisableViewOnly}>Disable ViewOnly</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleSpecialCharecter}>RemoveSpecialCharecter</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? '#2bdfd7' : 'rgb(43 123 223)' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
