import { Footer } from "../components/home/ui/Footer";
import { FrequentlyQuestions } from "../components/home/FAQ";
import { Header } from "../components/home/ui/Header";
import { Technologies } from "../components/home/Technologies";
import { Showcase } from "../components/home/Showcase";
import { SocialLinks } from "../components/home/SocialLinks";

export function Home() {
  return (
    <div className="text-white p-5 mt-10 flex flex-col gap-10">
      <Header />
      <Technologies />
      <Showcase />
      <FrequentlyQuestions />
      <Footer />
      <SocialLinks />
    </div>
  );
}