import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory.js' // For some reason had to write the .js
import sampleFishes from '../sample-fishes'
import Fish from './Fish'


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish) => {
    // 1. Take a copy of the state, never update an existing one, it's called mutation.
    const fishes = { ...this.state.fishes }
    // 2. Add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish
    // 3. Set the new fishes object to state
    this.setState({
      fishes
    })
  }

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  }

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order }
    // 2. Or add or update the quantity in the order
    order[key] = order[key] + 1 || 1
    // 3. Call setState to update our state object
    this.setState({ order })
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className="menu">
          <Header tagline='Fresh Seafood Market'/>
          <ul className="fishes">
            { Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key} 
                index={key}
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder} 
              />) 
              ) 
            }
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes}
          order={this.state.order}          
        />
        <Inventory 
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}  
        />
        
      </div>
    )
  }
}

export default App