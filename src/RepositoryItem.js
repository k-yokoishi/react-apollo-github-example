import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';

const iconStyles = color => ({
  marginRight: 10,
  color
});

const RepositoryItem = ({
  name, nameWithOwner, description, languages
}) => (
  <Card>
    <CardHeader />
    <Link to={`/${nameWithOwner}`}>{name}</Link>
    <CardContent>{description || '(None)'}</CardContent>
    <p>
      <Icon style={iconStyles(languages.edges[0].node.color)}>lens</Icon>
      {languages.edges[0].node.name}
    </p>
  </Card>
);

export default RepositoryItem;
