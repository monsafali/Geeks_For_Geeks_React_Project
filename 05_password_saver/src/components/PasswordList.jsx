import PasswordItem from "./PasswordItem";
import { useState } from "react";

function PasswordList({ passwords, setPasswords }) {
  const [search, setSearch] = useState("");

  const filteredPasswords = passwords.filter((password) =>
    password.website.toLowerCase().includes(search.toLowerCase())
  );

  const showPasswordsInJson = () => {
    const jsonWindow = window.open("", "_blank", "width=600,height=400");
    jsonWindow.document.write(
      `<pre style="font-family: Arial, sans-serif; white-space: pre-wrap; word-wrap: break-word;">${JSON.stringify(
        passwords,
        null,
        2
      )}</pre>`
    );
  };

  return (
    <div className="p-4">
      {/* Search Input and Button */}
      <div className="flex items-center mb-4 space-x-4">
        <input
          type="text"
          placeholder="Search your password"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full"
        />
        <button
          onClick={showPasswordsInJson}
          className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
        >
          Show Passwords
        </button>
      </div>

      {/* Scrollable Password List */}
      <div
        className="space-y-4 overflow-y-auto"
        style={{
          maxHeight: "252px", // 3 items * estimated height of 84px per item
        }}
      >
        {filteredPasswords.map((password, index) => (
          <PasswordItem
            key={index}
            password={password}
            setPasswords={setPasswords}
            passwords={passwords}
            index={index}
          />
        ))}

        {/* If no results are found */}
        {filteredPasswords.length === 0 && (
          <p className="text-gray-500 text-center mt-4">
            No matching passwords found.
          </p>
        )}
      </div>
    </div>
  );
}

export default PasswordList;
