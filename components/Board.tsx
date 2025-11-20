import React, { useMemo, useRef } from 'react';
import { Line, useCursor } from '@react-three/drei';
import { BOARD_SIZE, CELL_SIZE, BOARD_HALF_SIZE, COLOR_BOARD, COLOR_GRID } from '../constants';
import * as THREE from 'three';
import { ThreeEvent } from '@react-three/fiber';

interface BoardProps {
  onCellClick: (row: number, col: number) => void;
  onCellHover: (row: number, col: number) => void;
}

export const Board: React.FC<BoardProps> = ({ onCellClick, onCellHover }) => {
  const boardSizeUnits = BOARD_SIZE * CELL_SIZE;
  const offset = (BOARD_SIZE - 1) * CELL_SIZE / 2;
  const [hovered, setHover] = React.useState(false);
  useCursor(hovered);

  // Cache materials to prevent re-creation
  const boardMaterial = useMemo(() =>
    new THREE.MeshStandardMaterial({
      color: COLOR_BOARD,
      roughness: 0.5
    }),
  []);

  const edgeMaterial = useMemo(() =>
    new THREE.MeshStandardMaterial({
      color: "#8b4513",
      depthWrite: true,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    }),
  []);

  // Generate grid lines
  const lines = useMemo(() => {
    const lineArray = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      const pos = i * CELL_SIZE - offset;
      // Horizontal
      lineArray.push(
        <Line
          key={`h-${i}`}
          points={[[-offset, 0.02, pos], [offset, 0.02, pos]]}
          color={COLOR_GRID}
          lineWidth={1}
          renderOrder={1}
        />
      );
      // Vertical
      lineArray.push(
        <Line
          key={`v-${i}`}
          points={[[pos, 0.02, -offset], [pos, 0.02, offset]]}
          color={COLOR_GRID}
          lineWidth={1}
          renderOrder={1}
        />
      );
    }
    return lineArray;
  }, [offset]);

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    // Convert world point to grid coordinates
    const x = e.point.x;
    const z = e.point.z;
    
    const col = Math.round((x + offset) / CELL_SIZE);
    const row = Math.round((z + offset) / CELL_SIZE);
    
    onCellHover(row, col);
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const x = e.point.x;
    const z = e.point.z;
    const col = Math.round((x + offset) / CELL_SIZE);
    const row = Math.round((z + offset) / CELL_SIZE);
    onCellClick(row, col);
  };

  return (
    <group>
      {/* Physical Board Block */}
      <mesh
        receiveShadow
        position={[0, -0.5, 0]}
        onPointerMove={handlePointerMove}
        onClick={handleClick}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => {
            setHover(false);
            onCellHover(-1, -1); // Reset hover
        }}
      >
        <boxGeometry args={[boardSizeUnits + 1, 1, boardSizeUnits + 1]} />
        <primitive object={boardMaterial} attach="material" />
      </mesh>

      {/* Grid Lines */}
      <group position={[0, 0, 0]}>
        {lines}
      </group>

      {/* Decoration - Board Sides darker wood */}
      <mesh position={[0, -0.5, (boardSizeUnits + 1)/2]} castShadow={false} receiveShadow={false}>
         <boxGeometry args={[boardSizeUnits + 1, 1, 0.1]} />
         <primitive object={edgeMaterial} attach="material" />
      </mesh>
      <mesh position={[0, -0.5, -(boardSizeUnits + 1)/2]} castShadow={false} receiveShadow={false}>
         <boxGeometry args={[boardSizeUnits + 1, 1, 0.1]} />
         <primitive object={edgeMaterial} attach="material" />
      </mesh>
      <mesh position={[(boardSizeUnits + 1)/2, -0.5, 0]} castShadow={false} receiveShadow={false}>
         <boxGeometry args={[0.1, 1, boardSizeUnits + 1]} />
         <primitive object={edgeMaterial} attach="material" />
      </mesh>
      <mesh position={[-(boardSizeUnits + 1)/2, -0.5, 0]} castShadow={false} receiveShadow={false}>
         <boxGeometry args={[0.1, 1, boardSizeUnits + 1]} />
         <primitive object={edgeMaterial} attach="material" />
      </mesh>
    </group>
  );
};
