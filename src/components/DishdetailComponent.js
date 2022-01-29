import React,{Component} from 'react';
//import {Media} from 'reactstrap';
import '../App.css';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,ListGroup,ListGroupItem} from 'reactstrap';

class DishDetail extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            selectedDish:null,
            dishes: props.dishes
        };
    }

    onDishSelect(dish)
    {
        this.setState({selectedDish:dish});
    }

    renderDish(dish)
    {
        if(dish!=null)
        {
            return(
                <Card id='list' className='col-12 col-md-5 m-1 p-0'>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
                
            );
        }

        else
        {
            return(
            <div></div>);
        }
    }

    renderComments(dish)
    {
        if(dish!=null)
        {
            return(
                <div  className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        { dish.comments.map((comment)=>(
                        <ListGroup>
                             <ListGroupItem className="border-0">{comment.comment}</ListGroupItem>
                             <ListGroupItem className="border-0">--{comment.author} , {comment.date}</ListGroupItem>
                        </ListGroup>
        ))}
                </div>
                
            );
        }

        else
        {
            return(
            <div></div>);
        }
    }

    render(){

        const menu=this.state.dishes.map((dish)=> {
            return (

                <div key={dish.id} className='col-12 col-md-5 m-1 p-0'>
                <Card onClick={()=>this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                        
                    </CardImgOverlay>
                </Card>
            </div>
            )
        });

        return(
          <div className='container'> 
          <div className='row'>
              {menu}
          </div>  
          <div className='row'>
            {this.renderDish(this.state.selectedDish)}
            {this.renderComments(this.state.selectedDish)}
          </div>
          </div>
        );
        };
}

export default DishDetail;