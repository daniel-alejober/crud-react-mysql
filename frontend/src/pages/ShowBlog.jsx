import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verComentarios } from "../request/consultas";
import Comment from "../Components/Comment";
import Alerta from "../Components/Alerta";
import { Container, Table, Thead, Th, ButtonCreate } from "../styles/showBlog";

const ShowBlog = () => {
  const navigate = useNavigate();
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    dataComentarios();
  }, []);

  const dataComentarios = async () => {
    const { data } = await verComentarios();
    setComentarios(data);
  };

  return (
    <Container>
      <ButtonCreate onClick={() => navigate("/createBlog")}>+</ButtonCreate>
      {comentarios.length === 0 ? (
        <Alerta msg="No hay registros" bg="error" />
      ) : (
        <Table>
          <Thead>
            <tr>
              <Th>ID</Th>
              <Th>Titulo</Th>
              <Th>Mensaje</Th>
              <Th>Acciones</Th>
            </tr>
          </Thead>
          <tbody>
            {comentarios.map((comentario) => (
              <Comment
                key={comentario.id}
                comentario={comentario}
                dataComentarios={dataComentarios}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ShowBlog;
