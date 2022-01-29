import React,{Component} from 'react';
//import {Media} from 'reactstrap';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import '../App.css';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state={
            selectedDish:null,
            dishes: DISHES
        };

    }


    // renderDish(dish)
    // {
    //     if(dish!=null)
    //     {
    //         return(
    //             <Card>
    //                     <CardImg width="100%" src={dish.image} alt={dish.name}/>
    //                     <CardBody>
    //                         <CardTitle>{dish.name}</CardTitle>
    //                         <CardText>{dish.description}</CardText>
    //                     </CardBody>
    //             </Card>
    //         );
    //     }

    //     else
    //     {
    //         return(
    //         <div></div>);
    //     }
    // }

    render(){

        // const Dishdetail=this.props.dishes.map((dish)=> {
        //     return (

        //         <div key={dish.id} className='col-12 col-md-5 m-1'>
        //             <Card onClick={()=>this.onDishSelect(dish)}>
        //                 <CardImg width="100%" src={dish.image} alt={dish.name}/>
        //                 <CardImgOverlay>
        //                     <CardTitle>{dish.name}</CardTitle>

        //                 </CardImgOverlay>
        //             </Card>
        //         </div>

        // // const menu=this.props.dishes.map((dish)=> {
        // //     return (

        // //         <div key={dish.id} className='col-12 col-md-5 m-1'>
        // //         <Card onClick={()=>this.onDishSelect(dish)}>
        // //             <CardImg width="100%" src={dish.image} alt={dish.name}/>
        // //             <CardImgOverlay>
        // //                 <CardTitle>{dish.name}</CardTitle>

        // //             </CardImgOverlay>
        // //         </Card>
        // //     </div>
        //         /*<div key={dish.id} className='col-12 mt-5'>
        //              <Media tag="li">
        //                 <Media left middle>
        //                     <Media object src={dish.image} alt={dish.name}/>
        //                 </Media>
        //                 <Media body className='ml-5'>
        //                     <Media heading>{dish.name}</Media>
        //                     <p>{dish.description}</p>
        //                 </Media>
        //             </Media> */

        //     );
        // });
        return(
            <div>
                <div className='row'>

                    {<DishDetail dishes={this.state.dishes}/>}
                    {/* <Media list> */}
                        {/* {menu} */}
                    {/* </Media> */}
                </div>
                {/* <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                </div> */}
            </div>
        );
    }
}

export default Menu;