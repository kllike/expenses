const ExpanseDate = (props) => {
    const day = props.date.toLocaleString('en-EE', {day:'2-digit'})
    const month = props.date.toLocaleString('en-EE', {month:'long'})
    const year = props.date.getFullYear()
    return(
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}

export default ExpanseDate