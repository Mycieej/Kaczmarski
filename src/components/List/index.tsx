import { useEffect, useState } from "react";
import styles from "./List.module.less";
import LoadingIcon from "../../assets/LoadingIcon";
import CrossIcon from "../../assets/CrossIcon";
import Sort from "./components/Sort";
import DataRows from "./components/DataRows";

export interface Data {
  Id: number;
  Number: string;
  Name: string;
  Value: number;
  NIP: string;
  Date: string;
  DocumentType: string;
  Price: number;
  Address: string;
}

interface Props {
  response: Response | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function List({ response, loading, setLoading }: Props) {
  const [list, setList] = useState<Array<Data> | null>(null);
  const [sort, setSort] = useState("Name");
  const [error, setError] = useState<number | null>(null);
  const [sortAscending, setSortAscending] = useState(false);

  useEffect(() => {
    if (response === null) {
      return;
    }

    async function getList() {
      if (response === null || response.status !== 200) {
        return;
      }

      const data: Array<Data> = await response.json();
      setList(data);
      setLoading(false);
      setError(null);
    }

    getList();

    if (response.ok === false) {
      setLoading(false);
      setError(response.status);
    }
  }, [response, setLoading]);

  function handleSetSort(newSort: string) {
    if (newSort !== sort) {
      setSort(newSort);
      setSortAscending(false);
      return;
    }

    setSortAscending(!sortAscending);
  }

  if (list !== null && loading === false && error === null) {
    return (
      <ul className={styles.list}>
        <Sort
          handleSetSort={handleSetSort}
          sort={sort}
          ascending={sortAscending}
        ></Sort>
        <DataRows
          sort={sort}
          sortAscending={sortAscending}
          list={list}
        ></DataRows>
      </ul>
    );
  }

  if (loading === true) {
    return (
      <div className={`${styles.list} ${styles["list--loading"]}`}>
        <LoadingIcon></LoadingIcon>
        Ładowanie wyników...
      </div>
    );
  }

  if (error === 405) {
    return (
      <div className={`${styles.list} ${styles["list--loading"]}`}>
        <CrossIcon></CrossIcon>
        Błąd: minimum 3 znaki w wyszukiwanej frazie
      </div>
    );
  }

  if (error !== null && error !== 405) {
    return (
      <div className={`${styles.list} ${styles["list--loading"]}`}>
        <CrossIcon></CrossIcon>
        Błąd: {error}
      </div>
    );
  }
}
