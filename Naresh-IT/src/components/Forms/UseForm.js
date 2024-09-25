import { useForm } from "react-hook-form";

export default function UseForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", {
          required: "First name is required",
        })}
        placeholder="First Name"
      />
      {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}

      <input
        {...register("lastName", {
          required: "Last name is required",
        })}
        placeholder="Last Name"
      />
      {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}

      <input
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
        placeholder="Email"
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

      <input type="submit" />
    </form>
  );
}
