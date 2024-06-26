import type { DisplayObject, CircleStyleProps as GCircleStyleProps } from '@antv/g';
import type { CardinalPlacement, CornerPlacement, DirectionalPlacement, RelativePlacement } from './placement';
import type { Point } from './point';

export type PortPlacement = RelativePlacement | CardinalPlacement;
export type StarPortPlacement = RelativePlacement | 'top' | 'left' | 'right' | 'left-bottom' | 'right-bottom';
export type TrianglePortPlacement = RelativePlacement | CardinalPlacement;

export type BadgePlacement = CardinalPlacement | CornerPlacement;
export type LabelPlacement = DirectionalPlacement;

export interface PortStyleProps extends GCircleStyleProps {
  /**
   * <zh/> 是否连接到中心
   * <en/> Whether to connect to the center
   */
  linkToCenter?: boolean;
}
export type Port = DisplayObject<PortStyleProps> | Point;
