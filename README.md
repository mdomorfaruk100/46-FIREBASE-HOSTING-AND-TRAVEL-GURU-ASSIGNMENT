# 46-2 Email Verification Password Reset of an User

##  sendEmailVerification() method is used to send email verification link to a user.  This method used on  currentUser. this method return a  promise.

### ==> const currentUser = firebase.auth().currentUser;
### ==> currentUser.sendEmailVerification()
### ==>      .then(function () {
### ==>           console.log('sended');
### ==>      })
### ==>      .catch(function (error) {
### ==>           console.log(error.message);
### ==>      })


## sendPasswordResetEmail() method is used to send password reset link to a user email address. this method is used to auth(). email is the param of the method. this method return a promise.

### ==> const auth = firebase.auth();
### ==> auth.sendPasswordResetEmail(email)
### ==>      .then(() => {
### ==>           console.log('reset link sended');
### ==>      })
### ==>      .catch(error => {
### ==>           console.log('Error: ', error);
### ==>      });