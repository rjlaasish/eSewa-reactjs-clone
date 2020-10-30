import React from 'react'
import './style.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Cardheader from '../Cardheader'


export default function RowItem({header,children}) {
    return (
        <div className="row " >
            
            <Cardheader header={header}/>
            <div className="flex my-10 jcsb " style={{position:"relative" ,marginBottom:"40px",marginTop:"10px"}}>
                <div className="slide-right">
                    <KeyboardArrowRightIcon/>
                </div>
           {children}
            </div>
        </div>
    )
}
