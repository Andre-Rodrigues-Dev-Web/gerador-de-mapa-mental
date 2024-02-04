import React, { useState } from "react";
import styled from "styled-components";
import MindMapNode from "../../Components/MindMapNode";

const MindMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

const AddNodeButton = styled.button`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const MindMap = () => {
  const [nodes, setNodes] = useState([{ id: 1, text: 'Root Node', children: [] }]);
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newNodeText, setNewNodeText] = useState('');

  const addNode = (parentId) => {
    const newNode = { id: Date.now(), text: newNodeText || 'New Node', children: [] };
    setNodes((prevNodes) => {
      const updatedNodes = prevNodes.map((node) => {
        if (node.id === parentId) {
          node.children.push(newNode);
        }
        return node;
      });
      return updatedNodes;
    });
    setModalOpen(false);
  };

  const handleRightClick = (nodeId) => {
    setActiveNodeId(nodeId);
    setModalOpen(true);
  };

  const handleAddNode = () => {
    const newNode = { id: Date.now(), text: 'New Node', children: [] };
    if (activeNodeId !== null) {
      setNodes((prevNodes) => {
        const updatedNodes = prevNodes.map((node) => {
          if (node.id === activeNodeId) {
            node.children.push(newNode);
          }
          return node;
        });
        return updatedNodes;
      });
    } else {
      setNodes((prevNodes) => [...prevNodes, newNode]);
    }
  };

  const handleTextChange = (nodeId, newText) => {
    setNodes((prevNodes) => {
      const updatedNodes = prevNodes.map((node) => {
        if (node.id === nodeId) {
          node.text = newText;
        }
        return node;
      });
      return updatedNodes;
    });
  };

  return (
    <MindMapWrapper>
      <AddNodeButton onClick={handleAddNode}>Add Node</AddNodeButton>
      {nodes.map((node) => (
        <MindMapNode
          key={node.id}
          id={node.id}
          text={node.text}
          onRightClick={() => handleRightClick(node.id)}
          onTextChange={handleTextChange}
        />
      ))}

      <ModalOverlay isOpen={isModalOpen} onClick={() => setModalOpen(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <label>
            New Subnode Text:
            <input
              type="text"
              value={newNodeText}
              onChange={(e) => setNewNodeText(e.target.value)}
            />
          </label>
          <button onClick={() => addNode(activeNodeId)}>Add Subnode</button>
        </ModalContent>
      </ModalOverlay>
    </MindMapWrapper>
  );
};

export default MindMap;