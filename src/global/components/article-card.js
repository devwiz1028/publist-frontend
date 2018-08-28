import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const ArticleCard = ({ article }) => {
  const {
    title,
    description,
    image_url: imageUrl,
    url,
  } = article;

  return (
    <Card
      className="ant-card--article"
      hoverable
      cover={<img alt="Article" src={imageUrl} />}
      onClick={() => {
        window.open(url, '_blank');
      }}
    >
      <Card.Meta
        title={title}
        description={description}
      />
    </Card>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    //
  }).isRequired,
};

export default ArticleCard;
