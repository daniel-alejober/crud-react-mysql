import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9d9eb8;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  width: 40%;
  min-height: 50%;
  background-color: #e3e3f3;
`;
export const Legend = styled.legend`
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
`;
export const Input = styled.input`
  outline: none;
  font-size: 1.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
  width: 80%;
`;
export const Alert = styled.p`
  background-color: ${(props) =>
    props.bg === "error" ? "#dc3545" : "#28a745"};
  color: white;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;
