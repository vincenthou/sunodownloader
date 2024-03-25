import type { PlasmoCSConfig, PlasmoGetInlineAnchorList, PlasmoGetStyle } from "plasmo"
import { onDownlod } from "~util"

export const getInlineAnchorList: PlasmoGetInlineAnchorList = () => document.querySelectorAll('[aria-label="share-button"]')

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = `
    .download-button {
      display: inline-flex;
      align-items: center;
      border-radius: 0.375rem;
      background: none;
      padding: 0 12px;
      height: 30px;
    }
    .download-button:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.24);
    }
    .download-icon {
      fill: currentColor;
      color: rgb(119, 186, 153);
    }
  `
  return style
}

const PlasmoInline = (props) => {
  const { element } = props.anchor
  const onClick = () => {
    const parentNode = element?.parentNode
    let root = parentNode?.previousSibling
    if (!parentNode.className.includes('song-card-bottom-bar')) {
      root = parentNode?.parentNode?.parentNode?.previousSibling?.previousSibling
    }
    onDownlod(root)
  }
  return (
    <a className="download-button">
      <svg className="download-icon" width="18.75" height="18.75" viewBox="0 0 24 24" aria-hidden="true" onClick={onClick}>
        <g>
          <path d="M11.99 16l-5.7-5.7L7.7 8.88l3.29 3.3V2.59h2v9.59l3.3-3.3 1.41 1.42-5.71 5.7zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
        </g>
      </svg>
    </a>
  )
}

export default PlasmoInline