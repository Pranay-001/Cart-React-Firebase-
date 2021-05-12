import Cart from "./Cart";
import NavBar from "./NavBar";
import TotalCost from "./TotalCost";
import React from "react";
import firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isLoading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=>{
    //     const products=snapshot.docs.map((doc)=>{
    //         const data=doc.data();
    //         data['id']=doc.id;
    //         return data;
    //     })
    //     this.setState({
    //       products
    //     })
    //   })
    //   this.state.isLoading=false;
    this.db
      .collection("products")
      // .where('price' ,'<=',90000)
      // .where('title','==','Watch')
      // .orderBy('title','asc')
      // .orderBy('price','desc')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          products,
        });
      });
    this.state.isLoading = false;
  }
  addItem = () => {
    this.db
      .collection("products")
      .add({
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXY46rPy52gx9kHB_XzQUdGSgtU-U2WsU3w&usqp=CAU",
        title: "Thor Hammer",
        qty: 3,
        price: 500,
      })
      .then((data) => {
        console.log("Product Added Successfully", data);
      })
      .catch((error) => {
        console.log("Error Occured", error);
      });
  };
  increaseQuantity = (product) => {
    const { products } = this.state;
    const ind = products.indexOf(product);
    // products[ind].qty+=1;
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection("products").doc(products[ind].id);

    docRef
      .update({
        qty: products[ind].qty + 1,
      })
      .then(() => {
        console.log("Incremened Successfully");
      })
      .catch((error) => {
        console.log("Error Occured", error);
      });
  };
  decreaseQuantity = (product) => {
    const { products } = this.state;
    const ind = products.indexOf(product);
    // products[ind].qty=Math.max(products[ind].qty-1,0);
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection("products").doc(products[ind].id);

    docRef
      .update({
        qty: Math.max(0, products[ind].qty - 1),
      })
      .then(() => {
        console.log("Decremented Successfully");
      })
      .catch((error) => {
        console.log("Error Occured", error);
      });
  };
  deleteItem = (id) => {
    const { products } = this.state;
    // const items=products.filter((product)=>product.id!==id);
    // this.setState({
    // products:items
    // })
    const docRef = this.db.collection("products").doc(id);

    docRef
      .delete()
      .then(() => {
        console.log("Deleted Successfully");
      })
      .catch((error) => {
        console.log("Error Occured", error);
      });
  };
  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getTotalCost = () => {
    const { products } = this.state;

    let total = 0;
    products.forEach((product) => {
      total = total + product.qty * product.price;
    });
    return total;
  };
  render() {
    return (
      <div className="App">
        <NavBar count={this.getCartCount()} />
        <button
          onClick={this.addItem}
          style={{
            float: "right",
            background: "lightblue",
            margin: 20,
            fontSize: 15,
            padding: 15,
          }}
        >
          Add Thor Hammer
        </button>
        <Cart
          products={this.state.products}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          deleteItem={this.deleteItem}
        />
        {this.state.isLoading && <h1>Loading.....</h1>}
        <TotalCost total={this.getTotalCost()} />
      </div>
    );
  }
}
export default App;
