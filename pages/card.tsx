export function Card(props) {
return (
<div className="flex drop-shadow-lg pt-5 justify-center transition hover:scale-110">
  <div className="flex w-[500px] h-[188px] rounded-xl bg-white items-center flex-col">
    
    <h1 className="text-[22px] font-bold text-black h-10 pt-6 p-9">{props.title}</h1>

    <h2 className="text-xs text-red-500 font-semibold mt-1 ml-20 mr-20 pb-4">{props.business_name} - {props.city} - {props.posted_datetime}</h2>

    <div className="text-[10px] text-center px-2 space-y-2 font-semibold flex-col justify-center">
      <h3>{props.job_summary}</h3>
    </div>

    <div className="absolute bottom-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-3 h-3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </div>

  </div>
</div>
)
}
