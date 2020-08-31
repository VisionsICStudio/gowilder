function getOutput() {
          
  var outputs = {

    firstname: $('#register-form > #firstname').val(),
    lastname: $('#register-form > #lastname').val(),
    address: $('#register-form > #address').val(),
    alternative: $('#register-form > #firstnae').val(),
    city: $('#register-form > #alternative').val(),
    state: $('#register-form > #state').val(),
    zip: $('#register-form > #zip').val(),
    email: $('#register-form > #email').val(),
    username: $('#register-form > #username').val(),
    password: $('#register-form > #password').val(),
    confirm: $('#register-form > #confirm').val(),
    newsletter: $('#register-form > #yes').val() + $('#register-form > #no').val()
  }

  $('#register-form a').on('click', function(e) {
  
    $('#register-area-output').show().siblings().hide()
  
    $('#register-area-output').html(`
  
      <div class="row">
  
        <div class="row">
  
          <ul class="list-group col">
  
            <li class="list-group-item text-white"><span>First Name: <script>${outputs.firstname}</span></li>
  
            <li class="list-group-item text-white"><span>Last Name: <script>${outputs.lastname}</span></li>
  
            <li class="list-group-item text-white"><span>Address: <script>${outputs.address}</span></li>
  
            <li class="list-group-item text-white"><span>Extended Address: ${outputs.alternate}</span></li>
  
          </ul>
          
          <ul class="list-group col">
  
            <li class="list-group-item text-white"><span>City: ${outputs.city}</span></li>
  
            <li class="list-group-item text-white">State: ${outputs.state}</li>
  
            <li class="list-group-item text-white">Zip Code: ${outputs.zip}</li>
  
            <li class="list-group-item text-white">Email: ${outputs.email}</li>
  
          </ul>
  
          <ul class="list-group col">
  
            <li class="list-group-item text-white">Username: ${outputs.username}</li>
  
            <li class="list-group-item text-white">Password: ${outputs.password}</li>
  
            <li class="list-group-item text-white">Confirm Password: ${outputs.confirm}</li>
            
            <li class="list-group-item text-white">Subscribe To GoWilder Newsletter? ${outputs.newsletter}</li>
  
          </ul>
        
        </div><!-- inner row -->
  
      </div><!-- outer row -->
  
    `) 

  })

}