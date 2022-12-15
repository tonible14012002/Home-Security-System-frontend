import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      fullName: '',
      phoneNo: '',
      password: '',
    },
  });

  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  // const registerOptions = {
  //   username: { required: 'Username is required' },
  //   email: { required: 'Email is required' },
  //   fullname: { required: 'Fullname is required' },
  //   phoneNo: { required: 'Phone is required' },
  //   password: { required: 'Password is required' },
  // };

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div className="flex flex-col gap-5 min-w-[470px]">
        <InputField
          register={register}
          name="username"
          field="Username"
          type="text"
        />

        <InputField
          register={register}
          name="email"
          field="Email"
          type="email"
        />
        <InputField
          register={register}
          field="Full name"
          name="fullName"
          type="text"
        />
        <InputField
          register={register}
          field="Phone No"
          name="phoneNo"
          type="text"
        />

        <InputField
          register={register}
          field="Password"
          name="password"
          type="password"
        />

        <div className="flex items-center gap-5">
          <div className="w-[150px] ">
            <Button text="Scan face" />
          </div>
          <p className="text-[#A1C298] font-semibold">Scan successfully!</p>
        </div>
        <Button primary text="Register" />
        <a
          className="text-sm font-medium text-mainBrown hover:underline self-end"
          href="/login"
        >
          Already have an account? Login here!
        </a>
      </div>
    </form>
  );
};

export default Register;
