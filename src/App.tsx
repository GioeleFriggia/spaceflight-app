import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";
import Navbar from "./Navbar"; // Importa il componente Navbar

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleDetailWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

const ArticleDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // Aggiunto '?' per indicare che id è opzionale
  return id ? <ArticleDetail id={id} /> : <div>No ID provided</div>; // Controlla se id è definito prima di utilizzarlo
};

export default App;
