import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const TeachersList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
        };

        async function getData() {
            const response = await fetch('http://localhost:8000/api/teachers', requestOptions);
            const result = await response.json();
            setData(result);
        };

        getData();
    }, []);

    console.log(data);

    return (
        <ListGroup className="mt-4">
            {data.map(teacher => (
                <ListGroupItem className="d-flex">
                    <strong>{teacher.name}</strong>
                    <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to="/teacher/edit/1">Edit</Link>
                        <Button>Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}