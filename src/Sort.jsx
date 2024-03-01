import { FormControl, MenuItem, Select, InputLabel, Box } from '@mui/material';
function Sort({ handleSort, sort }) {

    return (
        <div>
            <Box sx={{ minWidth: 190 }}>
                <FormControl>
                    <InputLabel id="demo-select-small-label">Options </InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={sort}
                        label ="Sort"
                        onChange={handleSort}
                    >
                        <MenuItem value={"publishedAt"}>Latest</MenuItem>
                        <MenuItem value={"popularity"}>Popularity</MenuItem>
                        <MenuItem value={"relevancy"}>Relevancy</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}
export default Sort