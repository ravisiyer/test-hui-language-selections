"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

export function AuthorListUcF({
  authorsLabel,
  allAuthors,
  selectedAuthors,
  name,
}) {
  // function handleSelectAllClick() {
  //   setSelectedAuthors([...allAuthors]);
  // }
  // function handleClearAllClick() {
  //   setSelectedAuthors([]);
  // }
  return (
    <Listbox defaultValue={selectedAuthors} name={name} multiple>
      {/* <Listbox value={selectedAuthors} onChange={setSelectedAuthors} multiple> */}
      {/* <div>
        <button
          onClick={handleSelectAllClick}
          className="border border-black rounded-md p-1"
        >
          Select All
        </button>
        <button
          onClick={handleClearAllClick}
          className="border border-black rounded-md p-1 ml-4"
        >
          Clear All
        </button>
      </div> */}
      {
        <div className="mt-2">
          <p className="mb-2">{authorsLabel}</p>
          {/* <ListboxButton className="mb-2">{authorsLabel}</ListboxButton> */}
          <ListboxOptions static>
            {allAuthors.map((author) => (
              <ListboxOption
                key={author.id}
                value={author}
                className="data-[selected]:bg-blue-400"
              >
                {author.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      }
    </Listbox>
  );
}

export default AuthorListUcF;
