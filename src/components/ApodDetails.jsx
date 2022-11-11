import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function ApodDetails(props){
    return(
        <div className="d-flex flex-column align-items-center text-center p-2">
            {props.mediaType === "image" ? 
                <figure>
                    <img src={props.url} alt={props.title} className="img-fluid border"/>
                </figure> 
                :
                <div class="ratio ratio-16x9">
                    <iframe src={props.url}/>
                </div>
            }
            <article>
                <h2>{props.title}</h2>
                <p className="text-start">
                    {props.explanation}
                </p>
            </article>
            <footer>
                <p>{props.date}</p>
                <p>{props.copyright}</p>
                <figure>
                    <a href="https://github.com/AlexandreMSY/APOD-ReactJS-2">
                        <img src="https://raw.githubusercontent.com/AlexandreMSY/APOD-ReactJS/main/src/components/github.png" alt="GitHub repository" style={{width: "10%"}}/>
                    </a>
                </figure>
            </footer>
        </div>
    )
}