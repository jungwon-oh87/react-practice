import React, { Fragment, useState, useRef } from 'react'

const mountedStyle = { animation: "inAnimation 250ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  // animationFillMode: "forwards"
};

function AccordionItem({ data, index }) {

  const [isOpen, setIsOpen] = useState(false);
  // const accordionContentRef = useRef();

const toggleAccordion = () => {
  let temp =  !isOpen;
  setIsOpen(temp);
}

  return (
    <div className='accordion-item'>
        <div className='accordion-title' onClick={() => toggleAccordion()}>
            <div>{data.title}</div>
            <button>{isOpen ? '-' : '+'}</button>
        </div>

        {
          isOpen && 
          <div className='accordion-content' style={isOpen ? mountedStyle : unmountedStyle}>
            { data.content }
          </div>
        }
    </div>
  )
}

export default AccordionItem