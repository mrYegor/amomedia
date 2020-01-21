import React from 'react'

function DownloadItem() {
    const items = [
        'Download exercises',
        'Download instructions',
        'Download meal plan'
    ];

    return(
        items.map((item, index)=> {
            return (
                <div key={index} className="download">
                    <span>{item}</span>
                    <a href="#" onClick={e => {
                        e.preventDefault();
                        console.log(`${index}-${item}`)
                    }
                    }>
                        <img src={require("../img/download.png")} />
                    </a>
                </div>)
        })
    )
}

export default DownloadItem;
