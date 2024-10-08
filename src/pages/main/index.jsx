import DiscountForm from "@/components/discountForm";
import MainBanner from "@/components/mainBanner";
import MainCategories from "@/components/mainCategories";
import SaleComponent from "@/components/mainSales";

export default function Main() {
  return (
    <>
      <MainBanner />
      <MainCategories />
      <DiscountForm />
      <SaleComponent />
    </>
  );
}
