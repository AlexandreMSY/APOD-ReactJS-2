import React, { useEffect, useState } from "react";
import ApodDetails from "./ApodDetails";

var apiKey = import.meta.env.VITE_API_KEY

export default function GetApod(){
    const [date, setDate] = useState('')
    const [apiData, setApiData] = useState({
        url: "",
        explanation: "",
        title: "",
        date: ""
    })

    const changeDate = (event) => {
        setDate(event.target.value)
    }

    const fetchApiData = async (date) => {
        const url = date === undefined ? `https://api.nasa.gov/planetary/apod?api_key=${apiKey}` : `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}&`
        const response = await fetch(url)
        const data = await response.json()

        setApiData(prevData => prevData = data)
        console.log(data)
    }

    useEffect(() => {
        fetchApiData(date)
        console.log(date)
    }, [date])

    return(
        <div>
            <input type="date" name="date" id="date" value={date} onChange={changeDate}/>
            <ApodDetails 
                imageSrc = {apiData.url}
                title = {apiData.title}
                explanation = {apiData.explanation}
                date = {apiData.date}
            />
        </div>
    )
}