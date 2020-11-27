import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//firebase SDK
import firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/auth"; //firestore authentication

//firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Home from "./pages/Home";
import Shops from "./pages/Shops";

import ListingState from "./context/ListingState";

firebase.initializeApp({
  apiKey: "AIzaSyDtWyBS6MgqOQdQFkTb2aV_kksvRkIa8cQ",
  authDomain: "dsc-hackathon-c4a63.firebaseapp.com",
  databaseURL: "https://dsc-hackathon-c4a63.firebaseio.com",
  projectId: "dsc-hackathon-c4a63",
  storageBucket: "dsc-hackathon-c4a63.appspot.com",
  messagingSenderId: "196049696262",
  appId: "1:196049696262:web:845486d80bac69a70b3587",
  measurementId: "G-KTVZJNRW60",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const shopsRef = firestore.collection("shops");
  const query = shopsRef.orderBy("createdAt").limit(25);

  const [shops] = useCollectionData(query, { idField: "id" });
  console.log(shops);

  return (
    <ListingState>
      <Router>
        <div className="App container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shops" render = {props => <Shops listings = {shops}/>}/>
          </Switch>
        </div>
      </Router>
    </ListingState>
  );
}

export default App;
