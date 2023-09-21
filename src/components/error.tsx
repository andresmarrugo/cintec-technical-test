import React from 'react'

type Props = {
    message: string
}

function Error({ message }: Props) {
    return (
        <span className='text-red-500 bg-red-300'>{message}</span>
    )
}

export default Error