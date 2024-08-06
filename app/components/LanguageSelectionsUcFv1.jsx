"use client";
import { Checkbox, Field, Label } from "@headlessui/react";
// import { useState } from "react";
// import AuthorList from "./AuthorList";
import AuthorListUcF from "./AuthorListUcF";

function LanguageSelectionsUcF({
  languageId,
  languageName,
  languageSelected,
  setLanguageSelected,
  allTranslators,
  selectedTranslators,
  // setSelectedTranslators,
  allCommentators,
  selectedCommentators,
  // setSelectedCommentators,
}) {
  return (
    <div>
      <Field className="flex items-center gap-2">
        <Checkbox
          checked={languageSelected}
          onChange={setLanguageSelected}
          className="group block size-4 rounded border border-black data-[checked]:bg-blue-500"
          // className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
        >
          {/* Checkmark icon */}
          <svg
            className="stroke-black opacity-0 group-data-[checked]:opacity-100"
            //   className="stroke-white opacity-0 group-data-[checked]:opacity-100"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Checkbox>
        <Label>{`${languageName} Language`}</Label>
      </Field>
      <div className="flex flex-col sm:flex-row sm:gap-4">
        <div>
          <AuthorListUcF
            authorsLabel={"Translators"}
            allAuthors={allTranslators}
            selectedAuthors={selectedTranslators}
            // setSelectedAuthors={setSelectedTranslators}
            name={`${languageId}T`}
          />
          <hr className="border border-black w-60 my-2 sm:hidden" />
        </div>
        <div>
          <AuthorListUcF
            authorsLabel={"Commentators"}
            allAuthors={allCommentators}
            selectedAuthors={selectedCommentators}
            // setSelectedAuthors={setSelectedCommentators}
            name={`${languageId}C`}
          />
        </div>
      </div>
    </div>
  );
}
export default LanguageSelectionsUcF;
