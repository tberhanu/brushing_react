import Heading from "./Heading";
import MyList from "./MyList";
import PI, { doublePI, triplePI } from "./math.js";

const num = 7;

const img = "https://picsum.photos/200";

function App() {
  return (
    <div>
      <Heading></Heading>
      <p>Your lucky number is: {num}</p>
      <p> PI is: {PI} </p>
      <p> Double is: {doublePI()}</p>
      <p> Triple is: {triplePI()}</p>
      <MyList></MyList>
      <div>
        <img src={img} />
        <img src={img} />
      </div>
    </div>
  );
}

export default App;
