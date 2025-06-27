import React from 'react'
import ProDetailItem from './ProDetailItem'

const ProDetail = ({ data }) => {
    return (
        <div>
            <ProDetailItem  {...data} />
        </div>
    )
}

export default ProDetail