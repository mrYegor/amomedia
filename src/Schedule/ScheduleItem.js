import React from 'react';

function ScheduleItem({schedule}) {


    return(
        <div className="schedule__item">
            {schedule.src ? <img src={require(`../img/${schedule.src}`)}/> : ''}
            <div className='shadow-overlay'></div>
            <span>{schedule.text}</span>
        </div>
    )
}

export default ScheduleItem
