import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'

class UserForm extends Component {

    renderInput = ({input, type, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input type={type} {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError = (meta) => {
        if (meta.error && meta.touched) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {meta.error}
                    </div>
                </div>
            )
        }
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (

            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="login" component={this.renderInput} label="Логин"/>
                <Field name="password" type="password" component={this.renderInput} label="Пароль"/>
                <Field name="firstName" component={this.renderInput} label="Имя"/>
                <Field name="lastName" component={this.renderInput} label="Фамилия"/>
                <button className="ui button primary">Submit</button>
            </form>

        );
    }
}

// Валидация формы
const validate = (formValues) => {
    const errors = {}

    if (!formValues.login) {
        errors.login = 'Login is empty'
    }

    if (!formValues.password) {
        errors.password = 'Password is empty'
    }

    if (!formValues.firstName) {
        errors.firstName = 'Name is empty'
    }

    if (!formValues.lastName) {
        errors.lastName = 'Last Name is empty'
    }

    return errors;
}

export default reduxForm({
    form: 'userForm',
    validate
})(UserForm);