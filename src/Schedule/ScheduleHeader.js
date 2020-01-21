import React from 'react'

function ScheduleHeader() {
    return(
        <div className="schedule__header">
                <div>Breakfast</div>
                <div>1st snack</div>
            <div className="grouped-dishes">
                <h4>Lunch</h4>
                <div>Main Dish</div>
                <div>Side Dish</div>
            </div>
            <div>2nd snack</div>
            <div className="grouped-dishes">
                <h4>Dinner</h4>
                <div>Main Dish</div>
                <div>Side Dish</div>
            </div>
        </div>
    )
}

export default ScheduleHeader
