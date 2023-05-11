exports.maximumWealth = function (accounts) {
  console.log(accounts)
  array = []
  for (let index = 0; index < accounts.length; index++) {
    const a = accounts[index];
    array[index] = 0
    a.forEach(v => {
      array[index] += v
    });
  }
  return Math.max(...array)
};