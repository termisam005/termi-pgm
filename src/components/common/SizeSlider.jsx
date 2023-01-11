import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SizeSlider() {
    return (
        <Box width={300}>
            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    );
}
