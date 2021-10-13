import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import { CardActionArea } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        background: "",
        margin: '5px',
    },
    media: {
        height: 400,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: "bold",
        fontSize: '2rem',
        color: 'black',
    },
    desc: {
        fontFamily: 'Nunito',
        fontSize: '1rem',
        color: 'black',
    },
});

export default function ImageCard({ place }) {
    const classes = useStyles();

    return (
    <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image={place.imageURL}
            title="Create User"
        />
        <CardContent>
        <Typography 
        gutterBottom 
        variant= "" 
        component= "h3" 
        className= {classes.title}
        >
        {place.title}
        </Typography>
        <Typography 
        variant="" 
        component="p" 
        className={classes.desc}
        >
        {place.description}
        </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="medium" color="primary">
            {place.button}
        </Button>
        <Button size="medium" color="primary">
            {place.button1}
            </Button>
        <Button size="medium" color="primary">
            {place.button2}
        </Button>
    </CardActions>
    </Card>
    );
}