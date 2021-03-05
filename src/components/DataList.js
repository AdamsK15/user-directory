import React from 'react'

const DataList = (props) => {

    const { data, index } = props


    return (
        <div className='card'>
            <div className='card-info'>
                <h1 className='counter'>{data[index].id}/25</h1>
                <h1 className='Name'>{data[index].name.first} {data[index].name.last}</h1>
                <h5><b>From:</b> {data[index].city}
                    , {data[index].country}</h5>
                <h5><b>Job Title:</b> {data[index].title}</h5>
                <h5><b>Employer:</b> {data[index].employer}</h5>
                <h5 className='Movies'><b>Favorite Movies:</b> {data[index].favoriteMovies.map(elem => <li>{elem}</li>)}</h5>
            </div>

        </div>

    )

}

export default DataList