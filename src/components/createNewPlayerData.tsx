import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useDispatch } from "react-redux";

// Import all actions and bind them
import { createFootballPlayerProfile } from "../state/actions/dummyDataActions";

const CreateNewPlayerProfileComponent: React.FC = ( ) => {
    const router = useRouter();

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [team, setTeam] = useState();
    const [postValStatus, setPostValStatus] = useState(false);

    const dispatch = useDispatch();

    // Handle input field change
    const handleNameChange = (event: any) => {
        setName(event.target.value);
    }

    const handleAgeChange = (event: any) => {
        setAge(event.target.value);
    }

    const handleTeamChange = (event: any) => {
        setTeam(event.target.value);
    }

    const config = {
        headers: { 
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': "*"
        }
    }

    const dataToBeFedToDummyAPI = {
        name: name,
        age: age,
        team: team
    }

    const createNewPlayer = async (event: any) => {
        event.preventDefault()

        await axios.post(`http://localhost:3000/api/footballers`, dataToBeFedToDummyAPI, config)
        .then((response) => {
            dispatch(createFootballPlayerProfile(response.data))
            console.log(response.data)
            setPostValStatus(true);
        })
    }

    return (
        <>
            {
                (!postValStatus) 
                ?
                <>
                    <h1>Add new football player:</h1>
                    <input onChange={handleNameChange} placeholder="Name"/>
                    <input onChange={handleAgeChange} placeholder="Age"/>
                    <input onChange={handleTeamChange} placeholder="Team"/> 
                    <button onClick={createNewPlayer}>+</button>
                </>
                : 
                <h2 onClick={() => {router.push("/")}}>Go to homepage</h2>
            }
        </>
    )
}

export default CreateNewPlayerProfileComponent;