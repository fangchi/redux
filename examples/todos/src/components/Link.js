import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClickProp,onHover }) => (
    <button
       onClick={onClickProp}
       onMouseEnter={onHover}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClickProp: PropTypes.func.isRequired,
  onHover:PropTypes.func.isRequired
}

export default Link
