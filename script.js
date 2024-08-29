function divide(arr, n) {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;
    
    for (let num of arr) {
        // If adding the current number exceeds the maximum sum n,
        // push the current subarray to the result and start a new subarray
        if (currentSum + num > n) {
            result.push(currentSubarray);
            currentSubarray = [];
            currentSum = 0;
        }
        
        // Add the current number to the current subarray
        currentSubarray.push(num);
        currentSum += num;
    }
    
    // Push the last subarray if it's not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }
    
    return result;
}

// Test cases
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4)); // Output: [[4], [3], [2, 1]]
