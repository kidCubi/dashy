import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import styles from './Contacts.module.scss';

import { connect } from 'react-redux';
import { setContactsLoaded } from '../../redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    setContactsLoaded: (loaded) => dispatch(setContactsLoaded(loaded))
});

class Contacts extends Component {
    constructor() {
        super();
        this.indents = [];
    }

    componentDidMount() {
        fetch("./assets/json/contacts.json")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    this.indents.push(<Contact
                        name={data[i].name.substring(0, 17)}
                        tel={data[i].tel}
                        email={data[i].email}
                        avatar={data[i].avatar}
                        key={i}
                    />);
                }
                this.props.setContactsLoaded(true);
            });
    }

    render() {
        return (
            <div className={styles.Wrapper}>
                {this.props.app.modulesLoaded.contactsLoaded &&
                <div className={styles.Contact}>
                    {this.indents}
                </div>
                }
            </div>
        );
    }
}

Contacts.propTypes = {
    children: PropTypes.array
};

export default connect(mapState, mapActions)(Contacts);