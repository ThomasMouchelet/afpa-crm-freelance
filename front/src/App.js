import './App.css';
import CustomerList from './components/CustomerList';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FormCustomer from './components/FormCustomer';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<CustomerList />} />
        <Route path="/customers/create" element={<FormCustomer />} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
