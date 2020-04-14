import firebase from 'firebase';
export default   class firebasedb {
    constructor(){
      const firebaseConfig = {
        apiKey: "AIzaSyC2dFZvYpxtYvzMLqwJd36jHXcEWyaRx5s",
        authDomain: "toc-f47ab.firebaseapp.com",
        databaseURL: "https://toc-f47ab.firebaseio.com",
        projectId: "toc-f47ab",
        storageBucket: "toc-f47ab.appspot.com",
        messagingSenderId: "401988482722",
        appId: "1:401988482722:web:af3cc751fafc80cc8689fb",
        measurementId: "G-XQ6V70VVT3"
      };
      firebase.initializeApp(firebaseConfig);
    }
    static getdb (){
          var db =  firebase.database()
          return db
        }
    static listCpu(){
        var db =   firebasedb.getdb()
        var ref =  db.refFromURL("https://toc-f47ab.firebaseio.com");
// loadfirebase
        var usersRef = ref.child("users");
        usersRef.on("value", function(snapshot) {
            snapshot.forEach(user => {
                console.log(user.val().full_name);
            });
          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
// save firebase
//         usersRef.set({
//         alanisawesome: {
//             date_of_birth: "June 23, 1912",
//             full_name: "Alan Turing"
//         },
//         gracehop: {
//         date_of_birth: "December 9, 1906",
//         full_name: "Grace Hopper"
//   }
// });
    
    }



}