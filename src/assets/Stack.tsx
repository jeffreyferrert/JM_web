import type {BoxProps} from '@mui/system'
import type {HTMLProps} from 'react'
import {forwardRef} from 'react'
import type {LinkProps} from 'react-router-dom'
import type {
    AlignItems,
    Breakpoint,
    DirectionProps,
    Gap,
    GapKeys,
    JustifyContent,
} from '../vite-env.d.ts'
import Box from './Box'
// @ts-ignore
import {isValidKey} from '../vite-env.d.ts';

const Breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'lgPortrait', 'xl']

const GapDict: Record<GapKeys, string> = {
    small: '8px',
    medium: '16px',
    large: '32px',
} as const

type StyleItem = 'marginBottom' | 'marginRight' | 'paddingBottom' | 'paddingRight' | '&:last-child'

type StyleType = {
    [key in Breakpoint]: { [key in StyleItem]?: any }
}
const getResponsiveGap = (
    responsiveDirection: DirectionProps,
    gapSize: string,
    gapWithPadding?: boolean
) => {
    if (gapSize == null || Object.keys(responsiveDirection).length === 0) return undefined
    const style: StyleType = {xl: {}, xs: {}, sm: {}, md: {}, lg: {}, lgPortrait: {}}
    for (const bp of Breakpoints) {
        if (typeof responsiveDirection === 'string' || !(bp in responsiveDirection)) continue
        const gapAttribute: StyleItem = `${gapWithPadding ? 'padding' : 'margin'}${
            responsiveDirection[bp] === 'column' ? 'Bottom' : 'Right'
        }`
        const gapAttribute2: StyleItem = `${gapWithPadding ? 'padding' : 'margin'}${
            responsiveDirection[bp] !== 'column' ? 'Bottom' : 'Right'
        }`

        if (!style[bp]) style[bp] = {}

        if (!style[bp][gapAttribute]) style[bp][gapAttribute] = {}
        if (!style[bp][gapAttribute2]) style[bp][gapAttribute2] = {}
        if (style[bp][gapAttribute]) style[bp][gapAttribute] = gapSize
        style[bp][gapAttribute2] = 0
        style[bp]['&:last-child'] = {[gapAttribute]: 0, [gapAttribute2]: 0}
    }

    return style
}

const getGapSize = (gap: Gap): string | any => {
    if (typeof gap === 'string') {
        if (isValidKey(gap, GapDict)) return GapDict[gap]
        return gap
    }
    if (typeof gap === 'object') {
        const style: any = {}
        for (const bp of Breakpoints) {
            if (!(bp in gap)) continue
            if (isValidKey(bp, gap)) style[bp] = getGapSize(gap[bp])
        }
        return style
    }
    return gap
}

const getChildrenStyle = (direction: DirectionProps, gap?: Gap, gapWithPadding?: boolean) => {
    if (!gap || !direction) return undefined
    const gapSize = getGapSize(gap)
    const gapAttribute = `${gapWithPadding ? 'padding' : 'margin'}${
        direction === 'column' ? 'Bottom' : 'Right'
    }`
    if (typeof direction === 'string')
        return {
            [gapAttribute]: gapSize,
            '&:last-child': {[gapAttribute]: 0},
        }
    return getResponsiveGap(direction, gapSize, gapWithPadding)
}

type StackProps = Omit<Partial<LinkProps>, 'component'> &
    Omit<HTMLProps<HTMLElement> & BoxProps<any>, 'ref' | 'wrap'> & {
    direction?: DirectionProps
    justifyContent?: Partial<Record<Breakpoint, JustifyContent>> | JustifyContent
    alignItems?: Partial<Record<Breakpoint, AlignItems>> | AlignItems
    gap?: Gap
    gapWithPadding?: boolean
    wrap?: boolean
}

const Stack = forwardRef<HTMLElement, StackProps>(
    (
        {
            direction = 'column',
            justifyContent,
            alignItems,
            gap,
            gapWithPadding,
            wrap,
            style,
            sx,
            children,
            ...props
        },
        ref
    ) => (
        <Box
            ref={ref}
            sx={{
                display: 'flex',
                flexDirection: direction,
                justifyContent,
                alignItems,
                flexWrap: wrap ? 'wrap' : undefined,
                ...style,
                ...sx,
                '> *': getChildrenStyle(direction, gap, Boolean(gapWithPadding)),
            }}
            {...props}
        >
            {children}
        </Box>
    )
)

export default Stack
