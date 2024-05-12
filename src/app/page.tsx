import BoughtBefore from "@/components/BoughtBefore/BoughtBefore";
import Header from "@/components/Header/Header";
import News from "@/components/News/News";
import Promo from "@/components/Promo/Promo";
import Sales from "@/components/Sales/Sales";

export default function Home() {
  return (
    <>
      <Header />
      <Promo />
      <Sales />
      <News />
      <BoughtBefore />
    </>
  );
}
