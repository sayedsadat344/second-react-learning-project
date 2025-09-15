import React from 'react';
import padsData from "@/pad"
import PadButton from './PadButton';

const Pad = () => {

    const [pads, setPads] = React.useState(padsData);

    function toggle(id) {
        console.log("Toggle clicked: ",id);
    
        setPads((prevPads) =>
            prevPads.map((p) =>
                p.id === id ? { ...p, on: !p.on } : p
            )
        );
    }
    const buttonElements = pads.map(pad => (
       <PadButton key={pad.id} pad={pad} padColor={pad.color} togglePad={toggle}/>
    ))

  return (
    <main className='pad-main'>
    <div className="pad-container">
        {buttonElements}
    </div>
</main>
  );
};

export default Pad;



