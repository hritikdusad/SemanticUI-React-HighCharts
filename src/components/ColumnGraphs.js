import React, { Component } from 'react';
import TotalActiveFunds from './TotalActiveFunds';
import NewClosedActiveFunds from './NewClosedActiveFunds';
import { Grid, Segment, Container } from 'semantic-ui-react';


export default class PieCharts extends Component {
    render() {
        return (
            <Container fluid>
                <Segment>
                    <Grid>
                        <Grid.Column floated='left' width={6}>
                            <NewClosedActiveFunds />
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <TotalActiveFunds />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        );
    }
}
