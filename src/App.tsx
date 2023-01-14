import { useState } from "react";
import { Filter } from "./components/Filter/Filter";
import { FoodCard } from "./components/FoodCard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [currentselection, setCurrentSelection] = useState("all");

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col m-auto max-w-[1200px] px-4">
        <SearchBar />
        <Filter current={currentselection} setCurrent={setCurrentSelection} />
        <h1 className="text-center capitalize font-bold text-3xl my-8">
          {currentselection}
        </h1>
        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
        <button className="bg-secondary-color p-3 w-full md:max-w-[350px] mx-auto font-light mt-16 rounded-md">
          Show more
        </button>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
