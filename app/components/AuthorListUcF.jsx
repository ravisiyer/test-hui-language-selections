"use client";
import { Listbox, ListboxOption, ListboxOptions } from "@headlessui/react";

export function AuthorListUcF({
  authorsLabel,
  allAuthors,
  selectedAuthors,
  name,
}) {
  return (
    <Listbox defaultValue={selectedAuthors} name={name} multiple>
      {
        <div className="mt-2">
          <p className="mb-2">{authorsLabel}</p>
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
