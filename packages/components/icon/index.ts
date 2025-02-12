// 用来整合组件 最终实现导出组件
import _Icon from './src/icon.vue';
import { withInstall } from '@guan-chun/utils/with-install';


const Icon = withInstall(_Icon);

export default Icon; // 可以通过app.use(Icon)来注册组件,也可以通过import Icon from '@guan-chun/components/icon'来注册组件

export * from './src/icon';

// 这里添加的类型 可以在模板中被解析
declare module 'vue' {
  export interface GlobalComponents { // 我们的接口可以自动合并
    GIcon: typeof Icon;
  }
}
