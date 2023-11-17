const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw new Error("failed to fetch data");

  const { data } = await res.json();

  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw new Error(`Could not find order with id ${id}`);

  const { data } = res.json();
  return data;
}
