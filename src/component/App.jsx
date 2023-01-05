import { Routes, Route } from 'react-router-dom';
import Product from '../routes/Products'
import Users from '../routes/Users'
import Verification from '../routes/Verification'
import paths from '../assets/json/paths.json'
const App = () => {
  return (
    <>
      <Routes>
        <Route path={paths.product} element={<Product />} />
        <Route path={paths.users} element={<Users />} />
        <Route path={paths.verification} element={<Verification />} />
      </Routes>
    </>
  );
}

export default App;
