import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'آرکانوم | آکادمی دانش پنهان',description:'به دنیای آموزش و معماهای آرکانوم خوش آمدید'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body>{children}</body></html>}
