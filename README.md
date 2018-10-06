# STACKMEAN
## Description

This repository is a Application software with MongoDB, Express, Angular and NodeJS, this application contains an API created with Express.

## Installation
Using Angular 6 preferably.

## DataBase
Using MongoDB preferably.

## Apps
Using POSTMAN or RestEasy to feed the api.

## Usage
```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/STACKMEAN.git [NAME APP]

$ npm install

$ npm run dev (in Server)

$ [NAME APP]/client npm install

$ ng serve (in Client)
```
Follow the following steps and you're good to go! Important:


![alt text](http://res.cloudinary.com/dk1rn2kmf/image/upload/v1486523096/angular2-switcher_dif1ze.gif)


## Coding

## CLIENT

### SERVICES

```typescript
...
export class EmployeeService {

  selectedEmployee: Employee

  employees: Employee[]

  readonly API_URL="http://127.0.0.1:3000/api/employees"

  constructor(private _http: HttpClient) {
    this.selectedEmployee=new Employee()
  }

  getEmployees(){
    return this._http.get(this.API_URL)
  }

  postEmployee(Employee: Employee){
    return this._http.post(this.API_URL, Employee)
  }

  putEmployee(employee: Employee){
    return this._http.put(this.API_URL + `/${employee._id}`, employee)
  }
  
  deleteEmployee(_id: string){
    return this._http.delete(this.API_URL + `/${_id}`)
  }

}
...
```

### COMPONENTS

```typescript
...
addEmployee(form: NgForm){
    //console.log(form.value)
    if(form.value._id){
      this._employeeService.putEmployee(form.value)
        .subscribe(res=>{
          this.resetForm(form)
          //M.toast({html: 'Updated successfully!'})
          this._toastr.success('Updated successfully!');
          this.getEmployees() 
          this.txtToggle='CREATE EMPLOYEE'         
        })
    }else{
      this._employeeService.postEmployee(form.value)
      .subscribe(res=>{
        this.resetForm(form)
        //console.log(res)
        //M.toast({ html: 'Saved successfully!'});
        this._toastr.success('Saved successfully!');
        this.getEmployees()
      })
    }    
  }
...
```


## API 

### Controllers


```javascript
...
 EmploCtrl.createEmployee=async(req,res)=>{
    const employee = new Employee({
        displayName: req.body.displayName,
        scrumPosition: req.body.scrumPosition,
        salary: req.body.salary,
        avatar: req.body.avatar,
        state: req.body.state
    })
    await employee.save()
    res.json({
        status: 'Employee saved!'
    })
}
...

```

### ROUTES

```javascript
... 
route.get('/', employee.getEmployees)
route.get('/:productId', employee.getEmployeeById)
route.post('/', employee.createEmployee)
route.put('/:productId', employee.editEmployee)
route.delete('/:productId', employee.deleteEmployee)
...
```

### Model

```javascript
...
const mongoose=require('mongoose')

const { Schema }=mongoose

const EmployeeSchema=new Schema({
    displayName: { type: String, required: true},
    scrumPosition: { type: String, enum: ['Product Owner','Development Team','Scrum Master'], required: true},
    salary: { type: Number, required: true},
    avatar: { type: String, required: true},
    state: { type: Boolean, default: true}
})

module.exports=mongoose.model('Employee', EmployeeSchema)
...
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/STACKMEAN. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).