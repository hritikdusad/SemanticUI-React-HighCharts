import React from 'react';
import {Header,Segment,Divider} from 'semantic-ui-react';

export default function Heading() {
    return (
       <div>
           <Segment inverted>
                <Header as='h1' textAlign='center' inverted color="blue">FAS DASHBOARD</Header>
            </Segment>
       </div>
    );
}
