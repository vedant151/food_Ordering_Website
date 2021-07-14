// Custome js file

$("#add_user").submit(function(event){
    alert("Data inserted Succesfully");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    console.log(unindexed_array)
    var data = {} //data is the object which will hold the value of the new array with id

    // map method to take array to defalult form and updae id
    $.map(unindexed_array, function(n, i){

        data[n['name']] = n['value']

    })

    console.log(data);

    // this variable will teke the data from server with it's id and then display the updated data
        var request = {
    
            "url" : `http://localhost:3000/api/users/${data.id}`,
            "method" : "PUT",
            "data" : data
        }
    
        $.ajax(request).done(function(response){
            alert("Data Updated Succesfully")
    
        })

})




// Deleting the DATA with the particular id
// As we don't have any href tag in delete button we shall us 'if' condition

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")


        var request = {

            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to Delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Succesfully")
                location.reload();
        
            })
        }


    })
}


// $("#select").sumit(function(event){
//     alert($("#select :selected").text())
// })

// Displaying it
// $("#select :selected").text()