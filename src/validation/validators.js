const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const required = (str) => {
    if (str) {
        return null
    } else {
        return 'Required'
    }
}

export const validateEmail = (email) => {
    if (emailRegex.test(email)) {
        return null
    } else {
        return 'Wrong email'
    }
}

export const validatePassword = (pass) => {
    return pass.length >= 4 ? null : 'Too short password'
}

export const validateConfirmPassword = (pass) => {
    return
}

export const lowerCase = (value) => {
    return value && value.toLowerCase()
}

export const capitalizeWords = (value) => {
    const words = value.split(' ')
    for(word in words){
        
    }
    for (let i = 0, x = words.length; i < x; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ')
}