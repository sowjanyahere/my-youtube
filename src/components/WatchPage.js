import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import {  useSearchParams } from "react-router-dom";

const Watchpage = () => {
   const dispatch = useDispatch();
   const [searchParams] = useSearchParams();

    useEffect(()=>{
        console.log(searchParams.get("v"))
        dispatch(closeMenu())
    },[]);

    return <div>
        <h1>WatchPage</h1>
    </div>
}

export default Watchpage;