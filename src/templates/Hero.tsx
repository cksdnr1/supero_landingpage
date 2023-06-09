import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
    <Background color="bg-[#101012]">
        <Section yPadding="py-6">
            <NavbarTwoColumns logo={<Logo xl />}>
                <li>
                    <Link href="/policy">
                        <a>개인 정보</a>
                    </Link>
                </li>
            </NavbarTwoColumns>
        </Section>
        <Section yPadding="pt-20 pb-20">
            <HeroOneButton
                title={
                    <>
                        {'운동'} <span className="text-primary-600">기록, 극복</span>
                        {'하고\n'}
                        <span className="text-primary-500">친구들과 공유</span>
                        하자!
                    </>
                }
                description=""
                button_and={
                    <Link href="https://play.google.com/store/apps/details?id=com.tk_lck.supero">
                        <a>
                            <Button xl>
                                <img
                                    className='mb-5'
                                    src="/assets/images/Google Play.png"
                                    alt="수페로 구글 플레이"
                                />
                            </Button>
                        </a>
                    </Link>
                }
                button_ios={
                    <Link href="https://apps.apple.com/kr/app/supero/id6444859542">
                        <a>
                            <Button xl>
                                <img
                                    className='mb-5'
                                    src="/assets/images/App Store.png"
                                    alt="수페로 앱스토어"
                                />
                            </Button>
                        </a>
                    </Link>
                }
            />
        </Section>
    </Background>
);

export { Hero };
