const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
      return 1; // First quarter
    } else if (month >= 4 && month <= 6) {
      return 2; // Second quarter
    } else if (month >= 7 && month <= 9) {
      return 3; // Third quarter
    } else if (month >= 10 && month <= 12) {
      return 4; // Fourth quarter
    }
  };
  
  // Example usage:
  console.log(quarterOf(2));  // Output: 1
  console.log(quarterOf(6));  // Output: 2
  console.log(quarterOf(11)); // Output: 4