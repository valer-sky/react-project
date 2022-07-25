import React from "react"
import ContentLoader from "react-content-loader"

const Sleleton: React.FC = (props: any) => (
  <ContentLoader
    className='beer-block'
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="16" y="10" rx="15" ry="15" width="250" height="250" />
    <rect x="83" y="85" rx="0" ry="0" width="5" height="40" />
    <rect x="7" y="275" rx="0" ry="0" width="50" height="0" />
    <rect x="0" y="276" rx="10" ry="10" width="280" height="27" />
    <rect x="-4" y="316" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="417" rx="10" ry="10" width="92" height="30" />
    <rect x="124" y="410" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Sleleton