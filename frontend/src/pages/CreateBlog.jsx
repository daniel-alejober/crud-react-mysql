import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearComentario } from "../request/consultas";
import Alerta from "../Components/Alerta";
import { Container, Form, Legend, Input } from "../styles/createBlog";
import { ButtonCreate } from "../styles/showBlog";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [contenidoComent, setContenidoComent] = useState({
    title: "",
    content: "",
  });
  const { title, content } = contenidoComent;
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
    const { data, status } = await crearComentario(contenidoComent);
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
        <Legend>Mensaje Blog</Legend>
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

export default CreateBlog;
