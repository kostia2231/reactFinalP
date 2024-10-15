export const sortProducts = (products, sortOrder) => {
  return products.sort((a, b) => {
    const priceA = a.discont_price
      ? parseFloat(a.discont_price)
      : parseFloat(a.price);
    const priceB = b.discont_price
      ? parseFloat(b.discont_price)
      : parseFloat(b.price);

    switch (sortOrder) {
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "price:low-high":
        return priceA - priceB;
      case "price:high-low":
        return priceB - priceA;
      case "default":
      default:
        return 0;
    }
  });
};
