import { useEffect, useState } from "react";
import List from "./components/List";
import SearchSection from "./components/SearchSection";

function App() {
  const [response, setResponse] = useState<Response | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTop() {
      const res = await fetch(
        "https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts"
      );

      setResponse(res);
    }

    getTop();
  }, []);

  return (
    <main>
      <SearchSection
        setResponse={setResponse}
        setLoading={setLoading}
      ></SearchSection>
      <List
        response={response}
        loading={loading}
        setLoading={setLoading}
      ></List>
    </main>
  );
}

export default App;
