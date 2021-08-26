
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'


export const AddClasses = () => {
    // const onNameChangeEvent = event => {
    //     setData({ subject: event.target.value, classroom: data.classroom, slot: data.slot, group: data.group })
    // }

    // const onClassroomChange = event => {
    //     setData({ subject: data.subject, classroom: event.target.value, slot: data.slot, group: data.group })
    // }

    // const onSlotChange = event => {
    //     setData({ subject: data.subject, classroom: data.classroom, slot: event.target.value, group: data.group })
    // }

    // const onGroupChange = event => {
    //     setData({ subject: data.subject, classroom: data.classroom, slot: data.slot, group: event.target.value })
    // }

    // const onSubmit = event => {
    //     event.preventDefault();

    //     const url = 'http://localhost:3000/api/classes'
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     }
    // }
    return (
        <div>
            <h1>Add Classes</h1>
            <Form>
                <FormGroup>
                    <Label>Subject</Label>
                    <Input type="text" name="subject" ></Input>
                    <Label>Classroom</Label>
                    <Input type="text" name="classroom"></Input>
                    <Label>Slot</Label>
                    <Input type="text" name="slot"></Input>
                    <Label>Group</Label>
                    <Input type="text" name="group"></Input>
                    <Label>GoogleMeet</Label>
                    <Input type="text"></Input>
                </FormGroup>
                <Button type="Submit">Submit</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
            </Form>
        </div>
    )
}