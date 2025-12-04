import CatInfo from "../CatInfo/CatInfo";

import cats from "../../cats.json";

function App() {
  console.log(cats);

  return (
    <div>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <CatInfo cat={cat} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
