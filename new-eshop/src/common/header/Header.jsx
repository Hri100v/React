import React from 'react'
import { Head } from './Head'
import { Search } from './Search'
import { Navbar } from './Navbar'

export const Header = () => {
    return (
        <>
            <Head />
            <Search />
            <Navbar />
        </>
    )
}
