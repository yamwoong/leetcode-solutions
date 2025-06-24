var twoSum = function (nums, target) {
  let sum = 0;
  let n1 = 0;
  let n2 = 0;
  for (let i = 0; nums.length > i; i++) {
    n1 = nums[i];
    if (target < 0) {
      n1 = target - n1;
    } else {
      n1 = target - n1;
    }
    if (
      nums.findIndex((num) => num === n1) !== -1 &&
      nums.findIndex((num) => num === n1) !== i
    ) {
      n2 = nums.findIndex((num) => num === n1);
      nums = [];
      if (i > n2) {
        nums[0] = n2;
        nums[1] = i;
        return nums;
      } else {
        nums[0] = i;
        nums[1] = n2;
        return nums;
      }
    }
  }
};

/** ====================================================================================== */

// 1. Create a map
const map = new Map();

// 2. map.set(key, value) Add or modify key-value pairs
map.set("a", 1); // { 'a': 1 }

// 3. map.get(key) Get the value associated with the given key
map.get("a"); // 1

// 4. map.has(key) Check if a key exists
map.has("a"); // true

// 5. map.delete(key) Delet a key-value pair
map.delete("a"); // true

// 6. map.size() Get the number of Key-value pairs in the map
map.size(); // 0

// 7. map.clear() clear all key-value pairs
map.clear(); // {}

var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i];
    const n2 = target - n1;

    if (map.has(n2)) {
      return [map.get(n2), i];
    }

    map.set(n1, i);
  }
};
