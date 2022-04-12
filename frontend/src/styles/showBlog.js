import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;
export const Table = styled.table`
  width: 80%;
  border-spacing: 0;
`;
export const Thead = styled.thead`
  background-color: #1d3557;
`;
export const Th = styled.th`
  padding: 0.5rem 0;
  color: #f1faee;
  font-size: 2rem;
  text-align: center;
`;
export const Td = styled.td`
  text-align: center;
  padding: 0.5rem 0;
  border: 1px solid #1d3557;
`;
export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem;
  background-color: ${(props) =>
    props.bg === "editar" ? "#17a2b8" : "#dc3545"};
  color: #f8f9fa;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
`;
export const ButtonCreate = styled.button`
  padding: 0.8rem 1.5rem;
  margin: 1rem 0.5rem;
  background-color: #28a745;
  color: #f8f9fa;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.8rem;
`;
