import moment from 'moment/moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
  // console.log(news);
  const {_id, image_url, title, author, details, rating, total_view} = news;
  return (
    <div>
      <Card className="mt-3">
        <Card.Header className='d-flex align-items-center'>
          <Image style={{height: '40px'}} src={author?.img} roundedCircle />
          <div className='ms-3 flex-grow-1'>
            <p className='mb-0'>{author?.name}</p>
            <p><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></p>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            <div className="mt-3">
              {details.length < 250 ? <>{details}</> : 
              <>{details.slice(0, 250)}... <br />
              <Link to={`/news/${_id}`} className='text-warning text-decoration-none'>Read More</Link> 
              </>
              } 
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className='flex-grow-1'>
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
            <span> {rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;