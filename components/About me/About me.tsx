import Image from 'next/image';
import Me from '/assets/me.jpeg'
import {Icon} from '../Icon/Icon';

export const AboutMe = () => {
    return (
        <>
            <section className="pb-40 xl:pb-56 pt-12 lg:pt-24 bg-secondary">
                <div className="container">
                    <div className="flex items-end gap-2 text-white mb-2 lg:mb-12">
                        <Icon iconName="person" className="h-8 md:h-10 w-8 md:w-10 mb-2"/>
                        <h2>About me</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between ">
                        <div className="lg:w-1/2  text-white mb-8 lg:mb-0">
                            <h5 className="mb-4">Who am I</h5>
                            <p className="mb-8">Hello! My name is Brittany and I enjoy creating things that live
                                on the internet. My interest in web
                                development started back in 2012 when I decided to try editing custom Tumblr themes —
                                turns
                                out
                                hacking together a custom reblog button taught me a lot about HTML & CSS! <br/><br/>

                                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a
                                start-up, a
                                huge corporation, and a student-led design studio. My main focus these days is building
                                accessible,
                                inclusive products and digital experiences at Upstatement for a variety of
                                clients. <br/><br/>

                                I also recently launched a course that covers everything you need to build a web app
                                with
                                the
                                Spotify API using Node & React.</p>

                            <h5 className="mb-4">My passions</h5>
                            <p className="">Hello! My name is Brittany and I enjoy creating things that live
                                on the internet. My interest in web
                                development started back in 2012 when I decided to try editing custom Tumblr themes —
                                turns
                                out
                                hacking together a custom reblog button taught me a lot about HTML & CSS! <br/><br/>

                                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a
                                start-up, a
                                huge corporation, and a student-led design studio. My main focus these days is building
                                accessible,
                                inclusive products and digital experiences at Upstatement for a variety of
                                clients. <br/><br/>

                                I also recently launched a course that covers everything you need to build a web app
                                with
                                the
                                Spotify API using Node & React.</p>

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


        </>
    )
}