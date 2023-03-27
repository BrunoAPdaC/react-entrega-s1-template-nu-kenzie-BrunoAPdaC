export function Cards({ card, removeOne }) {
  return (
    <>
      {card.type === "Entrada" ? (
        <li className="typeE">
          <h4>{card.description}</h4>
          <h6>{card.type}</h6>
          <h5>R$ {card.value},00</h5>
          <button onClick={() => removeOne(card.id)}>Excluir</button>
        </li>
      ) : (
        <li>
          <h4>{card.description}</h4>
          <h6>{card.type}</h6>
          <h5>R$ {card.value},00</h5>
          <button onClick={() => removeOne(card.id)}>Excluir</button>
        </li>
      )}
    </>
  );
}
