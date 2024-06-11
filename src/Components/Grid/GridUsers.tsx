import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import styled from "styled-components";

const TableContainerStyled = styled(Paper)`
  width: 100%;
  margin-top: 20px;
  overflow-x: auto;
  max-width: 800px;
  margin: auto;
`;

const TableStyled = styled(Table)`
  min-width: 650px;
`;

const TdStyled = styled(TableCell)`
  padding: 10px;
`;

interface User {
  id: number;
  nome: string;
  email: string;
  data_nascimento: string;
  fone: string;
}

interface GridUsersProps {
  onEditUser: (user: User) => void;
}

const GridUsers = forwardRef(({ onEditUser }: GridUsersProps, ref) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = () => {
    axios.get("http://localhost:3000/api/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar os usuários:", error);
      });
  };

  useImperativeHandle(ref, () => ({
    fetchUsers
  }));

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3000/api/users/${id}`)
      .then(response => {
        fetchUsers(); // Atualiza a lista de usuários após a exclusão
        console.log(response.data);
      })
      .catch(error => {
        console.error("Erro ao excluir o usuário!", error);
      });
  };

  return (
    <TableContainerStyled>
      <TableStyled>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Data de nascimento</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TdStyled>{user.nome}</TdStyled>
              <TdStyled>{user.email}</TdStyled>
              <TdStyled>{user.data_nascimento}</TdStyled>
              <TdStyled align="center">
                <IconButton onClick={() => onEditUser(user)}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => handleDelete(user.id)}>
                  <DeleteIcon color="secondary" />
                </IconButton>
              </TdStyled>
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
    </TableContainerStyled>
  );
});

export default GridUsers;
