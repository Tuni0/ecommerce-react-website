export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  WELCOME20: "WELCOME20",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
