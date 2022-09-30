import axios from "axios";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

// Import all actions and bind them
import { getFootballersData } from "../../state/actions/footballerActions";

// Import Loader
import Loader from "../Loader/loader";

// Import React-Bootstrap Components
import { Card, Button, Container, Row, Col } from "react-bootstrap";

// Import CSS
import styles from "./BasicDetailsStyles.module.css";

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
            <h1 className={styles.mainHeader}>Footballers</h1>
            <h5 
                className={styles.newPlayerRoute}
                onClick={() => router.push("/newplayer")}
            >
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
                                <Container>
                                    <Row>
                                        <Col md={2}></Col>
                                        <Col md={8} className={styles.cardBlock}>
                                            <Card className={styles.playerCard}>
                                                <Card.Body>
                                                    <Card.Title>
                                                        Name: {individualPlayerData.name}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        Age: {individualPlayerData.age}    
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Team: {individualPlayerData.team}
                                                    </Card.Text>
                                                    <Button 
                                                        onClick={() => {redirectToUpdatePage(individualPlayerData.id)}}
                                                        className={styles.updateButton}
                                                    >
                                                        Update
                                                    </Button>
                                                    <Button 
                                                        onClick={() => {deleteFootballer(individualPlayerData.id)}}
                                                        className={styles.deleteButton}
                                                    >
                                                        Delete
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={2}></Col>
                                    </Row>
                                </Container>
                            </>
                        )
                    })  
            }
            
        </>
    )
}

export default BasicDetails;