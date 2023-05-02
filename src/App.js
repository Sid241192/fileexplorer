import React, { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setexplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsetNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setexplorerData(finalTree); 
  };
  return (
    <div className="App">
      <Folder handleInsetNode={handleInsetNode} explorerData={explorerData} />
    </div>
  );
}

export default App;
