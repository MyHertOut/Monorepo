/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plugin } from 'vue'; // 从vue库中导入Plugin类型

// 定义一个类型SFCWithInstall<T>，表示一个组件类型T与Plugin类型的结合
export type SFCWithInstall<T> = T & Plugin; 

// 定义一个泛型函数withInstall，接收一个组件作为参数
// <T> 表示泛型T，表示component的类型
export function withInstall<T>(component: T) { 
  // 将组件的install方法添加到组件上
  (component as SFCWithInstall<T>).install = function (app: any) {
    // 从组件中提取name属性，确保它是一个字符串
    const { name } = component as unknown as { name: string };
    // 将组件注册到全局的app中，使用组件的name作为注册名
    app.component(name, component); 
  };
  // 返回增强后的组件，包含install方法
  return component as SFCWithInstall<T>;
}