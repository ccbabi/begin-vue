export default () => {
  const div = document.createElement('div')
  return document.body.insertAdjacentElement('afterbegin', div)
}
