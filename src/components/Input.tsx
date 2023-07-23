import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

export default function Input(props: Props) {
    return (
        <div>
            <input {...props} className='w-full px-3 py-2 rounded-xl border border-gray-500' type="text" />
        </div>
    )
}


