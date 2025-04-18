import { extendVariants, Input } from '@heroui/react';

const InputHeroUi = extendVariants(Input, {
  variants: {
    color: {
      primary: {
        inputWrapper: 'group-data-[focus=true]:border-main-color data-[hover=true]:border-main-color',
        label: 'text-black/70',
      },
    },
    isDisabled: {
      true: {
        inputWrapper: 'bg-color-disable',
      },
    },
  },
  defaultVariants: {
    variant: 'bordered',
    color: 'primary',
  },
});

export default InputHeroUi;
