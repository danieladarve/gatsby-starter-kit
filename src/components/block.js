import React from "react"
import PropTypes from "prop-types"

const Block = ({ colour, children, id, ...props }) => {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  const extraClasses = props.class || ""

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props} id={id} className={`block ${colour} ${extraClasses}`}>
      {children}
    </div>
  )
}

Block.propTypes = {
  colour: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  props: PropTypes.any,
}

export default Block
