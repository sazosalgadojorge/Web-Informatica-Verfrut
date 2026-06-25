import React from 'react'
import { Button } from '../ui'
import './Info2.scss'

function Info2({ title, description, imageSrc, imageAlt, buttonText, tag }) {
    return (
            <div className="container bg-light rounded-3">
                <div className="row align-items-center">
                    <div className="col-md-6 p-5">
                        <img 
                            src={imageSrc} 
                            alt={imageAlt}
                            className="rounded "
                            style={{ maxHeight: '450px', objectFit : 'contain' }}
                        />
                    </div>
                    <div className="col-md-6 text-start p-5">
                        <span className="tag-soluciones fw-bold text-primary mb-2">{tag}</span>
                        <h1 className="display-8 fw-bold mb-4">{title}</h1>
                        <p className="lead mb-4 text-secondary" style={{ fontSize: '1.0rem' }}>{description}</p>
                        <Button variant="dark">{buttonText}</Button>
                    </div>
                </div>
        </div>
    )
}

export default Info2