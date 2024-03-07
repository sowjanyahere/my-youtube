import React from "react";
import Button from "./Button";
import {YOUTUBE_LIST_DATA} from '../utils/constants'

const ButtonsList = () => {
    return(
        <>
        <Button name={YOUTUBE_LIST_DATA} />
        </>
    );
}

export default ButtonsList;