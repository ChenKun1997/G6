import type { ID } from '../types';
import type { ComboStyle } from './element/combo';
import type { EdgeStyle } from './element/edge';
import type { NodeStyle } from './element/node';

export interface GraphData {
  /**
   * <zh/> 节点数据
   *
   * <en/> node data
   */
  nodes?: NodeData[];
  /**
   * <zh/> 边数据
   *
   * <en/> edge data
   */
  edges?: EdgeData[];
  /**
   * <zh/> Combo 数据
   *
   * <en/> combo data
   */
  combos?: ComboData[];
}

export interface NodeData {
  /**
   * <zh/> 节点 ID
   *
   * <en/> Node ID
   */
  id: ID;
  /**
   * <zh/> 节点类型
   *
   * <en/> Node type
   */
  type?: string;
  /**
   * <zh/> 节点数据
   *
   * <en/> Node data
   */
  data?: Record<string, unknown>;
  /**
   * <zh/> 节点样式
   *
   * <en/> Node style
   */
  style?: NodeStyle;
  [key: string]: unknown;
}

export interface ComboData {
  /**
   * <zh/> Combo ID
   *
   * <en/> Combo ID
   */
  id: ID;
  /**
   * <zh/> Combo 类型
   *
   * <en/> Combo type
   */
  type?: string;
  /**
   * <zh/> Combo 数据
   *
   * <en/> Combo data
   */
  data?: Record<string, unknown>;
  /**
   * <zh/> Combo 样式
   *
   * <en/> Combo style
   */
  style?: ComboStyle;
  [key: string]: unknown;
}

export interface EdgeData {
  /**
   * <zh/> 边 ID
   *
   * <en/> Edge ID
   */
  id?: ID;
  /**
   * <zh/> 边源节点 ID
   *
   * <en/> Source node ID
   */
  source: ID;
  /**
   * <zh/> 边目标节点 ID
   *
   * <en/> Target node ID
   */
  target: ID;
  /**
   * <zh/> 边类型
   *
   * <en/> Edge type
   */
  type?: string;
  /**
   * <zh/> 边数据
   *
   * <en/> Edge data
   */
  data?: Record<string, unknown>;
  /**
   * <zh/> 边样式
   *
   * <en/> Edge style
   */
  style?: EdgeStyle;
  [key: string]: unknown;
}
