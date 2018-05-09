import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  marginRight: 10
};

const RepositoryItem = ({ name, description, languages }) => (
  <Card>
    <CardHeader title={name} />
    <CardText>{description || '(None)'}</CardText>
    <p>
      <FontIcon
        className="material-icons"
        style={iconStyles}
        color={languages.edges[0].node.color}
      >
        lens
      </FontIcon>
      {languages.edges[0].node.name}
    </p>
  </Card>
);

export default RepositoryItem;
