import { ButtonGroup, Button } from '@mui/material';
import { useContext } from 'react';
import { LanguageContext } from "./App";

function Header({ language, setLanguaseClick }) {

    return (
        <>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button onClick={setLanguaseClick}>{language === "en" ? ("english to spanish") : ("spanish to english")}</Button>
            </ButtonGroup>
        </>
    )
}
export default Header

