import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowBlog from "./pages/ShowBlog";
import EditBlog from "./pages/EditBlog";
import CreateBlog from "./pages/CreateBlog";
import { GlobalStyle } from "./styles/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlog />} />
          <Route path="/editBlog/:id" element={<EditBlog />} />
          <Route path="/createBlog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
