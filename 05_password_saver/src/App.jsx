import { useState } from "react";
import PasswordForm from "./components/PasswordForm";
import PasswordList from "./components/PasswordList";
import ClearAllDialog from "./components/ClearAllDialog";

function App() {
  const [passwords, setPasswords] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <PasswordForm setPasswords={setPasswords} />
      <PasswordList passwords={passwords} setPasswords={setPasswords} />
      <ClearAllDialog setPasswords={setPasswords} />
    </div>
  );
}

export default App;
