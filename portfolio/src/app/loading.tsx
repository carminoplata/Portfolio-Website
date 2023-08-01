'use client'

import { useEffect, useState } from 'react';
import PropTypes, {InferProps} from 'prop-types'

const LoadingPropsType = {
    load: PropTypes.bool.isRequired,
    onTimeout: PropTypes.func
};

type LoadingType = InferProps<typeof LoadingPropsType>
export default function Loading(props: LoadingType){
    useEffect(() => {
        const timer = setTimeout(() => {
          props.onTimeout();
        }, 1200);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div id={props.load ? 'preloader' : 'preloader-none'}>
        </div>
    );
}