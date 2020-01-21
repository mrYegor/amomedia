import React from 'react';
import ScheduleItem from './ScheduleItem'

function Schedule(props) {
    const styles = {
        gridWrapper: {
            display: 'grid',
            gridTemplateColumns: `repeat(${props.columns[0]}, 1fr)`,
            gridTemplateRows: `repeat(${props.rows[0]}, 1fr)`,
        }
    };

    return(
        <div className="schedule" style={styles.gridWrapper}>
            {
                props.schedule.map((schedule, index) => {
                    return (
                        <ScheduleItem schedule={schedule} key={index}/>
                        )
                })
            }
        </div>
    )
}

export default Schedule;
