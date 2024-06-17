import React from "react"

type Props = {
    
} & React.HTMLAttributes<HTMLHeadingElement>;

export function PageTitle({ className, children, ...props }: Props) {
    return (
        <h1 className={`
            text-2xl text-center md:text-3xl lg:text-4xl text-accent-content font-semibold
            ${className}
        `} { ...props }>
            { children }
        </h1>
    )
}