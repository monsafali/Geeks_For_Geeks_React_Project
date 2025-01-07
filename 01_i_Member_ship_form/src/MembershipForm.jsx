import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MembershipForm = () => {
  const {
    register,
    handleSubmit,
    reset, // Import the reset function
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/thank-you");
  };

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await fetch("http://localhost:5000/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       console.log("Form data saved successfully.");
  //       navigate("/thank-you"); // Redirect to the thank-you page
  //     } else {
  //       console.error("Failed to save form data.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div className="flex border border-black justify-center mt-3 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=""
        dir="rtl"
        style={{ fontFamily: "Noto Nastaliq Urdu, serif" }}
      >
        <div className="grid grid-cols-2 gap-4 w-[800px]">
          {/* Row 1 */}
          <div>
            <label
              htmlFor="date"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              تاریخ
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="date"
              id="date"
              {...register("date", { required: true })}
              defaultValue={getTodayDate()}
            />
          </div>
          <div>
            <label
              htmlFor="formNo"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              فارم نمبر
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="number"
              id="formNo"
              {...register("formNo", { required: true })}
            />
          </div>

          {/* Row 2 */}
          <div>
            <label
              htmlFor="name"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              نام
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="fatherHusbandName"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              والد/خاوند کا نام
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="fatherHusbandName"
              {...register("fatherHusbandName", { required: true })}
            />
          </div>

          {/* Row 3 */}
          <div>
            <label
              htmlFor="religion"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              مذہب
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="religion"
              {...register("religion", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="cnic"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              شناختی کارڈ نمبر
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="number"
              id="cnic"
              {...register("cnic", { required: true })}
            />
          </div>

          {/* Row 4 */}
          <div>
            <label
              htmlFor="age"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              عمر
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="number"
              id="age"
              {...register("age", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              ایڈریس
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="address"
              {...register("address", { required: true })}
            />
          </div>

          {/* Row 5 */}
          <div>
            <label
              htmlFor="ucVcNc"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              UC/NC/VC
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="ucVcNc"
              {...register("ucVcNc", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="wardNo"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              وارڈ نمبر
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="wardNo"
              {...register("wardNo", { required: true })}
            />
          </div>

          {/* Row 6 */}
          <div>
            <label
              htmlFor="blockNo"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              بلاک نمبر
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="blockNo"
              {...register("blockNo", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="assemblyConstituency"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              صوبائی حلقہ
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="assemblyConstituency"
              {...register("assemblyConstituency", { required: true })}
            />
          </div>

          {/* Row 7 */}
          <div>
            <label
              htmlFor="district"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              ضلع
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="district"
              {...register("district", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="education"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              تعلیم
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="education"
              {...register("education", { required: true })}
            />
          </div>

          {/* Row 8 */}
          <div>
            <label
              htmlFor="bloodGroup"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              بلڈ گروپ
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="bloodGroup"
              {...register("bloodGroup", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="profession"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              پیشہ
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="profession"
              {...register("profession", { required: true })}
            />
          </div>

          {/* Row 9 */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              فون نمبر
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="number"
              id="phoneNumber"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="bg-black text-white p-4 rounded-r-lg"
            >
              Email
            </label>
            <input
              className="p-3 border border-blue-500 rounded-l-lg"
              type="text"
              id="email"
              {...register("email", { required: true })}
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            جمع کریں
          </button>
          <button
            type="button"
            onClick={() => reset()} // Call reset to clear the form
            className="w-1/2 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 ml-2"
          >
            ری سیٹ کریں
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;
