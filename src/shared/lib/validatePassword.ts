export function validatePassword(password: string) {
  return (/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,255}$/).test(password)
}