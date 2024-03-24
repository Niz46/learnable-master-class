
class DescriptiveStatistics {
  // Measures of central tendency
  static mean(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }

  static median(numbers) {
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedNumbers.length / 2);
    return sortedNumbers.length % 2 === 0
      ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
      : sortedNumbers[middle];
  }

  static mode(numbers) {
    const frequencyMap = new Map();

    // Count the frequency of each number
    numbers.forEach((num) => {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    // Find the mode(s)
    let modes = [];
    let maxFrequency = 0;

    frequencyMap.forEach((frequency, num) => {
      if (frequency > maxFrequency) {
        modes = [num];
        maxFrequency = frequency;
      } else if (frequency === maxFrequency) {
        modes.push(num);
      }
    });

    return modes;
  }

  // Measures of dispersion
  static range(numbers) {
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    return sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];
  }

  static variance(numbers) {
    const meanValue = DescriptiveStatistics.mean(numbers);
    const squaredDifferences = numbers.map((num) => (num - meanValue) ** 2);
    return DescriptiveStatistics.mean(squaredDifferences);
  }

  static standardDeviation(numbers) {
    return Math.sqrt(DescriptiveStatistics.variance(numbers));
  }
}

// Example usage
const dataset = [12, 15, 8, 10, 5, 14, 7, 9];
console.log(`The Mean => ${DescriptiveStatistics.mean(dataset)}`);
console.log(`The Median => ${DescriptiveStatistics.median(dataset)}`);
console.log(`The Mode => ${DescriptiveStatistics.mode(dataset)}`);
console.log(`The Range => ${DescriptiveStatistics.range(dataset)}`);
console.log(`The Standard Deviation => ${DescriptiveStatistics.standardDeviation(dataset)}`);
