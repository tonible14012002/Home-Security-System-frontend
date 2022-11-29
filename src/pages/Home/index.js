import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import ModalLayout from '../../layouts/ModalLayout';
import EditProfile from '../../components/Editprofile';
import { useForm } from 'react-hook-form';
import userApi from '../../api/userApi'

const Home = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      phoneNo: '',
      address: '',
      dateOfBirth: '',
    },
  });

  const submit = async (data) => {
      const result = await userApi.updateUserById({id:13, ...data})
      console.log(result)
  }


  return (
    <div className="mb-20">
      <div className="text-black text-center tablet:text-left tablet:px-[30px] desktop:px-64 pt-[40px] text-2xl tracking-wide">
        Welcome, <span className="font-bold">User!</span>
      </div>
      <div className="flex flex-col items-center justify-center leading-normal">
        <p className="font-bold text-4xl mb-[50px] mt-[70px] text-center">
          My information
        </p>

        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col gap-5 min-w-[350px] max-w-[400px] w-[100%] tablet:min-w-[500px] mx-auto">
            <InputField
              register={register}
              name="fullname"
              field="Full Name"
              type="text"
            />
            <InputField
              register={register}
              name="phone"
              field="Phone No"
              type="text"
            />
            <InputField
              register={register}
              name="address"
              field="Address"
              type="text"
            />
            <InputField
              register={register}
              name="birth"
              field="Date of Birth"
              type="date"
            />
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
      {/* <ModalLayout>
        <EditProfile> </EditProfile>
      </ModalLayout> */}
    </div>
  );
};

export default Home;
