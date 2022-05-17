import React, {useState} from 'react'
import './accordionHeight.scss'

function AccordionHeightItem({data}) {

const [isOpen, setIsOpen] = useState(false);
const toggleAccordion = () => {
 setIsOpen(!isOpen);   
}
  return (
    <div className='accordion-height-item'>
        <div onClick={() => toggleAccordion()}>
            {data.title}
        </div>
        <div className={`content ${isOpen ? 'isOpen' : ''}`}>
            {data.content}
        </div>
    </div>
  )
}

export default AccordionHeightItem