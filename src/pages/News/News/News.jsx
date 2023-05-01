import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
  const news = useLoaderData();
  // console.log(news);
  const {_id, image_url, title, details, category_id} = news;
  return (
    <div className='mt-4'>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
        </Card.Body>
      </Card> 
      <div className="mt-4">
        <EditorsInsight></EditorsInsight>
      </div>
    </div>
  );
};

export default News;