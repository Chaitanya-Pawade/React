
import {FaStar} from 'react-icons/fa'
import { useState } from 'react';
import './styles.css';
export default function StarRating({noOfStars=5}){
      
    const [rating,setRating] =useState(0);
    // const [hover,setHover] = useState(0);
    // console.log(rating);
    function handleClick(getCurrentIndex){
         setRating(getCurrentIndex);
    }
// function handleMouseEnter(getCurrentIndex){
//     setHover(getCurrentIndex);
// }
    return(
        <div className='star-rating'>

 { [...Array(noOfStars)].map((_,index) => {
    const starValue = index + 1;
    return(
        <FaStar
        key={index}
        // className={starValue <= (hover || rating) ? 'active' : 'inactive'}
        onClick={() => handleClick(starValue)}
        // onMouseMove={() => handleMouseEnter(starValue)}
        color={starValue <= rating ? 'red' : 'black'} 
        size={40}
        />
    )
 }

)}

        </div>
    )

}