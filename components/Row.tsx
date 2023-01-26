import React from 'react'
import EventType from '../typings.d'
import Thumbnail from './Thumbnail'

interface Props {
    events: EventType[],
    screenWidth: number,
    reverseFlow: boolean,
}

function Row({events, screenWidth, reverseFlow}: Props) {
  const nrOfEvents = events.length;
  const width = screenWidth / nrOfEvents;

  return (

<div className=" space-y-0.5 md:space-y-2 ">
  <div className="group relative md:-ml-2 ">
    <div className={`flex scrollbar-hide w-full overflow-x-scroll ${reverseFlow == true ? 'flex-col': ''}`}>
          {/*style={{flexDirection: 'column'}}> */}
          {events.map((event) => (
              <Thumbnail key={event.id} event = {event} width={width} />
          ))}
    
    </div>
  </div>
</div>


  )
}

export default Row