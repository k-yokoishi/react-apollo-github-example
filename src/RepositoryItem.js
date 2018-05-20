import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  marginRight: 10
};

const RepositoryItem = ({
  name, nameWithOwner, description, languages
}) => (
  <Card>
    <CardHeader>
      <Link to={`repository/${nameWithOwner}`}>{name}</Link>
    </CardHeader>
    <CardText>{description || '(None)'}</CardText>
    <p>
      <FontIcon className="material-icons" style={iconStyles} color={languages.edges[0].node.color}>
        lens
      </FontIcon>
      {languages.edges[0].node.name}
    </p>
  </Card>
);

export default RepositoryItem;
