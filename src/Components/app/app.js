import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

function App(){

    const data = [
        {name: 'Joht S.',   salary: 1100, increase: false, star:false, id: 1},
        {name: 'Mike J.',   salary: 1000, increase: true, star:true,  id: 2},
        {name: 'George W.', salary: 2000, increase: false, star:false, id: 3}
    ]

    return (
        <div className='app'>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;