import React, { useState } from "react";

export default function AddingText(props) {

  let handleUpClick = () => {

    // console.log("handleUpClick Function Is Clicked");

    let upperCaseText = text.toUpperCase();

    gettingText(upperCaseText);

    props.showAlert("Coverted To UpperCase", "success");

  };

  let handleLoClick = () => {

    let lowerCaseText = text.toLowerCase();

    gettingText(lowerCaseText);

    props.showAlert("Coverted To LowerCase", "success");

  };

  let handleClearClick = () => {

    let clearText = "";

    gettingText(clearText);

    props.showAlert("Cleard The TextBox", "success");

  };


  let handleTitleClick = () => {

    let titleCase = text.toLowerCase().split(" ");

    for (var i = 0; i < titleCase.length; i++) {

      titleCase[i] = titleCase[i][0].toUpperCase() + titleCase[i].slice(1);

    };

    gettingText(titleCase.join(" "));

    props.showAlert("Coverted To TitleCase", "success");

    return titleCase;

  };

  let handleSentenceClick = () => {

    let sentenceCase = text.toLowerCase().charAt(0,).toUpperCase() + text.slice(1);

    gettingText(sentenceCase);

    props.showAlert("Coverted To SentenceCase", "success");

    return sentenceCase;

  };

  let handleCopyClick = () => {

    // let text = document.getElementById("textBox");

    // text.select();

    navigator.clipboard.writeText(text);

    // document.getSelection().removeAllRanges();

    props.showAlert("Copied To ClipBoard", "success");

  };

  let handleRemoveClick = () => {

    let removeText = text.split(/[ ]+/);

    gettingText(removeText.join(" "));

    props.showAlert("Removed Extra Spaces", "success");

  };

  let handleOnChange = (event) => {

    // console.log("handleOnChange Function Is Clicked");

    gettingText(event.target.value);

  };
  
  let [text, gettingText] = useState("");

  return (
    <>
      <div className="container">
        <h1 className="fw-bold">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <div className="button-area my-4 text-center">
            <button className="btn btn-info mx-2" disabled={text.length === 0} onClick={handleUpClick}>
              Convert To UpperCase
            </button>
            <button className="btn btn-success mx-2" disabled={text.length === 0} onClick={handleLoClick}>
              Convert To LowerCase
            </button>
            <button className="btn btn-primary mx-2" disabled={text.length === 0} onClick={handleTitleClick}>
              Convert To TitleCase
            </button>
            <button className="btn btn-dark mx-2" disabled={text.length === 0} onClick={handleSentenceClick}>
              Convert To SentenceCase
            </button>
            <button className="btn btn-secondary mx-2" disabled={text.length === 0} onClick={handleCopyClick}>
              Copy To Clipboard
            </button>
            <button className="btn btn-warning mx-2" disabled={text.length === 0} onClick={handleRemoveClick}>
              Remove Extra Spaces
            </button>
            <button className="btn btn-danger mx-2 my-4" disabled={text.length === 0} onClick={handleClearClick}>
              Clear The Above TextBox
            </button>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <h2 className="fw-bold">Your Text Summary</h2>
        <p className="fw-normal mx-2">{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words And {text.length} Characters</p>
        <p className="fw-normal mx-2">{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes Read </p>
        <h2 className="fw-bold">Preview Of The Above TextBox</h2>
        <p className="fw-normal mx-2">{text.length > 0 ? text: "Nothing To Preview"}</p>
      </div>
    </>

  );

};


