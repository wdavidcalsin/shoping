import React from 'react';
import Slide from '../Slide/index';
import Container from '@material-ui/core/Container';
import CardLearn from '../CardLearn/index';
import Category from '../Category/index';

function Section(){
    return(
        <Container maxWidth="lg" >
            <Slide />
            <CardLearn />
            <Category />
        </Container>
    )
} 

export default Section;