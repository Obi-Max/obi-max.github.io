import React, { ReactElement, SVGAttributes, SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: string | number;
    title?: string;
}

function HhIcon(props: JSX.IntrinsicAttributes & IconProps): ReactElement {
    return (
        <svg
            {...{
                ...props,
                // className: props.className
                //     ? `icon-loading ${props.className}`
                //     : 'icon-loading',
                fill: props.fill ?? "#7E13F8",
                height: props.size ?? 24,
                width: props.size ?? 24,
                stroke: props.stroke ?? 'transparent',
            }}
            viewBox="0 0 60 60"
        >
            <path fill="currentColor" d="M30 60c16.57 0 30-13.43 30-30S46.57 0 30 0 0 13.43 0 30s13.43 30 30 30zM16.764 15.86v10.206c1.552-1.852 3.415-2.785 5.575-2.785 1.112 0 2.108.213 3 .635.898.42 1.568.957 2.02 1.61.455.657.762 1.38.928 2.174.166.79.248 2.02.248 3.69v10.912h-4.828v-9.827c0-1.95-.087-3.186-.27-3.71-.184-.53-.506-.944-.97-1.25-.464-.314-1.043-.47-1.742-.47-.8 0-1.518.202-2.14.6-.638.4-1.097.996-1.386 1.795-.295.8-.442 1.98-.436 3.545l-.006 9.317h-4.822v-26.44h4.828zm19.008 0v10.206c1.554-1.852 3.415-2.785 5.575-2.785 1.108 0 2.11.213 3.007.635.892.42 1.562.957 2.013 1.61.455.657.764 1.38.928 2.174.166.79.25 2.02.25 3.69v10.912H42.72v-9.827c0-1.95-.09-3.186-.274-3.71-.184-.53-.505-.944-.97-1.25-.46-.314-1.044-.47-1.743-.47-.8 0-1.517.202-2.14.6-.63.4-1.09.996-1.385 1.795-.29.8-.436 1.98-.436 3.545v9.317H30.95v-26.44h4.822z" />
        </svg>
    )
}

export default HhIcon;