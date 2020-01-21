import React from 'react';

function WeekSelector() {
    return(
        <div className="week-warpper">
            <select className='week-wrapper__selector' disabled="disabled" title="Disabled">
                <option>Week 1</option>
                <option>Week 2</option>
                <option>Week 3</option>
            </select>
        </div>
    )
}

export default WeekSelector;
