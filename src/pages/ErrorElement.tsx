import { DigiTypography } from '@digi/arbetsformedlingen-react'
import { Link } from 'react-router'

export const ErrorElement = () => {
    return (
        <>

            <DigiTypography>
                <h1>Error Element</h1>
                <p>Här fångar vi felen och navigerar tillbaka - snartish</p>
                <Link to={"/"}>Till Hem</Link>
            </DigiTypography>

        </>
    )
}