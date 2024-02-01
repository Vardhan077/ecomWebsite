import {Component} from 'react'
import React,{ useEffect,useState }from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/products.css';
import Card from './card';
import axios from 'axios';
import { IoFilterSharp } from "react-icons/io5";

class Products extends Component{
    state = {list:[],category:'Clothes'}


    componentDidMount() {
        this.getProducts()
    }

    optionChanged = event =>{
        this.setState({category:event.target.value},this.getProducts)
        console.log('chdss')
    }

    getProducts = async() =>{
        const {category} = this.state
        const cat = ['Clothes','Electronics','Furniture','Shoes']
        const i = cat.indexOf(category)
        console.log(i)
        const apiUrl = `https://api.escuelajs.co/api/v1/categories/${i+1}/products`;
        const options = {
            method:'GET'
        }
        const data = await fetch(apiUrl,options)
        const d = await data.json()
        this.setState({list:d})
        console.log(d,'jsdj',data)

    }

    render(){
        const {list} = this.state
        return(
            <div>
                <Navbar />
                <div className='select'>
                    
                    <IoFilterSharp className='icon'/>
                    <select onChange={this.optionChanged}>
                        <option selected>Clothes</option>
                        <option>Electronics</option>
                        <option>Furniture</option>
                        <option>Shoes</option>
                    </select>
                </div>
                <ul className='new'>
                    {list.map(item => (
                        <Card item = {item} key = {item.id} />
                    ))}
                </ul>
            </div>
        )
    }
    

}

export default Products