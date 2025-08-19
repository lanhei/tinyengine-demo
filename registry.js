/**
 * Copyright (c) 2023 - present TinyEngine Authors.
 * Copyright (c) 2023 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { META_SERVICE, META_APP } from '@opentiny/tiny-engine-meta-register';
import engineConfig from './engine.config';
import { HttpService } from './src/composable';
import pluginConfig from 'demo-plugin';

export default {
  [META_SERVICE.Http]: HttpService,
  'engine.config': {
    ...engineConfig
  },
  'engine.plugins.pluginDemo': {
    ...pluginConfig
  },
  // 调整插件顺序示例:
  // [META_APP.Layout]: {
  //   options: {
  //     relativeLayoutConfig: {
  //       [META_APP.Page]: {
  //         insertBefore: META_APP.State
  //       },
  //       // 调整插件顺序
  //       [META_APP.OutlineTree]: {
  //         insertAfter: META_APP.Materials
  //       },
  //       // 调整插件上下位置
  //       [META_APP.Schema]: {
  //         insertBefore: META_APP.Help
  //       },
  //       // 调整工具栏顺序
  //       [META_APP.Save]: {
  //         insertAfter: META_APP.GenerateCode
  //       },
  //       // 支持切换组
  //       [META_APP.Lang]: {
  //         insertAfter: META_APP.ViewSetting
  //       }
  //     }
  //   }
  // }
  [META_APP.Layout]: {
    options: {
      layoutConfig: {
        plugins: {
          left: {
            top: [
              META_APP.Materials,
              META_APP.OutlineTree,
              META_APP.AppManage,
              META_APP.BlockManage,
              META_APP.Collections,
              META_APP.Bridge,
              META_APP.I18n,
              META_APP.PageController,
              META_APP.State
            ],
            bottom: [META_APP.Schema, META_APP.EditorHelp, META_APP.Robot, 'engine.plugins.pluginDemo']
          },
          right: {
            top: [META_APP.Props, META_APP.Styles, META_APP.Event]
          }
        },
        toolbars: {
          left: [META_APP.Breadcrumb, META_APP.Lock, META_APP.Logo],
          center: [META_APP.Media],
          right: [
            [META_APP.ThemeSwitch, META_APP.RedoUndo, META_APP.Clean],
            [META_APP.Preview],
            [META_APP.GenerateCode, META_APP.Save]
          ],
          collapse: [
            [META_APP.Collaboration],
            [META_APP.Refresh, META_APP.Fullscreen],
            [META_APP.Lang],
            [META_APP.ViewSetting]
          ]
        }
      }
    }
  }
};
