import React from 'react';
import Button from '../button/Button';

import './ButtonPanel.css';

export default function ButtonPanel() {
  return (
    <div className="btn-panel">
      <div className="row">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <div className="row">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <div className="row">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}
