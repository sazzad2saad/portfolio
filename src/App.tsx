import { useEffect, useState } from "react";
import Portfolio from "./Portfolio";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return <Portfolio dark={dark} setDark={setDark} />;
}

export default App;
