import React from 'react';
import './BusinessList.css';
import Business from "../Business/Business";

export default function BusinessList(props) {
    return (
        <div>
            <div className="BusinessList">
                {
                    props.businesses.map(business => {
                        return <Business key={business.id} business={business}/>
                    })
                }
            </div>   
        </div>
    )
}
