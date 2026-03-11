import { Suspense, lazy } from 'react'

// Explicitly set type so it doesn't fail TypeScript check if the import is missing local types initially
const Spline = lazy(() => import('@splinetool/react-spline') as any)

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="fallback-container">
                    <span className="loader"></span>
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
            />
        </Suspense>
    )
}
