import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function ApodDetails(props){
    return(
        <div className="d-flex flex-column align-items-center text-center">
            <figure>
                <img src={props.imageSrc} alt="image" className="img-fluid"/>
            </figure>
            <article>
                <h2>{props.title}</h2>
                <p className="text-start">
                    {props.explanation}
                </p>
            </article>
            <footer>
                <p>{props.date}</p>
                <a href="#">Click here</a>
            </footer>
        </div>
    )
}