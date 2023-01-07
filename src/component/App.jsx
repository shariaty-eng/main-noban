import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Verification from '../routes/Verification'
import paths from '../assets/json/paths.json'
const LazyUsers = lazy(()=>import('../routes/Users'))
const LazyProduct = lazy(()=>import('../routes/Products'))
const LazyLoader = lazy(()=>import('./Loader'))
const App = () => {
  return (
    <>
    <Router>
    <Suspense fallback={<LazyLoader/>}>
      <Routes>
        <Route path={paths.product} element={<LazyProduct />} />
        <Route path={paths.users} element={<LazyUsers />} />
        <Route path={paths.verification} element={<Verification />} />
      </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
