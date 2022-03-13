// // Database
// var database =[
//     {
//         email:'user@gmail.com',
//         password:'Abcd@123'
//     },
//     {
//         email:'user2@gmail.com',
//         password:'Xyz@123'
//     }
// ];
//Check if full name is valid: consists of two words separated by a space
function validName(n)
    {   console.log(n);
        var re=new RegExp("^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$"); 
        console.log(re.test(n));
        return re.test(n);
    }
//Check if phone no. consists of 10 digits
function validPhoneNumber(phone)
    {
        var re=new RegExp('^[6789]{1}[0-9]{9}$');
        return re.test(phone);
    }
//Check if the user's age is above 12 years 
function validAge(dob){
    var dobdobYear = dob.getYear(); 
    var now = new Date();  
    var currentYear = now.getYear(); 
    if(currentYear-dobdobYear>12){
        return true;
    }else{
        return false;
    }

}
//Check if password is min. 8 characters, atleast one special character, upercase, lowercase and a number. 
function validPass(pass)
    {
        var re=new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$');
        return re.test(pass);
    }
//Check if the file uploaded is jpeg/jpg/png/gif/bmp.
// function pfp (imageInput) {
   
//     // if ( /\.(jpe?g|png|gif|bmp)$/i.test(imageInput)){
//     //     return true
//     // }
//     // else    
//     //     return false;
        
// }    

//Sign-up function runs when Join button is clicked
function signup(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var pass =document.getElementById('pass').value;
    var number=document.getElementById('phone').value;
    var dob = document.getElementById("dob").value;  
    var gendermale= document.getElementById('male');
    var genderfemale=document.getElementById('female');
    var genderother=document.getElementById('other');
    var userinput = document.getElementById("dob").value;  
    var dob = new Date(userinput); 
    var imageInput=document.getElementById("pic").value;  
//Check validity of form details
    if(!validName(name)){
        alert("Please eneter a valid full name!");
    }
    else if(email===""){
        alert("Please eneter a valid email!");
    }  
    else if(!validPass(pass)||pass===""){
        alert('Password must contain at least one number,one uppercase, one lowercase letter, one special character and at least 8 or more characters');
    } 
    else if(dob===""){
        alert("Enter Birthday");
    } 
    else if(!validAge(dob)){
        alert('You should be 12+');
    } 
    else if(!(gendermale.checked || genderfemale.checked || genderother.checked)){
        alert("Please select a gender!");
    } 
    else if(!validPhoneNumber(number)){
        alert('Please enter a valid phone number');
    }
   
    // else if (!pfp(imageInput)) {
    //     alert('Only image files allowed!');
    //   }
    else {
        
        alert("You are registered!");
        return true;
    }
    return false;
}
//Sign in function runs when sign in button is clicked
// function signin(){
    
//     var email=document.getElementById('email').value;
//     var pass=document.getElementById('pass').value;
    
//      for(var i=0; i<database.length;i++){
//        if(database[i].email===email && database[i].password===pass){
//            var flag=1
//         window.location.assign("gallery.html");
//         }
//     }
//     if (flag!==1){
//     alert("Wrong credentials Enterted!");}
    
// }
// //Reset form after submission
// function resetForm() {
//     document.getElementById("myForm").reset();
//   }

  