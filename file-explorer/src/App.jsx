import { useState } from "react";
import "./App.css";
import json from "./json/data.json";

function App() {
  const [data, setData] = useState(json);
  const [isCollapse, setIsCollapse] = useState({});

  // 🟢 Add Folder Function
  const addNodeList = (parentId) => {
    const name = prompt("Enter folder name:");
    if (!name) return; // Avoid adding empty folders

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: node.children
              ? [...node.children, { id: Date.now(), name, isFolder: true, children: [] }]
              : [{ id: Date.now(), name, isFolder: true, children: [] }],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };

    setData((prev) => updateTree(prev)); // Update state properly
  };

  // 📂 Recursive Component
  const List = ({ items, addNodeList }) => {
    return (
      <div className="container">
        {items.map((node) => (
          <div key={node.id} style={{ marginLeft: "20px", textAlign: "left" }}>
            <div>
              {node.isFolder && (
                <span
                  onClick={() => setIsCollapse((prev) => ({ ...prev, [node.id]: !prev[node.id] }))}
                  style={{ cursor: "pointer", fontWeight: "bold", marginRight: "5px" }}
                >
                  {isCollapse[node.id] ? "📂" : "📁"}
                </span>
              )}
              <span>{node.name}</span>
              {node.isFolder && <button onClick={() => addNodeList(node.id)}>➕📁</button>}
              {node.children && isCollapse[node.id] && <List items={node.children} addNodeList={addNodeList} />}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>File Explorer</h2>
      <List items={data} addNodeList={addNodeList} />
    </div>
  );
}

export default App;
