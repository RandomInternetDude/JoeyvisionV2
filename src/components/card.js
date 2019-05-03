import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './card.css';


export default class Card extends Component {
    render(){
        return(
             
                <div class="card text-center" >
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link class="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
            
        )
    }
}