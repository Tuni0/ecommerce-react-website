import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
async function BlackFridayBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="bg-blue-500 text-white p-4">
      <p>
        Get 20% off your first order with code: <strong>WELCOME20</strong>
      </p>
      <p>
        {sale.title}
        {sale.discount}% off with code: <strong>{sale.couponCode}</strong>
      </p>
    </div>
  );
}
export default BlackFridayBanner;
