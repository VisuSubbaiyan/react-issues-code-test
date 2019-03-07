import React, { Component } from 'react';
import githubAPI from '../../services/githubServices';
import Issue from '../Issue';
import { IssuesMainWrapper, SpinnerWrapper } from './issues.styled';
import Spinner from '../Spinner';

const renderIssues = (issues = []) => issues.map(issue => <Issue {...issue} key={issue.id} />);

class Issues extends Component {
  static defaultProps = {
    issues: []
  }

  state = {
    page: 1,
    status: 'open',
    loading: false,
    issues: this.props.issues,
    allIssuesLoaded: false
  }

  componentDidMount() {
    this.loadIssues();
    window.addEventListener('scroll', e => this.handleScrolling(e));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', e => this.handleScrolling(e));
  }

  handleScrolling = (e) => {
    const { loading, allIssuesLoaded } = this.state;
    if (loading || allIssuesLoaded) return;

    const lastChild = document.querySelector('div.issues > div.issue:last-child') || {};
    const lastIssueOffset = (lastChild.offsetTop + lastChild.clientHeight) - 60;
    const windowOffset = window.pageYOffset + window.innerHeight;
    if (windowOffset > lastIssueOffset) {
      this.loadMoreIssues();
    }
  }

  loadIssues = async () => {
    const { page, status, issues } = this.state;
    const newIssues = await githubAPI
      .get('/issues', { params: { page, status } })
      .then(res => res.data);
    const allIssuesLoaded = newIssues.length === 0;

    this.setState({ loading: false, issues: [...issues, ...newIssues], allIssuesLoaded });
  }

  loadMoreIssues = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }), this.loadIssues);
  }

  render() {
    const { loading, issues } = this.state;

    return (
      <IssuesMainWrapper className="issues">
        {renderIssues(issues)}
        {loading && <SpinnerWrapper><Spinner /></SpinnerWrapper>}
      </IssuesMainWrapper>
    )
  }
}

export default Issues;
