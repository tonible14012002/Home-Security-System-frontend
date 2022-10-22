import Button from '../../components/Button';
import InputField from '../../components/InputField';

const Login = () => {
  return (
    <form>
      <div className="flex flex-col gap-5 min-w-[470px]">
        <InputField field="Username" type="text" />
        <InputField field="Password" type="text" />
        <Button primary text="Login" />
      </div>
    </form>
  );
};

export default Login;
