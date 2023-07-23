import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function Button(props: Props) {
    return (
        <div>
            <button {...props} className='px-3 py-2 rounded-xl text-white bg-black'></button>
        </div>
    )
}

