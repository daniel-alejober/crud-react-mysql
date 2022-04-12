import { Alert } from "../styles/createBlog";

const Alerta = ({ msg, bg }) => {
  return <Alert bg={bg}>{msg}</Alert>;
};

export default Alerta;
