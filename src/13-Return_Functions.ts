(()=>{
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item)=> {
      total += item;
    });
    return total.toString();

  }

  console.log(calcTotal([12,24,36,87]));

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([1,2,1,1,1]);
})();
