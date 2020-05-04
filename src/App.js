import React, { useState } from "react";
import { navigate } from "@reach/router";
import Draggable from "react-draggable";
import { Github } from "@styled-icons/evaicons-solid/Github";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import UploadForm from "./UploadForm";
import Message from "./Message";
import {
  reset,
  themes,
  List,
  ListItem,
  Divider,
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Tooltip,
} from "react95";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const App = () => {
  const [opened, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState(false);
  const [fileData, setFileData] = useState({ fileName: "" });

  // Displays the upload window
  const handleDisplay = (event) => {
    event.preventDefault();
    setDisplay(!display);
  };
  const handleClick = () => {
    setOpen(!opened);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDblClick = () => {
    navigate("https://www.github.com/gixxerblade");
  };

  return (
    <div>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Background className="wrapper">
          <Draggable defaultPosition={{ x: -200, y: -200 }}>
            <button
              style={{ border: "none", background: "none" }}
              onDoubleClick={handleDblClick}
            >
              <GHWrap className="gh-wrap">
                <Github color="white" size="2rem" title="Github Link" />
                <span
                  style={{ fontSize: ".7rem", color: "white", margin: ".2rem" }}
                >
                  My Github &lt;DblClick&gt;
                </span>
              </GHWrap>
            </button>
          </Draggable>
          <Draggable>
            <Window style={{ width: 400 }}>
              <WindowHeader
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Tooltip text="Click to drag me around">
                  <span>Upload a file</span>
                </Tooltip>
                <Button
                  disabled={true}
                  style={{ marginRight: "-6px", marginTop: "1px" }}
                  size={"sm"}
                  square
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      transform: "translateY(-1px)",
                    }}
                  >
                    x
                  </span>
                </Button>
              </WindowHeader>
              <Toolbar>
                <Button variant="menu" size="sm" onClick={handleClick}>
                  File
                </Button>
                <div>
                  {opened && (
                    <List
                      style={{ zIndex: "9999" }}
                      horizontalAlign="left"
                      verticalAlign="bottom"
                      open={opened}
                      onClick={handleClose}
                    >
                      <ListItem onClick={handleDisplay} size="sm">
                        Upload
                      </ListItem>
                      <Divider />
                      <ListItem size="sm">
                        <a
                          title="VWC website"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://vetswhocode.io/"
                        >
                          VetsWhoCode
                        </a>
                      </ListItem>
                      <ListItem size="sm">
                        <a
                          title="VWC Dev.to page"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://dev.to/vetswhocode"
                        >
                          VWC Dev.to
                        </a>
                      </ListItem>
                      <ListItem size="sm">
                        <a
                          title="Link to VWC Twitter"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/VetsWhoCode"
                        >
                          VWC Twitter
                        </a>
                      </ListItem>
                      <Divider />
                      <ListItem size="sm" disabled>
                        VWC MySpace
                      </ListItem>
                    </List>
                  )}
                </div>
              </Toolbar>
              <WindowContent>
                <h1>Click "File" to upload a file</h1>
              </WindowContent>
            </Window>
          </Draggable>
          {display && (
            <UploadForm
              setMessage={setMessage}
              fileData={fileData}
              setFileData={setFileData}
              message={message}
              setMessage={setMessage}
            />
          )}
          {message && <StyledMessage fileData={fileData} />}
        </Background>
      </ThemeProvider>
    </div>
  );
};

export default App;
const Background = styled.div`
  padding: 5rem;
  background: teal;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: black;
`;
const GHWrap = styled.div`
  position: absolute;
  left: 2rem;
  top: 3rem;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  align-items: center;
  background-color: black;
  width: auto;
  height: 4rem;
  border-radius: 0.2rem;
`;
const StyledMessage = styled(Message)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
