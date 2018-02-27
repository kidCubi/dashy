import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.scss';

const Contact = (props) => {
    return (
        <div className={styles.ContactItem}>
            <span className={styles.Avatar}
                  style={{ backgroundImage: `url(${props.avatar})` }}
            />
            <div className={styles.ContactInfos}>
                <span className={styles.Name}>{props.name}</span>
                <div className={styles.ContactLinks}>
                    <a href={`tel:${props.tel}`} className={styles.Telephone}></a>
                    <a href={`sms:${props.tel}`} className={styles.Text}></a>
                    <a href={`mailto:${props.email}`} className={styles.Email}></a>
                </div>
            </div>
        </div>
    )
};

Contact.propTypes = {
    name: PropTypes.string,
    tel: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
};

export default Contact;