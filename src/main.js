const baseUrl = "http://localhost:8088/";
const expandedUrl = "employees?_expand=department&_expand=computer"

const getAllEmployeeInfo = () => {
    return fetch(baseUrl + expandedUrl)
        .then(resp => resp.json())
}

const employeeFactory = employee => {
    return `
    <article class="employee">
        <div class="employee_name">
            <h1>Name: ${employee.name}</h1>
        </div>
        <div class="employee_department">
            <h4>Department: ${employee.department.department}</h4>
        </div>
        <div class="employee_computer">
            <p>Computer: ${employee.computer.computer}</p>
        </div> 
    </article>
    `;
}

const renderEmployees = employees => {
    const employeeInfoCards = document.querySelector("#employee_cards");
    employees.forEach(employee => {
        employeeInfoCards.innerHTML += employeeFactory(employee);
    })
}

getAllEmployeeInfo().then(employees => {
    renderEmployees(employees)
});