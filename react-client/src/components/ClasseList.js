import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Heading } from './Heading';

export const ClasseList = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     var requestOptions = {
    //         method: 'GET',
    //     };

    //     async function getData() {
    //         const response = await fetch('http://localhost:3000/api/classes', requestOptions);
    //         const result = await response.json();
    //         setData(result);
    //     };

    //     getData();
    // }, []);

    // console.log(data);

    return (
        <ListGroup className="mt-4">
            <Heading></Heading>
            <ListGroupItem className="d-flex">
                <strong> Grade 10 English</strong>
                <strong> Classroom : A3</strong>
                <strong> Slot : 3</strong>
                <strong> Group : 3</strong>
                <strong> GoogleMeet : http/google.meet.pvv-hahy-iei.com</strong>
            </ListGroupItem>

            <ListGroupItem className="d-flex">
                <strong> Grade 10 Afrikaans</strong>
                <strong> Classroom : C2</strong>
                <strong> Slot : 2</strong>
                <strong> Group : 2</strong>
                <strong> GoogleMeet : http/google.meet.pvv-hahy-iei.com</strong>
            </ListGroupItem>

            <ListGroupItem className="d-flex">
                <strong> Grade 10 History</strong>
                <strong> Classroom : B5</strong>
                <strong> Slot : 1</strong>
                <strong> Group : 4</strong>
                <strong> GoogleMeet : http/google.meet.pvv-hahy-iei.com</strong>
            </ListGroupItem>

            <ListGroupItem className="d-flex">
                <strong> Grade 10 Mathematics </strong>
                <strong> Classroom : B1</strong>
                <strong> Slot : 3</strong>
                <strong> Group : 1</strong>
                <strong> GoogleMeet : http/google.meet.pvv-hahy-iei.com</strong>
            </ListGroupItem>

            <ListGroupItem className="d-flex">
                <strong> Grade 10 Biology </strong>
                <strong> Classroom : B1</strong>
                <strong> Slot : 3</strong>
                <strong> Group : 1</strong>
                <strong> GoogleMeet : http/google.meet.pvv-hahy-iei.com</strong>
            </ListGroupItem>
        </ListGroup>
    )

}