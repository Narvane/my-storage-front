'use client'
import {Inter} from 'next/font/google'
import './globals.css'
import * as React from 'react';
import SideBarMainLayout from "@/components/sidebarMainLayout";
import GradingIcon from '@mui/icons-material/Grading';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import KitchenIcon from '@mui/icons-material/Kitchen';
import EggAltIcon from '@mui/icons-material/EggAlt';

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <head>
                <title>MyStorage</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </head>
            <body className={inter.className}>
                <SideBarMainLayout menus={[
                    {
                        name: 'Diary',
                        href: '/diary',
                        icon: <GradingIcon/>
                    },
                    {
                        name: 'Meal Plan',
                        href: '/meal-plan',
                        icon: <MenuBookIcon/>
                    },
                    {
                        name: 'Shopping List',
                        href: '/shopping-list',
                        icon: <ShoppingCartCheckoutIcon/>
                    },
                    {
                        name: 'Storage',
                        href: '/storage',
                        icon: <KitchenIcon/>
                    },
                    {
                        name: 'Foods',
                        href: '/foods',
                        icon: <EggAltIcon/>
                    },
                ]}>
                    {children}
                </SideBarMainLayout>
            </body>
        </html>
    )
}
