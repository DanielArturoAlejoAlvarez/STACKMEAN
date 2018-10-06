'use strict'

const Employee=require('../models/employee')

const EmploCtrl={}


EmploCtrl.getEmployees=async(req,res)=>{
    /* res.json({
        status: 'API works!'
    }) */
    const employees=await Employee.find()
    res.json(employees)
}

EmploCtrl.getEmployeeById=async(req,res)=>{
    const employee=await Employee.findById(req.params.productId)
    res.json(employee)
}


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

EmploCtrl.editEmployee=async(req,res)=>{
    const { productId }=req.params
    const employee={
        displayName: req.body.displayName,
        scrumPosition: req.body.scrumPosition,
        salary: req.body.salary,
        avatar: req.body.avatar,
        state: req.body.state
    }
    await Employee.findByIdAndUpdate(productId, {$set: employee}, {new: true})
    res.json({
        status: 'Employee updated!'
    })
}



EmploCtrl.deleteEmployee=async(req,res)=>{
    const { productId }=req.params 
    await Employee.findByIdAndRemove(productId)
    res.json({
        status: 'Employee deleted!'
    })
}

module.exports=EmploCtrl
