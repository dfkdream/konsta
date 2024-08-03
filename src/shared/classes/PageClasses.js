import { cls } from '../cls.js';

export const PageClasses = (props, colors, classes) => {
  return {
    base: {
      common: cls(
        '',
      ),
      ios: colors.bgIos,
      material: colors.bgMaterial,
    },
  };
};
