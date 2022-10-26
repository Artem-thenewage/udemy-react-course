import { Component } from 'react'
import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Joht S.',   salary: 1100, increase: false, rise:true, id: 1},
                {name: 'Mike J.',   salary: 1000, increase: true, rise:false,  id: 2},
                {name: 'George W.', salary: 2000, increase: false, rise:false, id: 3}
            ]
        }
        this.maxId = 4; 
    }

    onToggelProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]}
                    }
                    return item
                    }
                )
        }))
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addUser = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise:false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        const increased = this.state.data.filter(item => item.increase === true).length
        const employees = this.state.data.length
        return(
            <div className='app'>
                <AppInfo 
                increased={increased}
                employees={employees} />
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}
                    onToggelProp={this.onToggelProp}/>
                <EmployeesAddForm
                    onSubmit={this.addUser}/>
            </div>
        )
    }
}

export default App;