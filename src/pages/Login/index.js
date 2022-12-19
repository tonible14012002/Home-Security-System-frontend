import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import userApi from '../../api/userApi';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { useAuthContext } from '../../context/AuthContext';
import JwtManager from "../../utils/jwt"

const Login = () => {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleLoginSubmit = async (values) => {
    try {
      const response = await userApi.login(values);
      if (response.data) {
        const user = response.data.user 
        console.log({user})
        if(!user.is_accepted && !user.is_staff) alert("User registeration hasn't been confirmed by admin!. Please come back later!")
        else{
          JwtManager.setToken(response.data.access);
          JwtManager.setRefreshToken(response.data.refresh);
          setUser(response.data.user);
          if(user.is_superuser) navigate("/admin")
          else navigate('/');
        }
      }
    } catch (error) {
      if(error.data){
        alert(JSON.stringify(error.data))
      }
    }
  };

  useEffect(() => {
    if(user.first_name) navigate("/")
  }, [user])

  return (
    <form onSubmit={handleSubmit((data) => handleLoginSubmit(data))}>
      <div className="flex flex-col gap-5 min-w-[470px]">
        <InputField
          register={register}
          field="Username"
          type="text"
          name="username"
        />
        <div className="py-2 px-3 flex flex-col w-[100%] bg-mainCream rounded-md">
          <p className="text-sm text-mainPurple font-bold ">Password</p>
          <input
            {...register('password')}
            className="input"
            type="password"
            required
          />
        </div>
        <Button primary text="Login" type="submit" />
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
