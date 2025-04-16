import { useState } from 'react';
import './App.css';

const data = [
  {
    name: 'fruits',
    id: 1,
    children: [
      {
        name: 'citrus',
        id: 2,
        children: [
          { name: 'lemon', id: 3 },
          { name: 'orange', id: 4 },
        ],
      },
      {
        name: 'berrys',
        id: 5,
        children: [
          { name: 'blueberry', id: 6 },
          { name: 'black berry', id: 7 },
        ],
      },
    ],
  },
  {
    name: 'veggies',
    id: 8,
    children: [
      { name: 'carrot', id: 9 },
      { name: 'beans', id: 10 },
    ],
  },
  { name: 'groceries', id: 11 },
  { name: 'others', id: 12 },
];

// 🔁 Build a simple parent map ONCE
const buildParentMap = (nodes, parent = null, map = {}) => {
  nodes.forEach((node) => {
    if (parent) {
      map[node.id] = parent;
    }
    if (node.children) {
      buildParentMap(node.children, node, map);
    }
  });
  return map;
};

const parentMap = buildParentMap(data);

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (node, e) => {
    const isChecked = e.target.checked;

    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      // ✅ 1. Update children
      const updateChildren = (n) => {
        n.children?.forEach((child) => {
          newState[child.id] = isChecked;
          updateChildren(child);
        });
      };
      updateChildren(node);

      // ✅ 2. Update parents
      const updateParents = (n) => {
        const parent = parentMap[n.id];
        if (!parent) return;

        const allSiblingsChecked = parent.children.every(
          (child) => newState[child.id]
        );

        newState[parent.id] = allSiblingsChecked;
        updateParents(parent);
      };
      updateParents(node);

      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => (
        <div key={node.id} style={{ paddingLeft: '20px' }}>
          <div>
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(node, e)}
            />{' '}
            {node.name}
          </div>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <h2>Tree Checkboxes (Parent Auto Check)</h2>
      <Checkboxes data={data} checked={checked} setChecked={setChecked} />
    </div>
  );
}

export default App;
