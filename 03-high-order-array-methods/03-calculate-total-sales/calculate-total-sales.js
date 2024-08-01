function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce((sum, product) => {
    return product.price * product.quantity + sum;
  }, 0);
  const taxAmount = (totalSales * taxRate) / 100;

  return totalSales + taxAmount;
}
module.exports = calculateTotalSalesWithTax;
