import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [base64Img, setBase64Img] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleReaderLoaded = (rE) => {
    let binaryString = rE.target.result;

    setBase64Img(btoa(binaryString));
  };

  const onFileChnage = (e) => {
    let file = e.target.files[0];

    setPreview(URL.createObjectURL(file));

    if (file) {
      let reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("binary string : " + base64Img);
  };
  return (
    <div className="App">
      <form action="" onSubmit={onSubmit}>
        <input
          type="file"
          name=""
          accept=".jpeg, .png, .jpg"
          id=""
          onChange={onFileChnage}
        />
        <button type="submit">submit</button>
      </form>
      <img src={preview} alt="" />
      <img src={`data:image/jpg;base64,${base64Img}`} alt=""/>
    </div>
  );
}

export default App;
