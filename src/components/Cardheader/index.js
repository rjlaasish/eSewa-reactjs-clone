import React from 'react'
import './style.css';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Cardheader({header}) {
    return (
        <div>
            <div className="card-header-contents">
            <h4 >{header}</h4>
            <div className="view-all-btn">
                <h6>View more</h6>
                <ChevronRightIcon/>
            </div>
            </div>
        </div>
    )
}

export default Cardheader
