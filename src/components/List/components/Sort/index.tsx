import Triangle from "../../../../assets/Triangle";
import styles from "../../List.module.less";

interface Props {
  handleSetSort: (newSort: string) => void;
  sort: string;
  ascending: boolean;
}

export default function Sort({ handleSetSort, sort, ascending }: Props) {
  return (
    <li className={`${styles.list__row} ${styles["list__row--sorts"]}`}>
      <div>
        <button
          onClick={() => handleSetSort("Name")}
          className={`${styles.list__sort} ${
            ascending ? styles["list__sort--ascending"] : ""
          }`}
          type="button"
        >
          Dłużnik
          {sort === "Name" ? <Triangle></Triangle> : ""}
        </button>
      </div>
      <div>
        <button
          onClick={() => handleSetSort("NIP")}
          className={`${styles.list__sort} ${
            ascending ? styles["list__sort--ascending"] : ""
          }`}
          type="button"
        >
          NIP
          {sort === "NIP" ? <Triangle></Triangle> : ""}
        </button>
      </div>
      <div>
        <button
          onClick={() => handleSetSort("Value")}
          className={`${styles.list__sort} ${
            ascending ? styles["list__sort--ascending"] : ""
          }`}
          type="button"
        >
          Kwota zadłużenia
          {sort === "Value" ? <Triangle></Triangle> : ""}
        </button>
      </div>
      <div>
        <button
          onClick={() => handleSetSort("Date")}
          className={`${styles.list__sort} ${
            ascending ? styles["list__sort--ascending"] : ""
          }`}
          type="button"
        >
          Data powstania zobowiązania
          {sort === "Date" ? <Triangle></Triangle> : ""}
        </button>
      </div>
    </li>
  );
}
