import React from 'react';
import Tooltip from '../../../../lib';

const Adjustment = () => {
    return (
        <>
            <h3 style={{ width: '95%', marginBottom: '0' }}><strong>Inner positions</strong></h3>
            <div
                style={{
                    cursor: 'pointer',
                    border: '2px solid #4b4b4b',
                    background: 'rgba(137, 27, 211, 0.4)',
                    width: '400px',
                    height: '300px',
                    position: 'relative',
                    marginTop: '30px',
                    fontSize: '14px',
                    borderRadius: '5px'
                }}>
                <h3 style={{ margin: '10px 0 0 20px' }}>Target element</h3>
                <Tooltip
                    show={true}
                    arrow='rightCenter'
                    align='center'
                    textBoxWidth='auto'
                    textAlign='center'
                    moveLeft='-150px'
                    textBoxWidth='120px'
                    static
                >
                    <span>moveLeft<br />-200px</span>
                </Tooltip>
                <Tooltip
                    show={true}
                    arrow='topCenter'
                    align='center'
                    textBoxWidth='auto'
                    textAlign='center'
                    moveDown='-100px'
                    textBoxWidth='120px'
                    static
                >
                    <span>moveDown<br />-130px</span>
                </Tooltip>
                <Tooltip
                    show={true}
                    arrow='leftCenter'
                    align='center'
                    textBoxWidth='auto'
                    textAlign='center'
                    moveRight='-150px'
                    textBoxWidth='120px'
                    static
                >
                    <span>moveRight<br />-200px</span>
                </Tooltip>
                <Tooltip
                    show={true}
                    arrow='bottomCenter'
                    align='center'
                    textBoxWidth='auto'
                    textAlign='center'
                    moveUp='-100px'
                    textBoxWidth='120px'
                    static
                >
                    <span>moveUp<br />-130px</span>
                </Tooltip>
            </div>
        </>
    );
};

export default Adjustment;