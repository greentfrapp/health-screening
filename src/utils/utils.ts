export function targetBlank() {
  const anchors = document.getElementsByTagName('a')
  for (var i = 0; i < anchors.length; i++) {
    // Navbar links should not open in new page
    if (anchors[i].href.startsWith(location.protocol + '//' + location.hostname)) continue
    anchors[i].setAttribute('target', '_blank')
  }
}
