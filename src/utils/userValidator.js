import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export const validateSignupInput = data => {
  const errors = {};
  const {
    firstname, username, email, password, confirmPassword
  } = data;
  if (!validator.isEmpty(firstname)) {
    if (!validator.isLength(firstname, { min: 5 })) {
      errors.firstname = 'Full Name must be more than 5 characters but less than 20';
    }
  }

  if (!/^[a-zA-Z0-9 ]+$/.test(firstname)) {
    errors.firstname = 'FullName can only contains number and letters';
  }

  if (!validator.isEmpty(username)) {
    if (!/^[a-z]+$/.test(username)) {
      errors.username = 'Username can only be a lower case character(a-z), special characters and numbers are not allowed';
    }
  }
  if (!validator.isEmpty(password)) {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/.test(password)) {
      errors.password = 'Password should contain at least 8 characters: a lower case character(a-z), an uppercase character(A-Z) and special characters/symbols';
    }
  }
  if (!validator.isEmpty(confirmPassword)) {
    if (confirmPassword !== password) {
      errors.confirmPassword = 'Password must match';
    }
  } else {
    errors.confirmPassword = 'Try password again';
  }
  return Object.keys(errors).length === 0
    ? { errors, isValid: true }
    : { errors, isValid: isEmpty(errors) };
};

export const validateProperty = ({ name, value }) => {
  if (name === 'fullName') {
    if (!value) {
      return 'Full Name cannot be blank';
    }
    if (!validator.isLength(value, { min: 5 })) {
      return 'Full Name must be more than 5 characters but less than 20';
    }
  }

  if (name === 'email') {
    if (!value) {
      return 'Email cannot be blank';
    }

    if (!validator.isEmail(value)) {
      return 'Invalid email format';
    }
  }

  if (name === 'username') {
    if (!value) {
      return 'Username cannot be blank';
    }
    if (!/^[a-z]+$/.test(value)) {
      return 'Username can only be a lower case character(a-z), special characters and numbers are not allowed';
    }
  }

  if (name === 'password') {
    if (!value) {
      return 'Password cannot be blank';
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/.test(value)) {
      return 'Password should contain at least 8 characters, a lower case character(a-z), an uppercase character(A-Z) and special characters/symbols';
    }
  }

  if (name === 'confirmPassword') {
    if (!value) {
      return 'Try password again';
    }
  }
};
