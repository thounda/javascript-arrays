const bills = [1200, 29.99, 65.93, 17.32, 44.76];

//Determine how much the total bills are using the reduce method
const totalBills = bills.reduce((total, bill) => {
  return total + bill;
});

console.log(`Explicitly Called`, totalBills);
