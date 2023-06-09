import React, { FC, useState, useEffect } from 'react'

const Loader: FC = () => {
    const [progress, setProgress] = useState<number>(0);
    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(progress + 1);
            if (progress >= 100) {
                setProgress(100)
            }
        }, 100);
        return () => clearInterval(progressInterval)
    }, [progress])
    return (
        <div className='loadder' style={{ width: `${progress}px` }}></div>
    )
}

export default Loader