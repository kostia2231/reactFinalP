export const filterProducts = (products, filters) => {
  const { showDiscountedOnly, priceFrom, priceTo } = filters;

  return products.filter((product) => {
    const price = product.discont_price
      ? parseFloat(product.discont_price)
      : parseFloat(product.price);

    if (showDiscountedOnly && !product.discont_price) return false;
    if (priceFrom && price < parseFloat(priceFrom)) return false;
    if (priceTo && price > parseFloat(priceTo)) return false;
    return true;
  });
};
