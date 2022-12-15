import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { useAuthContext } from '../../context/AuthContext';

const Login = () => {
  const { setUser } = useAuthContext();
  // const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleLoginSubmit = async (values) => {
    console.log({ values });
    try {
      // const response = await userApi.login(values);
      // if (response.data) {
      //   JwtManager.setToken(response.data.tokens.access);
      //   JwtManager.setRefreshToken(response.data.tokens.refresh);
      //   setUser(response.data.user);
      //   navigate('/');
      // }
      // toast({
      //   title: 'Login successfully!',
      //   description: `Welcome, ${response.data.user.lastName}`,
      //   status: 'success',
      //   duration: 4000,
      //   isClosable: true,
      // });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit((data) => handleLoginSubmit(data))}>
      <div className="flex flex-col gap-5 min-w-[470px]">
        <InputField
          register={register}
          field="Username"
          type="text"
          name="username"
        />
        <InputField
          register={register}
          field="Password"
          type="password"
          name="password"
        />
        <Button primary text="Login" />
        <a
          className="text-sm font-medium text-mainBrown hover:underline self-end"
          href="/register"
        >
          Don't have an account? Register here!
        </a>
      </div>
    </form>
  );
};

export default Login;
