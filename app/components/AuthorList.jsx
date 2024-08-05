"use client";
// import Link from "next/link";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
// import { useState } from "react";

export function AuthorList({
  authorsLabel,
  allAuthors,
  selectedAuthors,
  setSelectedAuthors,
}) {
  function handleSelectAllClick() {
    setSelectedAuthors([...allAuthors]);
  }
  function handleClearAllClick() {
    setSelectedAuthors([]);
  }
  return (
    <Listbox value={selectedAuthors} onChange={setSelectedAuthors} multiple>
      <ListboxButton className="mb-2">{authorsLabel}</ListboxButton>
      <div>
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
      </div>
      {
        <div className="mt-2">
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

export default AuthorList;
