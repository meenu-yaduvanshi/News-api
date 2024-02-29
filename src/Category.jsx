import { Stack, Button, Grid } from '@mui/material'
function Category({changeCategory}) {
    let category = ["business", "entertainment", "general", "health", "science", "sports"]
    return (
        <div className='category-container'>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                {category.map((categorys, index) => {
                   return <Button variant="outlined" size='small' disableElevation key={index} onClick={()=>changeCategory(categorys)}>{categorys}</Button>
                })}
            </Stack>
        </div>
    )
}

export default Category