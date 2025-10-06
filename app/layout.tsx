import './globals.css'
import TanstackProvider from '@/components/TanStackProvider/TanStackProvider'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}


export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
