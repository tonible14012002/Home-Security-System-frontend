
const UserItemSkeleton = () => {
    return (
        <div className='grid grid-cols-[100px_1fr_1fr_200px_200px] w-full text-[#9F8772]'>
            <div className='h-[60px] font-semibold flex justify-center items-center text-transparent text-center'>
                <div className="bg-[#D9D9D9] rounded-md animate-pulse h-fit p-1">temp</div>
            </div>
            <div className='h-[60px] font-semibold flex justify-center items-center text-transparent pl-5'>
                <div className="bg-[#D9D9D9] rounded-md animate-pulse h-fit p-1">temptemp temptemp temptemptemp</div>
            </div>
            <div className='h-[60px] font-semibold flex justify-center items-center text-transparent pl-5'>
                <div className="bg-[#D9D9D9] rounded-md animate-pulse h-fit p-1">tetemptempmp temptemp</div>
            </div>
            <div className='h-[60px] font-semibold flex justify-center items-center text-transparent pl-5'>
                <div className="bg-[#D9D9D9] rounded-md animate-pulse h-fit p-1">ttemptempemp</div>
            </div>
            <div className='h-[60px] font-semibold flex justify-center items-center text-transparent text-center'>
            </div>
        </div>
    )
}

export default UserItemSkeleton