import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { UserCircleIcon } from '@heroicons/react/24/outline';
const Home = () => {
  return (
    <div>
      <div className="text-black px-10 tablet:px-[30px] desktop:px-[150px] pt-[40px] text-2xl tracking-wide">
        Welcome, <span className="font-bold">User!</span>
      </div>
      <div className="flex flex-col items-center justify-center leading-normal">
        <p className="font-bold text-4xl mb-[50px] mt-[70px] text-center">
          My information
        </p>

        <form>
          <div className="flex flex-col gap-5 max-w-[350px] tablet:min-w-[500px] mx-auto">
            <InputField field="Full Name" type="text" />
            <InputField field="Phone No" type="text" />
            <InputField field="Address" type="text" />
            <InputField field="Date of Birth" type="text" />
            <div class="flex items-center w-full">
              <UserCircleIcon className=" w-20 h-20" />
              <div>
                <Button text="Change Avatar" />
              </div>
            </div>
            <Button primary text="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
