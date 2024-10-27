/** @type {Object<string, HTMLElement>} */
const viewRefs = Array.from(document.querySelectorAll('.mgvView[id]')).reduce((dict, ref) => ({...dict, [ref.id]: ref}), {});
/** */
function onHashchange() {
  const route = location.hash.slice(1);
  if (!(route in viewRefs)) {
    location.hash = Object.keys(viewRefs)[0];
  }
}
if (Object.keys(viewRefs).length > 0) {
  window.addEventListener('hashchange', onHashchange);
  onHashchange();
}
