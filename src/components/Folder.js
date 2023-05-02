import React, { useState } from "react";
import "./styles.css";

const Folder = ({ handleInsetNode, explorerData }) => {
  const [expand, setexpand] = useState(false);
  const [showInput, setshowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setexpand(true);
    setshowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // add logic
      handleInsetNode(explorerData.id, e.target.value, showInput.isFolder);
      setshowInput({
        ...showInput,
        visible: false,
      });
    }
  };

  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setexpand(!expand)}>
          <span>📁 {explorerData.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "␜"}</span>
              <input
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setshowInput({ ...showInput, visible: false })}
                className="inputContainer__input"
                type="text"
              />
            </div>
          )}

          {explorerData.items.map((item, index) => {
            return <Folder handleInsetNode={handleInsetNode} key={item.id} explorerData={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">␜ {explorerData.name}</span>;
  }
};

export default Folder;
