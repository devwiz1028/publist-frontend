import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Spin, Row, Col } from 'antd';

import { fetchArticles } from '../../actions';
import { ArticleCard } from '../../global/components';

class Home extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    articles: PropTypes.arrayOf(PropTypes.object),
    fetchArticles: PropTypes.func.isRequired,
  };

  static defaultProps = {
    loading: false,
    error: '',
    articles: [],
  };

  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    const { loading, error, articles } = this.props;
    if (loading) {
      return (
        <Spin className="abs-center" tip="Loading..." />
      );
    }

    if (error) {
      return (
        <h4 className="error">{error}</h4>
      );
    }

    return (
      <Layout.Content className="page page--home">
        <Row className="articles-container">
          {articles.map(article => (
            <Col
              key={article.id}
              className="article-wrapper"
              sm={24}
              md={12}
              lg={8}
              xl={6}
            >
              <ArticleCard article={article} />
            </Col>
          ))}
        </Row>
      </Layout.Content>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.articles.loading,
  articles: state.articles.data,
  error: state.articles.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchArticles,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
