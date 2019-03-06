import React, { Component } from 'react';
import gitHubAPI from '../../services/githubServices';
import Label from '../Label';
import Issue from '../Issue';
import IssueWrapper from '../IssueWrapper';

const renderIssues = (issues = []) => issues.map(issue => <Issue {...issue} key={issue.id} />);

class Issues extends Component {
  state = {
    page: 1,
    status: 'open',
    loading: false,
    issues: [],
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
    const newIssues = await gitHubAPI
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
      <div className="issues">
        {renderIssues(issues)}
        {loading &&
          <IssueWrapper>
            <Label fontWeight='bold' css={'text-align: center;'}>{'Loading...'}</Label>
          </IssueWrapper>
        }

      </div>
    )
  }
}

export default Issues;
