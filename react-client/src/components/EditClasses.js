import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export const EditClasses = () => {
    return (
        <div>
            <h1>Edit Classes</h1>
            <Form>
                <FormGroup>
                    <Label>Subject</Label>
                    <Input type="text"></Input>
                    <Label>Classroom</Label>
                    <Input type="text"></Input>
                    <Label>Slot</Label>
                    <Input type="text"></Input>
                    <Label>Group</Label>
                    <Input type="text"></Input>
                    <Label>GoogleMeet</Label>
                    <Input type="text"></Input>
                </FormGroup>
            </Form>
        </div>
    )
}