import Button from '../../components/Button';
import InputField from '../../components/InputField';
import {useForm} from "react-hook-form";

const Register = () => {
  const{ register, handleSubmit,formState:{errors} } = useForm();

  const handleRegistration = data => console.log(data);
  const handleError = (errors) =>{};

  const registerOptions = {
      Username: {required: "Name is required"},
      Email: {required: "Email is required"},
      Fullname: {required: "Fullname is required"},
      PhoneNo: {required: "Phone is required"},
      Password: {required: "Password is required"}
      
  }

  return (
    
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div className="flex flex-col gap-5 min-w-[470px]">
        <InputField register={register} field="Username" type="text" />
        <div>
          <label>Username</label>
          <input name = "Username" type ="text"{...register('Username',registerOptions.Username)}></input>
          <small className="error...">
            {errors?.Username.message}
          </small>
        </div>
        <InputField register={register} field="Email" type="text" />
        <div>
          <label>Email</label>
          <input type ="Email" name="Email" {...register('Email',registerOptions.Email)}></input>
          <small className="error...">
            {errors?.Email.message}
          </small>
        </div>
        <InputField register={register} field="Fullname" type="text" />
        <div>
          <label>Fullname</label>
          <input type ="text" name="Fullname" {...register('Fullname',registerOptions.Fullname)}></input>
          <small className="error...">
            {errors?.Fullname.message}
          </small>
        </div>
        <InputField register={register} field="Phone No" type="text" />
        <div>
          <label>PhoneNo</label>
          <input type ="number" name="PhoneNo" {...register('PhoneNo',registerOptions.PhoneNo)}></input>
          <small className="error...">
            {errors?.PhoneNo.message}
          </small>
        </div>
        <InputField register={register} field="Password" type="text" />
        <div>
          <label>Password</label>
          <input type ="password" name="Password" {...register('Password',registerOptions.Password)}></input>
          <small className="error...">
            {errors?.Password.message}
          </small>
        </div>
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


