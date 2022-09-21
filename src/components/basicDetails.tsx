import axios from "axios";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

// Import all actions and bind them
import { getFootballersData } from "../state/actions/footballerActions";

import Loader from "./loader";

// Add routing
import { useRouter } from "next/router";

const BasicDetails: React.FC = () => {
    const router = useRouter();

    const footballersData = useSelector((state: any) => state?.footballers?.footballersData);
    const dispatch = useDispatch();

    const fetchFootballers = async () => {
        await axios.get("http://localhost:3000/api/footballers")
        .then((res) => {
            dispatch(getFootballersData(res.data))
            console.log(res.data)
        })
    }

    useEffect(() => {
        fetchFootballers()
    },[])

    console.log(footballersData);
 
    return (
        <>
            <h1>Footballers:</h1>
            <h5 onClick={() => router.push("/newplayer")}>
                Add new players
            </h5>
            {
                (!footballersData && footballersData == undefined) ? 
                    <>
                        <Loader/>
                    </>
                    :
                    footballersData.map((individualPlayerData: any) => {
                        return (
                            <>
                                <h3>Name: {individualPlayerData.name}</h3>
                                <h4>Age: {individualPlayerData.age}</h4>
                                <h4>Team: {individualPlayerData.team}</h4>
                            </>
                        )
                    })  
            }
            
        </>
    )
}

export default BasicDetails;