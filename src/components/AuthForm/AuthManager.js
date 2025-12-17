import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const createNewUserWithEmailAndPassword = (firstName, lastName, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        const user = res.user;
        const newUser = { name: firstName + " " + lastName, email: user.email, isSignedIn: true };
        updateDisplayName(newUser.name);
        return newUser;
    }).catch(error => {
        console.log('Error: ', error.message);
        const user = { isSignedIn: false };
        return user;
    })
}

export const signInUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        const user = res.user;
        const newUser = { email: user.email, isSignedIn: true };
        return newUser;
    }).catch(error => {
        console.log("Error: ", error.message);
        const user = { isSignedIn: false };
        return user;
    })
}


export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const user = res.user;
            const newUser = { name: user.displayName, email: user.email, isSignedIn: true };
            return newUser;
        })
        .catch(error => {
            console.log("Error: ", error.message);
            const user = { isSignedIn: false };
            return user;
        });
}

export const logOutUser = () => {
    return firebase.auth().signOut().then(() => {
        return {signInUser:false};
    })
}

const updateDisplayName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    }).then(() => {
        console.log('User Name Update Successfully!');
    }).catch(error => {
        console.log('Error: ', error.message);
    })
}
