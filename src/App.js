import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan'
import MenuMinuman from './components/MenuMinuman/MenuMinuman'

class App extends Component {
  constructor() {
    super()
    this.state = {
      namaResto: 'Codepolitan'
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Cafe and Resto {this.state.namaResto}</h1>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={"25000"} />
        <MenuMakanan namaMenu={"Nasi Goreng"} hargaMenu={"22000"} />

        <h2>Menu Minuman</h2>
        <MenuMinuman namaMenu={"Juice Melon"} hargaMenu={"15000"} />
        <MenuMinuman namaMenu={"Milkshake Strawberry"} hargaMenu={"20000"} />
      </div>
    );
  }
}

export default App;
