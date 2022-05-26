import React from 'react'
import AccordionHeightItem from './AccordionHeightItem'

export default function AccordionHeight() {

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

    return (
        <div className='accordion'>
            {
                accordionData.map((e, index) => {
                    return <AccordionHeightItem key={index} data={e} />
                })
            }
        </div>
    )
}
