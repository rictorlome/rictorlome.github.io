import React from 'react';

import './index.css'

interface IProps {
    "name": string;
    "category": string;
    "live": string;
    "github": string;
    "thumbnail": string;
    "thumbnailHeight"?: number;
    "description": string;
}

const CodingExample: React.FC<IProps> = (props) => {
    return (
        <section className="coding-example-section">
            <div className="coding-example-text">
                <h2>{props.name}</h2>
                <h3>Category : {props.category}</h3>
                <div>
                    <a className="coding-example-link" href={props.live}>Live Link</a>
                    <a className="coding-example-link" href={props.github}>Github Link</a>
                </div>
                <p className="coding-example-desc">{props.description}</p>
            </div>
            <div className="coding-example-img">
                <img style={{ height: props.thumbnailHeight }} className="coding-example-thumbnail" src={props.thumbnail} />
            </div>
        </section>
    )
}

CodingExample.defaultProps = {
    thumbnailHeight: 400
}

export default CodingExample