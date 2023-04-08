import React, { useState } from "react";

export default function Textform(props) {

  const [text, setText] = useState("Enter the text here");

  const [colorchange, setcolorchange] = useState("Enable DarkMode")
  const [dark, setdark] = useState({
    color: "black",
    backgroundColor: "white"
  })


  function func() {
    var x;

    if (dark.backgroundColor == "white") {
      x = {
        color: "white",
        backgroundColor: "black"
      }

      setcolorchange("Disable DarkMode")
    }

    else {

      x = {
        color: "black",
        backgroundColor: "white"
      }

      setcolorchange("Enable DarkMode")
    }

    setdark(x);

  };


  //  setText("itunkdhjs");
  function WordCount(str) {
    return str.split(" ").length;
  }

  const handleclickupper = () => {
    var newtext = text.toUpperCase(text);

    setText(newtext);

    props.showalert("Text is coverted to Uppercase", "success")
  };

  const handleclicklower = () => {
    var newtext = text.toLowerCase(text);

    setText(newtext);
    props.showalert("Text is coverted to Lowercase", "success")
  };

  const toUpper = () => {

    var newtext = "";

    const mySentence = text;
    const words = mySentence.split(" ");

    words
      .map((word) => {
        newtext = newtext + word[0].toUpperCase() + word.substring(1) + " ";
      })
      .join(" ");

    setText(newtext);

  };

  const handleonchange = (event) => {
    setText(event.target.value);
    console.log("handle on change");
  };

  return (
    <div>
      <div class="mb-3">
        <h1 className={`my-2 ${props.mode == "dark" ? "text-white" : "text-balck"}`}>Important form</h1>

        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="15"
          value={text}
          onChange={handleonchange} style={dark}
        ></textarea>

        <div>
          <button
            type="button"
            class="btn btn-primary btn-lg my-3"
            onClick={handleclickupper}
          >
            Upper Case
          </button>

          <button
            type="button"
            class="btn btn-primary btn-lg my-3 mx-3"
            onClick={handleclicklower}
          >
            Lower Case
          </button>

          <button
            type="button"
            class="btn btn-primary btn-lg my-3 mx-3"
            onClick={toUpper}
          >
            Itallic
          </button>

          <button
            type="button"
            class="btn btn-primary btn-lg my-3 mx-3"
            onClick={func}
          >
            {colorchange}
          </button>


        </div>
      </div>

      <div className={`container ${props.mode == "dark" ? "text-white" : "text-black" }`}>
        word {WordCount(text) - 1} , charecter {text.length} , AverageReadtime{" "}
        {0.005 * (WordCount(text) - 1)} mintues
      </div>
    </div>
  );
}
