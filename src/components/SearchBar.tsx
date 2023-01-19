import { ChangeEvent, FC, FormEvent, useState } from "react";

type PropsType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar: FC<PropsType> = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
