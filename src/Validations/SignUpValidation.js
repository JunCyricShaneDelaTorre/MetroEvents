function validation(values) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email ==="") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email does not match"
    }
    else {
        error.email = ""
    }

    if(values.password ==="") {
        error.password = "Password should not be empty"
    }
    else {
        error.password = ""
    }

    if(values.first_name ==="") {
        error.first_name = "Email should not be empty"
    } else {
        error.first_name = ""
    }

    if(values.last_name ==="") {
        error.last_name = "Email should not be empty"
    } else {
        error.last_name = ""
    }

    return error;
}

export default validation;