import React from "react";
import Draggable from "react-draggable";
import {
  Window,
  WindowHeader,
  Toolbar,
  TextField,
  Button,
  WindowContent,
  Hourglass,
} from "react95";



const UploadForm = ({ fileData, setFileData, setMessage, message }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("File: ", fileData);
    setTimeout(() => {
      setMessage(!message);
    }, 3000);
  };
  const onChange = (event) => {
    console.log(event.target.files[0]);
    fileData && setFileData({ ...fileData, fileName: event.target.files[0].name });
  };
  return (
    <Draggable>
      <Window shadow={false}>
        <WindowHeader>Upload File Here</WindowHeader>
        <WindowContent>
          <Toolbar>
            <form onSubmit={onSubmit}>
              <TextField type="file" onChange={onChange} />
              <Button onClick={onSubmit}  style={{ marginLeft: "2px" }}>
                Upload
              </Button>
            </form>
          </Toolbar>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
export default UploadForm;
