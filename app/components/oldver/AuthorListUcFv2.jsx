"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

export function AuthorListUcF({
  authorsLabel,
  allAuthors,
  selectedAuthors,
  name,
}) {
  const [managedSelectedAuthors, setManagedSelectedAuthors] =
    useState(selectedAuthors);
  const [selectAll, setSelectAll] = useState(false);
  // Could not get Select All and Clear All to work
  // Checked in debugger that component's defaultValue prop does change as expected but
  // that default value change is not reflected in ListBox rendered output nor in
  // formData that is submitted afterwards.
  // I could not get info. on the net on this issue in limited search I did
  // I think I should stop exploring a solution to this, as of now.
  function handleSelectAllClick(e) {
    e.preventDefault();
    setSelectAll(true);
    setManagedSelectedAuthors([...allAuthors]);
  }
  function handleClearAllClick(e) {
    e.preventDefault();
    setManagedSelectedAuthors([]);
  }
  return (
    <Listbox
      defaultValue={selectAll ? allAuthors : selectedAuthors}
      name={name}
      multiple
    >
      {/* <Listbox defaultValue={managedSelectedAuthors} name={name} multiple> */}
      {/* <Listbox value={selectedAuthors} onChange={setSelectedAuthors} multiple> */}
      {
        <div className="mt-2">
          <p className="mb-2">{authorsLabel}</p>
          {/* <ListboxButton className="mb-2">{authorsLabel}</ListboxButton> */}
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
