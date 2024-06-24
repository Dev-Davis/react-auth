import "./App.css";
import AppRouter from "./Components/AppRouter/AppRouter";
import AuthContextProvider from "./Contexts/AuthContext/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;
