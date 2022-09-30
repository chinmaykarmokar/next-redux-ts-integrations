import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useDispatch } from "react-redux";

// Import update action for footballers
import { updateFootballerData } from "../../state/actions/footballerActions";

// Import Axios
import axios from "axios";

// Import React-Bootstrap components
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

// Import styles
import styles from "./UpdatePlayer.module.css";

const UpdatePlayerComponent = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [team, setTeam] = useState();
    const [postValStatus, setPostValStatus] = useState(false);
    // const [singlePlayer, setSinglePlayer] = useState();

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

    // const getSingleFootballerData = async (parameter: any) => {
    //     await axios.get(`http://localhost:3000/api/footballers/${parameter}}`)
    //         .then((res) => {
    //             console.log(res.data)
    //             setSinglePlayer(res.data);
    //         })
    // }

    // useEffect(() => {
    //     if (router.isReady) {
    //         getSingleFootballerData(router?.query?.id)
    //     }
    // },[router.isReady])

    // console.log(singlePlayer);

    // useEffect(() => {
    //     console.log(router?.query?.id)
    // },[router.query])

    return (
        <>
        {
            (!postValStatus) 
            ?
            <> 
                <h2
                    className={styles.mainHeader}
                >
                    Update player with ID: {router?.query?.id}
                </h2>
                <Container>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Form.Control
                                className={styles.formField}
                                onChange={changeNameHandler} 
                                placeholder="Name"
                            />
                            <Form.Control
                                className={styles.formField}
                                onChange={changeAgeHandler} 
                                placeholder="Age"
                            />
                            <Form.Control
                                className={styles.formField}
                                onChange={changeTeamHandler} 
                                placeholder="Team"
                            />
                            <Button
                                className={styles.updateButton}
                                onClick={updateFootballPlayerData}
                            >
                                Update
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

export default UpdatePlayerComponent;