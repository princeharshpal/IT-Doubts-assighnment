import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const SimpleForm = () => {
  const validationSchema = yup
    .object({
      firstname: yup.string().required("Firstname is required"),
      lastname: yup.string().required("Lastname is required"),
      email: yup.string().required("Email is required").email("Invalid email"),
      age: yup
        .number()
        .typeError("Age must be a number")
        .min(18, "You must be at least 18 years old")
        .max(100, "You must be under 100 years old")
        .required("Age is required"),
      gender: yup.string().required("Gender is required"),
      hobbies: yup
        .array()
        .of(
          yup.object().shape({
            name: yup.string().required("Hobby name is required"),
          })
        )
        .min(1, "Please enter at least one hobby"),
      address: yup.object({
        city: yup.string().required("City is required"),
        state: yup.string().required("State is required"),
      }),
      startdate: yup.date().required("Start date is required"),
      subscribe: yup.boolean(),
    })
    .required();

  const {
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      startdate: "",
      hobbies: [{ name: "" }],
      address: { city: "", state: "" },
      gender: "",
      subscribe: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "hobbies",
  });

  const onSubmit = async (data) => {
    try {
      await validationSchema.validate(data, { abortEarly: false });
      console.log("Form submitted successfully", data);
    } catch (err) {
      if (err.inner) {
        err.inner.forEach((validationError) => {
          setError(validationError.path, {
            type: "manual",
            message: validationError.message,
          });
        });
      } else {
        console.error(err);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-20 text-xl">
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            className="focus:outline-2 focus:outline-blue-500 bg-gray-100 px-2 py-1 rounded-md m-2"
            id="firstname"
            {...register("firstname")}
          />
          {errors.firstname && (
            <p className="w-fit rounded-lg text-red-600 px-3 py-1 mt-1 mb-5 border-2 border-red-600">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            className="focus:outline-2 focus:outline-blue-500 bg-gray-100 px-2 py-1 rounded-md m-2"
            id="lastname"
            {...register("lastname")}
          />
          {errors.lastname && (
            <p className="w-fit rounded-lg text-red-600 px-3 py-1 mt-1 mb-5 border-2 border-red-600">
              {errors.lastname.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className="focus:outline-2 focus:outline-blue-500 bg-gray-100 px-2 py-1 rounded-md m-2"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="w-fit rounded-lg text-red-600 px-3 py-1 mt-1 mb-5 border-2 border-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            className="focus:outline-2 focus:outline-blue-500 bg-gray-100 px-2 py-1 rounded-md m-2"
            type="number"
            id="age"
            {...register("age")}
          />
          {errors.age && (
            <p className="w-fit rounded-lg text-red-600 px-3 py-1 mt-1 mb-5 border-2 border-red-600">
              {errors.age.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            className="m-2 border-2 rounded-md px-2 py-1 focus:outline-2 focus:outline-blue-500"
            id="gender"
            {...register("gender")}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">female</option>
            <option value="others">others</option>
          </select>
          {errors.gender && (
            <p className="w-fit rounded-lg text-red-600 px-3 py-1 mt-1 mb-5 border-2 border-red-600">
              {errors.gender.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="address">Adress</label>
          <input
            className="focus:outline-2 focus:outline-blue-500 bg-gray-100 px-2 py-1 rounded-md m-2"
            {...register("address.city")}
            id="address"
            placeholder="City"
          />
          {errors.address?.city && (
            <p className="w-fit rounded-lg text-red-600 px-3 py-1 mt-1 mb-5 border-2 border-red-600">
              {errors.address.city.message}
            </p>
          )}

          <input
            className="focus:outline-2 focus:outline-blue-500 bg-gray-100 px-2 py-1 rounded-md m-2"
            {...register("address.state")}
            placeholder="State"
          />
          {errors.address?.state && (
            <p className="w-fit rounded-lg text-red-600 px-3 py-1 mt-1 mb-5 border-2 border-red-600">
              {errors.address.state.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="startdate">Start date</label>
          <input
            className="focus:outline-2 focus:outline-blue-500 bg-gray-100 px-2 py-1 rounded-md m-2"
            type="date"
            id="startdate"
            {...register("startdate")}
          />
          {errors.startdate && (
            <p className="w-fit rounded-lg text-red-600 px-3 py-1 mt-1 mb-5 border-2 border-red-600">
              {errors.startdate.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="hobbies">Hobbies</label>
          {fields.map((hobby, index) => (
            <div key={hobby.id}>
              <input
                {...register(`hobbies.${index}.name`)}
                placeholder="Hobby name"
                className="w-fit focus:outline-2 focus:outline-blue-500 bg-gray-100 px-2 py-1 rounded-md my-2"
                id={`hobbies-${index}`}
              />

              {errors.hobbies?.[index]?.name && (
                <p className="w-fit rounded-lg text-red-600 px-3 py-1 mt-1 mb-5 border-2 border-red-600">
                  {errors.hobbies[index].name.message}
                </p>
              )}

              {fields.length > 1 && (
                <button type="button" onClick={() => remove(index)}>
                  Remove hobby
                </button>
              )}
            </div>
          ))}
          <button
            className="bg-black text-white px-3 py-1 rounded-md my-2"
            type="button"
            onClick={() => append({ name: "" })}
          >
            Add hobby
          </button>
        </div>

        <div>
          <label htmlFor="subscribe">Subscribe to Harsh Pal</label>
          <input
            className="focus:outline-2 focus:outline-blue-500 bg-gray-100 px-2 py-1 scale-100 rounded-md m-2"
            type="checkbox"
            id="subscribe"
            {...register("subscribe")}
          />

          {errors.root && (
            <p
              classNamew-fit
              rounded-lg="p-2 t6xtx-3 py-1ed-500 border-2 border-red-600"
            >
              {errors.root.message}
            </p>
          )}
        </div>

        <button
          className="p-2 rounded-md bg-black text-white my-2 w-96 "
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default SimpleForm;
