import React from 'react'

function GridItem({ title, children }) {
    return (
        <div className='flex flex-col items-center justify-center py-4 px-0 border border-slate-900 bg-slate-900 rounded-xl h-[400px]'>
            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            {children}
        </div>
    )
}

export default GridItem
