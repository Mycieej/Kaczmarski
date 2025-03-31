import { useState } from "react";
import styles from "./SearchSection.module.less";

interface Props {
  setResponse: React.Dispatch<React.SetStateAction<Response | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchSection({ setResponse, setLoading }: Props) {
  const [inputValue, setInputValue] = useState("");

  async function handleSubmit() {
    const res = await fetch(
      "https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetFilteredDebts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phrase: inputValue,
        }),
      }
    );

    setResponse(res);
  }

  return (
    <div className={styles.searchSection}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          handleSubmit();
        }}
        className={styles.searchSection__form}
      >
        <label htmlFor="debtor">Podaj NIP lub nazwę dłużnika</label>
        <div className={styles.searchSection__wrapper}>
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            id="debtor"
            name="debtor"
            type="text"
          ></input>
          <button type="submit">Szukaj</button>
        </div>
      </form>
    </div>
  );
}
