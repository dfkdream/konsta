import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const AppClasses = (props, currentTheme, classes) => {
  const { safeAreas } = props;
  return cls(
    currentTheme === 'ios' && `k-ios`,
    currentTheme === 'material' && 'k-material',
    'k-app',
    safeAreas && 'safe-areas',
    positionClass('relative', classes),
    classes
  );
};
