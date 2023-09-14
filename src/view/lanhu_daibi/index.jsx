'use strict';

import React, { Component } from 'react';
import { Switch, NavBar, Checkbox, Radio, Input, Tabs, TabBar, Badge } from 'antd-mobile';

import styles from './assets/indexRem.module.css';

const print = function (value) {};
class DDS_lanhupage_0 extends Component {
  state = {};
  setValue(val) {}
  render() {
    return (
      <div className={`${styles.page} flex-col`}>
        <div className={`${styles['section_1']} flex-row`}>
          <span className={`${styles['text_1']}`}>9:41</span>
          <img
            className={`${styles['thumbnail_1']}`}
            src={require('./assets/img/MasterDDSSlicePNGeff732ed719524f0aa907f081a381b26.png')}
          />
          <img
            className={`${styles['thumbnail_2']}`}
            src={require('./assets/img/MasterDDSSlicePNGe6074382958e10a4e9b6e818b132ccca.png')}
          />
          <img
            className={`${styles['image_1']}`}
            src={require('./assets/img/MasterDDSSlicePNGcaf4cd8178be0a363fe52f7023f8a952.png')}
          />
        </div>
        <div className={`${styles['section_2']} flex-col`}>
          <div className={`${styles['block_1']} flex-row justify-between`}>
            <span className={`${styles['text_2']}`}>代币</span>
            <img
              className={`${styles['label_1']}`}
              src={require('./assets/img/MasterDDSSlicePNG4ae9c0085d4ecf4faf8b3bd2e29826fa.png')}
            />
          </div>
          <div className={`${styles['block_2']} flex-row`}>
            <div className={`${styles['section_3']} flex-col`} />
            <span className={`${styles['text_3']}`}>fox</span>
          </div>
          <div className={`${styles['block_3']} flex-col`}>
            <div className={`${styles['group_1']} flex-col`}>
              <div className={`${styles['image-wrapper_1']} flex-col`}>
                <img
                  className={`${styles['label_2']}`}
                  src={
                    require('./assets/img/MasterDDSSlicePNG2561af25ba95e4a1452fd51b456966f2.png')
                  }
                />
              </div>
              <img
                className={`${styles['image_2']}`}
                src={
                  require('./assets/img/9434c49c23d84b7e98113aa0b5c08a02_mergeImage.png')
                }
              />
            </div>
            <span className={`${styles['text_4']}`}>空空如也</span>
            <img
              className={`${styles['image_3']}`}
              src={require('./assets/img/MasterDDSSlicePNG9a1b98209a7ca3a0b2de6cee6b456782.png')}
            />
            <img
              className={`${styles['label_3']}`}
              src={require('./assets/img/MasterDDSSlicePNG2ef1a021d704e3369c81dec70ef7727e.png')}
            />
            <img
              className={`${styles['image_4']}`}
              src={require('./assets/img/MasterDDSSlicePNG1ebeb5b3b1ff1761557b7be57257e306.png')}
            />
          </div>
          <img
            className={`${styles['image_5']}`}
            src={require('./assets/img/MasterDDSSlicePNGc8a8150582c925e43bbc81c5ec5f4ea4.png')}
          />
          <div className={`${styles['block_4']} flex-col`} />
        </div>
      </div>
    );
  }
}
export default DDS_lanhupage_0;
