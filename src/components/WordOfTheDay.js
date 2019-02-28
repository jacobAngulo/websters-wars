import React from 'react'

const WordOfTheDay = (props) => {
    return (
        <div>
            <p>{props.word}</p>
            <ul>
                {props.definitions.map((definition => {
                    return (
                        <li>{definition}</li>
                    )
                }))}
            </ul>
        </div>

    )
}

export default WordOfTheDay