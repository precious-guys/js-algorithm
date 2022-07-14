const solution = (strings, n) =>
  strings.sort((a, b) =>
    a[n] === b[n] ? (a > b) - (a < b) : (a[n] > b[n]) - (a[n] < b[n])
  );
