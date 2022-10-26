import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggelProp}) => {

    const elements = data.map(item => {

        const {id, ...itemProps} = item
        
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggelProp = {(e) => onToggelProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )

    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;