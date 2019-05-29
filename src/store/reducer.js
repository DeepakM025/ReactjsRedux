const initialState = {
  age :21,
  fnamesignup:'',
  lnamesignup: '',
  emailsignup: '',
  passwordsignup: '',
  repeatpsignup: '',
  emailsubmit: '',
  passwordsubmit: '',
  
  purpose:'',
  emailorphone: ''
}

const reducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
      case "EMAIL_SUBMIT":
      return Object.assign({}, state, {emailsubmit: action.text})

      break;
      case "PASSWORD_SUBMIT":
      return Object.assign({}, state, {passwordsubmit: action.text})

      break;

      case "SIGNUP_FNAME":
      return Object.assign({}, state, {fnamesignup: action.text})
      break;
      case "SIGNUP_LNAME":
      return Object.assign({}, state, {lnamesignup: action.text})
      break;
      case "SIGNUP_EMAIL":
      return Object.assign({}, state, {emailsignup: action.text})
      break;
      case "SIGNUP_PASSWORD":
      return Object.assign({}, state, {passwordsignup: action.text})
      break;
      case "SIGNUP_REPEATP":
      return Object.assign({}, state, {repeatpsignup: action.text})
      break;

      case "PURPOSE":
      return Object.assign({}, state, {purpose: action.text})
      break;
      case "EMAIL_PHONE":
      return Object.assign({}, state, {emailorphone: action.text})
      break;


  }
  return newState;
}

export default reducer;