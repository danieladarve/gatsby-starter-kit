import React from "react"
import PropTypes from "prop-types"

const Home = ({ children }) => (
  <section className="">
    <div className="intro">
      <h2>Heading</h2>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          sapien eros. Cras maximus lacinia dolor non cursus. Ut sit amet felis
          et mi volutpat eleifend quis quis metus. In a efficitur mi.
          Pellentesque vehicula tincidunt libero nec mollis.
        </p>
        {children}
      </div>
    </div>
  </section>
)

Home.propTypes = {
  children: PropTypes.node,
}

export default Home
