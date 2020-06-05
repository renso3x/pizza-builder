export const getMaxToppings = (size: string) => {
  switch(size) {
    case "Medium":
      return 7
    case "Large":
      return 9
    default:
      return 5;
  }
}