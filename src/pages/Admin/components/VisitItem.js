import EButton from "../../../components/EButton"

const VisitItem = ({isRecent, id, uid, timestamp, fullName, phone, ...props}) => {
    const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const time = new Date(timestamp)
  
    return (
      <div className="grid gap-3 grid-cols-[50px_150px_300px_1fr_1fr] h-[30px] font-semibold">
        <div className=" text-rose-400">{isRecent && "New!"}</div>
        <div className="font-semibold">{id}</div>
        <div className="">{weekDay[time.getDay()]} {time.toLocaleString("en-US")}</div>
        <EButton
          className="hover:underline text-left" 
          to={`/user-details/${uid}`}
        >
          {fullName}
        </EButton>
        <div className="">{phone}</div>
      </div>
    )
  }
export default VisitItem