import React from 'react'

function Columns() {
    const items = [
        {
            title: 'saranya',
            id: 1,
            description: 'describe'
        },
        {
            title: 'saru',
            id: 2,
            description: 'describe'

        },
         {
            title: 'Amar',
            id: 3,
            description: 'describe'

        },
    ]
    return (
        <React.Fragment>
        {
            items.map(
                item => (
                    <React.Fragment key = {item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </React.Fragment>
                )
            )
        }
            <td> name</td>
            <td>ssssss</td>
        </React.Fragment>
    )
}

export default Columns