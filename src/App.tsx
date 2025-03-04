import { FrequentlyQuestions } from "./components/FrequentlyQuestions";
import { Header } from "./components/Header";
import { Showcase } from "./components/Showcase";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <>
      <div className="text-white p-5 mt-10 flex flex-col gap-10">
        <Header />
        <Technologies />
        <Showcase />
        <FrequentlyQuestions />
      </div>
    </>
  );
}

export default App;
