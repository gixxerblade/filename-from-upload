import React from "react";
import { Fieldset, Window, WindowContent } from "react95";
import Draggable from "react-draggable";
const Message = ({ fileData }) => {
  return (
    <Draggable>
      <Window>
        <WindowContent>
          <Fieldset>
            <h1>Your file name is:</h1>
            <h1>{fileData.fileName}</h1>
          </Fieldset>
        </WindowContent>
      </Window>
    </Draggable>
  );
};
export default Message;
