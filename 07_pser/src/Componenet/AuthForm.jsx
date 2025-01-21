import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaCity,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const AuthForm = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className=" bg-gray-100 flex  items-center  justify-between px-9 gap-10">
      <div className=" bg-gray-100 flex items-center  justify-between px-9 gap-10">
        <div>
          <img src="/afd.png" alt="" />
        </div>
      </div>

      <div className=" bg-gray-100 flex items-center justify-center ">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full ">
          <img className="mx-auto py-6" src="/login-logo.svg" alt="" />
          <h1 className="text-2xl font-bold text-center mb-6">
            PUNJAB SOCIO-ECONOMIC REGISTRY 2024
          </h1>

          {/* Login Form */}
          {!showForgotPassword && !showRegister && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 mb-2">
                  USERNAME (CNIC NO.)
                </label>
                <input
                  id="username"
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your Username (CNIC No.)"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="mb-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setShowRegister(true)}
                  className="text-sm text-green-500 hover:underline"
                >
                  Register Now
                </button>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-green-500 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              >
                LOGIN
              </button>
            </form>
          )}

          {/* Forgot Password Form */}
          {showForgotPassword && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700 text-center">
                Forgot Password
              </h2>
              <div className="mb-4">
                <label htmlFor="cnic" className="block text-gray-700 mb-2">
                  CNIC
                </label>
                <input
                  id="cnic"
                  type="text"
                  {...register("cnic", { required: "CNIC is required" })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter CNIC"
                />
                {errors.cnic && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cnic.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="w-full text-sm text-gray-500 hover:underline text-center mt-2"
              >
                Back to Login
              </button>
            </form>
          )}

          {/* Register Form */}
          {showRegister && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
                Register
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium">
                    FULL NAME <span className="text-red-500">*</span>{" "}
                    <span className="text-sm text-gray-500">مکمل نام</span>
                  </label>
                  <input
                    type="text"
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    placeholder="Enter your Name"
                    className="border p-2 rounded-md w-full"
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* CNIC */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium">
                    CNIC NO. <span className="text-red-500">*</span>{" "}
                    <span className="text-sm text-gray-500">
                      قومی شناختی کارڈ نمبر
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("cnic", { required: "CNIC is required" })}
                    placeholder="xxxxx-xxxxxxx-x"
                    className="border p-2 rounded-md w-full"
                  />
                  {errors.cnic && (
                    <span className="text-red-500 text-sm">
                      {errors.cnic.message}
                    </span>
                  )}
                </div>

                {/* Network */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium">
                    NETWORK <span className="text-red-500">*</span>{" "}
                    <span className="text-sm text-gray-500">نیٹ ورک</span>
                  </label>
                  <select
                    {...register("network", {
                      required: "Network is required",
                    })}
                    className="border p-2 rounded-md w-full"
                  >
                    <option value="">Select Network</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Telenor">Telenor</option>
                    <option value="Zong">Zong</option>
                    <option value="Ufone">Ufone</option>
                  </select>
                  {errors.network && (
                    <span className="text-red-500 text-sm">
                      {errors.network.message}
                    </span>
                  )}
                </div>

                {/* Mobile No */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium">
                    MOBILE NO. <span className="text-red-500">*</span>{" "}
                    <span className="text-sm text-gray-500">موبائل نمبر</span>
                  </label>
                  <input
                    type="text"
                    {...register("mobile", {
                      required: "Mobile No. is required",
                    })}
                    placeholder="03XX-XXXXXXX"
                    className="border p-2 rounded-md w-full"
                  />
                  {errors.mobile && (
                    <span className="text-red-500 text-sm">
                      {errors.mobile.message}
                    </span>
                  )}
                </div>

                {/* District */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium">
                    DISTRICT <span className="text-red-500">*</span>{" "}
                    <span className="text-sm text-gray-500">ضلع</span>
                  </label>
                  <select
                    {...register("district", {
                      required: "District is required",
                    })}
                    className="border p-2 rounded-md w-full"
                  >
                    <option value="">Select District</option>
                    <option value="District1">District 1</option>
                    <option value="District2">District 2</option>
                    {/* Add more districts */}
                  </select>
                  {errors.district && (
                    <span className="text-red-500 text-sm">
                      {errors.district.message}
                    </span>
                  )}
                </div>

                {/* Tehsil */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium">
                    TEHSIL <span className="text-red-500">*</span>{" "}
                    <span className="text-sm text-gray-500">تحصیل</span>
                  </label>
                  <select
                    {...register("tehsil", { required: "Tehsil is required" })}
                    className="border p-2 rounded-md w-full"
                  >
                    <option value="">Select Tehsil</option>
                    <option value="Tehsil1">Tehsil 1</option>
                    <option value="Tehsil2">Tehsil 2</option>
                    {/* Add more tehsils */}
                  </select>
                  {errors.tehsil && (
                    <span className="text-red-500 text-sm">
                      {errors.tehsil.message}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium">
                    EMAIL ADDRESS{" "}
                    <span className="text-sm text-gray-500">ای میل ایڈریس</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Enter your Email"
                    className="border p-2 rounded-md w-full"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium">
                    PASSWORD <span className="text-red-500">*</span>{" "}
                    <span className="text-sm text-gray-500">پاس ورڈ</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="border p-2 rounded-md w-full"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-medium">
                    CONFIRM PASSWORD <span className="text-red-500">*</span>{" "}
                    <span className="text-sm text-gray-500">
                      پاس ورڈ کی تصدیق کریں
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: "Confirmation is required",
                    })}
                    className="border p-2 rounded-md w-full"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              >
                Register
              </button>

              <button
                type="button"
                onClick={() => setShowRegister(false)}
                className="w-full text-sm text-gray-500 hover:underline text-center mt-2"
              >
                Back to Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
