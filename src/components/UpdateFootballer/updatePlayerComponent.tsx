import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useDispatch } from "react-redux";

// Import update action for footballers
import { updateFootballerData } from "../../state/actions/footballerActions";

// Import Axios
import axios from "axios";

const UpdatePlayerComponent = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [team, setTeam] = useState();
    const [postValStatus, setPostValStatus] = useState(false);

    const changeNameHandler = (event: any) => {
        setName(event.target.value);
    }

    const changeAgeHandler = (event: any) => {
        setAge(event.target.value);
    }

    const changeTeamHandler = (event: any) => {
        setTeam(event.target.value);
    }

    const dataToBeFedToFootballersAPI = {
        name: name,
        age: age,
        team: team
    }

    const updateFootballPlayerData = async (event: any) => {
        event.preventDefault();

        await axios.put(`http://localhost:3000/api/footballers/${router?.query?.id}`, dataToBeFedToFootballersAPI)
            .then((response) => {
                console.log(response.data);
                dispatch(updateFootballerData(response.data));
                setPostValStatus(true)
            })
    }

    // useEffect(() => {
    //     console.log(router?.query?.id)
    // },[router.query])

    return (
        <>
        {
            (!postValStatus) 
            ?
            <> 
                <h2>Update player with ID: {router?.query?.id}</h2>
                <input
                    onChange={changeNameHandler} 
                    placeholder="Name"
                />
                <input
                    onChange={changeAgeHandler} 
                    placeholder="Age"
                />
                <input
                    onChange={changeTeamHandler} 
                    placeholder="Team"
                />
                <button onClick={updateFootballPlayerData}>Update</button>
            </>
            :
            <h2 onClick={() => {router.push("/")}}>Go to homepage</h2>
        }
        </>
    )
}

export default UpdatePlayerComponent;