import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import AddUser from "./users/AddUser";
import AddPosting from "./postings/AddPosting";
import { BrowserRouter as Router, Route, Routes, Route as RouteV6, Navigate } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    {/* NOTE : RouteV6 to solve versions issue ... */}
                    <RouteV6 path="/register" element={<AddUser />} />
                    <RouteV6 path="/login" element={<Login />}/>
                    <RouteV6 path="/posting" element={<AddPosting />} />
                    <RouteV6 path="/" element={<Home />} />
                    {/* other cases */}
                    <RouteV6 path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;