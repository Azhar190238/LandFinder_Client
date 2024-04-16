import { useEffect } from "react";


const UseTitle = (title) => {
    useEffect(()=>{
        document.title=`Land | ${title}`
    },[])
};

export default UseTitle;