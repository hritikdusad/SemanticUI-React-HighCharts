import React, { Component } from 'react';
import ActiveInactiveFunds from './ActiveInactiveFunds';
import ActiveInactiveClients from './ActiveInactiveClients';
import { Grid } from 'semantic-ui-react';


export default class PieCharts extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                            <ActiveInactiveFunds />
                    </Grid.Column>
                    <Grid.Column width={8}>
                            <ActiveInactiveClients />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}