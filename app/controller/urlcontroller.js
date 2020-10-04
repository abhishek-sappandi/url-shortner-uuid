const express = require('express')
const Url = require('../model/Url')
const urlscontroller = {}

urlscontroller.list = (req,res) =>{
    const urlHash = req.params.hashedUrl
    Url.findOne({urlHash})
    .then((hash)=>{ 
        res.json(hash)
    })
    .catch((err)=>{
        res.json(err)
    })
}

urlscontroller.create = (req,res) =>{
    const body = req.body
    const url = new Url(body)
    url.save()
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err)
    })
}
urlscontroller.edit = (req,res) =>{
    const urlHash  = req.params.hashedUrl
    const body = req.body
    Url.findOne({urlHash})
    .then((data)=>{ 
        if(data){
            Url.findByIdAndUpdate(data._id , {url : body.url} , { new: true, runValidators: true })
            .then((uppdatedData)=>{
                res.json(uppdatedData)
            })
            .catch((err)=>{
                res.json(err)
            })
        }
        else {
            res.send('url not found')
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}

urlscontroller.remove = (req,res) =>{
    const hashedUrl = req.params.hashedUrl
    Url.findOneAndRemove({hashedUrl})
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err)
    })
}

urlscontroller.hash = (req,res) =>{
    const urlHash = req.params.hashedUrl
    Url.findOne({urlHash})
    .then((hash)=>{ 
        res.redirect(hash.url)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = urlscontroller