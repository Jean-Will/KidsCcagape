import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import './Form.css';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormStyled = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 40px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
`;

interface FormProps {
  fetchUsers: () => void;
}

const Form: React.FC<FormProps> = ({ fetchUsers }) => {
  const [formData, setFormData] = useState({
    nome: "",
    data_nascimento: "",
    email: "",
    fone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/users", formData)
      .then((response) => {
        console.log("Dados enviados com sucesso:", response.data);
        fetchUsers(); // Atualiza a lista de usuários
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
      });
  };

  return (
    <FormContainer>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} className="form-grid">
            <Grid item xs={12}>
              <TextField
                label="Nome"
                name="nome"
                variant="outlined"
                fullWidth
                className="form-input"
                value={formData.nome}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Data de Nascimento"
                name="data_nascimento"
                variant="outlined"
                fullWidth
                className="form-input"
                value={formData.data_nascimento}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Fone"
                name="fone"
                variant="outlined"
                fullWidth
                className="form-input"
                value={formData.fone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>Salvar</Button>
            </Grid>
          </Grid>
        </form>
      </FormStyled>
    </FormContainer>
  );
};

export default Form;
