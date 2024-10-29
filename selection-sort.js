
//time complexity: O(n^2) since we will have to iterate n times (outer loop) and shift
// sorted array n times in worst case (input array is in reverse order )
// space: O(n) since we are creating a new array and also making copy of original array
function selectionSort(arr) {

  // Copy the original array
  const copyArr = [...arr];

  // Create an array to store the sorted values
  const sorted = [];

  // While the array is not empty...
  while (copyArr.length) {

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = 0;

    // Save and remove the value at the min index
    for (let i = 1; i < copyArr.length; i++) {
      if (copyArr[i] < copyArr[minIndex]) {
        minIndex = i;
      }
    }

    const smallest = copyArr[minIndex];

    // shift values at last index to the index that was occupied by smallest item to delete at O(1) time
    // then pop the array
    copyArr[minIndex] = copyArr[copyArr.length - 1];
    copyArr.pop()

    // Add the min value to the end of the sorted array
    sorted.push(smallest);
  }
  return sorted;
}


// time complexity: O(n^2) because we iterate n times and if input arr is in reverse order (worst case), then we have to shift the sorted
// half n times
// space complexity: O(1)
function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divider;

    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // Save the min value
    const smallest = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex; i > divider; i--) {
      arr[i] = arr[i - 1];
    }

    // Put the min value at the divider
    arr[divider] = smallest;

    // Increment the divider and repeat
    divider += 1;
  }

}


module.exports = [selectionSort, selectionSortInPlace];
