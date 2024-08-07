"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageSelectionsUcF from "../components/LanguageSelectionsUcF";

const allLanguageAuthors = [
  {
    languageId: 1,
    languageName: "English",
    allTranslators: [
      { id: 1, name: "Tr. Durward Reynolds" },
      { id: 2, name: "Tr. Kenton Towne" },
      { id: 3, name: "Tr. Therese Wunsch" },
      { id: 4, name: "Tr. Benedict Kessler" },
      { id: 5, name: "Tr. Katelyn Rohan" },
    ],
    allCommentators: [
      { id: 11, name: "Comm. Durward Reynolds" },
      { id: 12, name: "Comm. Kenton Towne" },
      { id: 13, name: "Comm. Therese Wunsch" },
      { id: 14, name: "Comm. Benedict Kessler" },
    ],
  },
  {
    languageId: 2,
    languageName: "Hindi",
    allTranslators: [
      { id: 21, name: "H Tr. Durward Reynolds" },
      { id: 22, name: "H Tr. Kenton Towne" },
      { id: 23, name: "H Tr. Therese Wunsch" },
    ],
    allCommentators: [
      { id: 31, name: "H Comm. Durward Reynolds" },
      { id: 32, name: "H Comm. Kenton Towne" },
      { id: 33, name: "H Comm. Therese Wunsch" },
      { id: 34, name: "H Comm. Benedict Kessler" },
      { id: 35, name: "H Comm. Katelyn Rohan" },
    ],
  },
];
function Page() {
  const [showData, setShowData] = useState("");
  const languageCheckboxLSC_Name = "check";
  const translatorsListBoxLSC_Name = "Transl";
  const commentatorsListBoxLSC_Name = "Commnt";
  const languageSelected = false;

  function handleSubmit(e) {
    e.preventDefault();
    let msg = "";
    const form = e.target;
    const formData = new FormData(form);
    let countTranslatorKeys = 0;
    let countCommentatorKeys = 0;
    for (let key of formData.keys()) {
      key.startsWith(
        `${allLanguageAuthors[0].languageId}${translatorsListBoxLSC_Name}[`
      )
        ? countTranslatorKeys++
        : key.startsWith(
            `${allLanguageAuthors[0].languageId}${commentatorsListBoxLSC_Name}[`
          )
        ? countCommentatorKeys++
        : null;
    }
    let numTranslators = countTranslatorKeys
      ? Math.floor(countTranslatorKeys / 2)
      : 0;
    let numCommentators = countCommentatorKeys
      ? Math.floor(countCommentatorKeys / 2)
      : 0;

    msg +=
      "Language checkbox is " +
      (formData.has(
        `${allLanguageAuthors[0].languageId}${languageCheckboxLSC_Name}`
      )
        ? "checked. "
        : "unchecked. ");

    msg += `${numTranslators} translator(s) selected: `;
    for (let i = 0; i < numTranslators; i++) {
      let key = `${allLanguageAuthors[0].languageId}${translatorsListBoxLSC_Name}[${i}][name]`;
      msg += formData.get(key) + ", ";
    }
    msg += `${numCommentators} commentator(s) selected: `;
    for (let i = 0; i < numCommentators; i++) {
      let key = `${allLanguageAuthors[0].languageId}${commentatorsListBoxLSC_Name}[${i}][name]`;
      msg += formData.get(key) + ", ";
    }
    setShowData(msg);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">TestLangSelUcF1 LanguageSelectionsUcF Component</h2>
      <p>
        One LanguageSelectionsUcF component; UcF = Uncontrolled (no state
        variables passed to LanguageSelectionsUcF) and used in Form
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <LanguageSelectionsUcF
            languageId={allLanguageAuthors[0].languageId}
            languageName={allLanguageAuthors[0].languageName}
            languageSelected={languageSelected}
            languageCheckBoxName={`${allLanguageAuthors[0].languageId}${languageCheckboxLSC_Name}`}
            allTranslators={allLanguageAuthors[0].allTranslators}
            selectedTranslators={allLanguageAuthors[0].allTranslators}
            translatorsListBoxName={`${allLanguageAuthors[0].languageId}${translatorsListBoxLSC_Name}`}
            allCommentators={allLanguageAuthors[0].allCommentators}
            selectedCommentators={allLanguageAuthors[0].allCommentators}
            commentatorsListBoxName={`${allLanguageAuthors[0].languageId}${commentatorsListBoxLSC_Name}`}
          />
        </div>
        <button className="border border-black rounded-md px-2 my-2">
          List Selections
        </button>
      </form>
      <div className="text-left ml-2 w-full">
        <p className="mt-4">
          Page component showing data from LanguageSelectionsUcF component and
          its two AuthorListUcF children components above:
        </p>
        <p>{showData}</p>
      </div>
      <Link href="/" className="ml-4 underline">
        Home
      </Link>
    </div>
  );
}
export default Page;
