import React from 'react'
import CountUp from 'react-countup';

function Counter({ value }) {
    return (
        <CountUp start={0}
            end={value}
            duration={2.75} />
    )
}

export default Counter