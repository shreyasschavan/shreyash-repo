function customSortDescending(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) 
    {
        for (let j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] < arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5]; // Example input array
customSortDescending(inputArray);
console.log(inputArray); // Sorted array in descending order



// B. Sort an array in descending order: