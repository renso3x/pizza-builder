export const computeTotal = (selectedCrust:number, selectedSize:number, toppings: string[]) => {
  let total = 0;
  total = selectedCrust + selectedSize;

  toppings.map((topping, k:number) => {
    if (k > 2) {
      return total += 0.50
    }
    return topping;
  })

  return total.toFixed(2);
}