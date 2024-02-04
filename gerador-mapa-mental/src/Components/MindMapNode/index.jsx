// src/components/MindMapNode.js
import React, { useState } from 'react';
import styled from 'styled-components';

const NodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const NodeText = styled.div`
  cursor: pointer;
`;

const MindMapNode = ({ id, text, onRightClick, onTextChange }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleRightClick = (e) => {
    e.preventDefault();
    onRightClick();
  };

  const handleTextDoubleClick = () => {
    setEditing(true);
  };

  const handleTextBlur = () => {
    setEditing(false);
    onTextChange(id, editedText);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <NodeWrapper onContextMenu={handleRightClick}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          onBlur={handleTextBlur}
          autoFocus
        />
      ) : (
        <NodeText onDoubleClick={handleTextDoubleClick}>{text}</NodeText>
      )}
    </NodeWrapper>
  );
};

export default MindMapNode;
