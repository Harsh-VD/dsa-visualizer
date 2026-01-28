const container = document.getElementById("array-container");
let array = [];

// 1. Generate random array
function generateNewArray(size = 30) {
    container.innerHTML = "";
    array = [];
    for (let i = 0; i < size; i++) {
        const value = Math.floor(Math.random() * 250) + 5;
        array.push(value);
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;
        container.appendChild(bar);
    }
}

// 2. Helper function to create delay (Asynchronous logic)
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 3. Bubble Sort Logic
async function bubbleSort() {
    const bars = document.getElementsByClassName("bar");
    document.getElementById("sortBtn").disabled = true;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = "#e74c3c"; // Highlight comparing
            bars[j + 1].style.backgroundColor = "#e74c3c";

            if (array[j] > array[j + 1]) {
                await sleep(50); // Pause for animation
                // Swap in logic
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                // Swap in UI
                bars[j].style.height = `${array[j]}px`;
                bars[j + 1].style.height = `${array[j + 1]}px`;
            }

            bars[j].style.backgroundColor = "#3498db"; // Reset color
            bars[j + 1].style.backgroundColor = "#3498db";
        }
        bars[array.length - i - 1].style.backgroundColor = "#2ecc71"; // Mark as sorted
    }
    document.getElementById("sortBtn").disabled = false;
}

generateNewArray();