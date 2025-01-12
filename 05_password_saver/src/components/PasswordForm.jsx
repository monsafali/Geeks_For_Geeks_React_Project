import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import validator from "validator";
import { useState } from "react";

function PasswordForm({ setPasswords }) {
  const {
    register,
    handleSubmit,
    reset, // Import reset function to clear form fields
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return "Password must include at least 8 characters, one uppercase letter, one number, and one special character.";
    }
    return true;
  };

  const onSubmit = (data) => {
    setPasswords((prevPasswords) => [...prevPasswords, data]);
    alert("Password saved successfully!");
    reset(); // Clear the input fields after successful submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 rounded shadow-md"
    >
      <h2 className="text-xl font-semibold text-center">Add New Password</h2>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-gray-700"
        >
          Website
        </label>
        <input
          id="website"
          type="text"
          {...register("website", { required: "Website is required" })}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.website && (
          <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          {...register("username", { required: "Username is required" })}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is required",
            validate: validatePassword,
          })}
          className="w-full px-4 py-2 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div
          className="absolute top-9 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiFillEyeInvisible size={20} />
          ) : (
            <AiFillEye size={20} />
          )}
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Save Password
      </button>
    </form>
  );
}

export default PasswordForm;
