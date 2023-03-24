export function Form({ formData, setFormData, newList, listData }) {
  function submit(event) {
    event.preventDefault();
    newList(formData);
    console.log(listData);
  }

  return (
    <section className="inputsContainer">
      <p>Descrição</p>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          value={formData.description}
          required
          onChange={(event) => setFormData({ ...formData, description: event.target.value })}
        />
        <p>Valor (R$)</p>
        <input
          type="number"
          value={formData.value}
          placeholder="Digite aqui o valor"
          required
          onChange={(event) => setFormData({ ...formData, value: event.target.value })}
        />
        <p>Tipo de valor</p>
        <select
          name=""
          id=""
          value={formData.type}
          required
          onChange={(event) => setFormData({ ...formData, type: event.target.value })}
        >
          <option value="">Escolha uma opção</option>
          <option value="Entrada">Entrada</option>
          <option value="Despesas">Despesas</option>
        </select>
        <button type="submit">Inserir valor</button>
      </form>
    </section>
  );
}
