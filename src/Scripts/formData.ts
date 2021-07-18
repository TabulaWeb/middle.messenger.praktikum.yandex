export default function formdata() {
  const formData = new FormData(document.querySelector('#form'))
  const values = Object.fromEntries(formData.entries())
  console.log(values)
  return values
}
