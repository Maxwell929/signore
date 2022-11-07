import Image from 'next/image';
import NextLogo from 'assets/next-logo.png';
import { IconList } from '../IconList';
import SmoothScrollLink from '../SmoothScrollLink';
import { Logo } from '../Logo';
import { IconProps } from '../Icon';

// example data

export const icons: IconProps[] = [
    {
        iconName: 'fab fa-github',
        url: 'github.com',
        tooltip: 'Github',
    },
    {
        iconName: 'fab fa-linkedin',
        url: 'linkedin.com',
        tooltip: 'Linkedin',
    },
    {
        iconName: 'fab fa-gitlab',
        url: 'gitlab.com',
        tooltip: 'Gitlab',
    },
];

export const Footer = () => {
    return (
        <section className="py-8">
            <div className="container flex flex-col items-center gap-4">
                <SmoothScrollLink to="/" className="hover:cursor-pointer">
                    <Logo />
                </SmoothScrollLink>
                <IconList
                    icons={icons}
                    className="gap-8 py-6 text-gray-500"
                    iconClassName="w-10 h-10 hover:scale-110 hover:text-gray-300 duration-300"
                />
                <p className="text-center text-sm">{`${new Date().getFullYear()} Made by Maximilian Stelzl and Felix Wielander`}</p>
                <div className="flex items-center gap-2">
                    <p className="text-sm">Powered by</p>
                    <Image
                        alt="Next Logo"
                        className="h-8 w-auto"
                        src={NextLogo}
                    />
                </div>
            </div>
        </section>
    );
};
