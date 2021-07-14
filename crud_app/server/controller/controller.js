// This Controller can perform the CRUD Operations on the Data from the data-base

var Userdb = require('../model/model')

// Create and Save new Users

exports.create = (req, res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be Empty"})
        return;
    }

    // new user Creating the new user instance
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        menu: req.body.menu,
        item: req.body.item,
        quantity: req.body.quantity,
        // status: req.body.status,

    })

    // Saving user data in Data-Base
    // We used the chain method to save this data to db
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error ocurred while Creating the user"
            })
        })



}

// retrive and return all users or single user
exports.find = (req, res) => {

    // Retrying the Single User

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message: `Not found any user with id ${id}`})
                }else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: `Error retriving the user with id ${id}`})
            })

    }else{

        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Some Error occured in returing or reading the data from database"})
        })

    }



}

// Update a new user by it's id
exports.update = (req, res) => {

    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to be Updated cannot be Empty"})
    }

    // Getting the id
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false} )
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot send the message with ${id},Maybe user not found`})
            }else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error during updating user information"})
        })

}

// Delete a user with a specify user id and it's requesr
exports.delete = (req, res) => {

    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot Delete the data with id ${id}.Maybe id is wrong`})
            }else{
                res.send({message: 'User was Deleted Succesfully'})
            }
            
        })
        .catch(err => {
            res.status(500).send({message: `Cannot Delete the user with id ${id}`})
        })

}