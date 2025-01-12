import { useState } from "react";

function ClearAllDialog({ setPasswords }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClear = () => {
    setPasswords([]);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-red-400 text-white py-2 rounded hover:bg-red-800 transition duration-300"
      >
        Clear All Password
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">
              Are you sure you want to clear all passwords?
            </h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button onClick={handleClear} className="btn btn-danger">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClearAllDialog;
