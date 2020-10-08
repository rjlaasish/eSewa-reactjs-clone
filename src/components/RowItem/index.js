import React from 'react'

import CardHeader from '../Cardheader';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";



export default function RowItem({header,children}) {
    return (
        <div className="row " >
             <div className="card-header-contents " style={{marginTop:"30px"}}>
            <h4 >{header}</h4>
            <div className="view-all-btn">
                <h6>View more</h6>
                <ChevronRightIcon/>
            </div>
            </div>
            <div className="flex my-10 jcsb ">
           {children}
            </div>
        </div>
    )
}
