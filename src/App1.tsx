import  { useRef, useState } from 'react';
import NavBar from './Components/Navbar/Navbar.tsx';
import Form from '../src/Components/Form/Form.tsx';
import GridUsers from './Components/Grid/GridUsers.tsx';


interface User {
  id: number;
  nome: string;
  email: string;
  data_nascimento : string;
  fone: string;
}


const App1 = () => {
  const gridUsersRef = useRef<{ fetchUsers: () => void }>(null);
  const [userToEdit , setUserToEdit] = useState<User | null>(null);

  const fetchUsers = () => {
    gridUsersRef.current?.fetchUsers();
  };

  const handleEdiUSer = (user : User) => {
    setUserToEdit(user);
  };

  return (
    <>
      <NavBar />
      <Form fetchUsers={fetchUsers} userToEdit={userToEdit} />
      <GridUsers ref={gridUsersRef} onEditUser={handleEdiUSer}/>
    </>
  );
};

export default App1;
