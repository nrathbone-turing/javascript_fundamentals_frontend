In this lesson, we will explore how to solve algorithmic problems systematically using an Algorithmic Problem Solving Framework. Together, we will apply this framework to a specific problem: the findSum function. This function will help us find the first pair of numbers in an array that adds up to a given target sum.

You will practice defining the problem, analyzing it, developing a solution with pseudocode, and translating it into executable JavaScript code. This process builds essential problem-solving skills applicable in coding interviews, real-world projects, and debugging tasks.

# The Scenario 

A web development team needs to help a party planning business develop an algorithm to help  display prices for decoration packages. Your task is to find the first pair of decoration packages from the available options that add up precisely to the client's budget of $1500. 
- Client's Budget `(num)`: $1500
- Available Decoration Packages `(arr)`: [$300, $700, $200, $500, $800, $100]

## Task 1: Define the Problem

Our goal is to create a function `findSum` that takes two inputs:
- `num` (a target sum).
`arr` (an array of integers).
- Returns the first pair of numbers in the array that adds up to `num`.
    - If no pair exists, it returns an empty array `[]`.

```
findSum(3, [0, 3]);  // Output: [0, 3]
findSum(3, [3, 0]);  // Output: [3, 0]
findSum(5, [0, 1, 2, 3]); // Output: [2, 3]
findSum(7, [1, 2, 3]);    // Output: []
```

**Assumptions:**
- Inputs will be valid (no type checking needed).
- No negative numbers will be present.


## Task 2: Design and Develop the Code

### Step 1: Problem Analysis 

We need to identify pairs of numbers that sum to the target. To do this:

1. Start with the first number as an **anchor point**.
2. Test all subsequent numbers in the array to see if any pair sums to the target.
3. If no match is found, move the anchor point to the next number and repeat the process.

For example: For `num = 5` and `arr = [0, 1, 2, 3]`:

- Start with 0 and check:
    - 0 + 1 = 1 (false)
    - 0 + 2 = 2 (false)
    - 0 + 3 = 3 (false)
- Move to 1 and check:
    - 1 + 2 = 3 (false)
    - 1 + 3 = 4 (false)
- Move to 2 and check:
    - 2 + 3 = 5 (true!)

**We find the pair [2, 3]. We have a simple HTML file to provide the structure for this task.**

```
findSum(3, [0, 3]);  // Output: [0, 3]
findSum(3, [3, 0]);  // Output: [3, 0]
findSum(5, [0, 1, 2, 3]); // Output: [2, 3]
findSum(7, [1, 2, 3]);    // Output: []
```
### Step 2: Algorithm Development (Pseudocode)

We can use nested for loops:
- The outer loop sets the anchor point.
- The inner loop tests all numbers following the anchor point.

Here’s the pseudocode:

```
If no pair is found, return an empty array []
For each number in the array (anchor point):
    For each number following the anchor point:
        If the two numbers sum to the target:
            Return the pair of numbers
If no pair is found, return an empty array []
```

### Step 3: Coding and Documentation

Let’s translate the pseudocode into JavaScript.

```
function findSum(num, arr) {
  // Outer loop: sets the anchor point
  for (let i = 0; i < arr.length; i++) {
    // Inner loop: tests all numbers following the anchor point
    for (let j = i + 1; j < arr.length; j++) {
      // If the two numbers sum to the target, return the pair
      if (arr[i] + arr[j] === num) {
        return [arr[i], arr[j]];
      }
    }
  }
  // If no pair is found, return an empty array
  return [];
}
```

## Task 3: Test and Refine

Let’s test the function with multiple cases:

```
console.log(findSum(3, [0, 3]));          // [0, 3]
console.log(findSum(5, [0, 1, 2, 3]));    // [2, 3]
console.log(findSum(7, [1, 2, 3]));       // []
console.log(findSum(10, [5, 5, 3, 7]));   // [5, 5]
console.log(findSum(17, [3, 2, 9, 8]));   // [9, 8]
```

**Analyzing Iterations:** For clarity, let’s break down a test case, `findSum(17, [3, 2, 9, 8])`; The following are the iterations:
- i = 0, j = 1 → 3 + 2 = 5 (false)
- i = 0, j = 2 → 3 + 9 = 12 (false)
- i = 0, j = 3 → 3 + 8 = 11 (false)
- i = 1, j = 2 → 2 + 9 = 11 (false)
- i = 1, j = 3 → 2 + 8 = 10 (false)
- i = 2, j = 3 → 9 + 8 = 17 (true!)
- Output: `[9, 8]`

## Task 4: Document and Maintain

As a new developer engaging in algorithmic problem solving and applying Big O notation, effective documentation and maintenance practices are crucial for creating efficient, understandable, and scalable code. Here are essential tips to guide you:

- **Explain Your Logic:** Clearly comment on the purpose of functions, the reasoning behind algorithm choices, and the steps involved in your solution.
- **Annotate Big O:** Include Big O analysis within your comments to indicate the time and space complexity of your algorithms. This helps in understanding performance implications.
- **Use Diagrams and Flowcharts:** Visual aids can help illustrate how your algorithms work, making it easier to grasp complex concepts and workflows.
- **Refactor for Efficiency:** Continuously assess your code for potential optimizations. For instance, if an O(n²) solution can be reduced to O(n) using a different approach, prioritize making that change.