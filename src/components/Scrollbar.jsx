import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const options ={
    damping : 0.07,
}


const Scroll = () => {

    useEffect(()=>{
Scrollbar.init(document.querySelector('about',  options));

    })

    return null;
}

export default Scroll;