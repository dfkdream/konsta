import { cls } from '../cls.js';

export const BlockColors = (colorsProp = {}, dark) => {
  return {
    outlineIos: cls(
      'border-black border-opacity-20',
      dark('dark:border-white dark:border-opacity-15')
    ),
    outlineMaterial: cls(
      'border-md-light-outline',
      dark('border-md-dark-outline')
    ),
    strongBgIos: cls(
      `bg-block-strong-light`,
      dark('dark:bg-block-strong-dark')
    ),
    strongBgMaterial: cls(
      'bg-md-light-surface-1',
      dark('dark:bg-md-dark-surface-1')
    ),
    ...colorsProp,
  };
};
