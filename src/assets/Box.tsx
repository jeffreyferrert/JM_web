import type { BoxProps, SxProps } from '@mui/system'
import { createBox } from '@mui/system'
import type { HTMLProps } from 'react'
import { forwardRef } from 'react'
import type { LinkProps } from 'react-router-dom'

const RootBox = createBox({ defaultTheme: {}, defaultClassName: '' })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DefaultBoxProps = Omit<BoxProps<any>, 'sx'> &
    Omit<Partial<LinkProps>, 'component'> &
    HTMLProps<HTMLElement> & {
    sx?: SxProps<object>
}

const Box = forwardRef<HTMLElement | undefined, DefaultBoxProps>(
    ({ sx, children, ...props }, ref) => (
        <RootBox
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ref={ref}
            sx={{ boxSizing: 'border-box', ...sx }}
            {...props}
        >
            {children}
        </RootBox>
    )
)

export default Box
