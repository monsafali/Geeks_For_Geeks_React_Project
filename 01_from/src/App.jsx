import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useForm } from "react-hook-form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    gender: "",
    subjects: [],
    url: "",
    car: "",
    review: "",
  };

  const onSubmit = (data) => {
    console.log(data);
    reset(defaultValues); // Reset the form
    navigate("/thank-you"); // Redirect to the Thank You page
  };

  return (
    <div className="max-w-[500px] h-auto  border border-red-500 flex flex-col  justify-center items-center m-auto p-4 rounded-lg ">
      <h1 className="text-3xl font-bold text-[#4ade80]">Form in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">FirstName*</label>
        <input
          {...register("firstName", { required: true })}
          id="firstName"
          className="w-full border border-black rounded-md  p-1"
          placeholder="Enter firstname"
        />
        {errors.firstName && (
          <span className="text-red-500">This field is required</span>
        )}

        <label htmlFor="lastName">LastName*</label>
        <input
          {...register("lastName", { required: true })}
          id="lastName"
          className="w-full border border-black rounded-md p-1"
          placeholder="Enter LastName"
        />
        {errors.lastName && (
          <span className="text-red-500">This field is required</span>
        )}

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          {...register("email", { required: true })}
          id="email"
          className="w-full border border-black rounded-md p-1"
          placeholder="Enter Email Address"
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}

        <label htmlFor="number">Contact*</label>
        <input
          type="number"
          {...register("number", { required: true })}
          id="number"
          className="w-full border border-black rounded-md p-1"
          placeholder="phone number"
        />
        {errors.number && (
          <span className="text-red-500">This field is required</span>
        )}

        <label>Gender*</label>
        <div className="w-full px-20 flex justify-evenly">
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              {...register("gender")}
            />
            <label htmlFor="male" className="ml-2">
              male
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              {...register("gender")}
            />
            <label htmlFor="female" className="ml-2">
              female
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="others"
              name="gender"
              value="others"
              {...register("gender")}
            />
            <label htmlFor="others" className="ml-2">
              others
            </label>
          </div>
        </div>

        {/* this is subject */}
        <label>Subject*</label>
        <div className="w-full px-20 flex justify-evenly">
          <div>
            <input
              type="checkbox"
              id="english"
              value="English"
              {...register("subjects")}
            />
            <label htmlFor="english" className="ml-2">
              English
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="urdu"
              value="Urdu"
              {...register("subjects")}
            />
            <label htmlFor="urdu" className="ml-2">
              urdu
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="arabic"
              value="Arabic"
              {...register("subjects")}
            />
            <label htmlFor="arabic" className="ml-2">
              Arabic
            </label>
          </div>
        </div>

        <label htmlFor="myfile">Upload a Resume:</label>
        <input type="file" id="myfile" name="myfile" className="w-full" />

        <label htmlFor="url">Enter URL*</label>
        <input
          type="text"
          {...register("url", { required: true })}
          id="url"
          className="w-full border border-black rounded-md p-1"
          placeholder="phone number"
        />
        {errors.url && (
          <span className="text-red-500">This field is required</span>
        )}

        <label htmlFor="cars">Choose a car:</label>
        <select name="cars" id="cars" className="w-full" {...register("car")}>
          <option value="">Select your answer</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <label htmlFor="w3review">Review of W3Schools:</label>
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          className="w-full border border-black"
          {...register("review")}
        ></textarea>
        <div className="w-full flex justify-between">
          <button
            className="bg-red-300 p-2 rounded-lg"
            type="button"
            onClick={() => reset(defaultValues)}
          >
            Reset
          </button>
          <button className="bg-green-300 p-2 rounded-lg" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function ThankYou() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-500">
        Thank you for submitting the form!
      </h1>
    </div>
  );
}

export default App;
