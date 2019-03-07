import React from 'react';
// import PropTypes from 'prop-types';
import { IssueWrapper, IssueContainer } from './Issue.styled';
import Label from '../Label';
import Link from '../Link';
import Comments from '../Comments';
import { StatusIcon } from '../Icons';
import { deriveOlderDays } from '../../helpers/util';

const renderLabels = labels => labels.map(({ id, name, color }) =>
  <Label key={id} bgColor={`#${color}`} fontWeight='bold' chips >{name}</Label>);

const additionalCss = `font-size: 14px; font-weight: bold; line-height: 14px; vertical-align: text-top;`;

const Issue = ({ title, html_url, labels = [], comments, number, created_at, user }) => (
  <IssueWrapper className="issue">
    <StatusIcon fill="green" css={`flex: 1 0 0;`} />
    <IssueContainer>
      <Link href={html_url} css={additionalCss}>{title}</Link>
      {renderLabels(labels)}
      <IssueContainer>
        <Label>{`#${number} opened ${deriveOlderDays(created_at)} ago by ${user.login}`}</Label>
      </IssueContainer>
    </IssueContainer>
    <Comments comments={comments} href={html_url} />
  </IssueWrapper>
);

export default Issue;
