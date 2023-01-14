import { ChangeEvent, FormEvent, useState } from "react";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Search term: ${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className="py-10">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleChange}
          className="border w-full p-4 rounded-md"
        />
      </form>
    </div>
  );
};
