const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
    const numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }

        numIndices.set(nums[i], i);
    }

    // This point should never be reached, assuming there's always one solution
    return [];
}

// Test the function
console.log(twoSum(nums, target));  // Output: [0, 1]
