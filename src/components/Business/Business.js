import React from 'react';
import './Business.css';


export default function Business(props) {
    return (
        <div>
            <a style={{ textDecoration: 'none', color: 'black'}} href={props.business.url} target="_blank" rel="noreferrer">
            <div className="Business">
                <div className="image-container">
                    <img src={props.business.imageSrc} alt={props.business.name}/>
                </div>
                <h2>{props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                    <p>{props.business.address}</p>
                    <p>{props.business.city}</p>
                    <p>{`${props.business.state} ${props.business.zipcode}`}</p>
                    </div>
                    <div className="Business-reviews">
                    <h3>{props.business.category.toUpperCase()}</h3>
                    <h3 className="rating">{props.business.rating}</h3>
                    <p>{props.business.reviewCount}</p>
                    </div>
                </div>
            </div>    
            </a>
        </div>
    )
}
