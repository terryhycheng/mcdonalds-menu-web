import { useEffect, useState } from "react";
import { Filter } from "./components/Filter/Filter";
import { FoodCard } from "./components/FoodCard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { foodData } from "./data/foodData";
import { foodDataType } from "./Types/types";

function App() {
  const [currentselection, setCurrentSelection] = useState("all");
  const [maxDisplay, setMaxDisplay] = useState(6);
  const [dataArray, setDataArray] = useState<foodDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isButton, setIsButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setMaxDisplay(6);
    setDataArray(reorderData());
    buttonChecker(reorderData());
    setInterval(() => setIsLoading(false), 1500);
  }, [currentselection, searchTerm]);

  const reorderData = (): foodDataType[] => {
    // Sorting data
    const ordered_data = foodData.sort((a, b) => (a.name > b.name ? 1 : -1));
    // Filtering data by Categories
    const filtered_data =
      currentselection == "all"
        ? ordered_data
        : ordered_data.filter((data) => data.category == currentselection);
    return filtered_data.filter((data) =>
      data.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  };

  const buttonChecker = (data: foodDataType[]): void => {
    if (data.length > maxDisplay) {
      setIsButton(true);
    } else {
      setIsButton(false);
    }
  };

  const maxDisplayHandler = (): void => {
    setMaxDisplay(maxDisplay + 6);
    buttonChecker(reorderData());
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col m-auto max-w-[1200px] px-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter current={currentselection} setCurrent={setCurrentSelection} />
        {isLoading && (
          <div className="flex flex-col gap-4 items-center justify-center my-8 min-h-[30vh]">
            <div className="custom-loader"></div>
            <div className="animate-pulse text-center capitalize text-md">
              Loading...
            </div>
          </div>
        )}
        {!isLoading && (
          <>
            <h1 className="text-center capitalize font-bold text-3xl my-8">
              {currentselection}
            </h1>
            {/* Cards */}
            {dataArray.length == 0 && (
              <div className="flex flex-col gap-4 items-center justify-center my-8 min-h-[30vh]">
                <div className="text-center text-md">
                  No food is matched with the search keyword. Please try again.
                </div>
              </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataArray.length != 0 &&
                dataArray
                  .slice(0, maxDisplay)
                  .map((data) => <FoodCard key={data.id} {...data} />)}
            </div>
            {isButton && (
              <button
                onClick={maxDisplayHandler}
                className="bg-secondary-color p-3 w-full md:max-w-[350px] mx-auto font-light mt-16 rounded-md"
              >
                Show more
              </button>
            )}
          </>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
