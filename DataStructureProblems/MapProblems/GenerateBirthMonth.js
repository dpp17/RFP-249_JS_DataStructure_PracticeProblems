/*
Ques::
Write a Program to generate a birth month of 50 individuals between the year 92 & 93.
 Find all the individuals having birthdays in the same month. Store it to finally print.
*/
const birthMonths = Array.from({length: 50}, () => {
    const month = Math.floor(Math.random() * 12) + 1; // Generate a random month between 1 and 12
    const year = Math.floor(Math.random() * 2) + 92; // Generate a random year between 92 and 93
    return `${month}-${year}`; // Combine the month and year into a string
  });
  
  // Use the map function to group people by birth month
  const groups = birthMonths.reduce((acc, val) => {
    const month = val.split('-')[0]; // Extract the month from the string
    if (!acc[month]) {
      acc[month] = 0; // Initialize the count for this month
    }
    acc[month]++; // Increment the count for this month
    return acc;
  }, {});
  
  // Print the count of people in each month
  for (const [month, count] of Object.entries(groups)) {
    console.log(`Month ${month}: ${count} people`);
  }
  
  
  
  