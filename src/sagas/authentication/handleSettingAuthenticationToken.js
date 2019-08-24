export default function ({ payload: token }) {
  window.localStorage.setItem('authenticationToken', token);
}
