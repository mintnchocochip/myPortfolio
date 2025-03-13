export default function checkToken() {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      return true
    }
  }
  return false
}
