import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editarComentario, verComentarioId } from "../request/consultas";
import Alerta from "../Components/Alerta";
import { Container, Form, Legend, Input } from "../styles/createBlog";
import { ButtonCreate } from "../styles/showBlog";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [contenidoComent, setContenidoComent] = useState({
    title: "",
    content: "",
  });
  const { title, content } = contenidoComent;

  useEffect(() => {
    datosId(id);
  }, []);

  const datosId = async (id) => {
    const { data } = await verComentarioId(id);
    setContenidoComent({
      title: data.title,
      content: data.content,
    });
  };

  const [alertas, setAlertas] = useState({
    mostrar: false,
    msg: "",
    bg: "",
  });

  const handleChange = (e) => {
    setContenidoComent({
      ...contenidoComent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(contenidoComent).includes("")) {
      setAlertas({
        mostrar: true,
        msg: "Todos los campos son obligatorios",
        bg: "error",
      });
      return;
    }
    setAlertas({ mostrar: false });
    const { data, status } = await editarComentario(contenidoComent, id);
    setAlertas({
      mostrar: true,
      msg: data.message,
      bg: "",
    });
    if (status === 200) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Legend>Editar</Legend>
        {alertas.mostrar && <Alerta msg={alertas.msg} bg={alertas.bg} />}
        <Input
          type="text"
          placeholder="Titulo"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Mensaje"
          name="content"
          value={content}
          onChange={handleChange}
        />
        <ButtonCreate type="submit">Enviar</ButtonCreate>
      </Form>
    </Container>
  );
};

export default EditBlog;
