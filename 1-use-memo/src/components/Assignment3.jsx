import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);
  const [count, setCount] = useState(0);
  // Your code starts here
  const totalValue = useMemo(() => {
    console.log("inside");
    return items.reduce((acc, cur) => {
      acc += cur.value;
      return acc;
    }, 0);
  }, [items]);
  // Your code ends here
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button
        onClick={() => setItems([...items, { name: "Banana", value: 90 }])}
      >
        add item
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};

export default Assignment3;
