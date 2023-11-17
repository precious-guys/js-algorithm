const arr = [3, 1, 8, 6, 4, 2];

function QuickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lSorted = QuickSort(left);
  const rSorted = QuickSort(right);
  return [...lSorted, pivot, ...rSorted];
}

console.log(QuickSort(arr));
