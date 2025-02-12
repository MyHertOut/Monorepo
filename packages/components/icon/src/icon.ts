// 这里准备组件相关属性 和 ts的类型
// ExtractPropTypes 从vue中提取props的类型
// PropType 定义props的类型
import { ExtractPropTypes, PropType } from 'vue';

// 定义iconProps的类型
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>, // as PropType<number | string> 表示size的类型是number或string
} as const; // 表示iconProps是一个常量

export type IconProps = ExtractPropTypes<typeof iconProps>; // 从iconProps中提取props的类型
