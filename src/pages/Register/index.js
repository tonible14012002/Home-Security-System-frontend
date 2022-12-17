import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import userApi from '../../api/userApi';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { useAuthContext } from '../../context/AuthContext';
import JwtManager from "../../utils/jwt"

const Register = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  const imageRef = useRef(null)
  const { register, handleSubmit , setValue} = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      // image: null,
      full_name: '',
      phone: '',
      address: ''
    },
  });

  const handleSelectImage = () => {
    imageRef.current.click()
  }

  const handleOnChangeImage = (e) => {
    // setValue('image',e.target.files[0] )
  }

  const handleRegisterSubmit = async (values) => {
    console.log({ values });
    try {
      const formData = new FormData()
      const data = {...values, first_name: 'asdnmasd', last_name:'dsfdsfds', birth:"asdaskdj", confirm_password: values.password}
      for (let key in data) {
        formData.append(key, values[key])
    }
      const response = await userApi.register(formData);
      // if (response.data) {
      //   JwtManager.setToken(response.data.tokens.access);
      //   JwtManager.setRefreshToken(response.data.tokens.refresh);
      //   setUser(response.data.user);
      //   navigate('/');
      // }
      console.log({response})
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
    <form onSubmit={handleSubmit((data) => handleRegisterSubmit(data))}>
      <div className="flex flex-col gap-5 min-w-[470px]">
        <InputField register={register} field="Username" type="text" name="username" />
        <InputField register={register} field="Email" type="text" name="email"/>
        <InputField register={register} field="Fullname" type="text" name="full_name" />
        <InputField register={register} field="Phone No" type="text" name="phone" />
        <InputField register={register} field="Address" type="text" name="address" />
        <InputField register={register} field="Password" type="text" name="password" />
        <div className="flex items-center gap-5">
          <div className="w-[150px] ">
            <Button text="Scan face" onClick={handleSelectImage} type="button" />
            <input ref={imageRef} type='file' hidden onChange={handleOnChangeImage} />
          </div>
          <p className="text-[#A1C298] font-semibold">Scan successfully!</p>
        </div>
        <Button primary text="Register" type="submit"/>
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
