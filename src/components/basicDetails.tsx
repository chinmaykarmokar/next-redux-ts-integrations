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

    // Redirect to update page
    const redirectToUpdatePage = (params: number) => {
        console.log(params);
        router.push({
            pathname: "/updateplayer",
            query: { id: params }
        })
    }

    // Delete Footballer
    const deleteFootballer = (params: any) => {
        console.log(params);
        axios.delete(`http://localhost:3000/api/footballers/${params}`)
        console.log("Values deleted successfully");
        router.reload();
    }
 
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
                                <button onClick={() => {redirectToUpdatePage(individualPlayerData.id)}}>
                                    Update
                                </button>
                                <button onClick={() => {deleteFootballer(individualPlayerData.id)}}>
                                    Delete
                                </button>
                            </>
                        )
                    })  
            }
            
        </>
    )
}

export default BasicDetails;