import { Component } from 'react'
import './app-filter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterType: 'all'
        }
    }

    onFilterClick  = (e) => {
        this.props.onFilterClick(e.target.name) 
        const buttons = document.querySelectorAll('.btn-group > .btn')
        buttons.forEach(item => {
            if (item.name === e.target.name) {
                item.className = "btn btn-light"
                this.setState({
                    filterType: item.name
                })
            }
            else {
                item.className = "btn btn-outline-light"
            }
            return item
        })
    }

    render() {
        return (
            <div className='btn-group'>
                <button className='btn btn-light' 
                type="button"
                name = "all"
                onClick={this.onFilterClick}>Все сотрудники</button>
                
                <button className='btn btn-outline-light' 
                type="button" 
                name = "forRise"
                onClick={this.onFilterClick}>На повышение</button>
                
                <button className='btn btn-outline-light' 
                type="button"
                name = "bigSalary"
                onClick={this.onFilterClick}>З/П больше $1000</button>
            </div>
        )
    }
}


export default AppFilter