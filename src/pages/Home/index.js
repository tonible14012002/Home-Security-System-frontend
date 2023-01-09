import moment from "moment";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import userApi from "../../api/userApi";
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { useAuthContext } from '../../context/AuthContext';
import { toast } from "react-toastify";

const Home = () => {
  const {user, setUser} = useAuthContext()
  const { register, handleSubmit , setValue} = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      address: user.address,
      birth: user.birth,
    },
  });

  const handleUpdateInfo = async (values) => {
    try {
      const res = await userApi.updateOrdinaryUser({id: user.id,...values })
      if(res && res.data) setUser(res.data)
      toast.success("Updated successfully!")
    } catch (error) {
      alert(JSON.stringify(error.data))
    }
  }

  useEffect(() => {
    if(user){
      setValue('first_name', user.first_name)
      setValue('last_name', user.last_name)
      setValue('phone', user.phone)
      setValue('address', user.address)
      setValue('birth', user.birth)
    }
  }, [user])

  return (
    <div className="mb-20">
      <div className="text-black text-center tablet:text-left tablet:px-[30px] desktop:px-64 pt-[40px] text-2xl tracking-wide">
        Welcome, <span className="font-bold">{user.last_name}!</span>
      </div>
      <div className="flex flex-col items-center justify-center leading-normal">
        <p className="font-bold text-4xl mb-[50px] mt-[70px] text-center">
          My information
        </p>

        <form onSubmit={handleSubmit(handleUpdateInfo)}>
          <div className="flex flex-col gap-5 min-w-[350px] max-w-[400px] w-[100%] tablet:min-w-[500px] mx-auto">
            <InputField
              register={register}
              name="first_name"
              field="First Name"
              type="text"
            />
            <InputField
              register={register}
              name="last_name"
              field="Last Name"
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
            
            <Button primary text="Update" />
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Home;
