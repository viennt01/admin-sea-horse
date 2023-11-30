import { Inter } from '@next/font/google';
import ForgotPasswordPage from '@/components/forgot-password';
import { PageWithNoLayout } from '@/layout/no-layout';
const inter = Inter({ subsets: ['latin'] });
function ForgotPassword() {
  return (
    <>
      <Head>
        <title>ASL | FORGOT PASSWORD</title>
      </Head>
      <main className={inter.className}>
        <ForgotPasswordPage />
      </main>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ForgotPassword.Layout = PageWithNoLayout;

export default ForgotPassword;
import { getStatic } from '@/lib/getStaticProps';
import Head from 'next/head';
export const getStaticProps = getStatic(['common', 'forgot-password']);
