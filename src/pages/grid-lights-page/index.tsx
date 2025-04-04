import { useState } from "react";

const grid = [
  [0, 1, 1],
  [0, 0, 1],
  [1, 0, 1],
];

function GridLightsPage() {
  const [stack, setStack] = useState<Record<string, boolean>>({});

  const handleGridClick = (rowIndex: number, colIndex: number) => {
    const newStack = structuredClone(stack);

    const key = `${rowIndex}-${colIndex}`;

    if (newStack[key] || !grid[rowIndex][colIndex]) return;
    else newStack[key] = true;

    setStack(newStack);
  };

  return (
    <div>
      <p>Grid Lights Page</p>
      <div>
        <div>
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center items-center">
              {row.map((value, colIndex) => {
                const color = stack[`${rowIndex}-${colIndex}`]
                  ? "bg-indigo-600"
                  : value === 0
                  ? "bg-red-500/70"
                  : "";

                return (
                  <span
                    key={colIndex}
                    className={`border border-black p-12 bg-gray-500 ${color}`}
                    onClick={() => handleGridClick(rowIndex, colIndex)}
                  ></span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridLightsPage;
