import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { StudentHeading } from './StudentHeading';

export const Students = () => {


    return (

        <ListGroup className="mt-4">
            <StudentHeading></StudentHeading>
            <ListGroupItem className="d-flex">
                {/* <Image href="https://image.shutterstock.com/image-photo/high-school-student-260nw-417499321.jpg"></Image> */}
                <strong>Lynne Brock</strong>
                <strong> classes: [12, 13, 15, 16, 18, 19]</strong>
            </ListGroupItem>

            <ListGroupItem className="d-flex">
                {/* <Image href="https://c.stocksy.com/a/gV3000/z9/13496.jpg"></Image> */}
                <strong>Jeffery Medina</strong>
                <strong> classes: [21, 24, 25, 27, 28,
                    30]</strong>
            </ListGroupItem>

            <ListGroupItem className="d-flex">
                {/* <Image href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8oI9Sgg3rpNR94MHlYzI4fbug1nIcxRGOg&usqp=CAU"></Image> */}
                <strong>Ian Reid</strong>
                <strong> classes: [1, 3, 5, 6, 7, 9]</strong>
            </ListGroupItem>

        </ListGroup>
    )

}