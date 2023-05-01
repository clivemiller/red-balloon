import sanititzeHtml from 'sanitize-html'
import { useState, useEffect } from 'react'

export default function Jobs() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch('https://run.mocky.io/v3/3cbadbe0-009c-4239-ac4f-e52068d2cd48?mocky-delay=2000ms')
      .then((jobs) => jobs.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })    
  }, [])

  if (isLoading) return  <div className="bg-gray-200 h-screen pt-48 "><p className='flex justify-center'>Loading</p><p className='flex justify-center animate-bounce animate-spin'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
</p></div>
  if (!data) return <p>Failed to get data</p>
  return (
    <div className="bg-gray-200">
            <header className="h-14">
            </header>
          <main className="bg-gray-200 h-screen">
            {
              data.data.map( (job) => 
                <Card 
                  title={job.title}
                  business_name={job.business_name}
                  city={job.city}
                  region={job.region}
                  posted_datetime={job.posted_datetime}
                  job_summary={job.job_summary}
                />
              )
            }
          </main>
          </div>
    )
}

export function Card(props) {
  const date_night = new Date(props.posted_datetime)
  return (
  <div className="flex justify-center drop-shadow-lg pt-5 ">
    <div className="flex items-center flex-col w-[500px] h-[188px] rounded-xl bg-white transition hover:scale-110">
      
      <h1 className="text-[22px] font-bold h-10 pt-6 p-9">{props.title}</h1>
  
      <h2 className="text-xs text-red-500 font-semibold mt-1 ml-20 mr-20 pb-4">
        {props.business_name} - {props.city}, {props.region} - {date_night.toLocaleDateString('en-US', {month: "long", day: "numeric", year: "numeric"})}
        </h2>
  
      <div dangerouslySetInnerHTML={{__html: sanititzeHtml(props.job_summary)}} className="text-[10px] text-center px-2 space-y-2 font-semibold flex-col justify-center line-clamp-4">
        
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

