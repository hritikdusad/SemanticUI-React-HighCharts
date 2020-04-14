import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';



export default class DetailTable extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen: this.props.open
        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.setState({
            isModalOpen:false
        });
    }
    render() {
        return (
            <Modal open={this.state.isModalOpen}
                    onClose={this.handleClose}
                    >
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image scrolling>
              <Image size='medium' src='/images/wireframe/image.png' wrapped />
              <Modal.Description>
                <Header>Modal Header</Header>
                <p>
                  This is an example of expanded content that will cause the modal's
                  dimmer to scroll
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary>
                Proceed <Icon name='chevron right' />
              </Button>
            </Modal.Actions>
          </Modal>
        )
    }
}
