import React from 'react'
import PropTypes from 'prop-types'

// THIS IS A STATELESS FUNCTIONAL COMPONENT
// you use it when you just pass data to it
// and you don't need it to be more than just a render.
// so you're not using the this.props anymore, just props.

const Header = props => (
  <header className='top'>
    <h1>Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className='tagline'>
      <span>{props.tagline}</span>
    </h3>
  </header>
)

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

// THIS IS A REGULAR COMPONENT 

// class Header extends React.Component {
//   render() {
//     return (
//       <header className='top'>
//         <h1>Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className='tagline'>
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     )
//   }
// }

export default Header