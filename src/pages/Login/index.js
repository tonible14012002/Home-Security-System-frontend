import Button from '../../components/Button';
import InputField from '../../components/InputField';

const Login = () => {
  return (
    <form>
      <div className="flex flex-col gap-5 min-w-[470px]">
        <InputField field="Username" type="text" />
        <InputField field="Password" type="password" />
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
