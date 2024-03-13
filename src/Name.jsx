import { useState } from 'react';

export default function NameFunc({ first, last }) {

    const [visible, setVisible] = useState(false);
    if (visible) {
        return <span> {first} {last} </span>
    } else {
        return <span onClick={()=>setVisible(true)}> click to show </span>
    }

    
}