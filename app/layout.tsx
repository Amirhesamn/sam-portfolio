export const metadata = {
    title: 'Sam Neghabat - Portfolio',
    description: 'Personal website of Sam Neghabat, Senior Frontend Engineer',
  };
  import './globals.css';
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  