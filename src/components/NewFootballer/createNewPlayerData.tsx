import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

// Import hooks provided by react-redux
import { useDispatch } from "react-redux";

// Import all actions and bind them
import { createFootballPlayerProfile } from "../../state/actions/footballerActions";

// Import React-Bootstrap components
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// Import styles
import styles from "./NewPlayer.module.css";

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

    const dataToBeFedToFootballersAPI = {
        name: name,
        age: age,
        team: team
    }

    const createNewPlayer = async (event: any) => {
        event.preventDefault()

        await axios.post(`http://localhost:3000/api/footballers`, dataToBeFedToFootballersAPI, config)
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
                    <h1
                        className={styles.mainHeader}
                    >
                        Add new football player
                    </h1>
                    <Container>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={6}>
                                <Form.Control
                                    className={styles.formBlock} 
                                    onChange={handleNameChange} 
                                    placeholder="Name"
                                />
                                <Form.Control 
                                    className={styles.formBlock}
                                    onChange={handleAgeChange} 
                                    placeholder="Age"
                                />
                                <Form.Control 
                                    className={styles.formBlock}
                                    onChange={handleTeamChange} 
                                    placeholder="Team"
                                /> 
                                <Button 
                                    className={styles.formSubmitButton}
                                    onClick={createNewPlayer}
                                >
                                    Create
                                </Button>
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                    </Container>
                </>
                : 
                <h2 
                    className={styles.mainHeader}
                    onClick={() => {router.push("/")}}
                >
                    Go to homepage
                </h2>
            }
        </>
    )
}

export default CreateNewPlayerProfileComponent;