import React from 'react';
import styled from 'styled-components';

const NodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const MindMapNode = ({ text, onRightClick }) => {
  const handleRightClick = (e) => {
    e.preventDefault();
    onRightClick();
  };

  return (
    <NodeWrapper onContextMenu={handleRightClick}>
      <div>{text}</div>
    </NodeWrapper>
  );
};

export default MindMapNode;
