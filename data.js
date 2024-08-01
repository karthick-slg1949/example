let employee=[
    {eid:101,ename:"karthick",esal:20000},
    {eid:102,ename:"arun",esal:20000}
]
let createEmployee=(emp)=>{
    setTimeout(()=>{
         employee.push(emp)
    },2000)
}
let getEmployee=()=>{
    setTimeout(()=>{    
        let rows=""
        for(emp of employee){
            rows=rows + `<tr>
            <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                            <td>${emp.esal}</td>
                            </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    },2000)
}
createEmployee({eid:103,ename:"harish",esal:56000})
getEmployee()
