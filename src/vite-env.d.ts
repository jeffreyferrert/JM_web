/// <reference types="vite/client" />
export type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'lgPortrait' | 'xl'
export type FlexDirection = 'column' | 'row' | 'row-reverse' | 'column-reverse'
export type DirectionProps = Partial<Record<Breakpoint, FlexDirection>> | FlexDirection
export type ResponsiveStyleValues = string | Partial<Record<Breakpoint, string>>
export type GapKeys = 'small' | 'medium' | 'large'
export type Gap = GapKeys | string | ResponsiveStyleValues
export type JustifyContent =
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
export const isValidKey = (
    key: string | number | symbol,
    object: object
): key is keyof typeof object => {
    return key in object
}