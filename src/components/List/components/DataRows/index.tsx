import { Data } from "../..";
import styles from "../../List.module.less";

interface Props {
  sort: string;
  sortAscending: boolean;
  list: Array<Data>;
}

export default function DataRows({ sort, sortAscending, list }: Props) {
  // Copy value of list state
  const sortedList = list.map((item) => {
    return { ...item };
  });

  switch (sort) {
    case "Name":
      if (sortAscending === false) {
        sortedList.sort((a, b) => b.Name.localeCompare(a.Name));
      } else {
        sortedList.sort((a, b) => a.Name.localeCompare(b.Name));
      }
      break;
    case "NIP":
      if (sortAscending === false) {
        sortedList.sort((a, b) => parseInt(b.NIP) - parseInt(a.NIP));
      } else {
        sortedList.sort((a, b) => parseInt(a.NIP) - parseInt(b.NIP));
      }
      break;
    case "Value":
      if (sortAscending === false) {
        sortedList.sort((a, b) => b.Value - a.Value);
      } else {
        sortedList.sort((a, b) => a.Value - b.Value);
      }
      break;
    case "Date":
      if (sortAscending === false) {
        sortedList.sort(
          (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
        );
      } else {
        sortedList.sort(
          (a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()
        );
      }
  }

  return sortedList.map((item) => {
    const itemDate = new Date(item.Date);
    const day = itemDate.getDate().toString().padStart(2, "0");
    const month = (itemDate.getMonth() + 1).toString().padStart(2, "0");
    const year = itemDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    return (
      <li className={styles.list__row} key={item.Id}>
        <div>{item.Name}</div>
        <div>{item.NIP}</div>
        <div>{item.Value}</div>
        <div>{formattedDate}</div>
      </li>
    );
  });
}
