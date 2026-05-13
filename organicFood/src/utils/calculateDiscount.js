export const calculateDiscount = (originalPrice, discountPercent) => {
  const discountAmount = (originalPrice * discountPercent) / 100;
  return originalPrice - discountAmount;
};

export const getDiscountedPrice = (price, discount) => {
  return calculateDiscount(price, discount);
};

export default calculateDiscount;
