import React from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export interface iconProps {
    iconName: IconProp;
    className?: string;
    url?: string;
}

export const Icon = ({iconName, className, url}: iconProps) => {
    return (
        <a className={!url ? 'pointer-events-none' : ''} href={!url ? 'javascript:void(0);' : `https://${url}`}
           target={!url ? '' : '_blank'} rel="noreferrer">
            <FontAwesomeIcon className={className} icon={iconName}/>
        </a>
    )
}
