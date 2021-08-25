import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export const AddClasses = () => {
    return (
        <div>
            <h1>Add Classes</h1>
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
                <Button type="Submit">Submit</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
            </Form>
        </div>
    )
}