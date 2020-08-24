import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import {nameTypes} from './../types/types'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));







const Name = ({getNameFunc}:nameTypes) => {
    const [name,setName]=useState('')
    const classes = useStyles();
    return (
        <div>
            <form onSubmit={(e)=>{getNameFunc(name)}} className={classes.root} noValidate autoComplete="off">
                <TextField onChange={(e)=>{setName(e.target.value)}} id="standard-basic" label="Enter Your Name" /><br/>
                <Button type="submit" variant="contained" color="primary">
                    Primary
      </Button>

            </form>

        </div>
    )
}
export default Name