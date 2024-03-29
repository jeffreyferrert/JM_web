import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

const theme = useTheme();
export const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
export const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
export const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));