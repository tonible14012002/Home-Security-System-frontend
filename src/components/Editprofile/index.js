import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
const EditProfile = () => {
  return (
    <div className=" bg-white bg-center rounded-lg p-5 tablet:p-12 relative">
      <div className="flex flex-col items-center justify-center leading-normal">
        <p className="font-bold text-3xl tablet:text-4xl mb-[50px] mt-[20px] text-center">
          User information
        </p>

        <form>
          <div className="flex flex-col gap-5 mb-[20px] min-w-[85vw] tablet:min-w-[500px]">
            <InputField field="Full Name" type="text" />
            <InputField field="Phone No" type="text" />
            <InputField field="Address" type="text" />
            <InputField field="Date of Birth" type="text" />
            <div class="flex w-full gap-5 text-mainBrown font-bold ">
              <label>Auto open door</label>
              <input class="w3-check" type="checkbox" />
            </div>
            <Button primary text="Update" />
          </div>
        </form>
      </div>
      <div className="absolute top-0 right-0">
        <XMarkIcon className="h-12 w-12 withHover" />
      </div>
    </div>
  );
};

export default EditProfile;
