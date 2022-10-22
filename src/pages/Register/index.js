import Button from '../../components/Button';
import InputField from '../../components/InputField';

const Register = () => {
  return (
    <form>
      <div className="flex flex-col gap-5 min-w-[470px]">
        <InputField field="Username" type="text" />
        <InputField field="Password" type="text" />
        <div className="w-[100px]">
          <Button primary text="Register" />
        </div>
      </div>
    </form>
  );
};

export default Register;
