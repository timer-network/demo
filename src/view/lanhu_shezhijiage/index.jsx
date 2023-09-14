'use strict';

import React, { Component } from 'react';
import { Switch, NavBar, Checkbox, Radio, Input, Tabs, TabBar, Badge } from 'antd-mobile';

import styles from './assets/index.module.css';

const print = function (value) {};
class DDS_lanhupage_0 extends Component {
  state = {};
  setValue(val) {}
  render() {
    return (
      <div className={`${styles.page} flex-col`}>
        <div className={`${styles['block_2']} flex-col`}>
          <div className={`${styles['block_3']} flex-row`}>
            <div className={`${styles['image-wrapper_1']} flex-col`}>
              <img
                className={`${styles['thumbnail_3']}`}
                src={require('./assets/img/MasterDDSSlicePNGd7438390af141c81716feab7e5d6bb34.png')}
              />
            </div>
            <span className={`${styles['text_3']}`}>钱包</span>
            <div className={`${styles['image-text_1']} flex-row justify-between`}>
              <span className={`${styles['text-group_1']}`}>主钱包</span>
              <img
                className={`${styles['thumbnail_4']}`}
                src={require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')}
              />
            </div>
          </div>
          <div className={`${styles['block_4']} flex-col`}>
            <div className={`${styles['block_5']} flex-row justify-between`}>
              <div className={`${styles['image-text_2']} flex-row justify-between`}>
                <div className={`${styles['image-wrapper_2']} flex-col`}>
                  <img
                    className={`${styles['thumbnail_5']}`}
                    src={
                      require('./assets/img/MasterDDSSlicePNGa511f5a0e8fa2c8b42a62885157b402c.png')
                    }
                  />
                </div>
                <span className={`${styles['text-group_2']}`}>语言</span>
              </div>
              <div className={`${styles['image-text_3']} flex-row justify-between`}>
                <span className={`${styles['text-group_3']}`}>繁体中文</span>
                <img
                  className={`${styles['thumbnail_6']}`}
                  src={
                    require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')
                  }
                />
              </div>
            </div>
            <div className={`${styles['block_6']} flex-col`} />
            <div className={`${styles['block_7']} flex-row justify-between`}>
              <div className={`${styles['image-text_4']} flex-row justify-between`}>
                <div className={`${styles['image-wrapper_3']} flex-col`}>
                  <img
                    className={`${styles['thumbnail_7']}`}
                    src={
                      require('./assets/img/MasterDDSSlicePNG711500d07ac5a255b851abb5785e9246.png')
                    }
                  />
                </div>
                <span className={`${styles['text-group_4']}`}>货币</span>
              </div>
              <div className={`${styles['image-text_5']} flex-row justify-between`}>
                <span className={`${styles['text-group_5']}`}>USD&nbsp;-&nbsp;美元</span>
                <img
                  className={`${styles['thumbnail_8']}`}
                  src={
                    require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')
                  }
                />
              </div>
            </div>
          </div>
          <div className={`${styles['block_8']} flex-col`}>
            <div className={`${styles['box_2']} flex-row justify-between`}>
              <div className={`${styles['image-text_6']} flex-row justify-between`}>
                <div className={`${styles['image-wrapper_4']} flex-col`}>
                  <img
                    className={`${styles['thumbnail_9']}`}
                    src={
                      require('./assets/img/MasterDDSSlicePNG28da3d4e5fd68615b6004c8ab5b51dc7.png')
                    }
                  />
                </div>
                <span className={`${styles['text-group_6']}`}>价格提醒</span>
              </div>
              <img
                className={`${styles['thumbnail_10']}`}
                src={require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')}
              />
            </div>
            <div className={`${styles['box_3']} flex-col`} />
            <div className={`${styles['box_4']} flex-row`}>
              <div className={`${styles['image-wrapper_5']} flex-col`}>
                <img
                  className={`${styles['thumbnail_11']}`}
                  src={
                    require('./assets/img/MasterDDSSlicePNG746ccb54140d4edd23fe278f9ef5fb71.png')
                  }
                />
              </div>
              <span className={`${styles['text_4']}`}>地址薄</span>
              <img
                className={`${styles['thumbnail_12']}`}
                src={require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')}
              />
            </div>
            <div className={`${styles['box_5']} flex-col`} />
            <div className={`${styles['box_6']} flex-row`}>
              <div className={`${styles['group_1']} flex-col`}>
                <div className={`${styles['group_2']} flex-col`} />
              </div>
              <span className={`${styles['text_5']}`}>WalletConnect</span>
              <img
                className={`${styles['thumbnail_13']}`}
                src={require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')}
              />
            </div>
          </div>
          <div className={`${styles['block_9']} flex-col justify-between`}>
            <div className={`${styles['group_3']} flex-col`}>
              <div className={`${styles['group_4']} flex-row`}>
                <div className={`${styles['image-wrapper_6']} flex-col`}>
                  <img
                    className={`${styles['thumbnail_14']}`}
                    src={
                      require('./assets/img/MasterDDSSlicePNGf497c2572f74ea1b107c9f75df36d9fe.png')
                    }
                  />
                </div>
                <span className={`${styles['text_6']}`}>安全</span>
                <img
                  className={`${styles['thumbnail_15']}`}
                  src={
                    require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')
                  }
                />
              </div>
              <div className={`${styles['group_5']} flex-col`} />
              <div className={`${styles['group_6']} flex-row justify-between`}>
                <div className={`${styles['image-text_7']} flex-row justify-between`}>
                  <div className={`${styles['image-wrapper_7']} flex-col`}>
                    <img
                      className={`${styles['thumbnail_16']}`}
                      src={
                        require('./assets/img/MasterDDSSlicePNG223a814077ad4e145b4846183aedf68f.png')
                      }
                    />
                  </div>
                  <span className={`${styles['text-group_7']}`}>皮肤</span>
                </div>
                <img
                  className={`${styles['thumbnail_17']}`}
                  src={
                    require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')
                  }
                />
              </div>
            </div>
            <div className={`${styles['group_7']} flex-col`}>
              <div className={`${styles['section_1']} flex-row justify-between`} onClick={() => window.location.href = '/lanhu_wodebangzhuzhongxin'}>
                <div className={`${styles['image-text_8']} flex-row justify-between`}>
                  <img
                    className={`${styles['label_1']}`}
                    src={
                      require('./assets/img/MasterDDSSlicePNG9a5117d496e97e68b42721e5672293a0.png')
                    }
                  />
                  <span className={`${styles['text-group_8']}`}>帮助中心</span>
                </div>
                <img
                  className={`${styles['thumbnail_18']}`}
                  src={
                    require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')
                  }
                />
              </div>
              <div className={`${styles['section_2']} flex-col`} />
              <div className={`${styles['section_3']} flex-row`}>
                <div className={`${styles['image-wrapper_8']} flex-col`}>
                  <img
                    className={`${styles['thumbnail_19']}`}
                    src={
                      require('./assets/img/MasterDDSSlicePNGf04b5d35dce231337ab86fa8acb8eaad.png')
                    }
                  />
                </div>
                <span className={`${styles['text_7']}`}>关于</span>
                <img
                  className={`${styles['thumbnail_20']}`}
                  src={
                    require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')
                  }
                />
              </div>
            </div>
          </div>
          <div className={`${styles['block_10']} flex-col`}>
            <div className={`${styles['group_8']} flex-row`}>
              <div className={`${styles['image-wrapper_9']} flex-col`}>
                <img
                  className={`${styles['thumbnail_21']}`}
                  src={
                    require('./assets/img/MasterDDSSlicePNG2e9881d560d3f727d542e8231dfc5c1c.png')
                  }
                />
              </div>
              <span className={`${styles['text_8']}`}>x</span>
              <img
                className={`${styles['thumbnail_22']}`}
                src={require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')}
              />
            </div>
            <div className={`${styles['group_9']} flex-col`} />
            <div className={`${styles['group_10']} flex-row justify-between`}>
              <div className={`${styles['image-text_9']} flex-row justify-between`}>
                <div className={`${styles['image-wrapper_10']} flex-col`}>
                  <img
                    className={`${styles['thumbnail_23']}`}
                    src={
                      require('./assets/img/MasterDDSSlicePNGd3534c2aff7575c09f3f49463675edbf.png')
                    }
                  />
                </div>
                <span className={`${styles['text-group_9']}`}>Telegram</span>
              </div>
              <img
                className={`${styles['thumbnail_24']}`}
                src={require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')}
              />
            </div>
            <div className={`${styles['group_11']} flex-col`} />
            <div className={`${styles['group_12']} flex-row justify-between`}>
              <div className={`${styles['image-text_10']} flex-row justify-between`}>
                <div className={`${styles['box_7']} flex-col`}>
                  <div className={`${styles['box_8']} flex-col`} />
                  <div className={`${styles['box_9']} flex-col`} />
                </div>
                <span className={`${styles['text-group_10']}`}>Facebook</span>
              </div>
              <img
                className={`${styles['thumbnail_25']}`}
                src={require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')}
              />
            </div>
            <div className={`${styles['group_13']} flex-col`} />
            <div className={`${styles['group_14']} flex-row justify-between`}>
              <div className={`${styles['image-text_11']} flex-row justify-between`}>
                <div className={`${styles['box_10']} flex-col`}>
                  <div className={`${styles['group_15']} flex-col`} />
                </div>
                <span className={`${styles['text-group_11']}`}>Discord</span>
              </div>
              <img
                className={`${styles['thumbnail_26']}`}
                src={require('./assets/img/MasterDDSSlicePNG6603b869a28d8c92334c75f9b5a84ac5.png')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DDS_lanhupage_0;
