import "./App.css";
import "./globalStyles.css";
import { Header } from "./components/ComponentHeader";
import { Main } from "./components/ComponentMain";
import { Form } from "./components/ComponentForm";
import { ListCD } from "./components/ComponentList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    type: "",
  });
  const [listData, setlistData] = useState([]);

  function newList(formData) {
    const newL = { ...formData, id: uuidv4(), value: Number(formData.value) };
    setlistData([...listData, newL]);
  }

  const totalValue = listData.reduce((accumulator, currentValue) => {
    return currentValue.type === "Entrada" ? accumulator + currentValue.value : accumulator - currentValue.value;
  }, 0);
  console.log(totalValue);

  function removeOne(oneId) {
    const newOneList = listData.filter((data) => data.id !== oneId);

    setlistData(newOneList);
  }

  return (
    <div className="App">
      <Header />
      <Main>
        <Form formData={formData} setFormData={setFormData} newList={newList} listData={listData} />
        <div className="containerTotal">
          <span>
            <h3>Valor total:</h3>
            <h5>R$ {totalValue},00</h5>
          </span>
          <p>O valor se refere ao saldo</p>
        </div>
      </Main>
      <ListCD listData={listData} removeOne={removeOne} />
    </div>
  );
}

export default App;
