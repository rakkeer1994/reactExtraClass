// import './App.css';
import { EmployeeContextProvider } from './Components/EmployeeContext';
import EmployeeDashboard from './Components/EmployeeDashboard';


function App() {
  return (
    <div className="App">
      <EmployeeContextProvider>
        <EmployeeDashboard />
      </EmployeeContextProvider>
    </div>
    
  );
}

export default App;