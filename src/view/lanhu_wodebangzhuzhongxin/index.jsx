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
        <div className={`${styles['group_2']} flex-col`}>
          <div className={`${styles['text-wrapper_1']} flex-col`}>
            <span className={`${styles['text_3']}`}>常见问题</span>
          </div>
          <div className={`${styles['group_3']} flex-col`}>
            <div className={`${styles['box_3']} flex-row justify-between`}>
              <span className={`${styles['text_4']}`}>如何从币安充值至&nbsp;wowearn</span>
              <img
                className={`${styles['thumbnail_3']}`}
                src={require('./assets/img/MasterDDSSlicePNGa4fca390d5dc24352ac6008bfdb25f0f.png')}
              />
            </div>
            <div className={`${styles['box_4']} flex-col`} />
            <div className={`${styles['box_5']} flex-row justify-between`}>
              <span className={`${styles['text_5']}`}>警惕假冒wow&nbsp;earn&nbsp;官网和应用</span>
              <img
                className={`${styles['thumbnail_4']}`}
                src={require('./assets/img/MasterDDSSlicePNGa4fca390d5dc24352ac6008bfdb25f0f.png')}
              />
            </div>
            <div className={`${styles['box_6']} flex-col`} />
            <div className={`${styles['box_7']} flex-row justify-between`}>
              <span className={`${styles['text_6']}`}>从交易所向ETH钱包转账不到账怎么办？</span>
              <img
                className={`${styles['thumbnail_5']}`}
                src={require('./assets/img/MasterDDSSlicePNGa4fca390d5dc24352ac6008bfdb25f0f.png')}
              />
            </div>
          </div>
          <span className={`${styles['text_7']}`}>使用指南</span>
        </div>
        <div className={`${styles['group_4']} flex-col justify-around`}>
          <div className={`${styles['block_1']} flex-row justify-between`}>
            <span className={`${styles['text_8']}`}>如何创导钱包</span>
            <img
              className={`${styles['thumbnail_6']}`}
              src={require('./assets/img/MasterDDSSlicePNGa4fca390d5dc24352ac6008bfdb25f0f.png')}
            />
          </div>
          <div className={`${styles['block_2']} flex-row justify-between`}>
            <span className={`${styles['text_9']}`}>如何添加代币</span>
            <img
              className={`${styles['thumbnail_7']}`}
              src={require('./assets/img/MasterDDSSlicePNGa4fca390d5dc24352ac6008bfdb25f0f.png')}
            />
          </div>
          <div className={`${styles['block_3']} flex-row justify-between`}>
            <span className={`${styles['text_10']}`}>如何转账</span>
            <img
              className={`${styles['thumbnail_8']}`}
              src={require('./assets/img/MasterDDSSlicePNGa4fca390d5dc24352ac6008bfdb25f0f.png')}
            />
          </div>
          <div className={`${styles['block_4']} flex-row justify-between`}>
            <span className={`${styles['text_11']}`}>如何备份钱包助记词</span>
            <img
              className={`${styles['thumbnail_9']}`}
              src={require('./assets/img/MasterDDSSlicePNGa4fca390d5dc24352ac6008bfdb25f0f.png')}
            />
          </div>
          <div className={`${styles['block_5']} flex-col`} />
          <div className={`${styles['block_6']} flex-col`} />
          <div className={`${styles['block_7']} flex-col`} />
        </div>
      </div>
    );
  }
}
export default DDS_lanhupage_0;
