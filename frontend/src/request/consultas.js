import clienteAxios from "../helpers/clienteAxios";

export const verComentarios = async () => {
  const data = await clienteAxios();
  return data;
};
export const verComentarioId = async (id) => {
  const data = await clienteAxios(`/${id}`);
  return data;
};
export const crearComentario = async ({ content, title }) => {
  const data = await clienteAxios.post("/", { title, content });
  return data;
};
export const eliminarComentario = async (id) => {
  const data = await clienteAxios.delete(`/${id}`);
  return data;
};

export const editarComentario = async ({ content, title }, id) => {
  const data = await clienteAxios.put(`/${id}`, { title, content });
  return data;
};
