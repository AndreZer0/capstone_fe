/** @format */

// /** @format */

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from './components/main/Main';
// import DetailPage from './components/pages/DetailPage';
// import America from '../src/components/avengerspages/America';
// import Home from '../src/components/pages/Home';
// import ProtectedRoutes from './middleware/ProtectedRoutes';
// import Login from '../src/components/pages/Login';
// import Signup from './components/pages/Signup';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path='/login'
//           element={<Login />}
//         />
//       </Routes>

//       <Routes>
//         <Route
//           path='/'
//           element={<Home />}
//         />

//         <Route element={<ProtectedRoutes />}>
//           <Route
//             path='/detail/:cardsId'
//             element={<DetailPage />}
//           />
//           <Route
//             path='/signup'
//             element={<Signup />}
//           />
//         </Route>
//         <Route
//           path='/america'
//           element={<America />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import DetailPage from './components/pages/DetailPage';
import America from './components/avengerspages/America';
import Home from './components/pages/Home';
import ProtectedRoutes from './middleware/ProtectedRoutes';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route
            path='/detail/:cardsId'
            element={<DetailPage />}
          />
        </Route>
        <Route
          path='/america'
          element={<America />}
        />
        <Route
          path='/login'
          element={
            <Routes>
              <Route
                index
                element={<Login />}
              />
            </Routes>
          }
        />
        <Route
          path='/signup'
          element={
            <Routes>
              <Route
                index
                element={<Signup />}
              />
            </Routes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
