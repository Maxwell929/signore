import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useContentFromFile } from '../../hooks/useContentFromFile';
import Me from '/assets/me.jpeg'
import {Icon} from '../Icon/Icon';
import { Element } from 'react-scroll';

export const AboutMe = () => {
    const content = useContentFromFile("content/about.md");

    return (
        <section id="about" className="pb-40 xl:pb-56 pt-12 lg:pt-24 bg-secondary">
            <div className="container">
                <div className="flex items-end gap-2 text-white mb-2 lg:mb-12">
                    <Icon iconName="person" className="h-8 md:h-10 w-8 md:w-10 mb-2"/>
                    <h2>About me</h2>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between ">
                    <div className="lg:w-1/2  text-white mb-8 lg:mb-0">
                        <ReactMarkdown className="space-y-6">{content}</ReactMarkdown>
                    </div>
                    <div
                        className=" lg:block relative self-center after:hidden lg:after:block lg:after:content-[''] after:ml-6 after:top-4 after:-mr-6 after:-mb-6 after-w-full after:inset-0 after:absolute after:border-4 after:border-white ">
                        <Image
                            className="object-cover z-10 relative hover:scale-110 hover:transition duration-300 delay-100"
                            src={Me} alt="Profile"/>
                    </div>
                </div>
            </div>
        </section>
    )
}