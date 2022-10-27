import Button from '../../components/Button';
import InputField from '../../components/InputField';

const Register = () => {
  return (
    <form>
      <div className="flex flex-col gap-5 min-w-[470px]">
        <InputField field="Username" type="text" />
        <InputField field="Email" type="text" />
        <InputField field="Fullname" type="text" />
        <InputField field="Phone No" type="text" />
        <InputField field="Password" type="text" />
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
