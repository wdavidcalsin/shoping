import React from 'react';
import Slide from '../Slide/index';
import Container from '@material-ui/core/Container';
import CardLearn from '../CardLearn/index';

function Section(){
    return(
        <Container maxWidth="lg" >
            <Slide />
            <CardLearn />
        </Container>
    )
} 

export default Section;