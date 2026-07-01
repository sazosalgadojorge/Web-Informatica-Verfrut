import React from 'react'
import { Button } from '../ui'
import './Info.scss'

function Info({ title, description, imageSrc, imageAlt, buttonText, onClick }) {
    return (
            <div className="container-fluid info-section">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="img-fluid rounded"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="col-md-6 text-start p-5 info-section__copy">
                        <h1 className="info-section__title">{title}</h1>
                        <p className="lead fs-6 mb-4 text-secondary">{description}</p>
                        <Button variant="primary" onClick={onClick}>{buttonText}</Button>
                    </div>
                </div>
        </div>
    )
}

export default Info
