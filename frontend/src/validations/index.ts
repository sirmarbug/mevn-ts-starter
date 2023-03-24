export const required = (v: string | number) => !!v || 'Field is required'
export const emailValidation = (v: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    v
  ) || 'Address E-mail invalid'
export const minChars = (min: number) => (v: string) => v.length >= min || 'Za mało znaków'
export const maxChars = (max: number) => (v: string) => v.length <= max || 'Za dużo znaków'
