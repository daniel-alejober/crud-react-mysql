import React from "react";
import { eliminarComentario } from "../request/consultas";
import { useNavigate } from "react-router-dom";
import { Td, Button } from "../styles/showBlog";

const Comment = ({ comentario, dataComentarios }) => {
  const { content, id, title } = comentario;
  const navigate = useNavigate();

  const eliminarBlog = async (id) => {
    await eliminarComentario(id);
    dataComentarios();
  };
  return (
    <tr>
      <Td>{id}</Td>
      <Td>{title}</Td>
      <Td>{content}</Td>
      <Td>
        <Button bg="editar" onClick={() => navigate(`/editBlog/${id}`)}>
          Editar
        </Button>
        <Button onClick={() => eliminarBlog(id)}>Eliminar</Button>
      </Td>
    </tr>
  );
};

export default Comment;
