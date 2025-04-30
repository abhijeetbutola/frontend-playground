import { useState } from "react";

const grid = [
  [0, 1, 1],
  [0, 0, 1],
  [1, 0, 1],
];

function GridLightsPage() {
  const [stack, setStack] = useState<Map<string, boolean>>(new Map());

  const lightsOff = () => {
    const interval = setInterval(() => {
      setStack((prevStack) => {
        const tempStack = structuredClone(prevStack);
        const lastKey = Array.from(prevStack.keys()).pop();
        if (lastKey !== undefined) {
          tempStack.delete(lastKey);
        }
        if (!tempStack.size) clearInterval(interval);
        return tempStack;
      });
    }, 800);
  };

  const handleGridClick = (rowIndex: number, colIndex: number) => {
    const newStack = structuredClone(stack);

    const key = `${rowIndex}-${colIndex}`;

    if (newStack.has(key) || !grid[rowIndex][colIndex]) return;
    else newStack.set(key, true);

    setStack(newStack);

    const lightsCount = grid.flat().reduce((acc, curr) => (acc += curr), 0);

    if (lightsCount === stack.size + 1) {
      lightsOff();
    }
  };

  return (
    <div>
      <p>Grid Lights Page</p>
      <div>
        <div>
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center justify-center">
              {row.map((value, colIndex) => {
                const color = stack.has(`${rowIndex}-${colIndex}`)
                  ? "bg-indigo-600"
                  : value === 0
                    ? "bg-red-500/70"
                    : "";

                return (
                  <span
                    key={colIndex}
                    className={`border border-black bg-gray-500 p-12 ${color}`}
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
