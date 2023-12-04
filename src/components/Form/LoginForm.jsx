import FormBtn from "@/components/form/FormBtn";
import { useForm } from "react-hook-form";
import TextLink from "@/components/TextLink";
import FormInput from "@/components/form/FormInput";

export default function Form({ user, setUser }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUser(data);
    console.log(user);
    reset();
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-10">Login</h1>
        <div className="mb-10">
          <FormInput
            cn="mb-5"
            type="email"
            name="email"
            label="email"
            errors={errors}
            register={register}
            validationSchema={{
              required: "Email is required",
            }}
            required
          />
          <FormInput
            cn="mb-5"
            type="password"
            name="password"
            label="password"
            errors={errors}
            register={register}
            validationSchema={{
              required: "Email is required",
            }}
            required
          />
        </div>
        <div className="mb-5">
          <FormBtn text="Login" />
        </div>
        <div className="text-right">
          <TextLink to="/register" text="Don't have an accout ? Register." />
        </div>
      </form>
    </div>
  );
}
