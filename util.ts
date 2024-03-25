export function onDownlod(root: Element | null) {
  if (root) {
    const url = location.href
    const isDetail = url.includes('song')
    let target = isDetail ? document.querySelector('h2') : root.querySelector('a')
    if (!target && !isDetail) {
      alert('You have not select any songs for the moment')
    }
    const link = isDetail ? url : target.href
    const index = link.indexOf('song')
    let id = link.slice(index + 5, link.length - 1)
    chrome.runtime.sendMessage({
      action: 'download',
      fileUrl: `https://cdn1.suno.ai/${id}.mp3`,
      fileName: `${target.innerText}.mp3`
    });
  } else {
    alert('Fail to parse the ID of song')
  }
}