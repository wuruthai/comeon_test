import React from "react";
import { List } from "semantic-ui-react";

const CategoriesList = ({
  categories,
  selectedCategoryId,
  onChangeSelectedCategoryId,
}) => {
  return (
    <List className="category" animated selection>
      {categories.map((category) => (
        <List.Item
          key={category.name}
          active={category.id === selectedCategoryId}
          onClick={() => onChangeSelectedCategoryId(category.id)}
        >
          <List.Content>
            <List.Header>{category.name}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default CategoriesList;
