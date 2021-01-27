import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'

export default function () {

    const {query} = useRouter()
    
    const [user, setUser] = useState([])

    const  timeConverter = (UNIX_timestamp) =>{
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + ' ' + month + ' ' + year;
        return time;
      }


    useEffect(async () => {
        const response = await fetch(`https://600ebff33bb1d100179e005a.mockapi.io/${query.id}`)
        const data = await response.json()
        setUser(data)
    }, [])

    return (
        <div>{user.map(el => (
            <div className="wrapper">
                <img src={el.picture} className="wrapper__img" />
                <div className="user">
                    <div className="user__name">{el.name}</div>
                    <div className="user__date">Date of birdth</div>
                    <div className="user__date">{timeConverter(el.dateOfBirth)}</div>
                    <div className="user__date">Age</div>
                    <div className="user__date">{new Date().getFullYear() - el.yearOfBirth}</div>
                </div>
            </div>
        ))}</div>
    )
}