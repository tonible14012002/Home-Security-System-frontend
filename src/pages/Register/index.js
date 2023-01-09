import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import userApi from '../../api/userApi';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { useAuthContext } from '../../context/AuthContext';

const Register = () => {
  const {user} = useAuthContext()
  const navigate = useNavigate();
  const imageRef = useRef(null)
  const [ok, setOK] = useState(false)
  const { register, handleSubmit , setValue, getValues} = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      image: null,
      first_name: '',
      last_name: '',
      phone: '',
      address: ''
    },
  });

  const handleSelectImage = () => {
    imageRef.current.click()
  }

  const handleOnChangeImage = (e) => {
    setValue('image',e.target.files[0] )
    setOK(true)
  }

  const handleRegisterSubmit = async (values) => {
    try {
      const formData = new FormData()
      const data = {...values, confirm_password: values.password}
      for (let key in data) {
        formData.append(key, values[key])
    }
      const response = await userApi.register(formData);
      if (response && response.data) {
        navigate('/waiting');
      }
    } catch (error) {
      console.log({error})
      if(error.data){
        alert(JSON.stringify(error.data))
      }
    }
  };

  useEffect(() => {
    if(user.first_name ) navigate("/")
  }, [user])
  console.log(getValues('image'))
  return (
    <div>
      <h3 className='text-3xl font-semibold  text-center p-4'>Register</h3>
      <form onSubmit={handleSubmit((data) => handleRegisterSubmit(data))}>
        <div className="flex flex-col gap-5 min-w-[350px] max-w-[400px] w-[100%] tablet:min-w-[500px] mx-auto">
          <InputField register={register} field="Username" type="text" name="username" />
          <InputField register={register} field="Email" type="text" name="email"/>
          <InputField register={register} field="First Name" type="text" name="first_name" />
          <InputField register={register} field="Last Name" type="text" name="last_name" />
          <InputField register={register} field="Phone No" type="text" name="phone" />
          <InputField register={register} field="Address" type="text" name="address" />
          <InputField register={register} field="Password" type="password" name="password" />
          <div className="flex items-center gap-5">
            <div className="w-[250px] tablet:w-[150px] ">
              <Button text="Choose picture" onClick={handleSelectImage} type="button" />
              <input ref={imageRef} type='file' hidden onChange={handleOnChangeImage} />
            </div>
            <p className="text-[#A1C298] font-semibold">{ok && "OK!"}</p>
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
   </div>
  );
};

export default Register;
