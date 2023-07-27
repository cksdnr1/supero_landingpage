import Link from 'next/link';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const TopNavbar = () => (
    <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
            <li>
                <Link href="/policy">
                    <a>개인 정보</a>
                </Link>
            </li>
        </NavbarTwoColumns>
    </Section>
);

export { TopNavbar };
