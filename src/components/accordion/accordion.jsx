import React from 'react'
import AccordionItem from './AccordionItem';
import './accordion.scss'

function Accordion() {
    const accordionData = [
            {
                title: 'Section 1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium culpa, voluptate nostrum architecto voluptatibus, numquam laboriosam error temporibus aliquam inventore fugit corporis illo dicta harum? Tempore qui tenetur itaque.'
            },

            {
                title: 'Section 2',
                content: 'This is section two content'
            }
        ]
        

    // const { title, content } = accordionData;

  return (
    <div className='accordion'>
        
        {
            accordionData.map((element, idx) => {
                return <AccordionItem key={idx} data={element} index={idx}/>
            })
        }

       
    </div>
  )
}

export default Accordion
