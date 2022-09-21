import axios from "axios";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

// Import all actions and bind them
import { getFootballersData } from "../state/actions/dummyDataActions";

import Loader from "./loader";

// Add routing
import { useRouter } from "next/router";

const BasicDetails: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        },1000)
    },[])

    const footballersData = useSelector((state: any) => state?.dummyData?.dummyData);
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        await axios.get("http://localhost:3000/api/footballers")
        .then((res) => {
            dispatch(getFootballersData(res.data))
            console.log(res.data)
        })
    }

    useEffect(() => {
        fetchUsers()
    },[])

    console.log(footballersData);
 
    return (
        <>
            {
                (!footballersData && footballersData == undefined) ? 
                    <Loader/>
                    :
                    footballersData.map((individualData: any) => {
                        return (
                            <>
                                <h3>Name: {individualData.name}</h3>
                                <h4>Age: {individualData.age}</h4>
                                <h4>Team: {individualData.team}</h4>
                            </>
                        )
                    })  
            }
            
        </>
    )
}

export default BasicDetails;