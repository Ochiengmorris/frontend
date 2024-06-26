import React from 'react'
import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'

function WorldMap() {
    return (
        <div className='m-auto w-[100%] h-[100%]'>
            <VectorMap map={worldMill} 
            containerStyle={{
                width: '500px',
                height: '400px'
            }}
            backgroundColor='#0f172a'/>
        </div>
    )
}

export default WorldMap
