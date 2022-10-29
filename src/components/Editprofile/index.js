import Button from '../../components/Button';
import InputField from '../../components/InputField';
const EditProfile = () => {
  return (
    <div>
        <div className=" bg-white bg-center rounded-lg"> {
              <div className="flex flex-col items-center justify-center leading-normal">
              <p className="font-bold text-4xl mb-[50px] mt-[70px] text-center">
                User information
              </p>
          
              <form>
              
                <div className="flex flex-col gap-5 mb-[50px] tablet:min-w-[500px]">
                 <div className='flex flex-col gap-5 mx-auto '>
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
                </div>
              
              </form>
         
            </div>
        }

      </div>
    </div>
  );
};

export default EditProfile;
