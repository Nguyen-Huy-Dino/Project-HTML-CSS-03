function findMostFrequentNumber(numbers) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequent = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (frequency[number]) {
            frequency[number]++;
        } else {
            frequency[number] = 1;
        }

        if (frequency[number] > maxCount) {
            maxCount = frequency[number];
            mostFrequent = number;
        }
    }

    return mostFrequent;
}

// Sample usage
console.log(findMostFrequentNumber([1, 2, 3, 4, 2, 2, 3, 2])); 