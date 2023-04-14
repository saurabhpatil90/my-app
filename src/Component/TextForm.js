import React, {useState} from 'react';

export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase has been enabled", "success")
    }
    const handleOnChange = (event)=>{
        console.log("Changed");
        setText(event.target.value);
    }
    const[text, setText] = useState("Enter text here");
    // setText("new text");
    return (
        <>
        
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.08 * text.split(" ").length } minutes to read</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div> 
        </>
    )
}
