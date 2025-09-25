export function formatPrice(price:number):string {
  return price.toLocaleString(
    "pt-br", 
    {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2
    }
  ).split(/\s+/).join("");
}