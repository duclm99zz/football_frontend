export default {
  required: v => !!v || 'This field is required',
  username: v => (!v || (/^(?=.{4,50}$)[A-Za-z0-9]+(?:[-_.][A-Za-z0-9]+)*$/.test(v))) || 'Username should be between 4 and 50 characters and can only contains alphanumeric characters, underscore and dot.',
  password: v => (!v || (v && v.length > 6 && v.length < 100)) || 'Password should be between 6 and 100 characters.',
  repeatPassword: pass => v => (!v || v === pass) || 'Repeat Password does not match Password.',
  email: v => (!v || (/^(?=.{4,100}$)\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/.test(v))) || 'Invalid Email address.',
  // mobile: (v) => {
  //   return (v && isValidPhoneNumber(v, 'VN')) || 'Invalid Mobile number.'
  // },
  name: v => (!v || (v && v.length > 2 && v.length < 100)) || 'Enter a string between 2 and 100 characters.',
  numeric: v => (v && !isNaN(v)) || 'Enter numbers only.',
  mfa: v => (!v || (v && (v.length === 6))) || 'Enter 6 digits code.',
  date: (v) => {
    const isISO8601 = /^\d{4}-\d{1,2}-\d{1,2}$/.test(v)
    return (v && isISO8601) || 'Invalid Date'
  },
  money: (v) => {
    if (!v) {
      return 'Enter number for money only.'
    }
    if (typeof v === 'number') {
      v += ''
    }
    if (v === '' || v.replaceAll(',', '') === undefined || !v.replaceAll()) {
      return 'Invalid Money'
    }
    const num = v.replaceAll(',', '')
    if (parseInt(num) === undefined) {
      return 'Invalid Money'
    }
    return (num && !isNaN(num)) || 'Enter number for money only.'
  }
}
