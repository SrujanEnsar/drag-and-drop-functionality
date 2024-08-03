import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Dashboard = () => {
  const [layout, setLayout] = useState([]);
  const [widgets, setWidgets] = useState([]);

  const addWidget = () => {
    const newWidget = {
      i: `widget-${widgets.length}`,
      x: (widgets.length * 2) % 12,
      y: Infinity, // places it at the bottom
      w: 2,
      h: 2
    };
    setLayout([...layout, newWidget]);
    setWidgets([...widgets, newWidget]);
  };

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div>
      <button onClick={addWidget}>+ Add Widget</button>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={onLayoutChange}
      >
        {widgets.map((widget) => (
          <div key={widget.i} data-grid={widget}>
            <span className="text">{widget.i}</span>
            <button onClick={() => removeWidget(widget.i)}>Remove</button>
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

const removeWidget = (id) => {
  setLayout(layout.filter((widget) => widget.i !== id));
  setWidgets(widgets.filter((widget) => widget.i !== id));
};

export default Dashboard;
