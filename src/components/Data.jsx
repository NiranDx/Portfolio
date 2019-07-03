import React, { Component } from 'react';
var deleteBtnStyle = {
    float: "right"
}
//-------------------------Model for Update ----------------------------------------
const Modal = ({ children, updateFunction,
    closeModal, modalState, title }) => {
    if (!modalState) {
        return null
    }
    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        {children}
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success"
                        onClick={updateFunction}>
                        Save changes
                    </button>
                    <button className="button"
                        onClick={closeModal}>
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    );
}

class Data extends Component {
    constructor(props) {
        super(props);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onChange = this.onChange.bind(this);
        this.updateFunction = this.updateFunction.bind(this);
        this.state = {
            modalState: false,
            messageUpdate: props.msg
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState((prev, props) => {
            const newState = !prev.modalState;
            return { modalState: newState };
        });
    }
    //----------------------Update--------------------------------//

    updateFunction(e) {
        e.preventDefault();
        var obj = { message: this.state.messageUpdate };
        let dbCon = this.props.db.database().ref('/messages');
        dbCon.child(this.props.msgKey).update(obj)
            .then(() => this.toggleModal());
    }
    //----------------------Delete--------------------------------//
    onClickDelete(e) {
        e.preventDefault();
        let dbCon = this.props.db.database().ref('/messages');
        dbCon.child(this.props.msgKey).remove();
    }

    onChange(e) {
        this.setState({
            messageUpdate: e.target.value
        });
    }
    render() {
        return (
            <div>
                {this.props.message}
                <button style={deleteBtnStyle}
                    className="button is-danger"
                    onClick={this.onClickDelete}>
                    Delete
                </button>
                <button style={deleteBtnStyle}
                    className="button is-info"
                    onClick={this.toggleModal}>
                    Update
                </button>
                <Modal
                    updateFunction={this.updateFunction}
                    closeModal={this.toggleModal}
                    modalState={this.state.modalState}
                    title="Edit Message">
                    <table>
                        <tr>
                            <td>
                                Message
                            </td>
                            <td>
                                <textarea className="textarea"
                                    placeholder="Comment"
                                    cols="100"
                                    onChange={this.onChange}
                                    value={this.state.messageUpdate}>
                                </textarea>
                            </td>
                        </tr>
                    </table>
                </Modal>
            </div>
        )
    }
}
export default Data