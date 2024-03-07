import React, { useEffect, useState } from "react";

const VedioBox = ({info}) => {
    const {snippet,statistics} = info;
    const [windowDemsions,setWindowDemsions] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    });

    const handleScrollEvent = () => {
        setWindowDemsions({
            width:window.innerWidth,
        height:window.innerHeight
    })
    }

    useEffect((()=>{
        handleScrollEvent();
        console.log("window Size " +  windowDemsions.width + "*" + windowDemsions.height)
    }),[]);

    return(        
            <div onScroll={()=>{handleScrollEvent()}} className="p-2 border border-transparent hover:border-red-300  ">
            <img className="rounded-lg w-full" alt="vedio" src={snippet.thumbnails.medium.url} />
            <ul>
                <li className="font-bold py-2 title_text">{snippet.title}</li>
                <li className="">{snippet.channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VedioBox;