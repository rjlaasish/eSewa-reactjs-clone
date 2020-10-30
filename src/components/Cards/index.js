import React from 'react';
import './style.css';


export default function ItemCard({cardImage,desc,offer,offerText}) {
    return (
        

        <div className="card-root">
            <img src={cardImage} alt="" className="card-img"/>
           {offer && <p className="optional-offer">{offerText}</p>} 
            <h5 className="card-details" style={{color:"grey",width:"150px",height:"29px",textAlign:"center"}}>{desc}</h5>
            <div className="view-detail-btn">
                <h5>View Details</h5>
                
            </div>
        </div>
        
    );
}
