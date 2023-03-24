import { Cards } from "./ComponentCard";

export function ListCD({ listData, removeOne }) {
  return (
    <>
      {listData.length > 0 ? (
        <ul>
          {listData.map((card) => {
            return <Cards key={card.id} card={card} removeOne={removeOne} />;
          })}
        </ul>
      ) : (
        <p>Você ainda não possui nenhum lançamento</p>
      )}
    </>
  );
}
