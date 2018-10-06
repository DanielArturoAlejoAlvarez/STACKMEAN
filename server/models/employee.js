'use strict'

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