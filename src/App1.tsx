import { useRef } from 'react';
import Form from '../src/Components/Form/Form';
import GridUsers from '../src/Components/Grid/GridUsers';

const App = () => {
  const gridUsersRef = useRef<{ fetchUsers: () => void }>(null);

  const fetchUsers = () => {
    if (gridUsersRef.current) {
      gridUsersRef.current.fetchUsers();
    }
  };

  return (
    <div>
      <Form fetchUsers={fetchUsers} />
      <GridUsers ref={gridUsersRef} />
    </div>
  );
};

export default App;
