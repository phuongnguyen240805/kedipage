import BusinessSupportSlider from "./componet/BusinessSupport";
import Customization from "./componet/Customization";
import HeroSlider from "./componet/hero-slider";
import HeroIntroduction from "./componet/HeroIntroduction";
import Training from "./componet/Training";

export default function ChuyenDoiSoPage() {
  return (
    <>
      <HeroSlider />
      <HeroIntroduction />
      <Training />
      <BusinessSupportSlider />
      <Customization />
    </>
  );
}
