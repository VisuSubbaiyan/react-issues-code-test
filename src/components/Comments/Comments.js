// import styled from 'styled-components';
import React from 'react';
import { BubbleIcon } from '../Icons';
import Link from '../Link';

const css = `line-height: 12px; display: flex; font-weight: bold; flex: 1 0 0;`;

const Comments = ({ comments,  href}) =>
  comments ? (<Link href={href} css={css} hover><BubbleIcon /><span>{comments}</span></Link>) : '';

export default Comments;
