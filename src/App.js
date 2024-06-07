// import logo from './logo.svg';
// import './App.css';
// import AddAlbum from './components/AddAlbum';
// import SearchAlbum from './components/SearchAlbum';
// import DeleteAlbum from './components/DeleteAlbum';
// import ViewAlbum from './components/ViewAlbum';

// function App() {
//   return (
//     <div >
//       <AddAlbum/>
//       <SearchAlbum/>
//       <DeleteAlbum/>
//       <ViewAlbum/>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import AddAlbum from './components/AddAlbum';
import SearchAlbum from './components/SearchAlbum';
import DeleteAlbum from './components/DeleteAlbum';
import NavBar from './components/NavBar';
import ViewAlbum from './components/ViewAlbum';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddAlbum/>}/>
      <Route path='/search' element={<SearchAlbum/>}/>
      <Route path='/delete' element={<DeleteAlbum/>}/>
      <Route path='/view' element={<ViewAlbum/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;