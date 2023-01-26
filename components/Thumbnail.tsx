import React from 'react'
import Event from '../typings'

interface Props {
    event: Event,
    width: number
}

function Thumbnail({event, width}: Props) {

  return (
    <div 
    className="border-2 mx-[10px] my-[10px] h-[500px] w-[100%] max-w-[500px] cursor-pointer rounded-md"
    >

      {/* thumbnail photo */}
      <div 
        style={{backgroundImage: `url(${event.media[0].url})`}}
        className={`bg-cover h-[50%] w-100% rounded-t`}>
      </div>

      {/* lower half */}
      <div className={`h-[250px] font-semibold p-[10px]`}>
        {/* name part */}
        <div className={`h-[125px]`}>
          <p className='text-blue-500 text-xs'> {event.type} </p>
          <p className='font-bold text-2xl'>{event.name}</p>
        </div>
        {/* price and other specifics */}
        <div className={`relative grid grid-cols-2 h-[125px]`}>
          <div className='absolute left-[10px] bottom-[30px]'>
            <p>{event.min_trip_start_date}</p> {/* nie wiem czy to parwidłowy start date*/}
            {
              (event.durations[0]=='1') && <p>{event.durations[0]} dzień</p> ||
              (event.durations[0]!='1') && <p>{event.durations[0]} dni</p>
            }
            <p>{event.location.city}</p>
          </div>

          <div className='absolute right-[10px] bottom-[30px] text-2xl font-bold text-blue-800'>
            {/* tu jeszcze by mogło być np od 320zł gdy porównanie price_min i max są różne */}
            {event.min_price} zł
          </div>
        </div>
      </div>

    </div>




  )
}

export default Thumbnail


