import React from 'react'
import { tv } from "tailwind-variants"

const button = tv({
    base: 'text-[13px] cursor-pointer font-semibold text-white uppercase rounded-[22px] transition-all duration-700',
    variants: {
        colors: {
            red: 'bg-[#a12c2f] hover:bg-[#eb1e25]',
            yellow: 'bg-[#f5a525]',
        },
        size: {
            sm: "",
            normal: "w-34 py-[6px] px-[10px]",
            xl: "",

        },

    },
    defaultVariants: {
        colors: 'red',
        size: 'normal',
    }
})

const Button = ({colors, size, children, className, ...rest}) => {
  return (
    <button className={button({colors, size, className})} {...rest}>
        {children}
    </button>
  )
}

export default Button