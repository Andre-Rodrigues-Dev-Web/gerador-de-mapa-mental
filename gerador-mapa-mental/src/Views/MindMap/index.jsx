import React, { useState } from 'react';
import styled from 'styled-components';
import MindMapNode from './MindMapNode';

const MindMapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MindMap = () => {
  const [nodes, setNodes] = useState([{ id: 1, text: 'Root Node', children: [] }]);

  const addNode = (parentId) => {
    const newNode = { id: Date.now(), text: 'New Node', children: [] };
    setNodes((prevNodes) => {
      const updatedNodes = prevNodes.map((node) => {
        if (node.id === parentId) {
          node.children.push(newNode);
        }
        return node;
      });
      return updatedNodes;
    });
  };

  const handleRightClick = (nodeId) => {
    addNode(nodeId);
  };

  return (
    <MindMapWrapper>
      {nodes.map((node) => (
        <MindMapNode key={node.id} text={node.text} onRightClick={() => handleRightClick(node.id)} />
      ))}
    </MindMapWrapper>
  );
};

export default MindMap;
